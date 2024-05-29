import { defaultReturnStatement } from "@utils/serviceUtils";
import { IOrderService } from "@ports/in/v1/IOrderService";
import { IOrderRepository } from "@ports/out/v1/IOrderRepository";
import { ICustomerService } from "@ports/in/v1/ICustomerService";
import { ICustomerRepository } from "@ports/out/v1/ICustomerRepository";
import { IComboService } from "@ports/in/v1/IComboService";
import { IComboRepository } from "@ports/out/v1/IComboRepository";
import { ICampaignRepository } from "@ports/out/v1/ICampaignRepository";
import { Op } from "sequelize";
import { Order } from "@models/v1/Order";

export class OrderService implements IOrderService {
	constructor(
		private readonly orderRepository: IOrderRepository,
		private readonly customerRepository: ICustomerRepository,
		private readonly comboRepository: IComboRepository,
		private readonly campaignRepository: ICampaignRepository
	) {}

	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Orders",
			this.orderRepository.allOrders()
		);
	}

	getOrderById(req, res) {
		const orderId = req.params.Id;
		console.log(orderId);
		return defaultReturnStatement(
			res,
			"Orders",
			this.orderRepository.getOrderById({
				where: { id: orderId },
			})
		);
	}

	async createOrder(req, res) {
		let fk_idCampaign = null;
		const { fk_idCustomer } = req.body;

		if (fk_idCustomer != null) {
			await this.customerRepository
				.campaignOfCustomers(fk_idCustomer)
				.then((campaign: any) => {
					const resultCampaign = campaign[0];
					if (resultCampaign) {
						fk_idCampaign = resultCampaign["fk_idCampaign"];
					}
				});
		}

		return defaultReturnStatement(
			res,
			"Order Created",
			this.orderRepository.newOrder({ ...req.body, fk_idCampaign })
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

	async createOrderProductAssociation(req, res) {
		const { fk_idOrder, combos, products, observation } = req.body;

		let priceOrder = 0;

		if (!fk_idOrder) {
			return res.status(400).json({
				status: 400,
				message: "Missing required field: fk_idOrder",
			});
		}

		if (!combos && !products) {
			return res.json({
				status: 400,
				message: "No products registered in the order",
			});
		}

				

		this.orderRepository
			.getOrderById({ where: { id: fk_idOrder } })
			.then((resultOrder: any) => {
				if (!resultOrder || resultOrder.length == 0) {
					return res.json({
						status: 400,
						message: "Order not found",
					});
				}				
				if (resultOrder[0].dataValues.status != 'Created') {
					return res.json({
						status: 400,
						message: "Order cannot be changed",
					});
				}
				if (combos != null) {
					let fk_idCombo = "";
					combos.forEach((combo) => {						
						fk_idCombo = combo.fk_idCombo;
						this.comboRepository
							.productsOfCombo(fk_idCombo)
							.then((resultProducts: any) => {									
								resultProducts.forEach((result) => {
									let fk_idProduct = result.dataValues.fk_idProduct									
									if (fk_idProduct != null) {										
										this.orderRepository.newProductAssociation(
											{
												fk_idOrder,
												fk_idCombo,
												fk_idProduct,
												observation,
											}
										);
									}
								});
							});
						
					});
				}
				if (products != null) {
					products.forEach((product) => {						
						let fk_idProduct = product.fk_idProduct;
						if (fk_idProduct != null) {
							this.orderRepository.newProductAssociation({
								fk_idOrder,
								fk_idProduct,
								observation,
							});	
						}					
					});
				}

				this.updateOrderPrice(fk_idOrder);

				return res.json({
					status: 200,
					message: "Product Association Created",
				});
			});
	}
	async deleteOrderProductAssociation(req, res) {
		const { fk_idOrder, combos, products } = req.body;

		if (!fk_idOrder) {
			return res.status(400).json({
				status: 400,
				message: "Missing required field: fk_idOrder",
			});
		}

		if (!combos && !products) {
			return res.json({
				status: 400,
				message: "No products registered in the order",
			});
		}

		this.orderRepository
			.getOrderById({ where: { id: fk_idOrder } })
			.then((resultOrder: any) => {
				if (!resultOrder || resultOrder.length == 0) {
					return res.json({
						status: 400,
						message: "Order not found",
					});
				}
				if (resultOrder[0].dataValues.status != 'Created') {
					return res.json({
						status: 400,
						message: "Order cannot be changed",
					});
				}
				if (combos != null) {
					let fk_idCombo = "";
					combos.forEach((combo) => {						
						fk_idCombo = combo.fk_idCombo;
						this.comboRepository
							.productsOfCombo(fk_idCombo)
							.then((resultProducts: any) => {									
								resultProducts.forEach((result) => {
									let fk_idProduct = result.dataValues.fk_idProduct
									if (fk_idProduct != null) {
										this.orderRepository.deleteProductOfOrder({
											where: { fk_idOrder: fk_idOrder,															
												fk_idCombo: fk_idCombo,
												fk_idProduct: fk_idProduct },
										});		
									}
								});
							});
						
					});
				}
				if (products != null) {
					products.forEach((product) => {						
						let fk_idProduct = product.fk_idProduct;
						if (fk_idProduct != null) {
							this.orderRepository.deleteProductOfOrder({
								where: { fk_idOrder,															
									fk_idProduct,
									fk_idCombo: {
										[Op.is]: null
									} 
								},
							});
						}					
					});
				}

				this.updateOrderPrice(fk_idOrder);
				
				return res.json({
					status: 200,
					message: "Product Association deleted successfully",
				});
			});
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


	async updateOrderPrice(id) {
		let orderPrice = 0;		
		if (!id) {
			return null ;
		}

		await this.orderRepository
			.getOrderById({ where: { id } })
			.then(async (resultOrder: any) => {
				if (!resultOrder || resultOrder.length == 0) {
					return null ;
				}
				if (resultOrder[0].dataValues.status != 'Created') {
					return null ;
				}

				await this.orderRepository.productsOfOrder(id).then(async (products) => {
					
					await products.forEach(async (product) => {				
						let productsOrder = product.dataValues.product;
						let discount = 0;
						if (product.dataValues.fk_idCombo) {					
							this.comboRepository.getComboById({where: {id: product.dataValues.fk_idCombo}}).then((resultCombo)=>{
								if(resultCombo[0].discount){
									discount = resultCombo[0].discount
								}								
							});
						}						
						await productsOrder.forEach(productDetail => {	
							orderPrice = orderPrice + (productDetail.dataValues.price - (productDetail.dataValues.price * discount))
						});
						
					});
					
					
				});
				await this.campaignRepository.getCampaignById(resultOrder[0].dataValues.fk_idCampaign).then((result) => {
					orderPrice = orderPrice - (orderPrice * result[0].discount)
				});


				let orderUpdated = new Order(resultOrder);
				orderUpdated.price = orderPrice.toString();

				this.orderRepository
					.updateOrder(orderUpdated, {
						where: { id },
					})
					.then((finalResult) => {
						console.log(finalResult);						
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
					status: "Received",
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

	getOrderByStatus(req, res) {
		const orderStatus = req.params.status;

		return this.orderRepository
			.allOrders({
				where: { status: orderStatus },
				order: [["updatedAt", "ASC"]],
			})
			.then((result) => {
				let newResult = [];
				result.map((order) => {
					let timeValue =
						new Date().getMinutes() -
						new Date(order["updatedAt"]).getMinutes();

					newResult.push({
						id: order.id,
						status: order.status,
						timeQueue: `${timeValue} Minutes`,
					});
				});

				res.json({
					status: 200,
					result: newResult,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					error: err,
				});
			});
	}
}
