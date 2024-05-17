import { Op } from "sequelize";
import { ComboRepository } from "../../../adapters/database/v1/comboRepository";
import { ProductRepository } from "../../../adapters/database/v1/productRepository";
import { ComboProductRepository } from "../../../adapters/database/v1/comboProductRepository";

export default class Combo {
	public static allCombos(): Promise<ComboRepository[]> {
		return ComboRepository.findAll();
	}

	public static newCombo(values: any): Promise<ComboRepository> {
		return ComboRepository.create(values);
	}

	public static newProductAssociation(
		values: any
	): Promise<ComboProductRepository> {
		return ComboProductRepository.create(values);
	}

	public static productsOfCombo(
		id: string
	): Promise<ComboProductRepository[]> {
		return ComboProductRepository.findAll({
			attributes: [],
			include: [
				{
					model: ProductRepository,
					on: {
						"$product.id$": {
							[Op.col]: "ComboProduct.fk_idProduct",
						},
					},
				},
			],
			where: { fk_idCombo: id },
		});
	}
}
