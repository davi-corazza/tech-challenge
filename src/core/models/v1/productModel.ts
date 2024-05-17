import { Op } from "sequelize";
import { ProductRepository } from "../../../adapters/database/v1/productRepository";
import { IngredientRepository } from "../../../adapters/database/v1/ingredientRepository";
import { ProductIngredientRepository } from "../../../adapters/database/v1/productIngredientRepository";

export default class Product {
	public static allProducts(params?: any): Promise<ProductRepository[]> {
		return ProductRepository.findAll(params);
	}

	public static newProduct(values: any): Promise<ProductRepository> {
		return ProductRepository.create(values);
	}

	public static updateProduct(
		values: any,
		params: any
	): Promise<[affectedCount: number, affectedRows: ProductRepository[]]> {
		return ProductRepository.update(values, params);
	}

	public static deleteProduct(params: any): Promise<number> {
		return ProductRepository.destroy(params);
	}

	public static newIngredientAssociation(
		values: any
	): Promise<ProductIngredientRepository> {
		return ProductIngredientRepository.create(values);
	}

	public static ingredientsOfCombo(
		id: string
	): Promise<ProductIngredientRepository[]> {
		return ProductIngredientRepository.findAll({
			attributes: [],
			include: [
				{
					model: IngredientRepository,
					on: {
						"$ingredient.id$": {
							[Op.col]: "ProductIngredient.fk_idIngredient",
						},
					},
				},
			],
			where: { fk_idProduct: id },
		});
	}
}
