export interface IPaymentService {
	getAll(req, res): Promise<void>;

	createPayment(req, res): Promise<void>;

	updatePayment(req, res): Promise<void>;

	deletePayment(req, res): Promise<void>;
}
