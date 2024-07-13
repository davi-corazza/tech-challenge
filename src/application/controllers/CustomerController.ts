import { CustomerUseCase } from "@usecases/CustomerUseCase";
import { defaultReturnStatement, formatObjectResponse } from "@utils";

export class CustomerController {
	constructor(private customerUseCase: CustomerUseCase) {}

	async getAll(req, res) {
		try {
			const customers = await this.customerUseCase.getAll();
			defaultReturnStatement(res, "Customers", Promise.resolve(customers));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async createCustomer(req, res) {
		try {
			const customer = await this.customerUseCase.createCustomer(req.body);
			defaultReturnStatement(res, "Customer Created", Promise.resolve(customer));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async searchCustomer(req, res) {
		try {
			const customer = await this.customerUseCase.searchCustomer(req.params.cpf);
			defaultReturnStatement(res, "Customer Found", Promise.resolve(customer));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async updateCustomer(req, res) {
		try {
			const customer = await this.customerUseCase.updateCustomer(req.params.id, req.body);
			defaultReturnStatement(res, "Customer Updated", Promise.resolve(customer));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async deleteCustomer(req, res) {
		try {
			await this.customerUseCase.deleteCustomer(req.params.id);
			defaultReturnStatement(res, "Customer Deleted", Promise.resolve());
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async getCustomerCampaigns(req, res) {
		try {
			const campaigns = await this.customerUseCase.getCustomerCampaigns(req.params.id);
			res.json({
				status: 200,
				Campaigns: formatObjectResponse(campaigns, "campaign"),
			});
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}
}
