import { OrderUseCase } from "@usecases/OrderUseCase";
import { defaultReturnStatement } from "@utils";

export class OrderController {
	constructor(private orderUseCase: OrderUseCase) {}

	async getAll(req, res) {
		try {
			const orders = await this.orderUseCase.getAll();
			defaultReturnStatement(res, "Orders", Promise.resolve(orders));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async getOrderById(req, res) {
		try {
			const order = await this.orderUseCase.getOrderById(req.params.Id);
			defaultReturnStatement(res, "Orders", Promise.resolve(order));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async createOrder(req, res) {
		try {
			const order = await this.orderUseCase.createOrder(req.body);
			defaultReturnStatement(res, "Order Created", Promise.resolve(order));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async updateOrder(req, res) {
		try {
			const updatedCount = await this.orderUseCase.updateOrder(req.body);
			const responseMessage = updatedCount === 1 ? "Order Updated" : "Order Not Found";
			defaultReturnStatement(res, responseMessage, Promise.resolve(updatedCount));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async deleteOrder(req, res) {
		try {
			const deletedCount = await this.orderUseCase.deleteOrder(req.params.Id);
			const responseMessage = deletedCount === 1 ? "Order Deleted" : "Order Not Found";
			defaultReturnStatement(res, responseMessage, Promise.resolve(deletedCount));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async createOrderProductAssociation(req, res) {
		try {
			await this.orderUseCase.createOrderProductAssociation(req.body);
			defaultReturnStatement(res, "Order Product Association Created", Promise.resolve());
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async deleteOrderProductAssociation(req, res) {
		try {
			await this.orderUseCase.deleteOrderProductAssociation(req.body);
			defaultReturnStatement(res, "Order Product Association Deleted", Promise.resolve());
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async getOrderProducts(req, res) {
		try {
			const products = await this.orderUseCase.getOrderProducts(req.params.Id);
			defaultReturnStatement(res, "Order Products", Promise.resolve(products));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async updateOrderStatus(req, res) {
		try {
			const updatedCount = await this.orderUseCase.updateOrderStatus(req.body);
			const responseMessage = updatedCount === 1 ? "Order Status Updated" : "Order Not Found";
			defaultReturnStatement(res, responseMessage, Promise.resolve(updatedCount));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async getOrderByStatus(req, res) {
		try {
			const orders = await this.orderUseCase.getOrderByStatus(req.params.status);
			defaultReturnStatement(res, "Orders by Status", Promise.resolve(orders));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}
}
