import { IPaymentGateway } from "@gateways/IPaymentGateway";
import { IOrderGateway } from "@gateways/IOrderGateway";
import { Order as OrderEntitie } from "@entities/Order";
import { ICustomerGateway } from "@gateways/ICustomerGateway";
import { Customer as CustomerEntitie } from "@entities/Customer";
import { Payment } from "@entities/Payment";
import { createMercadoPago, searchMercadoPago } from "@api/MercadoPago";

export class PaymentUseCase {
	constructor(
		private readonly paymentGateway: IPaymentGateway,
		private readonly orderGateway: IOrderGateway,
		private readonly customerGateway: ICustomerGateway
	) { }

	async getAll(): Promise<any> {
		return await this.paymentGateway.allPayments();
	}

	async createPayment(data: Partial<Payment>): Promise<Payment> {
		const { paymentMethod, paymentCode, status, fk_idOrder } = data;

		const orderData = await this.orderGateway.getOrderById({ where: { id: fk_idOrder } });		
		const customerData = await this.customerGateway.getCustomerById({ where: { id: orderData[0].fk_idCustomer } });		
		const paymentMercadoPago = await createMercadoPago(fk_idOrder, orderData[0].price, customerData[0].email)
		const idPaymentMercadoPago = paymentMercadoPago.id;
		//const ticketPaymentMercadoPago = paymentMercadoPago.point_of_interaction.transaction_data.ticket_url;
				
		const payment = new Payment(paymentMethod, idPaymentMercadoPago.toString(), status, fk_idOrder);
		return await this.paymentGateway.newPayment(payment);
	}

	async updatePayment(paymentData: Payment, paymentId: string): Promise<any> {
		if (!paymentId) throw new Error("Missing required field: id");

		const result = await this.paymentGateway.updatePayment(
			{ ...paymentData },
			{ where: { id: paymentId } }
		);

		if (result[0] === 0) throw new Error("Payment not executed");

		const orderData = await this.orderGateway.getOrderById({ where: { id: paymentData.fk_idOrder } });
		let orderUpdated = new OrderEntitie(orderData);
		// MUDAR STATUS DE ACORDO COM RESULTADO DO MERCADO PAGO
		orderUpdated.status = "Recebido";

		await this.orderGateway.updateOrder(orderUpdated, { where: { id: paymentData.fk_idOrder } });

		return "Payment and Order updated successfully";
	}

	async webhookPayment(paymentData): Promise<any> {
		const idMp = paymentData.data.id;			
		const paymentMp = await this.paymentGateway.getPaymentByMp({ where: { paymentCode: idMp.toString() } });
		
		const paymentMercadoPago = await searchMercadoPago(paymentMp[0].fk_idOrder);
		
		if (paymentMercadoPago.results[0].status == 'pending') {
			let paymentUpdated = new Payment(paymentMp[0].paymentMethod, paymentMp[0].paymentCode, paymentMp[0].status, paymentMp[0].fk_idOrder);
			// MUDAR STATUS DE ACORDO COM RESULTADO DO MERCADO PAGO
			paymentUpdated.status = paymentMercadoPago.results[0].status;
			const result = await this.paymentGateway.updatePayment(
				paymentUpdated,
				{ where: { id: paymentMp[0].id } }
			);
			const orderData = await this.orderGateway.getOrderById({ where: { id: paymentData.fk_idOrder } });
			let orderUpdated = new OrderEntitie(orderData);
			// MUDAR STATUS DE ACORDO COM RESULTADO DO MERCADO PAGO
			if(paymentUpdated.status == "pending"){
				orderUpdated.status = "Recebido";
			}else{
				orderUpdated.status = "Reprovado";
			}			
			await this.orderGateway.updateOrder(orderUpdated, { where: { id: paymentData.fk_idOrder } });

		}
		return "Payment and Order updated successfully";
		
		

		//if (result[0] === 0) throw new Error("Payment not executed");
		
		// const orderData = await this.orderGateway.getOrderById({ where: { id: paymentData.fk_idOrder } });
		// let orderUpdated = new OrderEntitie(orderData);
		// // MUDAR STATUS DE ACORDO COM RESULTADO DO MERCADO PAGO
		// orderUpdated.status = "Recebido";

		// await this.orderGateway.updateOrder(orderUpdated, { where: { id: paymentData.fk_idOrder } });

		// return "Payment and Order updated successfully";
	}

	async deletePayment(paymentId: string): Promise<number> {
		if (!paymentId) throw new Error("Missing required parameter: id");

		const deletedCount = await this.paymentGateway.deletePayment({ where: { id: paymentId } });

		if (deletedCount === 0) throw new Error("Payment not found");

		return deletedCount;
	}
}
