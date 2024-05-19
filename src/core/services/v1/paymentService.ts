import { defaultReturnStatement } from "../../../core/utils/serviceUtils";
import Payment from "../../../core/models/v1/paymentModel";

export default class PaymentService {
	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Payment",
			Payment.allPayments()
		);
	}

	createPayment(req, res) {
		return defaultReturnStatement(
			res,
			"Payment Created",
			Payment.newPayment({ ...req.body })
		);
	}
}
