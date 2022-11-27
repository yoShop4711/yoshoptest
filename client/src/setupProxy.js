const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
    

  ),
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
    

  ),
  
  app.use(
    '/cart',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
    
  ),
  app.use(
    '/wish',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  


  ),
  app.use(
    '/message',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  


  )
  
  


};

