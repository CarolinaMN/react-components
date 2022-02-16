const express = require("express")
var cors = require('cors')

const app = express();
app.use(cors());

const { createProxyMiddleware } = require('http-proxy-middleware')

app.use('/*', createProxyMiddleware({
    target: 'http://45.79.170.253:8080',
    changeOrigin: true,
    onProxyRes:function (proxyRes, req, res) {

      proxyRes.headers['Access-Control-Allow-Origin'] = '*';

    }
}));

app.listen(5000);