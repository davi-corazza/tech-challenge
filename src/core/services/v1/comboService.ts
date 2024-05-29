import {
	defaultReturnStatement,
	formatObjectResponse,
} from "@utils/serviceUtils";
import { IComboService } from "@ports/in/v1/IComboService";
import { IComboRepository } from "@ports/out/v1/IComboRepository";

export class ComboService implements IComboService {
	constructor(private readonly comboRepository: IComboRepository) {}

	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Combos",
			this.comboRepository.allCombos()
		);
	}

	getComboById(req, res) {
		const comboId = req.params.Id;
		console.log(comboId);
		return defaultReturnStatement(
			res,
			"Orders",
			this.comboRepository.getComboById({
				where: { id: comboId },
			})
		);
	}

	createCombo(req, res) {
		return defaultReturnStatement(
			res,
			"Combo Created",
			this.comboRepository.newCombo({ ...req.body })
		);
	}

	createComboProductAssociation(req, res) {
		return defaultReturnStatement(
			res,
			"Product Association Created",
			this.comboRepository.newProductAssociation({ ...req.body })
		);
	}

	getComboProducts(req, res) {
		const comboID = req.params.id;
		return this.comboRepository
			.productsOfCombo(comboID)
			.then((result) => {
				res.json({
					status: 200,
					Products: formatObjectResponse(result, "product"),
				});
			})
			.catch((err) => {
				console.error(err);
				res.json({
					status: 500,
					err: err,
				});
			});
	}
}
