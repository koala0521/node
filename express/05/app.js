/*
 * @Author: XueBaBa
 * @Description:  express 中间件
 * @Date: 2020-08-19 11:58:10
 * @LastEditTime: 2020-08-19 17:15:10
 * @LastEditors: Do not edit
 * @FilePath: /express/05/app.js
 */


/*

1.  使用 app.use() 配置中间件

*/ 

const express = require('express');
const app = express();
const ejs = require("ejs");
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

app.get("/",(req,res)=>{
    let title = "ejs 数据 ~~";
    let html = `<p>我是一段<i style="color:red;" >html</i>代码啦啦</p>`;

    res.render("index",{
        title: title,
        html:html,
        show: false
    });

})

app.get("/news",(req,res)=>{
    let arr = [`小猪`,`小狗`,`小猫`,`小鸡`];
    res.render("news",{
        list : arr
    })
})

app.get("/news/add",(req,res,next)=>{
    res.send("增加新闻~~")
    // next()
})

app.get("/news/:id",(req,res)=>{
    res.send("动态路由~~")
})

// 错误处理中间件
app.use((req,res,next)=>{
    res.status(404).send("找不到页面~~")
})


// app.get("/register",(req,res)=>{
//     res.send("注册页面 !")

// })

// app.post("/doLogin",(req,res)=>{
//     console.log('post ———— doLogin');
    
// })

// // put 请求主要用于修改数据
// app.put("/editData",(req,res)=>{
//     console.log('修改数据~~');
    
// })

// app.delete("/delData",(req,res)=>{
//     console.log('删除数据~~');
    
// })


// // 路由二目录
// app.get("/admin/user",(req,res)=>{
//     res.send("二级路由 ~~") 
// })


// app.get("/news/aaa",(req,res)=>{

//     res.send("news/aaa 页面~~");
// })

// // 动态路由 动态路由配置时需要注意顺序，防止覆盖其他路由
// app.get("/news/:id",(req,res)=>{
//     let id = req.params["id"];
//     console.log('动态路由 id = ', id);
//     res.send(id);
// })

// // get传值
// app.get("/porduct",(req,res)=>{
//     let query = req.query;

//     console.log('query___',query);
//     res.send("get传参~~");
    
// })


app.listen(port,()=>{
    console.log('server listen on port',port);
    
})

