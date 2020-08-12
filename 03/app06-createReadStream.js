/*
 * @Author: XueBaBa
 * @Description: 小练习 ~~ 读取目录下的所有文件夹  文件流
 * @Date: 2020-08-05 18:11:52
 * @LastEditTime: 2020-08-12 11:17:03
 * @LastEditors: Do not edit
 * @FilePath: /node学习/03/app.js
 */
const fs = require('fs');
let PATH = './www';

// 以流的方式读取文件
let readStream = fs.createReadStream('./common/input.txt');

let count = 0;
let str = '';
readStream.on('data',(data)=>{
    str += data;
    count++;
})
readStream.on('end',()=>{
    console.log(str);
    console.log(`count` , count);  
})

readStream.on('error',(err)=>{
    console.log('err', err);
})





