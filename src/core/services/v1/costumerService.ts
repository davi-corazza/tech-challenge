import Costumer from "../../../core/models/v1/costumerModel";
import { defaultReturnStatement } from "../../../core/utils/serviceUtils";

export default class CostumerService {
	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Costumers",
			Costumer.allCostumers()
		);
	}

	createCostumer(req, res) {
		return defaultReturnStatement(
			res,
			"Costumer Created",
			Costumer.newCostumer({ ...req.body })
		);
	}
}
