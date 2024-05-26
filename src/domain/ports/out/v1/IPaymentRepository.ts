import { Payment } from "@models/v1/Payment";

export interface IPaymentRepository {
	allPayments(): Promise<Payment[]>;

	newPayment(Payment: Payment): Promise<Payment>;

	updatePayment(
		Payment: Payment,
		params: any
	): Promise<[affectedCount: number]>;

	deletePayment(params: any): Promise<number>;
}
