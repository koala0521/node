/*
 * @Author: XueBaBa
 * @Description: 小练习 ~~ 读取目录下的所有文件夹  await & async
 * @Date: 2020-08-05 18:11:52
 * @LastEditTime: 2020-08-07 18:01:01
 * @LastEditors: Do not edit
 * @FilePath: /node学习/03/app.js
 */
const fs = require('fs');
let PATH = './www';
let flielist = [];



// // 回调函数方式
// function getDate(cb){
//     setTimeout(() => {
//         cb(111) 
//     }, 1000);
// }

// getDate((data)=>{
//     console.log('data' , data);
    
// })
// // 回调函数方式


// // promise 方式 处理异步
// var p = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(111)
//     }, 1000);    
// })

// p.then((data)=>{
//     console.log('data__' , data);
    
// })
// // promise 方式 处理异步



// async 、await 方式处理异步

// async function test(){  // async 声明异步方法 ，返回 promise   await 必须用在 async 内部    
//     return 'hello nodejs'
// }

// console.log('test___' , test());  // 返回 promise

// async function main (){

//     var str = await test();

//     console.log('str ___' , str);
    
// }

// main();



async function test2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(111)
        }, 1000);    
    }) 
}

async function main2(){
    let data = await test2();
    console.log(data);
}

main2();

