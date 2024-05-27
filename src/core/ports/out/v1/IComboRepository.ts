import { Combo } from "@models/v1/Combo";

export interface IComboRepository {
	allCombos(): Promise<Combo[]>;

	newCombo(combo: Combo): Promise<Combo>;

	newProductAssociation(values: any): Promise<any>;

	productsOfCombo(id: string): Promise<any[]>;
}
