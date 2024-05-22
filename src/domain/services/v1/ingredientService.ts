import { defaultReturnStatement } from "@utils/serviceUtils";
import { IIngredientService } from "@ports/in/v1/IIngredientService";
import { IIngredientRepository } from "@ports/out/v1/IIngredientRepository";

export class IngredientService implements IIngredientService {
	constructor(private readonly ingredientRepository: IIngredientRepository) {}

	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Ingredients",
			this.ingredientRepository.allIngredients()
		);
	}

	createIngredient(req, res) {
		return defaultReturnStatement(
			res,
			"Ingredient Created",
			this.ingredientRepository.newIngredient({ ...req.body })
		);
	}
}
