import connection from "../../../config/connectionFactory";
import { ComboRepository } from "../../../adapters/database/v1/comboRepository";
import { ComboProductRepository } from "../../../adapters/database/v1/comboProductRepository";
import { ProductRepository } from "../../../adapters/database/v1/productRepository";
import { CostumerRepository } from "../../../adapters/database/v1/costumerRepository";
import { OrderRepository } from "../../../adapters/database/v1/orderRepository";
import { IngredientRepository } from "../../../adapters/database/v1/ingredientRepository";
import { CategoryRepository } from "../../../adapters/database/v1/categoryRepository";
import { CampaignRepository } from "../../../adapters/database/v1/campaignRepository";
import { CampaignCostumerRepositroy } from "../../../adapters/database/v1/campaignCostumerRepositroy";
import { EmployeeRepository } from "../../../adapters/database/v1/employeeRepository";
import { ProductIngredientRepository } from "../../../adapters/database/v1/productIngredientRepository";
import { PaymentRepository } from "../../../adapters/database/v1/paymentRepository";

const initRepository = () => {
	connection.database.addModels([
		OrderRepository,
		CostumerRepository,
		CategoryRepository,
		ProductRepository,
		IngredientRepository,
		ProductIngredientRepository,
		ComboRepository,
		ComboProductRepository,
		CampaignRepository,
		CampaignCostumerRepositroy,
		EmployeeRepository,
		PaymentRepository,
	]);
};

export default initRepository;
