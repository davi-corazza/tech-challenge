import { ICustomerRepository } from "@ports/out/v1/ICustomerRepository";
import { CustomerEntitie } from "@database/v1/customer/customerEntitie";
import { CampaignCustomerEntitie } from "@database/v1/campaign/campaignCustomerEntitie";
import { CampaignEntitie } from "@database/v1/campaign/campaignEntitie";
import { Op } from "sequelize";

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

	campaignOfCustomers(id: string): Promise<CampaignCustomerEntitie[]> {
		return CampaignCustomerEntitie.findAll({
			where: { fk_idCustomer: id },
			include:[
				{
					model:CampaignEntitie,
					on: {
						"$campaign.id$": {
							[Op.col]: "CampaignCustomer.fk_idCampaign",
						},
					},
				},
				{
					model:CustomerEntitie,
					on: {
						"$customer.id$": {
							[Op.col]: "CampaignCustomer.fk_idCustomer",
						},
					},
					
				}
			]
		});
	}
}
