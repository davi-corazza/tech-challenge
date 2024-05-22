import { Router } from "express";
import { IngredientRepository } from "@database/v1/ingredient/ingredientRepository";
import { IngredientService } from "@services/v1/ingredientService";
import { IngredientController } from "@api/v1/ingredient/ingredientController";

export const ingredientRoute = Router();

const ingredientRepository = new IngredientRepository();
const ingredientService = new IngredientService(ingredientRepository);
const ingredientController = new IngredientController(ingredientService);

ingredientRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Ingredient']
	/* #swagger.responses[200] = {
            description: 'Return all ingredients',
            schema: { $ref: '#/definitions/Ingredient' }
    } */
	ingredientController.getAll(req, res);
});

ingredientRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Ingredient']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/Ingredient' }
                }
            }
        }
    */
	ingredientController.createIngredient(req, res);
});
