import { Table, Column, DataType, Model } from "sequelize-typescript";
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
}
