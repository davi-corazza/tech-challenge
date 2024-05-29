import { IOrderService } from "@ports/in/v1/IOrderService";

export class OrderController {
	constructor(private orderService: IOrderService) {}

	getAll(req, res) {
		this.orderService.getAll(req, res);
	}

	getOrderById(req, res) {
		this.orderService.getOrderById(req, res);
	}

	createOrder(req, res) {
		this.orderService.createOrder(req, res);
	}

	updateOrder(req, res) {
		this.orderService.updateOrder(req, res);
	}

	deleteOrder(req, res) {
		this.orderService.deleteOrder(req, res);
	}

	createOrderProductAssociation(req, res) {
		this.orderService.createOrderProductAssociation(req, res);
	}

	getOrderProducts(req, res) {
		this.orderService.getOrderProducts(req, res);
	}

	getOrderByStatus(req, res) {
		this.orderService.getOrderByStatus(req, res);
	}

	deleteOrderProductAssociation(req, res) {
		this.orderService.deleteOrderProductAssociation(req, res);
	}
}
