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
		const { cpf, name, phoneNumer, email } = req.body;
		return defaultReturnStatement(
			res,
			"ClientCreated",
			ClientRepository.create({
				cpf,
				name,
				phoneNumer,
				email,
			})
		);
	}
}
