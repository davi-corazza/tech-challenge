import connection from "../../../config/connectionFactory";
import { ClientRepository } from "../../../adapters/database/v1/clientRepository";

export default class ClientService {
	initModel() {
		connection.database.addModels([ClientRepository]);
	}

	getAll(req, res) {
		return ClientRepository.findAll()
			.then((clients) => {
				res.json({
					status: 200,
					Clients: clients,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}

	async createClient(req, res) {
		const { cpf, name, phoneNumer, email } = req.body;
		return await ClientRepository.create({
			cpf,
			name,
			phoneNumer,
			email,
		})
			.then((result) => {
				res.json({
					status: 200,
					ClientCreated: result,
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
