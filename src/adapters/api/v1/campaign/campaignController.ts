import { ICampaignService } from "@ports/in/v1/ICampaignService";

export class CampaignController {
	constructor(private campaignService: ICampaignService) {}

	getAll(req, res) {
		this.campaignService.getAll(req, res);
	}

	createCampaign(req, res) {
		this.campaignService.createCampaign(req, res);
	}

	createCampaignCostumerAssociation(req, res) {
		this.campaignService.createCampaignCostumerAssociation(req, res);
	}

	updateCampaign(req, res) {
		this.campaignService.updateCampaign(req, res);
	}
}
