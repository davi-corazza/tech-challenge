export interface ICustomerService {
	getAll(req, res): Promise<void>;

	createCustomer(req, res): Promise<void>;

	searchCustomer(req, res): Promise<void>;

	updateCustomer(req, res): Promise<void>;

	deleteCustomer(req, res): Promise<void>;
}
