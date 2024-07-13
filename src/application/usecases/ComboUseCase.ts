import { IComboGateway } from "@gateways/IComboGateway";
import { Combo } from "@entities/Combo";
import { Product } from "@entities/Product";

export class ComboUseCase {
	constructor(private readonly comboGateway: IComboGateway) {}

	async getAll(): Promise<Combo[]> {
		return await this.comboGateway.allCombos();
	}

	async getComboById(id: number): Promise<Combo[]> {
		return await this.comboGateway.getComboById({ where: { id } });
	}

	async createCombo(data: any): Promise<Combo> {
		const newCombo = { ...data };
		return await this.comboGateway.newCombo(newCombo);
	}

	async createComboProductAssociation(data: any): Promise<void> {
		return await this.comboGateway.newProductAssociation(data);
	}

	async getComboProducts(id: string): Promise<Product[]> {
		return await this.comboGateway.productsOfCombo(id);
	}
}
