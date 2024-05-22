import { ForeignKey, NonAttribute } from "sequelize";
import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { CampaignEntitie } from "@database/v1/campaign/campaignEntitie";
import { CostumerEntitie } from "@database/v1/costumer/costumerEntitie";

@Table({
	timestamps: true,
	tableName: "campaign_costumer",
	modelName: "CampaignCostumer",
})
export class CampaignCostumerEntitie extends Model {
	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCampaign: ForeignKey<CampaignEntitie["id"]>;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCostumer: ForeignKey<CostumerEntitie["id"]>;

	@HasMany(() => CampaignEntitie, "id")
	declare campaign?: NonAttribute<CampaignEntitie[]>;

	@HasMany(() => CostumerEntitie, "id")
	declare costumer?: NonAttribute<CostumerEntitie[]>;
}
