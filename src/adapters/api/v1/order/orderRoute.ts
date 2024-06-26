import { Router } from "express";
import { OrderRepository } from "@database/v1/order/orderRepository";
import { OrderService } from "@services/v1/orderService";
import { OrderController } from "@api/v1/order/orderController";
import { CustomerRepository } from "@database/v1/customer/customerRepository";
import { ComboRepository } from "@database/v1/combo/comboRepository";
import { CampaignRepository } from "@database/v1/campaign/campaignRepository";

export const orderRoute = Router();

const orderRepository = new OrderRepository();
const customerRepository = new CustomerRepository();
const comboRepository = new ComboRepository();
const campaignRepository = new CampaignRepository();
const orderService = new OrderService(
	orderRepository,
	customerRepository,
	comboRepository,
    campaignRepository
);
const orderController = new OrderController(orderService);

orderRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Order']
	/* #swagger.responses[200] = {
            description: 'Return all orders',
            schema: { $ref: '#/definitions/Order' }
    } */
	orderController.getAll(req, res);
});

orderRoute.get("/:Id", (req, res) => {
	// #swagger.tags = ['Order']
	orderController.getOrderById(req, res);
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
	orderController.createOrder(req, res);
});

orderRoute.delete("/delete/:id", (req, res) => {
	// #swagger.tags = ['Order']
	orderController.deleteOrder(req, res);
});

orderRoute.put("/update/:id", (req, res) => {
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
	orderController.updateOrder(req, res);
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
	orderController.createOrderProductAssociation(req, res);
});

orderRoute.post("/product/association/remove", (req, res) => {
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
    orderController.deleteOrderProductAssociation(req, res);
});

orderRoute.get("/:id/products", (req, res) => {
	// #swagger.tags = ['Order']
	orderController.getOrderProducts(req, res);
});

orderRoute.get("/orderByStatus/:status", (req, res) => {
	// #swagger.tags = ['Queue']
	/* #swagger.parameters['status'] = {
        in: 'path',
        description: 'Status of the order',
        required: true,
        type: 'string',
        schema: 'Recebido'
	} */
	orderController.getOrderByStatus(req, res);
});
