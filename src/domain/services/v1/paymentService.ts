import { defaultReturnStatement } from "@utils/serviceUtils";
import { IPaymentService } from "@ports/in/v1/IPaymentService";
import { IPaymentRepository } from "@ports/out/v1/IPaymentRepository";
import { IOrderRepository } from "@ports/out/v1/IOrderRepository";
import { Order } from "@models/v1/Order";

export class PaymentService implements IPaymentService {
	constructor(
		private readonly paymentRepository: IPaymentRepository,
		private readonly orderRepository: IOrderRepository
	) {}

	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Payment",
			this.paymentRepository.allPayments()
		);
	}

	createPayment(req, res) {
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
