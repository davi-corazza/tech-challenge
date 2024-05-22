import { IPaymentRepository } from "@ports/out/v1/IPaymentRepository";
import { PaymentEntitie } from "@database/v1/payment/paymentEntitie";

export class PaymentRepository implements IPaymentRepository {
	allPayments(): Promise<PaymentEntitie[]> {
		return PaymentEntitie.findAll();
	}

	newPayment(values: any): Promise<PaymentEntitie> {
		return PaymentEntitie.create(values);
	}
}
