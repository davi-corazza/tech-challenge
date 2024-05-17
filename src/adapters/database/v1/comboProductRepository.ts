import { ForeignKey, NonAttribute } from "sequelize";
import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { ProductRepository } from "./productRepository";
import { ComboRepository } from "./comboRepository";

@Table({
	timestamps: true,
	tableName: "combo_product",
	modelName: "ComboProduct",
})
export class ComboProductRepository extends Model {
	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCombo: ForeignKey<ComboRepository["id"]>;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idProduct: ForeignKey<ProductRepository["id"]>;

	@HasMany(() => ProductRepository, "id")
	declare product?: NonAttribute<ProductRepository[]>;

	@HasMany(() => ComboRepository, "id")
	declare combo?: NonAttribute<ComboRepository[]>;
}
