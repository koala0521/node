/*
 * @Author: XueBaBa
 * @Description:  express： session 的使用
 * @Date: 2020-08-19 11:58:10
 * @LastEditTime: 2020-08-20 12:30:04
 * @LastEditors: Do not edit
 * @FilePath: /express/08/app.js
 */


/*
    
1. 安装中间件        npm install express-session
2. 引入中间件
3. 使用             app.use(session({...配置})) 配置中间件
4. 设置cookie       req.session.[key] = xxx
5. 读取cookie       req.session.[key]
6. 销毁cookie       1、设置session 过期时间 2、调用方法销毁指定 session
*/ 

const express = require('express');
const app = express();
// const ejs = require("ejs");
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const session = require('express-session');
const port = 3000;

app.use(session({
    secret: 'keyboard cat',  // 用于生成服务端的session签名
    name: 'xuebaba',               // 修改 session 对应的cookie的名称
    resave: false,           // 强制保存session
    saveUninitialized: true,  // 强制将未初始化的是session存储
    cookie: { 
        secure: false,
        maxAge: 1000*60 
    },
    rolling: true           // 每次请求的时候，如果session未过期，是否重置过期时间
}))

// 首页
app.get("/",(req,res)=>{
    
    // 获取session 
    if( req.session.username || req.session.test ){
        console.log('session.username___' , req.session.username);
        
        res.send("已登录~~");
        return
    }  

    res.send("未登录 ~~");
})


app.get("/news",(req,res)=>{

    // 设置session
    req.session.username = "小猪";
    req.session.test = "100";
    res.send(`登录成功`);
})


app.get("/loginout",(req,res)=>{

    // req.session.cookie.maxAge = 0;  // 销毁所有 session

    req.session.username = "";  // 销毁指定 session

    // req.session.destroy();     // 销毁所有 session
    
    res.send("退出登录~~")
})

// 错误处理中间件
app.use((req,res,next)=>{
    res.status(404).send("找不到页面~~");
})

app.listen(port,()=>{
    console.log(`server listen on port localhost:${port}/`);
    
})

