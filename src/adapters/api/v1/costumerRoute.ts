import { Router } from "express";
import CostumerService from "../../../core/services/v1/costumerService";

export const costumerRoute = Router();

const costumerService = new CostumerService();

costumerRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Costumer']
	/* #swagger.responses[200] = {
            description: 'Return all costumers',
            schema: { $ref: '#/definitions/Costumer' }
    } */
	costumerService.getAll(req, res);
});

costumerRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Costumer']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/Costumer' }
                }
            }
        }
    */
	costumerService.createCostumer(req, res);
});

export default { routes: costumerRoute };
