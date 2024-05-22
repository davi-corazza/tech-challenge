import { ICategoryRepository } from "@ports/out/v1/ICategoryRepository";
import { CategoryEntitie } from "@database/v1/category/categoryEntitie";

export class CategoryRepository implements ICategoryRepository {
	allCategories(): Promise<CategoryEntitie[]> {
		return CategoryEntitie.findAll();
	}

	newCategory(values: any): Promise<CategoryEntitie> {
		return CategoryEntitie.create(values);
	}
}
