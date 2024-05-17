import { Router } from "express";
import CategoryService from "../../../core/services/v1/categoryService";

export const categoryRoute = Router();

const categoryService = new CategoryService();

categoryRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Category']
	/* #swagger.responses[200] = {
            description: 'Return all categories',
            schema: { $ref: '#/definitions/Category' }
    } */
	categoryService.getAll(req, res);
});

categoryRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Category']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/Category' }
                }
            }
        }
    */
	categoryService.createCategory(req, res);
});

export default { routes: categoryRoute };
