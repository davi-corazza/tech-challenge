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

	public static updateCostumer(id: number, values: any): Promise<CostumerRepository> {
		return CostumerRepository.update(values, { where: { id } });
	}

	public static deleteCostumer(id: number): Promise<number> {
		return CostumerRepository.destroy({ where: { id } });
	}
}
