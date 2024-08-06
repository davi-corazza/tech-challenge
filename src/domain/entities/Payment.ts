export class Payment {
	id?: number;
	paymentMethod: string;
	paymentCode: string;
	status: string;
	fk_idOrder: number;
	ticket_url?: string;

	constructor(paymentMethod: string, paymentCode: string, status: string, fk_idOrder: number, id?: number, ticket_url?: string) {
		this.id = id;
		this.paymentMethod = paymentMethod;
		this.paymentCode = paymentCode;
		this.status = status;
		this.fk_idOrder = fk_idOrder;
		this.ticket_url = ticket_url;
	}
}
