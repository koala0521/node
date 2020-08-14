/*
 * @Author: XueBaBa
 * @Description: node get 传参
 * @Date: 2020-07-31 15:18:15
 * @LastEditTime: 2020-08-14 11:28:53
 * @LastEditors: Do not edit
 * @FilePath: /node学习/07/app.js
 */ 


/*
    
*/  
const fs = require(`fs`);
const path = require(`path`);
const http  = require('http');
const url = require('url');
const ejs =require(`ejs`);
const routes = require('./common/router');



let msg = '登录页面的数据~~~';
let list = [
	{
		title: '新闻111'
	},
	{
		title: '新闻222'
	},{
		title: '新闻333'
	}
];

// 步骤二、创建服务器
http.createServer( async(req,res)=>{

	let pathname = url.parse(req.url).pathname;
	await routes.static(req,res,'static');


	if( pathname == '/news' ){

		// node原生获取get传值
		let query = url.parse(req.url,true).query;
		console.log('query ____' , query);
		
		// 获取请求类型 req.method
		console.log(`请求类型 ——————————————` ,req.method);

		res.writeHead( 200 ,{'Content-Type': 'text/html;charset="utf-8"'});
		res.end(`新闻页面~~`);
				
		return
	}

	if( pathname == '/login' ){
		
		ejs.renderFile('./views/login.ejs',{},(err,data)=>{
			res.writeHead( 200 ,{'Content-Type': 'text/html;charset="utf-8"'});
			res.end(data);
		});

		return
	}

	// 获取post传值
	if(pathname == '/doLogin'){

		let postData = '';
		
		req.on('data',(chunk)=>{
			postData+=chunk;
		})
		req.on('end',()=>{
			console.log(`postData ____` , postData);
			res.end(postData);
		})

		return
	}

	if( pathname == '/register' ){

		res.writeHead( 200 ,{'Content-Type': 'text/html;charset="utf-8"'});
		res.end( `register注册~~` );
		
	}


}).listen(3001);

console.log('Server running at http://127.0.0.1:3001/');

