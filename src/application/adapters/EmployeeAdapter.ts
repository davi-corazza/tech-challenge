import { IEmployeeGateway } from "@gateways/IEmployeeGateway";
import { Employee } from "@database/EmployeeModel";

export class EmployeeAdapter implements IEmployeeGateway {
	allEmployees(): Promise<Employee[]> {
		return Employee.findAll();
	}

	newEmployee(values: any): Promise<Employee> {
		return Employee.create(values);
	}

	findEmployee(cpf: string): Promise<Employee> {
		return Employee.findOne({ where: { cpf } });
	}

	updateEmployee(id: number, values: any): Promise<[affectedCount: number]> {
		return Employee.update(values, { where: { id } });
	}

	deleteEmployee(id: number): Promise<number> {
		return Employee.destroy({ where: { id } });
	}
}
