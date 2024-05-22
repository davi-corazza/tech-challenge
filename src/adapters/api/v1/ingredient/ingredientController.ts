import { IIngredientService } from "@ports/in/v1/IIngredientService";

export class IngredientController {
	constructor(private ingredientService: IIngredientService) {}

	getAll(req, res) {
		this.ingredientService.getAll(req, res);
	}

	createIngredient(req, res) {
		this.ingredientService.createIngredient(req, res);
	}
}
