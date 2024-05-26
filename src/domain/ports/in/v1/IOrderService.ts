export interface IOrderService {
	getAll(req, res): Promise<void>;

	createOrder(req, res): Promise<void>;

	updateOrder(req, res): Promise<void>;

	deleteOrder(req, res): Promise<void>;

	createOrderProductAssociation(req, res): Promise<void>;

	getOrderProducts(req, res): Promise<void>;

	updateOrderStatus(req, res): Promise<void>;
}
