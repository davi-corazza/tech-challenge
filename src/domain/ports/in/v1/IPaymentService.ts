export interface IPaymentService {
	getAll(req, res): Promise<void>;

	createPayment(req, res): Promise<void>;
}
