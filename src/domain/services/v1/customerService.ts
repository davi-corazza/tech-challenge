import { ICustomerRepository } from "@ports/out/v1/ICustomerRepository";
import { ICustomerService } from "@ports/in/v1/ICustomerService";
import { defaultReturnStatement } from "@utils/serviceUtils";

export class CustomerService implements ICustomerService {
	constructor(private readonly customerRepository: ICustomerRepository) {}

	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Customers",
			this.customerRepository.allCustomers()
		);
	}

	createCustomer(req, res) {
		return defaultReturnStatement(
			res,
			"Customer Created",
			this.customerRepository.newCustomer({ ...req.body })
		);
	}

	searchCustomer(req, res) {
		return defaultReturnStatement(
			res,
			"Customer Found",
			this.customerRepository.searchCustomer(req.params.cpf)
		);
	}

	updateCustomer(req, res) {
		return defaultReturnStatement(
			res,
			"Customer Updated",
			this.customerRepository.updateCustomer(req.params.id, {
				...req.body,
			})
		);
	}

	deleteCustomer(req, res) {
		return defaultReturnStatement(
			res,
			"Customer Deleted",
			this.customerRepository.deleteCustomer(req.params.id)
		);
	}
}
