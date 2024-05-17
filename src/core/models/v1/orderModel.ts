import { OrderRepository } from "../../../adapters/database/v1/orderRepository";

export default class Order {
	public static allOrders(): Promise<OrderRepository[]> {
		return OrderRepository.findAll();
	}

	public static newOrder(values: any): Promise<OrderRepository> {
		return OrderRepository.create(values);
	}
}
