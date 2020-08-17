/*
 * @Author: XueBaBa
 * @Description: express ???? 01
 * @Date: 2020-07-31 16:11:54
 * @LastEditTime: 2020-08-17 14:50:19
 * @LastEditors: Do not edit
 * @FilePath: /node??/09/module/router.js
 */

const fs = require(`fs`);
const path = require(`path`);
const common = require(`../common/common`);
const http = require('http');
const url = require('url');
const ejs = require(`ejs`);


const G = {};

let app = function(req,res){
	console.log('app _____');
   let pathname = url.parse(req.url).pathname;
	if(G[pathname]){
		G[pathname](req,res);
	}else{
		res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
		res.end('????? ~~~~');		
	}
}

app.get = function(str , cb){
	console.log('app.get _____');

	// ?????
	G[str] = cb;
	
}

app.post = function(){
	console.log('app.post _____');
}



module.exports = app;
