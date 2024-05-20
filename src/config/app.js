const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

// Import and use the QR code routes
const qrCodeRoutes = require('../routes/qrCodeRoutes');

// Add the following line where you want to use the routes
app.use('/api', qrCodeRoutes);

module.exports = app;