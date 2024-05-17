import { Router } from "express";
import IngredientService from "../../../core/services/v1/ingredientService";

export const ingredientRoute = Router();

const ingredientService = new IngredientService();

ingredientRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Ingredient']
	/* #swagger.responses[200] = {
            description: 'Return all ingredients',
            schema: { $ref: '#/definitions/Ingredient' }
    } */
	ingredientService.getAll(req, res);
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
	ingredientService.createIngredient(req, res);
});

export default { routes: ingredientRoute };
