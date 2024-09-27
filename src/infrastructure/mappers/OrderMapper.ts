import { Order } from "@entities/Order";
import { Order as OrderModel } from "@database/OrderModel";

export class OrderMapper {
  // Mapeia de OrderModel (banco) para Order (domínio)
  static toEntity(orderModel: any): Order {
    return new Order(
        orderModel.customerId,      
        orderModel.status,
        orderModel.price,
        orderModel.campaignId ? orderModel.campaignId : undefined,        
        orderModel.id,
    );
  }
  // Mapeia de Order (domínio) para OrderModel (banco)
  static toModel(Order: Order): any {
    return {
        id: Order.getId(),
        status: Order.getStatus(),
        price: Order.getPrice(),
        customer: Order.getCustomer(),
        campaign: Order.getCampaign(),
    };
  }
}
