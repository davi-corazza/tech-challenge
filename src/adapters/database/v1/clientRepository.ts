import { Table, Column, DataType, Model } from "sequelize-typescript";
import Client from "../../../core/models/v1/clientModel";

@Table({
	timestamps: true,
	tableName: "client",
	modelName: "Client",
})
export class ClientRepository extends Model implements Client {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
	})
	cpf: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	name: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	phoneNumer: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	email: string;
}
