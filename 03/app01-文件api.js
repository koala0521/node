/*
 * @Author: XueBaBa
 * @Description: 模块系统 & 文件系统
 * @Date: 2020-07-31 15:18:15
 * @LastEditTime: 2020-08-05 17:46:13
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

httpServer.server()

// // 1. 检测文件类型
// fs.stat('./common',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('====================================');
//     console.log( `文件` ,data.isFile());
//     console.log( `目录` ,data.isDirectory());
//     console.log('====================================');
// })


// // 2. 创建目录
// fs.mkdir('./common/css',(err,data)=>{
//     if(err){
//         console.log(err);
        
//         return
//     }

//     console.log('创建成功');
// })


// // 3. 创建并写入文件，已存在会替换

// fs.writeFile('./common/index.html', 'hello node ~~',(err,data)=>{
//     if(err){

//         console.log(err);
//         return
//     }
//     console.log(`创建写入成功~`);
// })

// // 4. 插入文件，没有时创建

// fs.appendFile('./common/css/base.css','body{color:#fff}\n',(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }

//     console.log(`成功~~`);
// })

// fs.appendFile('./common/css/base.css','h3{color:red}\n',(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }

//     console.log(`成功~~`);
// })


// // 5. 读取文件
// fs.readFile('./common/index.html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data.toString());
// })



// // 6. 读取目录
// fs.readdir('./common',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);
// })


// // 7. 重命名&移动文件
// fs.rename('./common/css/base.css','./common/css/common.css',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(`修改成功`);
// })
// fs.rename('./common/css/common.css','./common/common.css',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(`移动成功`);
// })


// 8. 删除目录：目录为空才能删除
// fs.rmdir('./common/css',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);
// })


// // 9.删除文件
// fs.unlink('./common/css/common2.css',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);    
// })
