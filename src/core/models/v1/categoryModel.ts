import { CategoryRepository } from "../../../adapters/database/v1/categoryRepository";

export default class Category {
	public static allCategories(): Promise<CategoryRepository[]> {
		return CategoryRepository.findAll();
	}

	public static newCategory(values: any): Promise<CategoryRepository> {
		return CategoryRepository.create(values);
	}
}
