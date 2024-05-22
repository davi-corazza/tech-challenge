import { Router } from "express";
import { CostumerRepository } from "@database/v1/costumer/costumerRepository";
import { CostumerService } from "@services/v1/costumerService";
import { CostumerController } from "@api/v1/costumer/costumerController";

export const costumerRoute = Router();

const costumerRepository = new CostumerRepository();
const costumerService = new CostumerService(costumerRepository);
const costumerController = new CostumerController(costumerService);

costumerRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Costumer']
	// #swagger.description = 'Get all costumers'
	costumerController.getAll(req, res);
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
	costumerController.createCostumer(req, res);
});

costumerRoute.get("/search/:cpf", (req, res) => {
	// #swagger.tags = ['Costumer']
	// #swagger.description = 'Search costumer by CPF'
	costumerController.searchCostumer(req, res);
});

costumerRoute.put("/update/:id", (req, res) => {
	// #swagger.tags = ['Costumer']
	// #swagger.description = 'Update costumer by ID'
	/* #swagger.requestBody = {
			required: true,
			content: {
				"application/json": {
					schema: { $ref: '#/definitions/Costumer' }
				}
			}
		}
	*/
	costumerController.updateCostumer(req, res);
});

costumerRoute.delete("/delete/:id", (req, res) => {
	// #swagger.tags = ['Costumer']
	// #swagger.description = 'Delete costumer by ID'
	costumerController.deleteCostumer(req, res);
});
