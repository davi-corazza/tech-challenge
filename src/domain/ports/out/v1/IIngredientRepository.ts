import { Ingredient } from "@models/v1/Ingredient";

export interface IIngredientRepository {
	allIngredients(): Promise<Ingredient[]>;

	newIngredient(ingredient: Ingredient): Promise<Ingredient>;
}
