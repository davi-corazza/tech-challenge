import connection from "@config/connectionFactory";
import { CampaignEntitie } from "@database/v1/campaign/campaignEntitie";
import { CampaignCustomerEntitie } from "@database/v1/campaign/campaignCustomerEntitie";
import { CategoryEntitie } from "@database/v1/category/categoryEntitie";
import { ComboEntitie } from "@database/v1/combo/comboEntitie";
import { ComboProductEntitie } from "@database/v1/combo/comboProductEntitie";
import { CustomerEntitie } from "@database/v1/customer/customerEntitie";
import { EmployeeEntitie } from "@database/v1/employee/employeeEntitie";
import { OrderEntitie } from "@database/v1/order/orderEntitie";
import { OrderProductEntitie } from "@database/v1/order/orderProductEntitie";
import { PaymentEntitie } from "@database/v1/payment/paymentEntitie";
import { ProductEntitie } from "@database/v1/product/productEntitie";

export default () => {
	connection.database.addModels([
		CategoryEntitie,
		ProductEntitie,
		ComboEntitie,
		CustomerEntitie,
		OrderEntitie,
		PaymentEntitie,
		CampaignEntitie,
		EmployeeEntitie,
		CampaignCustomerEntitie,
		ComboProductEntitie,
		OrderProductEntitie,
	]);
};
