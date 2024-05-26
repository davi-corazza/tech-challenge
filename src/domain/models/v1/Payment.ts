export class Payment {
	id?: number;
	paymentMethod: string;
	paymentCode: string;
	status:string;
	fk_idOrder: number
}
