export interface IEmployeeService {
	getAll(req, res): Promise<void>;

	createEmployee(req, res): Promise<void>;

	findEmployee(req, res): Promise<void>;

	updateEmployee(req, res): Promise<void>;

	deleteEmployee(req, res): Promise<void>;
}
