import { defaultReturnStatement } from "../../../core/utils/serviceUtils";
import { ClientRepository } from "../../../adapters/database/v1/clientRepository";

export default class ClientService {
	getAll(req, res) {
		return defaultReturnStatement(
			res,
			"Costumers",
			ClientRepository.findAll()
		);
	}

	createClient(req, res) {
		return defaultReturnStatement(
			res,
			"Costumer Created",
			ClientRepository.create({ ...req.body })
		);
	}
}
