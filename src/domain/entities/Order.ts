import { Product } from '@entities/Product';

export class Order {
	private id?: number;
	private customerId: number;
	private status: string;
	private price: number;
	private campaignId?: number;
	// private products: Product[] = []; // Associação com OrderProduct
	

	constructor(customerId: number, status: string, price: number, campaignId?: number, id?: number) {
		this.customerId = customerId;
		this.status = status;
		this.price = price;
		this.campaignId = campaignId;		
		this.id = id;
	}

	getId(): number | undefined {
		return this.id;
	}

	getStatus(): string {
		return this.status;
	}

	getPrice(): number {
		return this.price;
	}

	getCustomer(): number | undefined {
        return this.customerId;
    }

	getCampaign(): number | undefined {
        return this.campaignId;
    }
	
	// getProducts(): Product[] {
	// 	return this.products;
	// }
	
	// addProduct(product: Product): void {
	// 	this.products.push(product);
	// }

	// Métodos para manipular o preço
	addToTotalPrice(amount: number): void {
		this.price += amount;
	}

	applyCampaignDiscount(discountPercentage: number): void {
	this.price -= this.price * (discountPercentage / 100);
	}
}
