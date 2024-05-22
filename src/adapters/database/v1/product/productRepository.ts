import { Op } from "sequelize";
import { ProductEntitie } from "@database/v1/product/productEntitie";
import { IngredientEntitie } from "@database/v1/ingredient/ingredientEntitie";
import { ProductIngredientEntitie } from "@database/v1/product/productIngredientEntitie";
import { IProductRepository } from "@ports/out/v1/IProductRepository";

export class ProductRepository implements IProductRepository {
	allProducts(params?: any): Promise<ProductEntitie[]> {
		return ProductEntitie.findAll(params);
	}

	newProduct(values: any): Promise<ProductEntitie> {
		return ProductEntitie.create(values);
	}

	updateProduct(values: any, params: any): Promise<any> {
		return ProductEntitie.update(values, params);
	}

	deleteProduct(params: any): Promise<number> {
		return ProductEntitie.destroy(params);
	}

	newIngredientAssociation(values: any): Promise<ProductIngredientEntitie> {
		return ProductIngredientEntitie.create(values);
	}

	ingredientsOfProduct(id: string): Promise<ProductIngredientEntitie[]> {
		return ProductIngredientEntitie.findAll({
			attributes: [],
			include: [
				{
					model: IngredientEntitie,
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
