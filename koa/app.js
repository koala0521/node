/*
 * @Author: XueBaBa
 * @Description: 数据库操作~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-18 12:28:55
 * @LastEditors: Do not edit
 * @FilePath: /koa/app.js
 */


/**
 * 
 * 封装数据库操作
 * 
 * */ 

 const myDb = require('./module/db').myDb;


 console.time('000')
 myDb.find('user').then((data)=>{
    console.timeEnd('000')
 })



setTimeout(() => {

    console.time('111')
    myDb.find('user').then((data)=>{
       console.timeEnd('111')
    })
       
}, 2000);


 
 setTimeout(() => {

    console.time('222')

    myDb.find('user').then((data)=>{

        console.timeEnd('222')
    })

 }, 3000);


