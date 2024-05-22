import { ForeignKey, NonAttribute } from "sequelize";
import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { ProductEntitie } from "@database/v1/product/productEntitie";
import { OrderEntitie } from "@database/v1/order/orderEntitie";

@Table({
	timestamps: true,
	tableName: "order_product",
	modelName: "OrderProduct",
})
export class OrderProductEntitie extends Model {
	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idOrder: ForeignKey<OrderEntitie["id"]>;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idProduct: ForeignKey<ProductEntitie["id"]>;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	observation: string;

	@HasMany(() => ProductEntitie, "id")
	declare product?: NonAttribute<ProductEntitie[]>;

	@HasMany(() => OrderEntitie, "id")
	declare combo?: NonAttribute<OrderEntitie[]>;
}
