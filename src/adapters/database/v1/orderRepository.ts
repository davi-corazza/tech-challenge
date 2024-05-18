import { ForeignKey } from "sequelize";
import { Table, Column, DataType, Model } from "sequelize-typescript";
import { CostumerRepository } from "./costumerRepository";

@Table({
	timestamps: true,
	tableName: "order",
	modelName: "Order",
})
export class OrderRepository extends Model {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCostumer: ForeignKey<CostumerRepository["id"]>;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	status: string;

	@Column({
		type: DataType.FLOAT,
		allowNull: false,
	})
	price: string;
}
