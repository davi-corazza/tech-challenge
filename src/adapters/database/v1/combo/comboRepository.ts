import { Op } from "sequelize";
import { ComboEntitie } from "@database/v1/combo/comboEntitie";
import { ProductEntitie } from "@database/v1/product/productEntitie";
import { ComboProductEntitie } from "@database/v1/combo/comboProductEntitie";
import { IComboRepository } from "@ports/out/v1/IComboRepository";

export class ComboRepository implements IComboRepository {
	allCombos(): Promise<ComboEntitie[]> {
		return ComboEntitie.findAll();
	}

	newCombo(values: any): Promise<ComboEntitie> {
		return ComboEntitie.create(values);
	}

	newProductAssociation(values: any): Promise<ComboProductEntitie> {
		return ComboProductEntitie.create(values);
	}

	productsOfCombo(id: string): Promise<ComboProductEntitie[]> {
		return ComboProductEntitie.findAll({
			attributes: [],
			include: [
				{
					model: ProductEntitie,
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
