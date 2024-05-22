import { ICostumerService } from "@ports/in/v1/ICostumerService";

export class CostumerController {
	constructor(private costumerService: ICostumerService) {}

	getAll(req, res) {
		this.costumerService.getAll(req, res);
	}

	createCostumer(req, res) {
		this.costumerService.createCostumer(req, res);
	}

	searchCostumer(req, res) {
		this.costumerService.searchCostumer(req, res);
	}

	updateCostumer(req, res) {
		this.costumerService.updateCostumer(req, res);
	}

	deleteCostumer(req, res) {
		this.costumerService.deleteCostumer(req, res);
	}
}
