import { defaultReturnStatement } from "../../../core/utils/serviceUtils";
import { IngredientRepository } from "../../../adapters/database/v1/ingredientRepository";

export default class IngredientService {
	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Ingredients",
			IngredientRepository.findAll()
		);
	}

	createIngredient(req, res) {
		const { name, price, description } = req.body;
		return defaultReturnStatement(
			res,
			"IngredientCreated",
			IngredientRepository.create({
				name,
				price,
				description,
			})
		);
	}
}
