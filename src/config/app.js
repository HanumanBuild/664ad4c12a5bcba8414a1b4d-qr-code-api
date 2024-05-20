const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

// Import and use the QR code routes
const qrCodeRoutes = require('../routes/qrCodeRoutes');
app.use('/api', qrCodeRoutes);

// Import and use the error handling middleware
const errorHandler = require('../middleware/errorHandler');
app.use(errorHandler);

module.exports = app;