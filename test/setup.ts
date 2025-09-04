// Ensure the logger's HTTP server is disabled during tests
if (!process.env.OZLOGGER_HTTP) {
  process.env.OZLOGGER_HTTP = 'false';
}
