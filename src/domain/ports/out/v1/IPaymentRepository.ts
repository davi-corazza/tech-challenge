import { Payment } from "@models/v1/Payment";

export interface IPaymentRepository {
	allPayments(): Promise<Payment[]>;

	newPayment(payment: Payment): Promise<Payment>;
}
