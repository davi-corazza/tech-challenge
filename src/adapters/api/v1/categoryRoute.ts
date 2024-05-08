import { Router } from "express";
import CategoryService from "../../../core/services/v1/categoryService";

export const categoryRoute = Router();

const categoryService = new CategoryService();

categoryService.initModel();

categoryRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Category']
	categoryService.getAll(req, res);
});

categoryRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Category']
	categoryService.createCategory(req, res);
});

// categoryRoute.put("/update/:id", userController.update());
// categoryRoute.delete("/delete/:id", userController.delete());
// categoryRoute.get("/index/:id", userController.index());
// categoryRoute.post("/verifica", userController.verificaCampo());

export default { routes: categoryRoute };
