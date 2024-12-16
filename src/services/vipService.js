const { PAYMENT_STATUS } = require('../config/constants');

function processVipPurchase(paymentDetails) {
  const { status, external_reference, transaction_amount } = paymentDetails;
  
  return {
    status,
    userId: external_reference, // Assumindo que external_reference contém o ID do usuário do Discord
    amount: transaction_amount,
    timestamp: new Date().toISOString()
  };
}

module.exports = { processVipPurchase };