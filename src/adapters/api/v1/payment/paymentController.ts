import { IPaymentService } from "@ports/in/v1/IPaymentService";

export class PaymentController {
	constructor(private paymentService: IPaymentService) {}

	getAll(req, res) {
		this.paymentService.getAll(req, res);
	}

	createPayment(req, res) {
		this.paymentService.createPayment(req, res);
	}
}
