import connection from "@config/connectionFactory";
import { CampaignEntitie } from "@database/v1/campaign/campaignEntitie";
import { CampaignCostumerEntitie } from "@database/v1/campaign/campaignCostumerEntitie";
import { CategoryEntitie } from "@database/v1/category/categoryEntitie";
import { ComboEntitie } from "@database/v1/combo/comboEntitie";
import { ComboProductEntitie } from "@database/v1/combo/comboProductEntitie";
import { CostumerEntitie } from "@database/v1/costumer/costumerEntitie";
import { EmployeeEntitie } from "@database/v1/employee/employeeEntitie";
import { IngredientEntitie } from "@database/v1/ingredient/ingredientEntitie";
import { OrderEntitie } from "@database/v1/order/orderEntitie";
import { OrderProductEntitie } from "@database/v1/order/orderProductEntitie";
import { PaymentEntitie } from "@database/v1/payment/paymentEntitie";
import { ProductEntitie } from "@database/v1/product/productEntitie";
import { ProductIngredientEntitie } from "@database/v1/product/productIngredientEntitie";

export default () => {
	connection.database.addModels([
		OrderEntitie,
		CostumerEntitie,
		CategoryEntitie,
		ProductEntitie,
		IngredientEntitie,
		ProductIngredientEntitie,
		ComboEntitie,
		ComboProductEntitie,
		CampaignEntitie,
		CampaignCostumerEntitie,
		EmployeeEntitie,
		PaymentEntitie,
		OrderProductEntitie,
	]);
};
