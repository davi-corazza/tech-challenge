import { Table, Column, DataType, Model } from "sequelize-typescript";

@Table({
	timestamps: true,
	tableName: "ingredient",
	modelName: "Ingredient",
})
export class IngredientRepository extends Model {
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
	declare name: string;

	@Column({
		type: DataType.STRING,
	})
	declare description: string;
}
