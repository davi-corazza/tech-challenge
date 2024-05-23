export interface ICampaignService {
	getAll(req, res): Promise<void>;

	createCampaign(req, res): Promise<void>;

	createCampaignCustomerAssociation(req, res): Promise<void>;

	updateCampaign(req, res): Promise<void>;
}
