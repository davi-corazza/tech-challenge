import { ForeignKey } from "sequelize";
import { Table, Column, DataType, Model } from "sequelize-typescript";
import { CustomerEntitie } from "@database/v1/customer/customerEntitie";

@Table({
	timestamps: true,
	tableName: "order",
	modelName: "Order",
})
export class OrderEntitie extends Model {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCustomer: ForeignKey<CustomerEntitie["id"]>;

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
