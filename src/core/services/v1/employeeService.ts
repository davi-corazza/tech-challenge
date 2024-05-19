import Employee from "../../../core/models/v1/employeeModel";
import { defaultReturnStatement } from "../../../core/utils/serviceUtils";

export default class EmployeeService {
	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Employees",
			Employee.allEmployees()
		);
	}

	createEmployee(req, res) {
		return defaultReturnStatement(
			res,
			"Employee Created",
			Employee.newEmployee({ ...req.body })
		);
	}

	findEmployee(req, res) {
		const { cpf }  = req.params;
		return defaultReturnStatement(
			res,
			"Employee Found",
			Employee.findEmployee(cpf)
		);
	}

	deleteEmployee(req, res) {
		const { id } = req.params;
		return defaultReturnStatement(
			res,
			"Employee Deleted",
			Employee.deleteEmployee(id)
		);
	}
}
