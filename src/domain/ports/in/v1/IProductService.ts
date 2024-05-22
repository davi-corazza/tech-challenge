export interface IProductService {
	getAll(req, res): Promise<void>;

	getProductByCategory(req, res): Promise<void>;

	createProduct(req, res): Promise<void>;

	updateProduct(req, res): Promise<void>;

	deleteProduct(req, res): Promise<void>;

	createProductIngredientAssociation(req, res): Promise<void>;

	getProductIngredients(req, res): Promise<void>;
}
