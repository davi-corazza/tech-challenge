import { Router } from "express";
import PaymentService from "../../../core/services/v1/paymentService";

export const paymentRoute = Router();

const paymentService = new PaymentService();

paymentRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Payment']
	/* #swagger.responses[200] = {
            description: 'Return all payments',
            schema: { $ref: '#/definitions/Payment' }
    } */
	paymentService.getAll(req, res);
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
        paymentService.createPayment(req, res);
});

export default { routes: paymentRoute };
