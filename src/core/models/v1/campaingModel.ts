import { CampaignRepository } from "../../../adapters/database/v1/campaignRepository";
import {CampaignCostumerRepositroy} from "../../../adapters/database/v1/campaignCostumerRepositroy";

export default class Campaign {
	public static allCampaigns(): Promise<CampaignRepository[]> {
		return CampaignRepository.findAll();
	}

	public static newCampaign(values: any): Promise<CampaignRepository> {
		return CampaignRepository.create(values);
	}

	public static newCampaignAssociation(
		values: any
	): Promise<CampaignCostumerRepositroy> {
		return CampaignCostumerRepositroy.create(values);
	}
}
