import {
	defaultReturnStatement,
	formatObjectResponse,
} from "@utils/serviceUtils";
import { IProductService } from "@ports/in/v1/IProductService";
import { IProductRepository } from "@ports/out/v1/IProductRepository";

export class ProductService implements IProductService {
	constructor(private readonly productRepository: IProductRepository) {}

	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Products",
			this.productRepository.allProducts()
		);
	}

	getProductByCategory(req, res) {
		const categoryId = req.params.categoryId;
		return defaultReturnStatement(
			res,
			"Products",
			this.productRepository.allProducts({
				where: { fk_idCategory: categoryId },
			})
		);
	}

	createProduct(req, res) {
		return defaultReturnStatement(
			res,
			"Product Created",
			this.productRepository.newProduct({ ...req.body })
		);
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
			const [updatedCount] = await this.productRepository.updateProduct(
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
			const deletedCount = await this.productRepository.deleteProduct({
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
