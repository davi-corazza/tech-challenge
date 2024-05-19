import Campaign from "../../../core/models/v1/campaingModel";
import { defaultReturnStatement } from "../../../core/utils/serviceUtils";

export default class CampaignService {
	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Campaigns",
			Campaign.allCampaigns()
		);
	}

	createCampaign(req, res) {
		return defaultReturnStatement(
			res,
			"Campaign Created",
			Campaign.newCampaign({ ...req.body })
		);
	}

	createCampaignCostumerAssociation(req, res) {
		return defaultReturnStatement(
			res,
			"Costumer Association Created",
			Campaign.newCampaignAssociation({ ...req.body })
		);
	}

	updateCampaign(req, res) {
		return defaultReturnStatement(
			res,
			"Campaign Updated",
			Campaign.updateCampaign(req.params.id, { ...req.body })
		);
	}
}
