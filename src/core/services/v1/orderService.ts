import { defaultReturnStatement } from "../../../core/utils/serviceUtils";
import { OrderRepository } from "../../../adapters/database/v1/orderRepository";

export default class OrderService {
	getAll(req, res) {
		return defaultReturnStatement(res, "Orders", OrderRepository.findAll());
	}

	createOrder(req, res) {
		const { title, type } = req.body;
		return defaultReturnStatement(
			res,
			"OrderCreated",
			OrderRepository.create({ title, type })
		);
	}
}
