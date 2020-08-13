/*
 * @Author: XueBaBa
 * @Description: 路由
 * @Date: 2020-07-31 15:18:15
 * @LastEditTime: 2020-08-13 17:02:03
 * @LastEditors: Do not edit
 * @FilePath: /node学习/04/app.js
 */ 


/*
    
*/  
const fs = require(`fs`);
const path = require(`path`);
const common = require(`./module/common`);
const http  = require('http');
const url = require('url');


// 步骤二、创建服务器
http.createServer( async(request,respone)=>{
    
    let pathName = url.parse(request.url).pathname;
    pathName = pathName === '/' ? '/index.html' : pathName;
	let extname = path.extname(pathName);
    let mime = await common.getfileMime(extname);
    let data = await readFile(pathName);
    
    if( !data ){
        console.log(`____404`);
	    respone.writeHead( 404 ,{'Content-Type': 'text/html;charset="utf-8"'});
        respone.end( `404 页面找不到了~~` );
        return
    }
	respone.writeHead( 200 ,{'Content-Type': mime});
	respone.end( data );

}).listen(3001);

console.log('Server running at http://127.0.0.1:3001/');

function readFile(pathName){

	return new Promise((resolve,reject)=>{
		
		fs.readFile( `./static${ pathName }` ,(err,data)=>{
			if(err){
				resolve(false)
				return
			}
			resolve(data.toString())
		});			
	})

}
