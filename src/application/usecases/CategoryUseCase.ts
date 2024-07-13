import { ICategoryGateway } from "@gateways/ICategoryGateway";
import { Category } from "@entities/Category";

export class CategoryUseCase {
	constructor(private readonly categoryGateway: ICategoryGateway) {}

	async getAll(): Promise<Category[]> {
		return await this.categoryGateway.allCategories();
	}

	async createCategory(data: Category): Promise<Category> {
		return await this.categoryGateway.newCategory(data);
	}
}
