import { IProductService } from "@ports/in/v1/IProductService";

export class ProductController {
	constructor(private productService: IProductService) {}

	getAll(req, res) {
		this.productService.getAll(req, res);
	}

	getProductByCategory(req, res) {
		this.productService.getProductByCategory(req, res);
	}

	createProduct(req, res) {
		this.productService.createProduct(req, res);
	}

	updateProduct(req, res) {
		this.productService.updateProduct(req, res);
	}

	deleteProduct(req, res) {
		this.productService.deleteProduct(req, res);
	}

	createProductIngredientAssociation(req, res) {
		this.productService.createProductIngredientAssociation(req, res);
	}

	getProductIngredients(req, res) {
		this.productService.getProductIngredients(req, res);
	}
}
