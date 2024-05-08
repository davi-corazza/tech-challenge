import connection from "../../../config/connectionFactory";
import { CategoryRepository } from "../../../adapters/database/v1/categoryRepository";

export default class CategoryService {
	initModel() {
		connection.database.addModels([CategoryRepository]);
	}

	getAll(req, res) {
		return CategoryRepository.findAll()
			.then((categories) => {
				res.json({
					status: 200,
					Categories: categories,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}

	async createCategory(req, res) {
		const { name } = req.body;
		return await CategoryRepository.create({ name })
			.then((result) => {
				res.json({
					status: 200,
					CategoryCreated: result,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}
}
