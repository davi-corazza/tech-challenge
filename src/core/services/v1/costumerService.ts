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

	searchCostumer(req, res) {
		return defaultReturnStatement(
			res,
			"Costumer Found",
			Costumer.searchCostumer(req.params.cpf)
		);
	}

	updateCostumer(req, res) {
		return defaultReturnStatement(
			res,
			"Costumer Updated",
			Costumer.updateCostumer(req.params.id, { ...req.body })
		);
	}

	deleteCostumer(req, res) {
		return defaultReturnStatement(
			res,
			"Costumer Deleted",
			Costumer.deleteCostumer(req.params.id)
		);
	}
}
