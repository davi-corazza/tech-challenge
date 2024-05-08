import { Table, Column, DataType, Model } from "sequelize-typescript";
import Ingredient from "../../../core/models/v1/ingredientModel";

@Table({
	timestamps: true,
	tableName: "ingredient",
	modelName: "Ingredient",
})
export class IngredientRepository extends Model implements Ingredient {
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
        type: DataType.FLOAT,
        allowNull: false,
    })
    declare price: number;

    @Column({
        type: DataType.STRING,
    })
    declare description: string;

}