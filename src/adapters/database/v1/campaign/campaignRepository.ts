import { CampaignEntitie } from "@database/v1/campaign/campaignEntitie";
import { CustomerEntitie } from "@database/v1/customer/customerEntitie";
import { CampaignCustomerEntitie } from "@database/v1/campaign/campaignCustomerEntitie";
import { ICampaignRepository } from "@ports/out/v1/ICampaignRepository";
import { Op } from "sequelize";

export class CampaignRepository implements ICampaignRepository {
	allCampaigns(): Promise<CampaignEntitie[]> {
		return CampaignEntitie.findAll();
	}

	newCampaign(values: any): Promise<CampaignEntitie> {
		return CampaignEntitie.create(values);
	}

	newCampaignAssociation(values: any): Promise<CampaignCustomerEntitie> {
		return CampaignCustomerEntitie.create(values);
	}

	updateCampaign(id: number, values: any): Promise<[affectedCount: number]> {
		return CampaignEntitie.update(values, { where: { id } });
	}

	customersOfCampaign(id: string): Promise<CampaignCustomerEntitie[]> {
		return CampaignCustomerEntitie.findAll({
			where: { fk_idCampaign: id },
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
