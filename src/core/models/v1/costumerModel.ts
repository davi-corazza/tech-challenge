import { CostumerRepository } from "../../../adapters/database/v1/costumerRepository";

export default class Costumer {
	public static allCostumers(): Promise<CostumerRepository[]> {
		return CostumerRepository.findAll();
	}

	public static newCostumer(values: any): Promise<CostumerRepository> {
		return CostumerRepository.create(values);
	}

	public static searchCostumer(cpf: string): Promise<CostumerRepository> {
		return CostumerRepository.findOne({ where: { cpf } });
	}
}
