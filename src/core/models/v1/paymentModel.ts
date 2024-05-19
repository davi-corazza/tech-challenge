import { PaymentRepository } from "../../../adapters/database/v1/paymentRepository";

export default class Payment {
	public static allPayments(): Promise<PaymentRepository[]> {
		return PaymentRepository.findAll();
	}

	public static newPayment(values: any): Promise<PaymentRepository> {
		return PaymentRepository.create(values);
	}
}
