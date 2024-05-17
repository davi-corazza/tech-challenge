import { defaultReturnStatement } from "../../../core/utils/serviceUtils";
import Order from "../../../core/models/v1/orderModel";

export default class OrderService {
	getAll(req, res) {
		return defaultReturnStatement(res, "Orders", Order.allOrders());
	}

	createOrder(req, res) {
		return defaultReturnStatement(
			res,
			"Order Created",
			Order.newOrder({ ...req.body })
		);
	}
}
