export interface IIngredientService {
	getAll(req, res): Promise<void>;

	createIngredient(req, res): Promise<void>;
}
