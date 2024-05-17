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
		return defaultReturnStatement(
			res,
			"Ingredient Created",
			IngredientRepository.create({ ...req.body })
		);
	}
}
