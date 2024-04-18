import { Table, Column, DataType, Model } from "sequelize-typescript";
import Order from "../../../core/models/v1/orderModel";

@Table({
	timestamps: true,
	tableName: "orders",
	modelName: "Order",
})
export class OrderRepository extends Model implements Order {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	title: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	type: string;
}
