import { ICustomerService } from "@ports/in/v1/ICustomerService";

export class CustomerController {
	constructor(private customerService: ICustomerService) {}

	getAll(req, res) {
		this.customerService.getAll(req, res);
	}

	createCustomer(req, res) {
		this.customerService.createCustomer(req, res);
	}

	searchCustomer(req, res) {
		this.customerService.searchCustomer(req, res);
	}

	updateCustomer(req, res) {
		this.customerService.updateCustomer(req, res);
	}

	deleteCustomer(req, res) {
		this.customerService.deleteCustomer(req, res);
	}

	getCustomerCampaigns(req, res) {
		this.customerService.getCustomerCampaigns(req, res);
	}
}
