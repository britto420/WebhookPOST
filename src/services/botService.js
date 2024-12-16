const fetch = require('node-fetch');

async function notifyBot(paymentData) {
  try {
    const response = await fetch(process.env.BOT_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentData)
    });

    if (!response.ok) {
      throw new Error(`Failed to notify bot: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error notifying bot:', error);
    throw error;
  }
}

module.exports = { notifyBot };