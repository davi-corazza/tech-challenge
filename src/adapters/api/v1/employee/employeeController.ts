import { IEmployeeService } from "@ports/in/v1/IEmployeeService";

export class EmployeeController {
	constructor(private employeeService: IEmployeeService) {}

	getAll(req, res) {
		this.employeeService.getAll(req, res);
	}

	createEmployee(req, res) {
		this.employeeService.createEmployee(req, res);
	}

	findEmployee(req, res) {
		this.employeeService.findEmployee(req, res);
	}

	updateEmployee(req, res) {
		this.employeeService.updateEmployee(req, res);
	}

	deleteEmployee(req, res) {
		this.employeeService.deleteEmployee(req, res);
	}
}
