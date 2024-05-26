import { defaultReturnStatement } from "@utils/serviceUtils";
import { IOrderService } from "@ports/in/v1/IOrderService";
import { IOrderRepository } from "@ports/out/v1/IOrderRepository";

export class OrderService implements IOrderService {
	constructor(private readonly orderRepository: IOrderRepository) {}

	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Orders",
			this.orderRepository.allOrders()
		);
	}

	createOrder(req, res) {
		return defaultReturnStatement(
			res,
			"Order Created",
			this.orderRepository.newOrder({ ...req.body })
		);
	}

	async updateOrder(req, res) {
		const { id, fk_idCustomer, status, price } = req.body;
		if (!id) {
			return res.status(400).json({
				status: 400,
				message: "Missing required field: id",
			});
		}

		try {
			const [updatedCount] = await this.orderRepository.updateOrder(
				{
					fk_idCustomer,
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
			const deletedCount = await this.orderRepository.deleteOrder({
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

	createOrderProductAssociation(req, res) {
		return defaultReturnStatement(
			res,
			"Product Association Created",
			this.orderRepository.newProductAssociation({ ...req.body })
		);
	}

	getOrderProducts(req, res) {
		const orderID = req.params.id;
		return this.orderRepository
			.productsOfOrder(orderID)
			.then((result) => {
				res.json({
					status: 200,
					Products: result,
				});
			})
			.catch((err) => {
				console.error(err);
				res.json({
					status: 500,
					err: err,
				});
			});
	}

	async updateOrderStatus(req, res) {
		const { id, fk_idCustomer, status, price } = req.body;
		if (!id) {
			return res.status(400).json({
				status: 400,
				message: "Missing required field: id",
			});
		}

		try {
			const [updatedCount] = await this.orderRepository.updateOrderStatus(
				{
					fk_idCustomer,
					status:"Received",
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
}
