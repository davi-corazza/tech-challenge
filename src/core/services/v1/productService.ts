import { defaultReturnStatement } from "../../../core/utils/serviceUtils";
import { IngredientRepository } from "src/adapters/database/v1/ingredientRepository";
import { ProductRepository } from "../../../adapters/database/v1/productRepository";
import { ProductIngredientRepository } from "../../../adapters/database/v1/productIngredientRepository";
import { Op } from "sequelize";

export default class ProductService {
	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Products",
			ProductRepository.findAll()
		);
	}

	getProductByCategory(req, res) {
		const categoryId = req.params.categoryId;
		return defaultReturnStatement(
			res,
			"Products",
			ProductRepository.findAll({
				where: { fk_idCategory: categoryId },
			})
		);
	}

	createProduct(req, res) {
		return defaultReturnStatement(
			res,
			"ProductCreated",
			ProductRepository.create({ ...req.body })
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

	async createProductIngredientAssociation(req, res) {
		const{fk_idProduct, fk_idIngredient} = req.body;
		return await ProductIngredientRepository.create({
			fk_idIngredient,
			fk_idProduct,
		})
			.then((result) =>{
				res.json({
					status:200,
					ProductCreated: result,
				})
			})
			.catch((err) => {
				res.json({
					status:500,
					err: err,
				})
			})
	}
	getProductIngredient(req,res) {
		const productID = req.params.id;
		return ProductIngredientRepository.findAll({
			attributes: [],
			include: [
				{
					model: IngredientRepository,
					on: {
						"$ingredient.id$": {
							[Op.col]: "ProductIngredient.fk_idIngredient",
						}
					}
				}
			],
			where: { fk_idProduct: productID}
		})
			.then((result) =>{
				res.json({
					status: 200,
					Ingredients: this.formatIngredientResponse(result),
				});
			})
			.catch((err) => {
				console.log(err);
				res.json({
					status:500,
					err: err,
				})
			});
	}

	formatIngredientResponse(ingredient) {
		let result = [];
		ingredient.map((ingredient) => {
			result.push(ingredient["ingredient"][0]);
		});

		return result;
	}
}
