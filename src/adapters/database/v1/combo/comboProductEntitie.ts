import { Table, Model } from "sequelize-typescript";

@Table({
	timestamps: true,
	tableName: "combo_product",
	modelName: "ComboProduct",
})
export class ComboProductEntitie extends Model {}
