import connection from "../../../config/connectionFactory";
import { OrderRepository } from "../../../adapters/database/v1/orderRepository";

export default class OrderService {
	initModel() {
		connection.database.addModels([OrderRepository]);
	}

	getAll(req, res) {
		return OrderRepository.findAll()
			.then((orders) => {
				res.json({
					status: 200,
					orders: orders,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}

	async createOrder(req, res) {
		const { title, type } = req.body;
		return await OrderRepository.create({ title, type })
			.then((result) => {
				res.json({
					status: 200,
					orderCreated: result,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}
}
