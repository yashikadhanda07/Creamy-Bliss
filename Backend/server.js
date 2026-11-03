import app from './src/app.js';
import { config } from './src/config/index.js';

const PORT = config.port;
const HOST = config.host;

const server = app.listen(PORT, HOST, () => {
  console.log(`
🍨 ======================================================== 🍨
   🍦 CREAMY BLISS ARTISANAL ICE CREAM API SERVER
   ✨ Port: ${PORT}
   ✨ Host: ${HOST}
   ✨ Mode: ${config.nodeEnv}
   ✨ Docs: http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}/
   ✨ API Base: http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}/api/
   ✨ Health Check: http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}/api/health
🍨 ======================================================== 🍨
  `);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server process terminated');
  });
});

