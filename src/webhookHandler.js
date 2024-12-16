const { getMercadoPagoPayment } = require('./services/mercadoPagoService');
const { processVipPurchase } = require('./services/vipService');
const { mapPaymentStatus } = require('./utils/paymentMapper');
const { NOTIFICATION_TYPES } = require('./config/constants');

async function handleWebhook(req, res) {
  try {
    // Return 200 immediately as recommended by Mercado Pago
    res.status(200).send();

    const { id, type } = req.body;

    // Only process payment notifications
    if (type !== NOTIFICATION_TYPES.PAYMENT) {
      console.log(`Ignoring notification of type: ${type}`);
      return;
    }

    // Get payment details from Mercado Pago
    const paymentDetails = await getMercadoPagoPayment(id);
    
    // Process VIP purchase
    const vipData = processVipPurchase(paymentDetails);
    
    // Log the processed payment
    console.log('Payment processed:', {
      paymentId: id,
      status: vipData.status,
      userId: vipData.userId,
      amount: vipData.amount
    });

  } catch (error) {
    console.error('Error processing webhook:', error);
  }
}

module.exports = { handleWebhook };