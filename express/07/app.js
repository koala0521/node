/*
 * @Author: XueBaBa
 * @Description:  express： cookie的是使用
 * @Date: 2020-08-19 11:58:10
 * @LastEditTime: 2020-08-20 11:49:05
 * @LastEditors: Do not edit
 * @FilePath: /express/07/app.js
 */


/*
    
1.  安装中间件
2.  引入中间件
3. 使用 app.use() 配置中间件
4. 设置cookie  req.cookie(key,value,{ ...配置 })

    cookie 可选配置：

    maxAge?: number;   // 过期时间
    signed?: boolean;  // 是否加密
    expires?: Date;    // 过期时间： 日期对象
    httpOnly?: boolean; // 前端是否可访问 默认为 true
    path?: string;     // 可访问的目录
    domain?: string;    // 可访问域名的二级域名
    secure?: boolean;    // 是否禁止 http 访问 ，默认false
    encode?: (val: string) => string;
    sameSite?: boolean | 'lax' | 'strict' | 'none';

5. 读取cookie req.cookies.[key]


6. cookie 加密：
   
    a. 配置中间件的时候传入加密字符串
    b. 配置加密参数 signed 为 true
    c. 使用 req.signedCookies.[key]读取加密 cookie

*/ 

const express = require('express');
const app = express();
const ejs = require("ejs");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = 3000;

// 配置模板引擎 ，配置后缀为 html 的模板
app.engine("html",ejs.renderFile);
app.set("view engine","html");

// 配置cookie中间件
app.use(cookieParser("xuebaba"));

// 配置静态资源web目录 ( 属于内置中间件的一种 )
app.use( express.static("static") );

// 应用中间件 ——————打印时间中间件
app.use((req,res,next)=>{
    console.log(new Date());
    next();
})

// 第三方中间 body-parser 件配置
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

// 首页
app.get("/",(req,res)=>{
    
    res.cookie("user","老王",{
        maxAge: 1000*60
    });

    // 设置加墨cookie
    res.cookie("name","夏利",{
        maxAge: 1000*60,
        signed: true
    });    

    res.send("hello express ~~");
})


app.get("/news",(req,res)=>{
    // 获取未加密cookie的方法
    let user = req.cookies.user;
    console.log('req.cookies.___' , req.cookies.user);
    res.send(`这是新闻页面。读取cookie user:${user}`);
})


app.get("/detail",(req,res)=>{
    // 获取加密cookie的方法
    let name = req.signedCookies.name;
    console.log('req.signedCookies.___' , req.signedCookies.name);
    res.send(`detail页面~~~ 加密cookie读取 name：${name}`);
})

// 错误处理中间件
app.use((req,res,next)=>{
    res.status(404).send("找不到页面~~");
})

app.listen(port,()=>{
    console.log(`server listen on port localhost:${port}/`);
    
})

