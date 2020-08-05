/*
 * @Author: XueBaBa
 * @Description: 小练习 ~~ 读取目录下的所有文件夹
 * @Date: 2020-08-05 18:11:52
 * @LastEditTime: 2020-08-05 18:28:05
 * @LastEditors: Do not edit
 * @FilePath: /node学习/03/app.js
 */
const fs = require('fs');
let PATH = './www';
let flielist = [];

fs.readdir(PATH,(err,data)=>{
    if(err){
        console.log(err);
        return        
    }

    data.forEach(el => {
        pushPath(PATH + '/' + el)
    });
    
})

function pushPath(path){

    fs.stat( path ,(err,data)=>{
        if(err){
            console.log(err);
            
            return
        }
        if(data.isDirectory()){

            console.log('data ____' , data);

            flielist.push(path);
        }

        
    })
}
