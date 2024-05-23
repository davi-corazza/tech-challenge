import { ProductEntitie } from "@database/v1/product/productEntitie";
import { IProductRepository } from "@ports/out/v1/IProductRepository";

export class ProductRepository implements IProductRepository {
	allProducts(params?: any): Promise<ProductEntitie[]> {
		return ProductEntitie.findAll(params);
	}

	newProduct(values: any): Promise<ProductEntitie> {
		return ProductEntitie.create(values);
	}

	updateProduct(values: any, params: any): Promise<any> {
		return ProductEntitie.update(values, params);
	}

	deleteProduct(params: any): Promise<number> {
		return ProductEntitie.destroy(params);
	}
}
