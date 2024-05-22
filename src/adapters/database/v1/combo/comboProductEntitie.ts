import { ForeignKey, NonAttribute } from "sequelize";
import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { ProductEntitie } from "@database/v1/product/productEntitie";
import { ComboEntitie } from "@database/v1/combo/comboEntitie";

@Table({
	timestamps: true,
	tableName: "combo_product",
	modelName: "ComboProduct",
})
export class ComboProductEntitie extends Model {
	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCombo: ForeignKey<ComboEntitie["id"]>;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idProduct: ForeignKey<ProductEntitie["id"]>;

	@HasMany(() => ProductEntitie, "id")
	declare product?: NonAttribute<ProductEntitie[]>;

	@HasMany(() => ComboEntitie, "id")
	declare combo?: NonAttribute<ComboEntitie[]>;
}
