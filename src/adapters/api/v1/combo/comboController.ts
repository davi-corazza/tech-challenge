import { IComboService } from "@ports/in/v1/IComboService";

export class ComboController {
	constructor(private comboService: IComboService) {}

	getAll(req, res) {
		this.comboService.getAll(req, res);
	}

	createCombo(req, res) {
		this.comboService.createCombo(req, res);
	}

	createComboProductAssociation(req, res) {
		this.comboService.createComboProductAssociation(req, res);
	}

	getComboProducts(req, res) {
		this.comboService.getComboProducts(req, res);
	}
}
