/*
 * @Author: XueBaBa
 * @Description: 小练习 ~~ 管道流 
 * @Date: 2020-08-05 18:11:52
 * @LastEditTime: 2020-08-12 11:31:38
 * @LastEditors: Do not edit
 * @FilePath: /node学习/03/app.js
 */
const fs = require('fs');

// 管道流 复制文件
let readStream = fs.createReadStream('./common/1.png');
let writeStream = fs.createWriteStream('./common/img/1.png');

readStream.pipe(writeStream);





