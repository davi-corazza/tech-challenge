import { CampaignEntitie } from "@database/v1/campaign/campaignEntitie";
import { CampaignCustomerEntitie } from "@database/v1/campaign/campaignCustomerEntitie";
import { ICampaignRepository } from "@ports/out/v1/ICampaignRepository";

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
}
