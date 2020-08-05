/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-07-31 16:40:57
 * @LastEditTime: 2020-08-04 18:01:05
 * @LastEditors: Do not edit
 * @FilePath: /nodejs/04/server.js
 */ 


const http  = require('http');
const url = require('url');
const fs = require('fs');

exports.start = function(route){
    
    // 步骤二、创建服务器
    http.createServer((request,respone)=>{
        
        let pathName = url.parse(request.url).pathname;
        route(pathName , respone);

    }).listen(3001);

    console.log('Server running at http://127.0.0.1:3001/');
}