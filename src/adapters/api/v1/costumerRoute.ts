import { Router } from "express";
import CostumerService from "../../../core/services/v1/costumerService";

export const costumerRoute = Router();

const costumerService = new CostumerService();

costumerRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Costumer']
	// #swagger.description = 'Get all costumers'
	costumerService.getAll(req, res);
});

costumerRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Costumer']
	// #swagger.description = 'Create a new costumer'
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

costumerRoute.get("/search/:cpf", (req, res) => {
	// #swagger.tags = ['Costumer']
	// #swagger.description = 'Search costumer by CPF'
	costumerService.searchCostumer(req, res);
});


export default { routes: costumerRoute };
