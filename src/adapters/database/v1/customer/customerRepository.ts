import { ICustomerRepository } from "@ports/out/v1/ICustomerRepository";
import { CustomerEntitie } from "@database/v1/customer/customerEntitie";

export class CustomerRepository implements ICustomerRepository {
	allCustomers(): Promise<CustomerEntitie[]> {
		return CustomerEntitie.findAll();
	}

	newCustomer(values: any): Promise<CustomerEntitie> {
		return CustomerEntitie.create(values);
	}

	searchCustomer(cpf: string): Promise<CustomerEntitie> {
		return CustomerEntitie.findOne({ where: { cpf } });
	}

	updateCustomer(id: number, values: any): Promise<[affectedCount: number]> {
		return CustomerEntitie.update(values, { where: { id } });
	}

	deleteCustomer(id: number): Promise<number> {
		return CustomerEntitie.destroy({ where: { id } });
	}
}
