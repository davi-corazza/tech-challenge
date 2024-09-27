import { Payment } from "@entities/Payment";
import { Payment as PaymentData } from "@type/Payment";

export interface IPaymentGateway {
	allPayments(): Promise<Payment[]>;

	getPaymentById(id: number): Promise<Payment>;

	newPayment(payment: Payment): Promise<Payment>;

	updatePayment(id: number, payment: Payment): Promise<number>;

	deletePayment(params: any): Promise<number>;
}
