import {
	defaultReturnStatement,
	formatObjectResponse,
} from "../../../core/utils/serviceUtils";
import Combo from "../../../core/models/v1/comboModel";

export default class ComboService {
	getAll(req, res) {
		return defaultReturnStatement(res, "Combos", Combo.allCombos());
	}

	createCombo(req, res) {
		return defaultReturnStatement(
			res,
			"Combo Created",
			Combo.newCombo({ ...req.body })
		);
	}

	createComboProductAssociation(req, res) {
		return defaultReturnStatement(
			res,
			"Product Association Created",
			Combo.newProductAssociation({ ...req.body })
		);
	}

	getComboProducts(req, res) {
		const comboID = req.params.id;
		return Combo.productsOfCombo(comboID)
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
