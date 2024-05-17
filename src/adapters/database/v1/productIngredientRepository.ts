import { ForeignKey, NonAttribute } from "sequelize";
import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { ProductRepository } from "./productRepository";
import { IngredientRepository } from "./ingredientRepository";

import ProductIngredient from "../../../core/models/v1/productIngredientModel";
import Product from "../../../core/models/v1/productModel";
import Ingredient from "../../../core/models/v1/ingredientModel";

@Table({
	timestamps: true,
	tableName: "product_ingredient",
	modelName: "ProductIngredient",
})
export class ProductIngredientRepository extends Model implements ProductIngredient {
	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idProduct: ForeignKey<ProductRepository["id"]>;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idIngredient: ForeignKey<IngredientRepository["id"]>;

	@HasMany(() => ProductRepository, "id")
	declare product?: NonAttribute<Product[]>;

	@HasMany(() => IngredientRepository, "id")
	declare combo?: NonAttribute<Ingredient[]>;
}
