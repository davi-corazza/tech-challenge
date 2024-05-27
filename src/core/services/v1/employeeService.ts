import { IEmployeeService } from "@ports/in/v1/IEmployeeService";
import { defaultReturnStatement } from "@utils/serviceUtils";
import { IEmployeeRepository } from "@ports/out/v1/IEmployeeRepository";

export class EmployeeService implements IEmployeeService {
	constructor(private readonly employeeRepository: IEmployeeRepository) {}

	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Employees",
			this.employeeRepository.allEmployees()
		);
	}

	createEmployee(req, res) {
		return defaultReturnStatement(
			res,
			"Employee Created",
			this.employeeRepository.newEmployee({ ...req.body })
		);
	}

	findEmployee(req, res) {
		const { cpf } = req.params;
		return defaultReturnStatement(
			res,
			"Employee Found",
			this.employeeRepository.findEmployee(cpf)
		);
	}

	updateEmployee(req, res) {
		const { id } = req.params;
		return defaultReturnStatement(
			res,
			"Employee Updated",
			this.employeeRepository.updateEmployee(id, { ...req.body })
		);
	}

	deleteEmployee(req, res) {
		const { id } = req.params;
		return defaultReturnStatement(
			res,
			"Employee Deleted",
			this.employeeRepository.deleteEmployee(id)
		);
	}
}
