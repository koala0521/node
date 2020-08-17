/*
 * @Author: XueBaBa
 * @Description: express 路由封装 03 静态资源处理
 * @Date: 2020-07-31 16:11:54
 * @LastEditTime: 2020-08-17 16:40:32
 * @LastEditors: Do not edit
 * @FilePath: /node学习/10/module/router.js
 */

const fs = require(`fs`);
const path = require(`path`);
const http = require('http');
// const ejs = require(`ejs`);
const url = require('url');


let server = function(){

	const G = {
		_get:{},
		_post:{},
		staticPath : 'static'  // 静态web目录
	};

	// 扩展 res 
	function changeRes(res){
		res.send = function(data){
			res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
			res.end(data);			
		}
	}

	// 根据后缀名获取文件类型
	function getfileMime(extname){
		let data = fs.readFileSync('./common/mime.json');
		let mimeObj = JSON.parse(data.toString());
		return mimeObj[extname];
	}	

	// 静态资源处理封装
	function initStatic(req,res,staticPath){
		
		let pathName = url.parse(req.url).pathname;
		pathName = pathName === '/' ? '/index.html' : pathName;
		
		let extname = path.extname(pathName);

		// 读取静态资源
		try {
			let mime = getfileMime(extname);
			let data = fs.readFileSync('./'+ staticPath + pathName);
		 
			if (data) {
			   res.writeHead(200, { 'Content-Type': mime });
			   res.end(data);
			}

		} catch (error) {
			
		}
		
	}	

	let app = function(req,res){

	   let pathname = url.parse(req.url).pathname;
	   let method = req.method.toLowerCase();

		// 扩展res返回值
	   	changeRes(res);
		
		// 配置景静态服务
		initStatic(req,res,G.staticPath);

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

		G._get[str] = cb;	
	}
	
	app.post = function(str,cb){
		G._post[str] = cb;
	}

	app.static = function(staticPath){
		G.staticPath = staticPath || G.staticPath;
	}
	
	return app

}




module.exports = server();
