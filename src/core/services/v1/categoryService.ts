import { defaultReturnStatement } from "../../../core/utils/serviceUtils";
import Category from "../../../core/models/v1/categoryModel";

export default class CategoryService {
	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Categories",
			Category.allCategories()
		);
	}

	createCategory(req, res) {
		return defaultReturnStatement(
			res,
			"Category Created",
			Category.newCategory({ ...req.body })
		);
	}
}
