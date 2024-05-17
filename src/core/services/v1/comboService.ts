import {
	defaultReturnStatement,
	formatObjectResponse,
} from "../../../core/utils/serviceUtils";
import { ComboRepository } from "../../../adapters/database/v1/comboRepository";
import { ComboProductRepository } from "../../../adapters/database/v1/comboProductRepository";
import { ProductRepository } from "../../../adapters/database/v1/productRepository";
import { Op } from "sequelize";

export default class ComboService {
	getAll(req, res) {
		return defaultReturnStatement(res, "Combos", ComboRepository.findAll());
	}

	createCombo(req, res) {
		const { name, discount } = req.body;
		return defaultReturnStatement(
			res,
			"ComboCreated",
			ComboRepository.create({
				name,
				discount,
			})
		);
	}

	createComboProductAssociation(req, res) {
		const { fk_idCombo, fk_idProduct } = req.body;
		return defaultReturnStatement(
			res,
			"AssociationCreated",
			ComboProductRepository.create({
				fk_idCombo,
				fk_idProduct,
			})
		);
	}

	getComboProducts(req, res) {
		const comboID = req.params.id;
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
			where: { fk_idCombo: comboID },
		})
			.then((result) => {
				res.json({
					status: 200,
					Products: formatObjectResponse(result, "product"),
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}
}
