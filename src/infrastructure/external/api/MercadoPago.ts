//mercado pago

import { Payment, MercadoPagoConfig } from 'mercadopago';

const clientMercadoPago = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO });
//const clientMercadoPago = new MercadoPagoConfig({ accessToken: 'APP_USR-1223158960247728-051916-e13bbbfa80ecc7a0bc90ccf4495eff0a-151008103' });

const paymentMercadoPago = new Payment(clientMercadoPago);


const  createMercadoPago = async (id,price,email) => {

    return await paymentMercadoPago.create({
        body: { 
            transaction_amount: price,
            description: 'Pedido: '+id,
            payment_method_id: 'pix',
            external_reference: id,
            payer: {
                email: email								
            },
            notification_url: process.env.WEBHOOK + "/payment/webhook"			
        }
    })
}

const  searchMercadoPago = async (id) => {    
    return await paymentMercadoPago.search({
        options: {
            external_reference: id	    
        } 
    })
}


export { createMercadoPago, searchMercadoPago };