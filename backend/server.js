/**
 * Hotel Room Booking System - Backend Server
 * Author: Md. Samiur Rahman (Mukul)
 * Fixed & configured for Windows by ChatGPT
 */

require("dotenv").config(); // ✅ WAJIB PALING ATAS

const app = require("./src/app");
const logger = require("./src/middleware/winston.logger");

// ===============================
// SERVER START
// ===============================
const PORT = process.env.APP_PORT || 5000;
const BASE_URL = process.env.APP_BASE_URL || `http://localhost:${PORT}`;

app.listen(PORT, () => {
  logger.info("====================================");
  logger.info("🚀 Hotel Room Booking Backend Started");
  logger.info(`🌐 Server running on: ${BASE_URL}`);
  logger.info(`⚙️ Environment: ${process.env.NODE_ENV}`);
  logger.info("====================================");
});
