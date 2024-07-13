import { ICampaignGateway } from "@gateways/ICampaignGateway";
import { Campaign } from "@entities/Campaign";

export class CampaignUseCase {
    constructor(private readonly campaignGateway: ICampaignGateway) {}

    async getAll(): Promise<Campaign[]> {
        return await this.campaignGateway.allCampaigns();
    }

    async getCampaignById(id: number): Promise<Campaign[]> {
        return await this.campaignGateway.getCampaignById({ where: { id } });
    }

    async createCampaign(data: Campaign): Promise<Campaign> {
        return await this.campaignGateway.newCampaign(data);
    }

    async createCampaignCustomerAssociation(data: any): Promise<any> {
        return await this.campaignGateway.newCampaignAssociation(data);
    }

    async updateCampaign(id: number, data: Campaign): Promise<[affectedCount: number]> {
        return await this.campaignGateway.updateCampaign(id, data);
    }

    async getCampaignCustomers(id: string): Promise<any[]> {
        return await this.campaignGateway.customersOfCampaign(id);
    }
}
