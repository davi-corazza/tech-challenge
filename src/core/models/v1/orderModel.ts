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

}
