import { defaultReturnStatement } from "@utils/serviceUtils";
import { IPaymentService } from "@ports/in/v1/IPaymentService";
import { IPaymentRepository } from "@ports/out/v1/IPaymentRepository";
import { IOrderRepository } from "@ports/out/v1/IOrderRepository";
import { ICustomerRepository } from "@ports/out/v1/ICustomerRepository";
import { Order } from "@models/v1/Order";
import { Customer } from "@models/v1/Customer";

//mercado pago

import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'TEST-1223158960247728-051916-610ccc4ef810107ed75bd845b1ad29e6-151008103' });
const payment = new Payment(client);

export class PaymentService implements IPaymentService {
	constructor(
		private readonly paymentRepository: IPaymentRepository,
		private readonly orderRepository: IOrderRepository,
		private readonly customerRepository: ICustomerRepository
	) {}

	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Payment",
			this.paymentRepository.allPayments()
		);
	}
	
	async createPayment(req, res) {
		
		const idOrder = req.body.fk_idOrder;
		await this.orderRepository
					.getOrderById({ where: { id: idOrder } })
					.then(async (orderData) => {
						
						var emailCustomer = 'pedromcdefreitas@gmail.com';	

						if (orderData[0].fk_idCustomer) {
							await this.customerRepository
								.getCustomerById({where: { id: orderData[0].fk_idCustomer } })
								.then((customerData) => {									
									//emailCustomer = customerData[0].email

								}).catch((err) => {
									res.status(500).json({
										status: 500,
										message: "Error search customer",
										err: err
									})
								});
						}
						console.log(emailCustomer)
						await payment.create({
							body: { 
								transaction_amount: parseInt(orderData[0].price),
								description: 'Pedido: '+idOrder,
								payment_method_id: 'pix',
								external_reference: idOrder,
								payer: {
									email: emailCustomer									
								}
							}
						})
						.then((result) => console.log(result))
						.catch((error) => console.log(error));

					}).catch((err) => {
						res.status(500).json({
							status: 500,
							message: "Error updating order",
							err: err
						})
					});
				

		

		return defaultReturnStatement(
			res,
			"Payment Created",
			this.paymentRepository.newPayment({ ...req.body })
		);
	}

	async updatePayment(req, res) {
		const { id } = req.params;
		const idOrder = req.body.fk_idOrder;
		if (!id) {
			return res.status(400).json({
				status: 400,
				message: "Missing required field: id",
			});
		}

		return this.paymentRepository
			.updatePayment(
				{ ...req.body },
				{
					where: { id },
				}
			)
			.then((result) => {
				if (result[0] === 0) {
					return res.status(400).json({
						status: 404,
						message: "Payment not executed",
					});
				}

				this.orderRepository
					.getOrderById({ where: { id: idOrder } })
					.then((orderData) => {
						let orderUpdated = new Order(orderData);
						orderUpdated.status = "Recebido";

						this.orderRepository
							.updateOrder(orderUpdated, {
								where: { id: idOrder },
							})
							.then((finalResult) => {
								console.log(finalResult);
								res.json({
									status: 200,
									message:
										"Payment and Order updated successfully",
								});
							});
					})
					.catch((err) => {
						res.status(500).json({
							status: 500,
							message: "Error updating order",
							err: err
						})
					});
			})
			.catch((err) => {
				res.status(500).json({
					status: 500,
					message: "Error updating order",
					err: err
				})
			});
	}

	async deletePayment(req, res) {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({
				status: 400,
				message: "Missing required parameter: id",
			});
		}

		try {
			const deletedCount = await this.paymentRepository.deletePayment({
				where: { id },
			});

			if (deletedCount === 0) {
				return res.status(404).json({
					status: 404,
					message: "Payment not found",
				});
			}
			return res.json({
				status: 200,
				message: "Payment deleted successfully",
			});
		} catch (err) {
			console.error(err);
			return res.status(500).json({
				status: 500,
				err: err,
			});
		}
	}
}
