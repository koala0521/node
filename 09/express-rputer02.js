/*
 * @Author: XueBaBa
 * @Description: node 路由封装 下
 * @Date: 2020-07-31 15:18:15
 * @LastEditTime: 2020-08-17 14:31:23
 * @LastEditors: Do not edit
 * @FilePath: /node学习/09/express-rputer02.js
 */ 



 
// const fs = require(`fs`);
// const path = require(`path`);
// const http  = require('http');
// const url = require('url');
// const ejs =require(`ejs`);
// const routes = require('./module/router');


const G = {};

let app = function(req,res){
	console.log('app _____');

	if(G['/login']){
		G['/login'](req,res);
	}
}

app.get = function(str , cb){
	console.log('app.get _____');

	// 注册方法
	G[str] = cb;
	
}

app.post = function(){
	console.log('app.post _____');
}

app.get('/login',(req,res)=>{
	console.log('login 执行了~~~~');
	
});

