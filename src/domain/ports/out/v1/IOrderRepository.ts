import { Order } from "@models/v1/Order";

export interface IOrderRepository {
	allOrders(): Promise<Order[]>;

	newOrder(Order: Order): Promise<Order>;

	updateOrder(Order: Order, params: any): Promise<[affectedCount: number]>;

	deleteOrder(params: any): Promise<number>;

	newProductAssociation(values: any): Promise<any>;

	productsOfOrder(id: string): Promise<any[]>;
}
