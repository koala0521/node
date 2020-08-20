/*
 * @Author: XueBaBa
 * @Description: ejs 使用
 * @Date: 2020-08-19 11:58:10
 * @LastEditTime: 2020-08-19 15:29:09
 * @LastEditors: Do not edit
 * @FilePath: /express/02/app.js
 */


/*

1. 安装ejs  
2. 配置ejs  app.set("view engine","ejs")
3.使用模板   res.render('',()=>{})

*/ 

const express = require('express');
const app = express();
const port = 3000;

// 配置模板引擎 express 默认使用 ejs 所有不需要引入 ejs
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    let title = "ejs 数据 ~~";
    let html = `<p>我是一段html代码啦啦</p>`;

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

