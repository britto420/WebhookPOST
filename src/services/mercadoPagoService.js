const fetch = require('node-fetch');

async function getMercadoPagoPayment(paymentId) {
  const url = `https://api.mercadopago.com/v1/payments/${paymentId}`;
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch payment details: ${response.statusText}`);
  }

  return response.json();
}

module.exports = { getMercadoPagoPayment };