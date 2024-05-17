import {
	defaultReturnStatement,
	formatObjectResponse,
} from "../../../core/utils/serviceUtils";
import Product from "../../../core/models/v1/productModel";

export default class ProductService {
	getAll(req, res) {
		return defaultReturnStatement(res, "Products", Product.allProducts());
	}

	getProductByCategory(req, res) {
		const categoryId = req.params.categoryId;
		return defaultReturnStatement(
			res,
			"Products",
			Product.allProducts({
				where: { fk_idCategory: categoryId },
			})
		);
	}

	createProduct(req, res) {
		return defaultReturnStatement(
			res,
			"Product Created",
			Product.newProduct({ ...req.body })
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
			const [updatedCount] = await Product.updateProduct(
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
			const deletedCount = await Product.deleteProduct({
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

	createProductIngredientAssociation(req, res) {
		return defaultReturnStatement(
			res,
			"Ingredient Association Created",
			Product.newIngredientAssociation({ ...req.body })
		);
	}

	getProductIngredients(req, res) {
		const productID = req.params.id;
		return Product.ingredientsOfCombo(productID)
			.then((result) => {
				res.json({
					status: 200,
					Ingredients: formatObjectResponse(result, "ingredient"),
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
