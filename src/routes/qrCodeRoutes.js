const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');

router.get('/generate-qr', async (req, res, next) => {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'Query parameter "text" is required' });
  }

  try {
    const qrCodeDataURL = await QRCode.toDataURL(text);
    res.status(200).send(`<img src="${qrCodeDataURL}" alt="QR Code" />`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;