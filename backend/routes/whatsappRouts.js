const express = require('express');
const router = express.Router();
const client = require('twilio')(
  'ACb78582449c7f6a7ac0856ccdceccd862', // Your Twilio Account SID
  '811ade7978c4da3dab9d517e502a726f'   // Your Twilio Auth Token
);

// POST route to send WhatsApp message
router.post('/send-whatsapp', async (req, res) => {
  const { message, to } = req.body;

  try {
    await client.messages.create({
      from: 'whatsapp:+14155238886', // Your Twilio WhatsApp number
      body: message,
      to: `whatsapp:${to}`,   // User's WhatsApp number
    });
    res.status(200).json({ message: 'WhatsApp message sent successfully' });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    res.status(500).json({ error: 'Failed to send WhatsApp message' });
  }
});

module.exports = router;
