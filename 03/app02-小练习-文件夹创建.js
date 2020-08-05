/*
 * @Author: XueBaBa
 * @Description: 模块系统 & 文件系统
 * @Date: 2020-07-31 15:18:15
 * @LastEditTime: 2020-08-05 18:00:10
 * @LastEditors: Do not edit
 * @FilePath: /node学习/03/app.js
 */ 


/*

介绍 

    Node.js模块系统 & 函数
    
    为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。

    模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。
    换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展
    
*/  

const httpServer = require(`./server`);

const fs = require('fs');

httpServer.server();

let path = './upload';

fs.stat(path,(err,data)=>{

    if(err){ // 目录不存在：创建
        console.log('目录不存在~~');

        mkdir(path);
        return
    }
    console.log('文件存在~~' , data.isDirectory());

    if( !data.isDirectory() ){
        
        fs.unlink(path,(err)=>{
            if(err){
                console.log('err___',err);
                return
            }
            
            mkdir(path);
        })
    }

})

function mkdir(dir){
    fs.mkdir(dir,(err,data)=>{
        if(err){
            console.log(err);
            
            return
        }

        console.log('创建成功~~');
        
    })
}
