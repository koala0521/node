/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-07-31 15:18:15
 * @LastEditTime: 2020-08-05 16:24:23
 * @LastEditors: Do not edit
 * @FilePath: /node学习/01/app.js
 */ 


/*

介绍

    简单的说 Node.js 就是运行在服务端的 JavaScript。

    Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

    Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

*/  

/**
 *  Node.js 安装配置
 * 
 * Node.js 安装包及源码下载地址为：https://nodejs.org/en/download/。
 * 
 * 
 * 验证是否安装配置成功
 * 
 * 终端命令行输入： node -v   输出 v10.xx.xx 表示配置成功
 * 
 * */ 



/**
 * 
 * Node.js 应用是由哪几部分组成的：

    引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。

    创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。

    接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。
 * 
 */  

//  步骤一、引入 http 模块

const http  = require('http');



// 步骤二、创建服务器
http.createServer(function(requset,respone){
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    respone.writeHead(200,{'Content-Type':'text/html'});

     // 发送响应数据 "Hello Node-js"
    respone.end('Hello Node-js')

}).listen(3001)

console.log('Server running at http://127.0.0.1:3001/');


// 使用 node 命令执行以上的代码： ndoe app.js

