import { ProductUseCase } from "@usecases/ProductUseCase";
import { defaultReturnStatement } from "@utils";

export class ProductController {
	constructor(private productUseCase: ProductUseCase) {}

	async getAll(req, res) {
		try {
			const products = await this.productUseCase.getAll();
			defaultReturnStatement(res, "Products", Promise.resolve(products));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async getProductByCategory(req, res) {
		try {
			const categoryId = req.params.categoryId;
			const products = await this.productUseCase.getProductByCategory(categoryId);
			defaultReturnStatement(res, "Products", Promise.resolve(products));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async createProduct(req, res) {
		try {
			const product = await this.productUseCase.createProduct(req.body);
			defaultReturnStatement(res, "Product Created", Promise.resolve(product));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async updateProduct(req, res) {
		try {
			const result = await this.productUseCase.updateProduct(req.body);
			defaultReturnStatement(res, "Product updated successfully", Promise.resolve(result));
		} catch (err) {
			console.error(err);
			res.status(err.message === "Product not found" ? 404 : 500).json({ status: err.message === "Product not found" ? 404 : 500, error: err });
		}
	}

	async deleteProduct(req, res) {
		try {
			const deletedCount = await this.productUseCase.deleteProduct(req.params.id);
			const responseMessage = deletedCount === 1 ? "Product deleted successfully" : "Product not found";
			defaultReturnStatement(res, responseMessage, Promise.resolve(deletedCount));
		} catch (err) {
			console.error(err);
			res.status(err.message === "Product not found" ? 404 : 500).json({ status: err.message === "Product not found" ? 404 : 500, error: err });
		}
	}
}
