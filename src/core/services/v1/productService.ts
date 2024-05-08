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

	async createProduct(req, res) {
		const { name, minValue, fk_idCategory } = req.body;
		return await ProductRepository.create({ name, minValue, fk_idCategory })
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
