import { Table, Column, DataType, Model } from "sequelize-typescript";
import Category from "../../../core/models/v1/categoryModel";

@Table({
	timestamps: true,
	tableName: "category",
	modelName: "Category",
})
export class CategoryRepository extends Model implements Category {
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
	name: string;
}
