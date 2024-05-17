import Client from "../../../core/models/v1/clientModel";
import { defaultReturnStatement } from "../../../core/utils/serviceUtils";

export default class ClientService {
	getAll(req, res) {
		return defaultReturnStatement(res, "Costumers", Client.allCostumers());
	}

	createClient(req, res) {
		return defaultReturnStatement(
			res,
			"Costumer Created",
			Client.newCostumer({ ...req.body })
		);
	}
}
