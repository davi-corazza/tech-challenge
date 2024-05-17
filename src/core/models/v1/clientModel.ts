import { ClientRepository } from "../../../adapters/database/v1/clientRepository";

export default class Client {
	public static allCostumers(): Promise<ClientRepository[]> {
		return ClientRepository.findAll();
	}

	public static newCostumer(values: any): Promise<ClientRepository> {
		return ClientRepository.create(values);
	}
}
