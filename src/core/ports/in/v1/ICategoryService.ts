export interface ICategoryService {
	getAll(req, res): Promise<void>;

	createCategory(req, res): Promise<void>;
}
