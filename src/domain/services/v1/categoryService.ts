import { defaultReturnStatement } from "@utils/serviceUtils";
import { ICategoryService } from "@ports/in/v1/ICategoryService";
import { ICategoryRepository } from "@ports/out/v1/ICategoryRepository";

export class CategoryService implements ICategoryService {
	constructor(private readonly categoryRepository: ICategoryRepository) {}

	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Categories",
			this.categoryRepository.allCategories()
		);
	}

	createCategory(req, res) {
		return defaultReturnStatement(
			res,
			"Category Created",
			this.categoryRepository.newCategory({ ...req.body })
		);
	}
}
