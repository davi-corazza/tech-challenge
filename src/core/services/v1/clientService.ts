import { ClientRepository } from "../../../adapters/database/v1/clientRepository";

export default class ClientService {
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
