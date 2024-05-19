import { Op } from "sequelize";
import { OrderProductRepository } from "../../../adapters/database/v1/orderProductRepository";
import { ProductRepository } from "../../../adapters/database/v1/productRepository";
import { OrderRepository } from "../../../adapters/database/v1/orderRepository";

export default class Order {
	public static allOrders(): Promise<OrderRepository[]> {
		return OrderRepository.findAll();
	}

	public static newOrder(values: any): Promise<OrderRepository> {
		return OrderRepository.create(values);
	}

	public static updateOrder(
		values: any,
		params: any
	): Promise<[affectedCount: number, affectedRows: OrderRepository[]]> {
		return OrderRepository.update(values, params);
	}

	public static deleteOrder(params: any): Promise<number> {
		return OrderRepository.destroy(params);
	}

	public static newProductAssociation(
		values: any
	): Promise<OrderProductRepository> {
		return OrderProductRepository.create(values);
	}

	public static productsOfOrder(
		id: string
	): Promise<OrderProductRepository[]> {
		return OrderProductRepository.findAll({
			attributes: ["observation"],
			include: [
				{
					model: ProductRepository,
					on: {
						"$product.id$": {
							[Op.col]: "OrderProduct.fk_idProduct",
						},
					},
				},
			],
			where: { fk_idOrder: id },
		});
	}
}
