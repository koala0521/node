/*
 * @Author: XueBaBa
 * @Description: node 路由封装 下
 * @Date: 2020-07-31 15:18:15
 * @LastEditTime: 2020-08-17 14:42:54
 * @LastEditors: Do not edit
 * @FilePath: /node学习/09/express-rputer03.js
 */ 



// const url = require('url');
// const ejs =require(`ejs`);
// const fs = require(`fs`);
// const path = require(`path`);
const http  = require('http');

const app = require('./module/router');

// 注册web服务
http.createServer(app).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');


// 配置路由
app.get('/',(req,res)=>{
	res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
	res.end('首页执行了~~~~');
});
app.get('/login',(req,res)=>{
	res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
	res.end('login执行了~~~~');
	
});

app.get('/news',(req,res)=>{
	res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
	res.end('news 执行了~~~~');
	
});
