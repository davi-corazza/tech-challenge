import { Router } from "express";
import { CategoryRepository } from "@database/v1/category/categoryRepository";
import { CategoryService } from "@services/v1/categoryService";
import { CategoryController } from "@api/v1/category/categoryController";

export const categoryRoute = Router();

const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

categoryRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Category']
	/* #swagger.responses[200] = {
            description: 'Return all categories',
            schema: { $ref: '#/definitions/Category' }
    } */
	categoryController.getAll(req, res);
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
	categoryController.createCategory(req, res);
});
