import { ProductRepository } from "../../../adapters/database/v1/productRepository";

export default class ProductService {
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
	async updateProduct(req, res) {
		const { id, name, price, description, fk_idCategory } = req.body;
		if (!id) {
			return res.status(400).json({
				status: 400,
				message: "Missing required field: id",
			});
		}

		try {
			const [updatedCount] = await ProductRepository.update(
				{
					name,
					price,
					description,
					fk_idCategory,
				},
				{
					where: { id },
				}
			);

			if (updatedCount === 0) {
				return res.status(404).json({
					status: 404,
					message: "Product not found",
				});
			}

			return res.json({
				status: 200,
				message: "Product updated successfully",
			});
		} catch (err) {
			console.error(err);
			return res.status(500).json({
				status: 500,
				err: err,
			});
		}
	}
	async deleteProduct(req, res) {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({
				status: 400,
				message: "Missing required parameter: id",
			});
		}

		try {
			const deletedCount = await ProductRepository.destroy({
				where: { id },
			});

			if (deletedCount === 0) {
				return res.status(404).json({
					status: 404,
					message: "Product not found",
				});
			}
			return res.json({
				status: 200,
				message: "Product deleted successfully",
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
