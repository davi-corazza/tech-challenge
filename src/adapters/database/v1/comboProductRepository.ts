import { ForeignKey, NonAttribute } from "sequelize";
import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { ProductRepository } from "./productRepository";
import { ComboRepository } from "./comboRepository";

import ComboProduct from "../../../core/models/v1/comboProductModel";
import Product from "../../../core/models/v1/productModel";
import Combo from "../../../core/models/v1/comboModel";

@Table({
	timestamps: true,
	tableName: "combo_product",
	modelName: "ComboProduct",
})
export class ComboProductRepository extends Model implements ComboProduct {
	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCombo: ForeignKey<ComboRepository["id"]>;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idProduct: ForeignKey<ProductRepository["id"]>;

	@HasMany(() => ProductRepository, "id")
	declare product?: NonAttribute<Product[]>;

	@HasMany(() => ComboRepository, "id")
	declare combo?: NonAttribute<Combo[]>;
}
