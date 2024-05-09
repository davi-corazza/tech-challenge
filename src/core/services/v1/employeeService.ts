import connection from "../../../config/connectionFactory";
import { EmployeeRepository } from "../../../adapters/database/v1/employeeRepository";

export default class EmployeeService {
	initModel() {
		connection.database.addModels([EmployeeRepository]);
	}

	getAll(req, res) {
		return EmployeeRepository.findAll()
			.then((employees) => {
				res.json({
					status: 200,
					Employees: employees,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}

	async createEmployee(req, res) {
		const { cpf, name, username, password } = req.body;
		return await EmployeeRepository.create({
			cpf,
			name,
			username,
			password,
		})
			.then((result) => {
				res.json({
					status: 200,
					EmployeeCreated: result,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}
}
