/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-07-31 16:49:29
 * @LastEditTime: 2020-08-04 17:52:49
 * @LastEditors: Do not edit
 * @FilePath: /nodejs/04/router.js
 */ 

const fs = require(`fs`);

async function route(pathname ,respone) {
	console.log("About to route a request for " + pathname);
	
	let data = await readFile(pathname);
	let code = 200;

	if(!data){
		code = 404;
		data = await readFile('/404.html');
	}
	
	respone.writeHead( code ,{'Content-Type':'text/html; charset=utf-8'});
	respone.end(data);

}

function readFile(pathName){

	return new Promise((resolve,reject)=>{
		fs.readFile(`./views${pathName}`,(err,data)=>{
			if(err){
				resolve(false)
				return
			}
			resolve(data.toString())
		});			
	})

}


   
  exports.route = route;
  