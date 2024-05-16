import { defaultReturnStatement } from "../../../core/utils/serviceUtils";
import { CategoryRepository } from "../../../adapters/database/v1/categoryRepository";

export default class CategoryService {
	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Categories",
			CategoryRepository.findAll()
		);
	}

	createCategory(req, res) {
		const { name } = req.body;
		return defaultReturnStatement(
			res,
			"CategoryCreated",
			CategoryRepository.create({ name })
		);
	}
}
