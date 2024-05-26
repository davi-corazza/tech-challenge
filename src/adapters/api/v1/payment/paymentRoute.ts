import { Router } from "express";
import { PaymentRepository } from "@database/v1/payment/paymentRepository";
import { PaymentService } from "@services/v1/paymentService";
import { PaymentController } from "@api/v1/payment/paymentController";
import { OrderRepository } from "@database/v1/order/orderRepository";

export const paymentRoute = Router();

const paymentRepository = new PaymentRepository();
const orderRepository = new OrderRepository();
const paymentService = new PaymentService(paymentRepository, orderRepository);
const paymentController = new PaymentController(paymentService);

paymentRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Payment']
	/* #swagger.responses[200] = {
            description: 'Return all payments',
            schema: { $ref: '#/definitions/Payment' }
    } */
	paymentController.getAll(req, res);
});

paymentRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Payment']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/Payment' }
                }
            }
        }
    */
	paymentController.createPayment(req, res);
});

paymentRoute.delete("/delete/:id", (req, res) => {
	// #swagger.tags = ['Payment']
	paymentController.deletePayment(req, res);
});

paymentRoute.put("/update/:id", (req, res) => {
	// #swagger.tags = ['Payment']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/Payment' }
                }
            }
        }
    */
	paymentController.updatePayment(req, res);
});
