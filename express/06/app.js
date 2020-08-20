/*
 * @Author: XueBaBa
 * @Description:  express 中间件 - 第三方中间件
 * @Date: 2020-08-19 11:58:10
 * @LastEditTime: 2020-08-19 17:44:23
 * @LastEditors: Do not edit
 * @FilePath: /express/06/app.js
 */


/*
    
1.  安装中间件
2.  引入中间件
3. 使用 app.use() 配置中间件

*/ 

const express = require('express');
const app = express();
const ejs = require("ejs");
const bodyParser = require('body-parser');
const port = 3000;

// 配置模板引擎 ，配置后缀为 html 的模板
app.engine("html",ejs.renderFile);
app.set("view engine","html");

// 配置静态资源web目录 ( 属于内置中间件的一种 )
app.use( express.static("static") );

// 应用中间件 ——————打印时间中间件
app.use((req,res,next)=>{
    console.log(new Date());
    
    // next 保证了路由可以继续往下匹配
    next();
})

// 第三方中间 body-parser 件配置
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get("/login",(req,res)=>{
    // req.query  获取 get 传值 
    res.render("login");
})


app.post("/doLogin",(req,res)=>{
    let body = req.body;
    console.log('body____', body );
    
    res.send("提交成功~~~");
})

// 错误处理中间件
app.use((req,res,next)=>{
    res.status(404).send("找不到页面~~")
})

app.listen(port,()=>{
    console.log('server listen on port',port);
    
})

