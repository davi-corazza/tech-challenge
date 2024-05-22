import { Category } from "@models/v1/Category";

export interface ICategoryRepository {
	allCategories(): Promise<Category[]>;

	newCategory(category: Category): Promise<Category>;
}
