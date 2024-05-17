import { ForeignKey, NonAttribute } from "sequelize";
import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { ProductRepository } from "./productRepository";
import { IngredientRepository } from "./ingredientRepository";

@Table({
	timestamps: true,
	tableName: "product_ingredient",
	modelName: "ProductIngredient",
})
export class ProductIngredientRepository extends Model {
	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idProduct: ForeignKey<ProductRepository["id"]>;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idIngredient: ForeignKey<IngredientRepository["id"]>;

	@HasMany(() => ProductRepository, "id")
	declare product?: NonAttribute<ProductRepository[]>;

	@HasMany(() => IngredientRepository, "id")
	declare ingredient?: NonAttribute<IngredientRepository[]>;
}
