import { CategoryUseCase } from "@usecases/CategoryUseCase";
import { defaultReturnStatement } from "@utils";

export class CategoryController {
	constructor(private categoryUseCase: CategoryUseCase) {}

	async getAll(req, res) {
		try {
			const cateogries = await this.categoryUseCase.getAll();
			defaultReturnStatement(res, "Categories", Promise.resolve(cateogries));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async createCategory(req, res) {
		try {
			const category = await this.categoryUseCase.createCategory(req.body);
			defaultReturnStatement(res, "Category Created", Promise.resolve(category));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}
}
