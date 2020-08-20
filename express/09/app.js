/*
 * @Author: XueBaBa
 * @Description:  express： session 的使用二 (分布式架构的session处理)   数据库、redis
 * @Date: 2020-08-19 11:58:10
 * @LastEditTime: 2020-08-20 14:57:30
 * @LastEditors: Do not edit
 * @FilePath: /express/09/app.js
 */


/*
    
1. 安装中间件        npm install connect-mongo 、 connect-mysql、connect-redis
2. 引入中间件        const MongoStore = require('connect-mongo')(session)
3. 使用             app.use(session({...配置})) 配置中间件

    new MongoStore({
        url: 'mongodb://127.0.0.1:27017/shop',  // 数据库地址
        touchAfter: 24*3600   // 不管发出多少请求 24 小时内 ，只更新一次 session , 除非 session 有改动
    })

*/ 

const express = require('express');
const app = express();
const session = require('express-session');
const port = 3000;
const MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: 'keyboard cat',  // 用于生成服务端的session签名
    name: 'xuebaba',               // 修改 session 对应的cookie的名称
    resave: false,           // 强制保存session
    saveUninitialized: true,  // 强制将未初始化的是session存储
    cookie: { 
        secure: false,
        maxAge: 1000*60 
    },
    rolling: true,           // 每次请求的时候，如果session未过期，是否重置过期时间
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/shop',
        touchAfter: 24*3600   // 不管发出多少请求 24 小时内 ，只更新一次session 
    })
}))

// 首页
app.get("/",(req,res)=>{
    
    // 获取session 
    if( req.session.username ){
        console.log('session.username___' , req.session.username);
        
        res.send("已登录~~");
        return
    }  

    res.send("未登录 ~~");
})


app.get("/login",(req,res)=>{

    // 设置session
    req.session.username = "小猪";
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

