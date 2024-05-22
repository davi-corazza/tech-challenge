export interface ICostumerService {
	getAll(req, res): Promise<void>;

	createCostumer(req, res): Promise<void>;

	searchCostumer(req, res): Promise<void>;

	updateCostumer(req, res): Promise<void>;

	deleteCostumer(req, res): Promise<void>;
}
