import { IngredientRepository } from "../../../adapters/database/v1/ingredientRepository";

export default class IngredientService {
	getAll(req, res) {
		return IngredientRepository.findAll()
			.then((ingredient) => {
				res.json({
					status: 200,
					Ingredient: ingredient,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}

	async createIngredient(req, res) {
		const { name, price, description } = req.body;
		return await IngredientRepository.create({
			name,
			price,
			description,
		})
			.then((result) => {
				res.json({
					status: 200,
					IngredientCreated: result,
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
