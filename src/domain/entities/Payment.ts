import { Order } from "@entities/Order";

export class Payment {
	private id?: number;
	private paymentMethod: string;
	private paymentCode: string;
	private status: string;
	private orderId: number;

	constructor(paymentMethod: string, paymentCode: string, status: string, orderId: number, id?: number) {
		this.id = id;
		this.paymentMethod = paymentMethod;
		this.paymentCode = paymentCode;
		this.status = status;
		this.orderId = orderId;
	}

	public getId(): number | undefined {
		return this.id;
	}

	public getPaymentMethod(): string {
		return this.paymentMethod;
	}

	public setPaymentMethod(paymentMethod: string): void {		
		this.paymentMethod = paymentMethod;
	}

	public getPaymentCode(): string {
		return this.paymentCode;
	}

	public setPaymentCode(paymentCode: string): void {		
		this.paymentCode = paymentCode;
	}

	public getStatus(): string {
		return this.status;
	}

	public setStatus(status: string): void {		
		this.status = status;
	}

	public getOrder(): number | undefined {
        return this.orderId;
    }

    public setOrder(orderId?: number): void {
        this.orderId = orderId;
    }	
}
