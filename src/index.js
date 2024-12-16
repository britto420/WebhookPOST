const express = require('express');
const { handleWebhook } = require('./webhookHandler');
const { validateRequest } = require('./middleware/validateRequest');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Webhook endpoint
app.post('/webhook', validateRequest, handleWebhook);

app.listen(PORT, () => {
  console.log(`Webhook server running on port ${PORT}`);
});