import { Op } from "sequelize";
import { OrderProductEntitie } from "@database/v1/order/orderProductEntitie";
import { ProductEntitie } from "@database/v1/product/productEntitie";
import { OrderEntitie } from "@database/v1/order/orderEntitie";
import { IOrderRepository } from "@ports/out/v1/IOrderRepository";

export class OrderRepository implements IOrderRepository {
	allOrders(): Promise<OrderEntitie[]> {
		return OrderEntitie.findAll();
	}

	newOrder(values: any): Promise<OrderEntitie> {
		return OrderEntitie.create(values);
	}

	updateOrder(values: any, params: any): Promise<any> {
		return OrderEntitie.update(values, params);
	}

	deleteOrder(params: any): Promise<number> {
		return OrderEntitie.destroy(params);
	}

	newProductAssociation(values: any): Promise<OrderProductEntitie> {
		return OrderProductEntitie.create(values);
	}

	productsOfOrder(id: string): Promise<OrderProductEntitie[]> {
		return OrderProductEntitie.findAll({
			attributes: ["observation"],
			include: [
				{
					model: ProductEntitie,
					on: {
						"$product.id$": {
							[Op.col]: "OrderProduct.fk_idProduct",
						},
					},					
				},
				{
					model: OrderEntitie,
					on: {
						"$order.id$": {
							[Op.col]: "OrderProduct.fk_idOrder",
						},
					},
				}
			],
			where: { fk_idOrder: id },
		});
	}
}
