import axios from 'axios';

const MERCADOPAGO_API_BASE = 'https://api.mercadopago.com';

// Função para criar o pagamento no Mercado Pago
const createMercadoPago = async (id: number, price: number, customer: any) => {
    const { firstName, lastName } = customer.getFirstAndLastName();

    try {
        const response = await axios.post(
            `${MERCADOPAGO_API_BASE}/v1/payments`,
            {
                transaction_amount: price,
                description: `Pedido: ${id}`,
                payment_method_id: 'pix',
                external_reference: id.toString(),
                payer: {
                    email: customer.getEmail(),
                    identification: {
                        type: 'CPF',
                        number: customer.getCpf()
                    }
                },
                additional_info: {
                    payer: {
                        first_name: firstName,
                        last_name: lastName,
                    }
                },
                notification_url: `${process.env.WEBHOOK}/payment/webhook`
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.MERCADOPAGO}`, // O token de acesso do Mercado Pago
                    'Content-Type': 'application/json'
                }
            }
        );
        
        return response.data;
    } catch (error) {
        console.error('Error creating Mercado Pago payment:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Função para buscar informações de pagamento no Mercado Pago
const searchMercadoPago = async (id: string) => {
    try {
        const response = await axios.get(
            `${MERCADOPAGO_API_BASE}/v1/payments/search`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.MERCADOPAGO}`, // O token de acesso do Mercado Pago
                },
                params: {
                    id: id.toString() // Procurar por external_reference com ID do pedido
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error searching Mercado Pago payment:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export { createMercadoPago, searchMercadoPago };