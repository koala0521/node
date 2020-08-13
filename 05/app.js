/*
 * @Author: XueBaBa
 * @Description: 静态web服务封装 & 路由
 * @Date: 2020-07-31 15:18:15
 * @LastEditTime: 2020-08-13 18:08:54
 * @LastEditors: Do not edit
 * @FilePath: /node学习/05/app.js
 */ 


/*
    
*/  
const fs = require(`fs`);
const path = require(`path`);
// const common = require(`./module/common`);
const http  = require('http');
const url = require('url');

const routes = require('./common/router');


// 步骤二、创建服务器
http.createServer( async(req,res)=>{

	let pathname = url.parse(req.url).pathname;
	await routes.static(req,res,'static');


	// 路由处理 ~
	if( pathname == '/login' ){

		res.writeHead( 200 ,{'Content-Type': 'text/html;charset="utf-8"'});
		res.end( `login登录~~` );
		return
	}
	if( pathname == '/register' ){

		res.writeHead( 200 ,{'Content-Type': 'text/html;charset="utf-8"'});
		res.end( `register注册~~` );
		
	}

}).listen(3001);

console.log('Server running at http://127.0.0.1:3001/');

