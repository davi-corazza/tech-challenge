export interface ICampaignService {
	getAll(req, res): Promise<void>;

	getCampaignById(req, res): Promise<void>;

	createCampaign(req, res): Promise<void>;

	createCampaignCustomerAssociation(req, res): Promise<void>;

	updateCampaign(req, res): Promise<void>;

	getCampaignCustomers(req, res): Promise<void>;
}
