import { Router } from "express";
import ProductService from "../../../core/services/v1/productService";

export const productRoute = Router();

const productService = new ProductService();

productService.initModel();

productRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Product']
	productService.getAll(req, res);
});

productRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Product']
	productService.createProduct(req, res);
});

// productRoute.put("/update/:id", userController.update());
// productRoute.delete("/delete/:id", userController.delete());
// productRoute.get("/index/:id", userController.index());
// productRoute.post("/verifica", userController.verificaCampo());

export default { routes: productRoute };
