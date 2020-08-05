/*
 * @Author: XueBaBa
 * @Description: 模块系统 & 文件系统
 * @Date: 2020-07-31 15:18:15
 * @LastEditTime: 2020-08-05 18:11:38
 * @LastEditors: Do not edit
 * @FilePath: /node学习/03/app03-模块使用.js
 */ 


/*

介绍 

    Node.js模块系统 & 函数
    
    npm : mkdir 
    
*/  

const httpServer = require(`./server`);

const fs = require('fs');

const mkdirp = require('mkdirp');  // 创建目录，有则不创建，没有则创建，可以创建多级目录

httpServer.server();

let path = './upload';


mkdirp(`./upload2/css/`).then(data=>{
    console.log('data',data);
    
})



// fs.stat(path,(err,data)=>{

//     if(err){ // 目录不存在：创建
//         console.log('目录不存在~~');

//         mkdir(path);
//         return
//     }
//     console.log('文件存在~~' , data.isDirectory());

//     if( !data.isDirectory() ){
        
//         fs.unlink(path,(err)=>{
//             if(err){
//                 console.log('err___',err);
//                 return
//             }
            
//             mkdir(path);
//         })
//     }

// })

// function mkdir(dir){
//     fs.mkdir(dir,(err,data)=>{
//         if(err){
//             console.log(err);
            
//             return
//         }

//         console.log('创建成功~~');
        
//     })
// }
