import { ICostumerRepository } from "@ports/out/v1/ICostumerRepository";
import { CostumerEntitie } from "@database/v1/costumer/costumerEntitie";

export class CostumerRepository implements ICostumerRepository {
	allCostumers(): Promise<CostumerEntitie[]> {
		return CostumerEntitie.findAll();
	}

	newCostumer(values: any): Promise<CostumerEntitie> {
		return CostumerEntitie.create(values);
	}

	searchCostumer(cpf: string): Promise<CostumerEntitie> {
		return CostumerEntitie.findOne({ where: { cpf } });
	}

	updateCostumer(id: number, values: any): Promise<[affectedCount: number]> {
		return CostumerEntitie.update(values, { where: { id } });
	}

	deleteCostumer(id: number): Promise<number> {
		return CostumerEntitie.destroy({ where: { id } });
	}
}
