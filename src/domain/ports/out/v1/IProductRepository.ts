import { Product } from "@models/v1/Product";

export interface IProductRepository {
	allProducts(condition?: any): Promise<Product[]>;

	newProduct(product: Product): Promise<Product>;

	updateProduct(
		product: Product,
		params: any
	): Promise<[affectedCount: number]>;

	deleteProduct(params: any): Promise<number>;

	newIngredientAssociation(values: any): Promise<any>;

	ingredientsOfProduct(id: string): Promise<any[]>;
}
