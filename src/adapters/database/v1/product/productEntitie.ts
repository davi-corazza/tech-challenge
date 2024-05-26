import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { ForeignKey } from "sequelize";
import { CategoryEntitie } from "@database/v1/category/categoryEntitie";

@Table({
	timestamps: true,
	tableName: "product",
	modelName: "Product",
})
export class ProductEntitie extends Model {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCategory: ForeignKey<CategoryEntitie["id"]>;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	name: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	description: string;

	@Column({
		type: DataType.FLOAT,
		allowNull: false,
	})
	price: number;

	
}
