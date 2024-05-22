import { ICostumerRepository } from "@ports/out/v1/ICostumerRepository";
import { ICostumerService } from "@ports/in/v1/ICostumerService";
import { defaultReturnStatement } from "@utils/serviceUtils";

export class CostumerService implements ICostumerService {
	constructor(private readonly costumerRepository: ICostumerRepository) {}

	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Costumers",
			this.costumerRepository.allCostumers()
		);
	}

	createCostumer(req, res) {
		return defaultReturnStatement(
			res,
			"Costumer Created",
			this.costumerRepository.newCostumer({ ...req.body })
		);
	}

	searchCostumer(req, res) {
		return defaultReturnStatement(
			res,
			"Costumer Found",
			this.costumerRepository.searchCostumer(req.params.cpf)
		);
	}

	updateCostumer(req, res) {
		return defaultReturnStatement(
			res,
			"Costumer Updated",
			this.costumerRepository.updateCostumer(req.params.id, {
				...req.body,
			})
		);
	}

	deleteCostumer(req, res) {
		return defaultReturnStatement(
			res,
			"Costumer Deleted",
			this.costumerRepository.deleteCostumer(req.params.id)
		);
	}
}
