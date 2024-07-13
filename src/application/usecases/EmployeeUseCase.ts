import { IEmployeeGateway } from "@gateways/IEmployeeGateway";
import { Employee } from "@entities/Employee";

export class EmployeeUseCase {
	constructor(private readonly employeeGateway: IEmployeeGateway) {}

	async getAll(): Promise<Employee[]> {
		return await this.employeeGateway.allEmployees();
	}

	async createEmployee(data: any): Promise<Employee> {
		return await this.employeeGateway.newEmployee({ ...data });
	}

	async findEmployee(cpf: string): Promise<Employee> {
		return await this.employeeGateway.findEmployee(cpf);
	}

	async updateEmployee(id: number, data: any): Promise<[affectedCount: number]> {
		return await this.employeeGateway.updateEmployee(id, { ...data });
	}

	async deleteEmployee(id: number): Promise<number> {
		return await this.employeeGateway.deleteEmployee(id);
	}
}
