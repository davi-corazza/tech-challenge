export interface IComboService {
	getAll(req, res): Promise<void>;

	getComboById(req, res): Promise<void>;

	createCombo(req, res): Promise<void>;

	createComboProductAssociation(req, res): Promise<void>;

	getComboProducts(req, res): Promise<void>;
}
