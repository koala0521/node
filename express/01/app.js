/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-08-19 11:58:10
 * @LastEditTime: 2020-09-09 15:41:20
 * @LastEditors: Do not edit
 * @FilePath: /node学习/express/01/app.js
 */
const express = require('express');


const app = express();

app.get("/",(req,res)=>{
    res.send("hello express !")

})

app.get("/login",(req,res)=>{
    res.send("登录页面 !")

})

app.get("/register",(req,res)=>{
    res.send("注册页面 !")

})

app.post("/doLogin",(req,res)=>{
    console.log('post ———— doLogin');
    
})

// put 请求主要用于修改数据
app.put("/editData",(req,res)=>{
    console.log('修改数据~~');
    
})

app.delete("/delData",(req,res)=>{
    console.log('删除数据~~');
    
})


// 路由二目录
app.get("/admin/user",(req,res)=>{
    res.send("二级路由 ~~") 
})


app.get("/news/aaa",(req,res)=>{

    res.send("news/aaa 页面~~");
})

// 动态路由 动态路由配置时需要注意顺序，防止覆盖其他路由
app.get("/news/:id",(req,res)=>{
    let id = req.params["id"];
    console.log('动态路由 id = ', id);
    res.send(id);
})

// get传值
app.get("/porduct",(req,res)=>{
    let query = req.query;

    console.log('query___',query);
    res.send("get传参~~");
    
})


app.listen(3000,()=>{
    console.log('server listen on port 3000');
    
})

