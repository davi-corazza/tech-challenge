import { Table, Column, DataType, Model } from "sequelize-typescript";
import Employee from "../../../core/models/v1/employeeModel";

@Table({
	timestamps: true,
	tableName: "employee",
	modelName: "employee",
})
export class EmployeeRepository extends Model implements Employee {
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
		allowNull: false,
	})
	username: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	password: string;
}
