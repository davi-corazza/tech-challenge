import { Router } from "express";
import ClientService from "../../../core/services/v1/clientService";

export const clientRoute = Router();

const clientService = new ClientService();

clientRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Client']
	/* #swagger.responses[200] = {
            description: 'Return all costumers',
            schema: { $ref: '#/definitions/Costumer' }
    } */
	clientService.getAll(req, res);
});

clientRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Client']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/Costumer' }
                }
            }
        }
    */
	clientService.createClient(req, res);
});

export default { routes: clientRoute };
