import { IngredientRepository } from "../../../adapters/database/v1/ingredientRepository";

export default class Ingredient {
	public static allIngredients(): Promise<IngredientRepository[]> {
		return IngredientRepository.findAll();
	}

	public static newIngredient(values: any): Promise<IngredientRepository> {
		return IngredientRepository.create(values);
	}
}
