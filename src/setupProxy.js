// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {  //`api`是需要转发的请求
            target: 'https://c.m.163.com',  // 这里是接口服务器地址
            changeOrigin: true,
            pathRewrite: {
                '^/api': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
            }
        })
    )
}