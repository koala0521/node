/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-07-31 16:40:57
 * @LastEditTime: 2020-07-31 16:42:22
 * @LastEditors: Do not edit
 * @FilePath: /nodejs/03/server.js
 */ 


const http  = require('http');




exports.server = function(){

    function serve(requset,respone){

        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        respone.writeHead(200,{'Content-Type':'text/plain'});
    
         // 发送响应数据 "Hello Node-js"
        respone.end('Hello Node-js');
    }
    
    // 步骤二、创建服务器
    http.createServer(serve).listen(3001);

    console.log('Server running at http://127.0.0.1:3001/');
}