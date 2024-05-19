import { Router } from "express";
import CampaignService from "../../../core/services/v1/campaignService";

export const campaignRoute = Router();

const campaignService = new CampaignService();

campaignRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Campaign']
	/* #swagger.responses[200] = {
            description: 'Return all campaigns',
            schema: { $ref: '#/definitions/Campaign' }
    } */
	campaignService.getAll(req, res);
});

campaignRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Campaign']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/Campaign' }
                }
            }
        }
    */
	campaignService.createCampaign(req, res);
});

campaignRoute.post("/campaign/association/create", (req, res) => {
	// #swagger.tags = ['Campaign']
	/* #swagger.requestBody = {
			required: true,
			content: {
				"application/json": {
					schema: { $ref: '#/definitions/AddCampaignCostumer' }
				}
			}
		}
	*/
	campaignService.createCampaignCostumerAssociation(req, res);
});

export default { routes: campaignRoute };
