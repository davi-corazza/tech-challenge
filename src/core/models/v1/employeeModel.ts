import { EmployeeRepository } from "../../../adapters/database/v1/employeeRepository";

export default class Employee {
	public static allEmployees(): Promise<EmployeeRepository[]> {
		return EmployeeRepository.findAll();
	}

	public static newEmployee(values: any): Promise<EmployeeRepository> {
		return EmployeeRepository.create(values);
	}

	public static findEmployee(cpf: string): Promise<EmployeeRepository> {
		return EmployeeRepository.findOne({ where: { cpf } });
	}

	public static deleteEmployee(id: number): Promise<number> {
		return EmployeeRepository.destroy({ where: { id } });
	}
}
