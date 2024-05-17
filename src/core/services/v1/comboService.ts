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
		return defaultReturnStatement(
			res,
			"Combo Created",
			ComboRepository.create({ ...req.body })
		);
	}

	createComboProductAssociation(req, res) {
		return defaultReturnStatement(
			res,
			"Product Association Created",
			ComboProductRepository.create({ ...req.body })
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
