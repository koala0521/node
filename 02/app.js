/*
 * @Author: XueBaBa
 * @Description: NPM 使用介绍
 * @Date: 2020-07-31 15:18:15
 * @LastEditTime: 2020-08-05 17:08:55
 * @LastEditors: Do not edit
 * @FilePath: /node学习/02/app.js
 */ 


/*

介绍 

    NPM 使用介绍

    NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

    允许用户从NPM服务器下载别人编写的第三方包到本地使用。
    允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
    允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。


    新版的nodejs已经集成了npm，所以之前npm也一并安装好了。
    同样可以通过输入 "npm -v" 来测试是否成功安装。命令如下，出现版本提示表示安装成功:    

    npm -v

    如果你安装的是旧版本的 npm，可以很容易得通过 npm 命令来升级，命令如下：

    sudo npm install npm -g


    使用 npm 命令安装模块

    npm install <Module Name>   

    卸载模块
    npm uninstall <Module Name>  
    
*/  


//  步骤一、引入 http 模块

const http  = require('http');

// 步骤二、创建服务器
http.createServer(function(requset,respone){


    console.log('====================================');
    console.log(requset.url);
    console.log('====================================');

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    respone.writeHead(200,{'Content-Type':'text/plain'});

     // 发送响应数据 "Hello Node-js"
    respone.end('Hello Node-js ~~')

}).listen(3001)

console.log('Server running at http://127.0.0.1:3001/');


// 使用 node 命令执行以上的代码： ndoe app.js

