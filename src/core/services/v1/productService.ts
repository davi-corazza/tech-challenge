import connection from "../../../config/connectionFactory";
import { ProductRepository } from "../../../adapters/database/v1/productRepository";

export default class ProductService {
	initModel() {
		connection.database.addModels([ProductRepository]);
	}

	getAll(req, res) {
		return ProductRepository.findAll()
			.then((products) => {
				res.json({
					status: 200,
					Products: products,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}

	getProductByCategory(req, res) {
		const categoryId = req.params.categoryId;
		return ProductRepository.findAll({
			where: { fk_idCategory: categoryId },
		})
			.then((products) => {
				res.json({
					status: 200,
					Products: products,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}

	async createProduct(req, res) {
		return await ProductRepository.create({ ...req.body })
			.then((result) => {
				res.json({
					status: 200,
					ProductCreated: result,
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
