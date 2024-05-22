import { ICampaignService } from "@ports/in/v1/ICampaignService";
import { defaultReturnStatement } from "@utils/serviceUtils";
import { ICampaignRepository } from "@ports/out/v1/ICampaignRepository";

export class CampaignService implements ICampaignService {
	constructor(private readonly campaignRepository: ICampaignRepository) {}

	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Campaigns",
			this.campaignRepository.allCampaigns()
		);
	}

	createCampaign(req, res) {
		return defaultReturnStatement(
			res,
			"Campaign Created",
			this.campaignRepository.newCampaign({ ...req.body })
		);
	}

	createCampaignCostumerAssociation(req, res) {
		return defaultReturnStatement(
			res,
			"Costumer Association Created",
			this.campaignRepository.newCampaignAssociation({ ...req.body })
		);
	}

	updateCampaign(req, res) {
		return defaultReturnStatement(
			res,
			"Campaign Updated",
			this.campaignRepository.updateCampaign(req.params.id, {
				...req.body,
			})
		);
	}
}
