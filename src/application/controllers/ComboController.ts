import { ComboUseCase } from "@usecases/ComboUseCase";
import { defaultReturnStatement, formatObjectResponse } from "@utils";

export class ComboController {
	constructor(private comboUseCase: ComboUseCase) {}

	async getAll(req, res) {
		try {
			const combos = await this.comboUseCase.getAll();
			defaultReturnStatement(res, "Combos", Promise.resolve(combos));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async getComboById(req, res) {
		try {
			const comboId = req.params.Id;
			const combo = await this.comboUseCase.getComboById(comboId);
			defaultReturnStatement(res, "Orders", Promise.resolve(combo));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async createCombo(req, res) {
		try {
			const combo = await this.comboUseCase.createCombo(req.body);
			defaultReturnStatement(res, "Combo Created", Promise.resolve(combo));
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async createComboProductAssociation(req, res) {
		try {
			await this.comboUseCase.createComboProductAssociation(req.body);
			defaultReturnStatement(
				res,
				"Product Association Created",
				Promise.resolve()
			);
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}

	async getComboProducts(req, res) {
		try {
			const comboID = req.params.id;
			const products = await this.comboUseCase.getComboProducts(comboID);
			res.json({
				status: 200,
				Products: formatObjectResponse(products, "product"),
			});
		} catch (err) {
			console.error(err);
			res.status(500).json({ status: 500, error: err });
		}
	}
}
