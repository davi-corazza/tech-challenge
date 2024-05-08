import { Table, Column, DataType, Model } from "sequelize-typescript";
import Product from "../../../core/models/v1/productModel";
import { ForeignKey } from "sequelize";
import Category from "src/core/models/v1/categoryModel";

@Table({
	timestamps: true,
	tableName: "product",
	modelName: "Product",
})
export class ProductRepository extends Model implements Product {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCategory: ForeignKey<Category["id"]>;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	name: string;

	@Column({
		type: DataType.FLOAT,
		allowNull: false,
	})
	minValue: number;
}
