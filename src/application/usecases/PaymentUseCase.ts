import { IPaymentGateway } from "@gateways/IPaymentGateway";
import { IOrderGateway } from "@gateways/IOrderGateway";
import { OrderAdapter } from "@adapters/OrderAdapter";
import { Order as OrderEntitie } from "@entities/Order";
import { Payment } from "@entities/Payment";
import { PaymentMapper } from "@mappers/PaymentMapper";
export class PaymentUseCase {
	constructor(
		private readonly paymentGateway: IPaymentGateway,
		private readonly orderGateway: IOrderGateway
	) { }

	async getAll(): Promise<any> {
		return await this.paymentGateway.allPayments();
	}

	async getPaymentById(id: number): Promise<Payment | null> {
		const payment = await this.paymentGateway.getPaymentById(id);
		return payment ? payment : null;
	}

	async createPayment(data: Payment): Promise<Payment> {
		return await this.paymentGateway.newPayment(data);
	}


	async updatePayment(id: number, data: Payment): Promise<any> {
		const existingPayment = await this.getPaymentById(id);
        if (!existingPayment) {
            throw new Error("Payment not found");
        }

		await this.paymentGateway.updatePayment(id, data);       

		return "Payment and Order updated successfully";
	}

	async deletePayment(paymentId: string): Promise<number> {
		if (!paymentId) throw new Error("Missing required parameter: id");

		const deletedCount = await this.paymentGateway.deletePayment({ where: { id: paymentId } });

		if (deletedCount === 0) throw new Error("Payment not found");

		return deletedCount;
	}
}
