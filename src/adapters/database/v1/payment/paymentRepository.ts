import { IPaymentRepository } from "@ports/out/v1/IPaymentRepository";
import { PaymentEntitie } from "@database/v1/payment/paymentEntitie";
import { OrderRepository } from "../order/orderRepository";

export class PaymentRepository implements IPaymentRepository {
	allPayments(): Promise<PaymentEntitie[]> {
		return PaymentEntitie.findAll();
	}

	newPayment(values: any): Promise<PaymentEntitie> {
		return PaymentEntitie.create(values);
	}

	updatePayment(values: any, params: any): Promise<any> {
		return PaymentEntitie.update(values, params);
	}

	deletePayment(params: any): Promise<number> {
		return PaymentEntitie.destroy(params);
	}
}
