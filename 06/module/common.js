/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-08-13 14:32:59
 * @LastEditTime: 2020-08-13 14:44:10
 * @LastEditors: Do not edit
 * @FilePath: /node学习/04/module/common.js
 */


const fs = require(`fs`);

exports.getfileMime = function(extname){
    
	return new Promise((resolve,reject)=>{
		
		fs.readFile('./common/mime.json',(err,data)=>{
			if(err){
				console.log('err',err);
				reject(err)
				return
			}
			let mime = JSON.parse(data.toString());

			resolve(mime[extname]);
		})
	})
}