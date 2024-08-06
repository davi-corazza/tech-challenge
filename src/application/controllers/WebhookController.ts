import { NextFunction, Request, Response } from "express";
import { PaymentUseCase } from "@usecases/PaymentUseCase";
import { IPaymentGateway } from "@gateways/IPaymentGateway";
import { IOrderGateway } from "@gateways/IOrderGateway";
import { Order as OrderEntitie } from "@entities/Order";

export class WebhookController {
    constructor(
		private readonly paymentGateway: IPaymentGateway,
		private readonly orderGateway: IOrderGateway
	) { }

    public async WebhookController(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response> {
        try {
            
            // const orderData = await this.orderGateway.getOrderById({ where: { id: paymentData[0].fk_idOrder } });
            // let orderUpdated = new OrderEntitie(orderData);
		    // orderUpdated.status = "Recebido";
            
            
            // const result = await this.paymentGateway.updatePayment(
            //     { ...paymentData },
            //     { where: { id: paymentId } }
            // );
            
            return res.status(200).end();
        } catch (error) {
            next(error);
        }
    }
}