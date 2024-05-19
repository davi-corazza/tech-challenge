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

orderRoute.delete("/delete/:id", (req, res) => {
	// #swagger.tags = ['Order']
	orderService.deleteOrder(req, res);
});

orderRoute.put("/update/:id", (req, res) => {
	// #swagger.tags = ['Order']
	orderService.updateOrder(req, res);
});

orderRoute.post("/product/association/create", (req, res) => {
	// #swagger.tags = ['Order']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/AddOrderProduct' }
                }
            }
        }
    */
	orderService.createOrderProductAssociation(req, res);
});

orderRoute.get("/:id/products", (req, res) => {
	// #swagger.tags = ['Order']
	orderService.getOrderProducts(req, res);
});

export default { routes: orderRoute };
