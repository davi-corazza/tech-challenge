import { defaultReturnStatement } from "@utils/serviceUtils";
import { IPaymentService } from "@ports/in/v1/IPaymentService";
import { IPaymentRepository } from "@ports/out/v1/IPaymentRepository";
import { IOrderRepository } from "@ports/out/v1/IOrderRepository";


export class PaymentService implements IPaymentService {
	constructor(private readonly paymentRepository: IPaymentRepository, private readonly orderRepository: IOrderRepository) {}


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
		const { id, paymentMethod, paymentCode, status, fk_orderID } = req.body;
		console.log({ id, paymentMethod, paymentCode, status, fk_orderID })
		if (!id) {
			return res.status(400).json({
				status: 400,
				message: "Missing required field: id",
			});
		}

		try {
			const [updatedCount] = await this.paymentRepository.updatePayment(
				{
					paymentMethod,
					paymentCode,
					status,
					fk_orderID,
				},
				{
					where: { id },
				}
			);

			if (updatedCount === 0) {
				return res.status(404).json({
					status: 404,
					message: "Payment not found",
				});
			}

			return res.json({
				status: 200,
				message: "Payment updated successfully",
			});
		} catch (err) {
			console.error(err);
			return res.status(500).json({
				status: 500,
				err: err,
			});
		}
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
