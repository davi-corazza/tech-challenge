import { ForeignKey, NonAttribute } from "sequelize";
import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { CampaignRepository} from "./campaignRepository";
import { CostumerRepository } from "./costumerRepository";

@Table({
	timestamps: true,
	tableName: "campaign_costumer",
	modelName: "CampaignCostumer",
})
export class CampaignCostumerRepositroy extends Model {
	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCampaign: ForeignKey<CampaignRepository["id"]>;

	@Column({
		type: DataType.INTEGER,
	})
	declare fk_idCostumer: ForeignKey<CostumerRepository["id"]>;

	@HasMany(() => CampaignRepository, "id")
	declare campaign?: NonAttribute<CampaignRepository[]>;

	@HasMany(() => CostumerRepository, "id")
	declare costumer?: NonAttribute<CostumerRepository[]>;
}
