import { OrderRepository } from "../../../adapters/database/v1/orderRepository";

export default class OrderService {
	getAll() {
		return (req, res) => {
			OrderRepository.findAll()
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
		};
	}
}
