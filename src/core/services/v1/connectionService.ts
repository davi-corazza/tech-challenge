import connection from "../../../config/connectionFactory";
import { ComboRepository } from "../../../adapters/database/v1/comboRepository";
import { ComboProductRepository } from "../../../adapters/database/v1/comboProductRepository";
import { ProductRepository } from "../../../adapters/database/v1/productRepository";
import { ClientRepository } from "../../../adapters/database/v1/clientRepository";
import { OrderRepository } from "../../../adapters/database/v1/orderRepository";
import { IngredientRepository } from "../../../adapters/database/v1/ingredientRepository";
import { CategoryRepository } from "../../../adapters/database/v1/categoryRepository";

const initRepository = () => {
	connection.database.addModels([
		OrderRepository,
		ClientRepository,
		IngredientRepository,
		CategoryRepository,
		ProductRepository,
		ComboRepository,
		ComboProductRepository,
	]);
};

export default initRepository;
