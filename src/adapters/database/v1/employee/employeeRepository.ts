import { IEmployeeRepository } from "@ports/out/v1/IEmployeeRepository";
import { EmployeeEntitie } from "@database/v1/employee/employeeEntitie";

export class EmployeeRepository implements IEmployeeRepository {
	allEmployees(): Promise<EmployeeEntitie[]> {
		return EmployeeEntitie.findAll();
	}

	newEmployee(values: any): Promise<EmployeeEntitie> {
		return EmployeeEntitie.create(values);
	}

	findEmployee(cpf: string): Promise<EmployeeEntitie> {
		return EmployeeEntitie.findOne({ where: { cpf } });
	}

	updateEmployee(id: number, values: any): Promise<[affectedCount: number]> {
		return EmployeeEntitie.update(values, { where: { id } });
	}

	deleteEmployee(id: number): Promise<number> {
		return EmployeeEntitie.destroy({ where: { id } });
	}
}
