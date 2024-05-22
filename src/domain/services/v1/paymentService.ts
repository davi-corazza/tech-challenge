import { defaultReturnStatement } from "@utils/serviceUtils";
import { IPaymentService } from "@ports/in/v1/IPaymentService";
import { IPaymentRepository } from "@ports/out/v1/IPaymentRepository";

export class PaymentService implements IPaymentService {
	constructor(private readonly paymentRepository: IPaymentRepository) {}

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
}
