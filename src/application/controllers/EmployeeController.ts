import { EmployeeUseCase } from "@usecases/EmployeeUseCase";
import { defaultReturnStatement } from "@utils";

export class EmployeeController {
	constructor(private employeeUseCase: EmployeeUseCase) {}

	async getAll(req, res) {
		try {
			const employees = await this.employeeUseCase.getAll();
			defaultReturnStatement(res, "Employees", Promise.resolve(employees));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async createEmployee(req, res) {
		try {
			const employee = await this.employeeUseCase.createEmployee(req.body);
			defaultReturnStatement(res, "Employee Created", Promise.resolve(employee));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async findEmployee(req, res) {
		try {
			const employee = await this.employeeUseCase.findEmployee(req.params.cpf);
			defaultReturnStatement(res, "Employee Found", Promise.resolve(employee));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async updateEmployee(req, res) {
		try {
			const employee = await this.employeeUseCase.updateEmployee(req.params.id, req.body);
			defaultReturnStatement(res, "Employee Updated", Promise.resolve(employee));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async deleteEmployee(req, res) {
		try {
			await this.employeeUseCase.deleteEmployee(req.params.id);
			defaultReturnStatement(res, "Employee Deleted", Promise.resolve());
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}
}
