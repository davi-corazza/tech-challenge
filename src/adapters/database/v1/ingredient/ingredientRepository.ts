import { IIngredientRepository } from "@ports/out/v1/IIngredientRepository";
import { IngredientEntitie } from "@database/v1/ingredient/ingredientEntitie";

export class IngredientRepository implements IIngredientRepository {
	allIngredients(): Promise<IngredientEntitie[]> {
		return IngredientEntitie.findAll();
	}

	newIngredient(values: any): Promise<IngredientEntitie> {
		return IngredientEntitie.create(values);
	}
}
