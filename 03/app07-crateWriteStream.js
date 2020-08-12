/*
 * @Author: XueBaBa
 * @Description: 小练习 ~~ 文件流 
 * @Date: 2020-08-05 18:11:52
 * @LastEditTime: 2020-08-12 11:26:39
 * @LastEditors: Do not edit
 * @FilePath: /node学习/03/app.js
 */
const fs = require('fs');

let str = '';

for (let i = 0; i < 5000; i++) {
    str+= '这是亚写入的数据啊~~~这是亚写入的数据啊~~~\n';
}

// 以流的方式写入文件
let writeStream = fs.createWriteStream('./common/output.txt');
writeStream.write(str);

// 标记文件末尾，监听写入完成
writeStream.end();
writeStream.on('finish',()=>{
    console.log('写入完成 ~~');
    
})



