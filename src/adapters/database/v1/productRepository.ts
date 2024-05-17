import { Table, Column, DataType, Model } from "sequelize-typescript";
import { ForeignKey } from "sequelize";
import { CategoryRepository } from "./categoryRepository";

@Table({
	timestamps: true,
	tableName: "product",
	modelName: "Product",
})
export class ProductRepository extends Model {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCategory: ForeignKey<CategoryRepository["id"]>;

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
