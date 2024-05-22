import { Employee } from "@models/v1/Employee";

export interface IEmployeeRepository {
	allEmployees(): Promise<Employee[]>;

	newEmployee(employee: Employee): Promise<Employee>;

	findEmployee(cpf: string): Promise<Employee>;

	updateEmployee(
		id: number,
		employee: Employee
	): Promise<[affectedCount: number]>;

	deleteEmployee(id: number): Promise<number>;
}
