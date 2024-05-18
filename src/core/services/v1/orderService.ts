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

	async updateOrder(req, res) {
		const { id, fk_idCostumer, status, price } = req.body;
		if (!id) {
			return res.status(400).json({
				status: 400,
				message: "Missing required field: id",
			});
		}

		try {
			const [updatedCount] = await Order.updateOrder(
				{
					fk_idCostumer,
					status,
					price,
				},
				{
					where: { id },
				}
			);

			if (updatedCount === 0) {
				return res.status(404).json({
					status: 404,
					message: "Order not found",
				});
			}

			return res.json({
				status: 200,
				message: "Order updated successfully",
			});
		} catch (err) {
			console.error(err);
			return res.status(500).json({
				status: 500,
				err: err,
			});
		}
	}

	async deleteOrder(req, res) {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({
				status: 400,
				message: "Missing required parameter: id",
			});
		}

		try {
			const deletedCount = await Order.deleteOrder({
				where: { id },
			});

			if (deletedCount === 0) {
				return res.status(404).json({
					status: 404,
					message: "Order not found",
				});
			}
			return res.json({
				status: 200,
				message: "Order deleted successfully",
			});
		} catch (err) {
			console.error(err);
			return res.status(500).json({
				status: 500,
				err: err,
			});
		}
	}
}
