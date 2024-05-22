import { Router } from "express";
import { ProductRepository } from "@database/v1/product/productRepository";
import { ProductService } from "@services/v1/productService";
import { ProductController } from "@api/v1/product/productController";

export const productRoute = Router();

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

productRoute.get("/all", (req, res) => {
	// #swagger.tags = ['Product']
	/* #swagger.responses[200] = {
            description: 'Return all products',
            schema: { $ref: '#/definitions/Product' }
    } */
	productController.getAll(req, res);
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
	productController.createProduct(req, res);
});

productRoute.delete("/delete/:id", (req, res) => {
	// #swagger.tags = ['Product']
	productController.deleteProduct(req, res);
});

productRoute.put("/update/:id", (req, res) => {
	// #swagger.tags = ['Product']
	productController.updateProduct(req, res);
});

productRoute.get("/bycategory/:categoryId", (req, res) => {
	// #swagger.tags = ['Product']
	productController.getProductByCategory(req, res);
});

productRoute.post("/ingredient/association/create", (req, res) => {
	// #swagger.tags = ['Product']
	// #swagger.tags = ['Product']
	/* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/definitions/AddProductIngredient' }
                }
            }
        }
    */
	productController.createProductIngredientAssociation(req, res);
});

productRoute.get("/:id/ingredients", (req, res) => {
	// #swagger.tags = ['Product']
	productController.getProductIngredients(req, res);
});
