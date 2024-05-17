import { Router } from "express";
import OrderService from "../../../core/services/v1/orderService";

export const orderRoute = Router();

const orderService = new OrderService();

orderRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Order']
	/* #swagger.responses[200] = {
            description: 'Return all orders',
            schema: { $ref: '#/definitions/Order' }
    } */
	orderService.getAll(req, res);
});

orderRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Order']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/Order' }
                }
            }
        }
    */
	orderService.createOrder(req, res);
});

export default { routes: orderRoute };
