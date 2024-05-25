import { ICampaignService } from "@ports/in/v1/ICampaignService";

export class CampaignController {
	constructor(private campaignService: ICampaignService) {}

	getAll(req, res) {
		this.campaignService.getAll(req, res);
	}

	createCampaign(req, res) {
		this.campaignService.createCampaign(req, res);
	}

	createCampaignCustomerAssociation(req, res) {
		this.campaignService.createCampaignCustomerAssociation(req, res);
	}

	updateCampaign(req, res) {
		this.campaignService.updateCampaign(req, res);
	}

	getCampaignCustomers(req, res) {
		this.campaignService.getCampaignCustomers(req, res);
	}
}
