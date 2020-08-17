/*
 * @Author: XueBaBa
 * @Description: express 路由封装 02
 * @Date: 2020-07-31 16:11:54
 * @LastEditTime: 2020-08-17 16:01:14
 * @LastEditors: Do not edit
 * @FilePath: /node学习/10/module/router.js
 */

// const fs = require(`fs`);
// const path = require(`path`);
// const common = require(`../common/common`);
// const http = require('http');
// const ejs = require(`ejs`);
const url = require('url');


let server = function(){

	const G = {};
	// 区分get和post方法，防止同名覆盖
	G._get = {};
	G._post = {};

	// 扩展 res 
	function changeRes(res){
		res.send = function(data){
			res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
			res.end(data);			
		}
	}

	let app = function(req,res){

	   let pathname = url.parse(req.url).pathname;
	   let method = req.method.toLowerCase();

	   changeRes(res);
		
		//  get请求处理
		if( method === 'get' && G._get[pathname] ){  
			G._get[pathname](req,res);
			return
		}
		// post 请求处理
		if( method === 'post' && G._post[pathname]){

			let postData = '';
			
			req.on('data',(chunk)=>{
				postData+=chunk;
			})
			req.on('end',()=>{

				//  绑定回传数据
				res.body = postData;
				G._post[pathname](req,res);
			})		
				
			return
		}
		
		res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
		res.end('页面不存在 ~~~~');	
		
	}
	
	app.get = function(str , cb){
		console.log('app.get _____');

		G._get[str] = cb;
		
	}
	
	app.post = function(str,cb){
		G._post[str] = cb;
		console.log('app.post _____');
	}
	
	return app

}




module.exports = server();
