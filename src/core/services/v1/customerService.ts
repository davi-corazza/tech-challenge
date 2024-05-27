import { ICustomerRepository } from "@ports/out/v1/ICustomerRepository";
import { ICustomerService } from "@ports/in/v1/ICustomerService";
import { defaultReturnStatement, formatObjectResponse } from "@utils/serviceUtils";

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

	getCustomerCampaigns(req, res) {
		const customerID = req.params.id;
		return this.customerRepository
			.campaignOfCustomers(customerID)
			.then((result) => {
				res.json({
					status: 200,
					Products: formatObjectResponse(result, "campaign"),
				});
			})
			.catch((err) => {
				console.error(err);
				res.json({
					status: 500,
					err: err,
				});
			});
	}
}
