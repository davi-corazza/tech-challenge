import { Table, Model, Column, DataType, HasMany, BelongsTo, BelongsToMany} from "sequelize-typescript";
import { ComboEntitie } from "./comboEntitie";
import { ForeignKey, NonAttribute, HasManyRemoveAssociationMixin } from "sequelize";
import { ProductEntitie } from "../product/productEntitie";

@Table({
	timestamps: true,
	tableName: "combo_product",
	modelName: "ComboProduct",
})
export class ComboProductEntitie extends Model {
	
	@Column({
		type: DataType.INTEGER,
		allowNull: true,	
	})
	declare fk_idCombo: ForeignKey<ComboEntitie["id"]>;

	@Column({
		type: DataType.INTEGER,
		allowNull: true,	
	})
	declare fk_idProduct: ForeignKey<ProductEntitie["id"]>;

	@HasMany(() => ComboEntitie, {
		foreignKey: 'fk_idCombo',			
	})	
	declare combo?: NonAttribute<ComboEntitie[]>;	

	@HasMany(() => ProductEntitie, {
		foreignKey: 'fk_idProduct'		
	})
	declare product?: NonAttribute<ProductEntitie[]>;

}
