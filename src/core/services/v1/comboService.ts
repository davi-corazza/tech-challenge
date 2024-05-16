import { ComboRepository } from "../../../adapters/database/v1/comboRepository";
import { ComboProductRepository } from "../../../adapters/database/v1/comboProductRepository";
import { ProductRepository } from "../../../adapters/database/v1/productRepository";
import { Op } from "sequelize";
export default class ComboService {
	getAll(req, res) {
		return ComboRepository.findAll()
			.then((combo) => {
				res.json({
					status: 200,
					Combo: combo,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}

	async createCombo(req, res) {
		const { name, discount } = req.body;
		return await ComboRepository.create({
			name,
			discount,
		})
			.then((result) => {
				res.json({
					status: 200,
					ComboCreated: result,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}

	async createComboProductAssociation(req, res) {
		const { fk_idCombo, fk_idProduct } = req.body;
		return await ComboProductRepository.create({
			fk_idCombo,
			fk_idProduct,
		})
			.then((result) => {
				res.json({
					status: 200,
					ComboCreated: result,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
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
					Products: this.formatProductResponse(result),
				});
			})
			.catch((err) => {
				console.log(err);
				res.json({
					status: 500,
					err: err,
				});
			});
	}

	formatProductResponse(products) {
		let result = [];
		products.map((product) => {
			result.push(product["product"][0]);
		});

		return result;
	}
}
