import { Router } from "express";
import ProductService from "../../../core/services/v1/productService";

export const productRoute = Router();

const productService = new ProductService();

productRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Product']
	/* #swagger.responses[200] = {
            description: 'Return all products',
            schema: { $ref: '#/definitions/Product' }
    } */
	productService.getAll(req, res);
});

productRoute.post("/create", (req, res) => {
	// #swagger.tags = ['Product']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/AddProduct' }
                }
            }
        }
    */
	productService.createProduct(req, res);
});

productRoute.delete("/delete/:id", (req, res) => {
	// #swagger.tags = ['Product']
	productService.deleteProduct(req, res);
});

productRoute.put("/update/:id", (req, res) => {
	// #swagger.tags = ['Product']
	productService.updateProduct(req, res);
});

// productRoute.put("/update/:id", userController.update());
// productRoute.delete("/delete/:id", userController.delete());
// productRoute.get("/index/:id", userController.index());
// productRoute.post("/verifica", userController.verificaCampo());

productRoute.get("/bycategory/:categoryId", (req, res) => {
	// #swagger.tags = ['Product']
	productService.getProductByCategory(req, res);
});

productRoute.post("/association/create", (req, res) => {
	// #swagger.tags = ['Product']
	productService.createProductIngredientAssociation(req, res);
});

productRoute.get("/:id/ingredients", (req, res) => {
	// #swagger.tags = ['Product']
	productService.getProductIngredients(req, res);
});


export default { routes: productRoute };
