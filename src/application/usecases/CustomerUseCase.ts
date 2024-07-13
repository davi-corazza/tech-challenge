import { ICustomerGateway } from "@gateways/ICustomerGateway";
import { Customer } from "@entities/Customer";
import { Campaign } from "@entities/Campaign";

export class CustomerUseCase {
	constructor(private readonly customerGateway: ICustomerGateway) {}

	async getAll(): Promise<Customer[]> {
		return await this.customerGateway.allCustomers();
	}

	async createCustomer(data: any): Promise<Customer> {
	const newCustomer = { ...data };
		return await this.customerGateway.newCustomer(newCustomer);
	}

	async searchCustomer(cpf: string): Promise<Customer> {
		return await this.customerGateway.searchCustomer(cpf);
	}

	async updateCustomer(id: number, data: any): Promise<[affectedCount: number]> {
		return await this.customerGateway.updateCustomer(id, data);
	}

	async deleteCustomer(id: number): Promise<number> {
		return await this.customerGateway.deleteCustomer(id);
	}

	async getCustomerCampaigns(id: string): Promise<Campaign[]> {
		return await this.customerGateway.campaignOfCustomers(id);
	}
}
