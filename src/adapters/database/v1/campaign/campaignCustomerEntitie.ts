import { ForeignKey, NonAttribute } from "sequelize";
import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { CampaignEntitie } from "@database/v1/campaign/campaignEntitie";
import { CustomerEntitie } from "@database/v1/customer/customerEntitie";

@Table({
	timestamps: true,
	tableName: "campaign_customer",
	modelName: "CampaignCustomer",
})
export class CampaignCustomerEntitie extends Model {
	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCampaign: ForeignKey<CampaignEntitie["id"]>;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCustomer: ForeignKey<CustomerEntitie["id"]>;

	@HasMany(() => CampaignEntitie, "id")
	declare campaign?: NonAttribute<CampaignEntitie[]>;

	@HasMany(() => CustomerEntitie, "id")
	declare Customer?: NonAttribute<CustomerEntitie[]>;
}
