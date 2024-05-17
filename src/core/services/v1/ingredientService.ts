import { defaultReturnStatement } from "../../../core/utils/serviceUtils";
import Ingredient from "../../../core/models/v1/ingredientModel";

export default class IngredientService {
	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Ingredients",
			Ingredient.allIngredients()
		);
	}

	createIngredient(req, res) {
		return defaultReturnStatement(
			res,
			"Ingredient Created",
			Ingredient.newIngredient({ ...req.body })
		);
	}
}
