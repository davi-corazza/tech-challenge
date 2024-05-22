import { ForeignKey, NonAttribute } from "sequelize";
import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { ProductEntitie } from "@database/v1/product/productEntitie";
import { IngredientEntitie } from "@database/v1/ingredient/ingredientEntitie";

@Table({
	timestamps: true,
	tableName: "product_ingredient",
	modelName: "ProductIngredient",
})
export class ProductIngredientEntitie extends Model {
	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idProduct: ForeignKey<ProductEntitie["id"]>;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idIngredient: ForeignKey<IngredientEntitie["id"]>;

	@HasMany(() => ProductEntitie, "id")
	declare product?: NonAttribute<ProductEntitie[]>;

	@HasMany(() => IngredientEntitie, "id")
	declare ingredient?: NonAttribute<IngredientEntitie[]>;
}
