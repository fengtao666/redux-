// // setupProxy.js
// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(
//         createProxyMiddleware('/apc', {  //`api`是需要转发的请求
//             target: 'https://c.m.163.com',  // 这里是接口服务器地址
//             ws: true,
//             changeOrigin: true,
//             pathRewrite: {
//                 '^/apc': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
//             }
//         })
//     );
//     app.use(
//         createProxyMiddleware('/api', {  //`api`是需要转发的请求
//             target: 'http://localhost:5000/',  // 这里是接口服务器地址
//             ws: true,
//             secure: false,
//             changeOrigin: true,
//             host: 'localhost',
//             pathRewrite: {
//                 '^/api': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
//             }
//         })
//     );
// }