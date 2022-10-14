const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://141.164.59.254:8080/',
      changeOrigin: true,
    })
  );
};