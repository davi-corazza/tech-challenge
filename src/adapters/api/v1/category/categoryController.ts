import { ICategoryService } from "@ports/in/v1/ICategoryService";

export class CategoryController {
	constructor(private categoryService: ICategoryService) {}

	getAll(req, res) {
		this.categoryService.getAll(req, res);
	}

	createCategory(req, res) {
		this.categoryService.createCategory(req, res);
	}
}
