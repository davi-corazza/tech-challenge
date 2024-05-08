import { Table, Column, DataType, Model } from "sequelize-typescript";
import Combo from "../../../core/models/v1/comboModel";

@Table({
	timestamps: true,
	tableName: "combo",
	modelName: "Combo",
})
export class ComboRepository extends Model implements Combo {
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

    })
    declare discount: number;

}