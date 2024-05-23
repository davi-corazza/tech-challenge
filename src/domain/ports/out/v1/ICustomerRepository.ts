import { Customer } from "@models/v1/Customer";

export interface ICustomerRepository {
	allCustomers(): Promise<Customer[]>;

	newCustomer(customer: Customer): Promise<Customer>;

	searchCustomer(cpf: string): Promise<Customer>;

	updateCustomer(
		id: number,
		customer: Customer
	): Promise<[affectedCount: number]>;

	deleteCustomer(id: number): Promise<number>;
}
