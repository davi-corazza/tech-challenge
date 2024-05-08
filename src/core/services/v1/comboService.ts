import connection from "../../../config/connectionFactory";
import { ComboRepository } from "../../../adapters/database/v1/comboRepository";

export default class ComboService {
	initModel() {
		connection.database.addModels([ComboRepository]);
	}

	getAll(req, res) {
		return ComboRepository.findAll()
			.then((combo) => {
				res.json({
					status: 200,
					Combo: combo,
				});
			})
			.catch((err) => {
				res.json({
					status: 500,
					err: err,
				});
			});
	}

	async createCombo(req, res) {
		const { name, discount} = req.body;
		return await ComboRepository.create({
			name,
			discount,
		})
			.then((result) => {
				res.json({
					status: 200,
					ComboCreated: result,
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
