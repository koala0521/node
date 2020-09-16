/*
 * @Author: XueBaBa
 * @Description:  express 文件上传 02
 * @Date: 2020-08-19 11:58:10
 * @LastEditTime: 2020-09-09 14:43:51
 * @LastEditors: Do not edit
 * @FilePath: /node学习/express/13/app.js
 */

 /**/ 

const express = require('express');
const app = express();
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
const port = 3000;
const admin = require('./router/admin');
const index = require('./router/index');
const api = require('./router/api');
const bodyParser = require('body-parser');


const ejs = require("ejs");
app.set("view engine","ejs");

// 第三方中间 body-parser 件配置
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// app.use(session({
//     secret: 'keyboard cat',  // 用于生成服务端的session签名
//     name: 'xuebaba',               // 修改 session 对应的cookie的名称
//     resave: false,           // 强制保存session
//     saveUninitialized: true,  // 强制将未初始化的是session存储
//     cookie: { 
//         secure: false,
//         maxAge: 1000*60 
//     },
//     rolling: true,           // 每次请求的时候，如果session未过期，是否重置过期时间
//     store: new MongoStore({
//         url: 'mongodb://127.0.0.1:27017/shop',
//         touchAfter: 24*3600   // 不管发出多少请求 24 小时内 ，只更新一次session 
//     })
// }))


// 挂载模块化的路由
app.use("/admin", admin );
app.use("/api", api );
app.use("/", index );


// 错误处理中间件
app.use((req,res,next)=>{
    res.status(404).send("找不到页面~~");
})

app.listen(port,()=>{
    console.log(`server listen on port localhost:${port}/`);
    
})

