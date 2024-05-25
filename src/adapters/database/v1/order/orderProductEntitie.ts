import { ForeignKey, NonAttribute } from "sequelize";
import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { OrderEntitie } from "./orderEntitie";
import { ProductEntitie } from "../product/productEntitie";
import { ComboEntitie } from "../combo/comboEntitie";
@Table({
	timestamps: true,
	tableName: "order_product",
	modelName: "OrderProduct",
})
export class OrderProductEntitie extends Model {
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	observation: string;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idOrder: ForeignKey<OrderEntitie["id"]>;

	@Column({
		type: DataType.INTEGER,
		allowNull: true,
	})
	declare fk_idCombo: ForeignKey<ComboEntitie["id"]>;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idProduct: ForeignKey<ProductEntitie["id"]>;

	@HasMany(() => OrderEntitie, {foreignKey: 'fk_idOrder'})
  	declare order?: NonAttribute<OrderEntitie[]>;

	@HasMany(() => ProductEntitie, {foreignKey: 'fk_idProduct'})
  	declare product?: NonAttribute<ProductEntitie[]>;
	
}
