import { ForeignKey, NonAttribute } from "sequelize";
import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { ProductRepository } from "./productRepository";
import { OrderRepository } from "./orderRepository";

@Table({
	timestamps: true,
	tableName: "order_product",
	modelName: "OrderProduct",
})
export class OrderProductRepository extends Model {
	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idOrder: ForeignKey<OrderRepository["id"]>;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idProduct: ForeignKey<ProductRepository["id"]>;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	observation: string;

	@HasMany(() => ProductRepository, "id")
	declare product?: NonAttribute<ProductRepository[]>;

	@HasMany(() => OrderRepository, "id")
	declare combo?: NonAttribute<OrderRepository[]>;
}
