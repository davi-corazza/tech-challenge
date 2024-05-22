import { Costumer } from "@models/v1/Costumer";

export interface ICostumerRepository {
	allCostumers(): Promise<Costumer[]>;

	newCostumer(costumer: Costumer): Promise<Costumer>;

	searchCostumer(cpf: string): Promise<Costumer>;

	updateCostumer(
		id: number,
		costumer: Costumer
	): Promise<[affectedCount: number]>;

	deleteCostumer(id: number): Promise<number>;
}
