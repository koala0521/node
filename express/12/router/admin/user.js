/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-08-20 16:10:38
 * @LastEditTime: 2020-08-20 18:09:53
 * @LastEditors: Do not edit
 * @FilePath: /express/12/router/admin/user.js
 */



// 文件上传 02  multer 上传封装

const express = require('express');
const path = require('path');
const multer  = require('multer');
let router = express.Router();
const tools = require('../../model/tools');


console.log(`tools` , tools);


router.get("/",(req,res)=>{

    res.send("用户列表")
})
router.get("/add",(req,res)=>{

    res.render("admin/add")
    // res.send("增加用户")
})
router.get("/edit",(req,res)=>{
    res.send("修改用户")
})


router.post("/doAdd",tools.upload().single("img"),(req,res)=>{
    
    console.log('____',req.body);
    
    res.send("增加用户完成~~")
})


router.post("/doEdit",(req,res)=>{
    res.send("修改用户完成")
})

module.exports = router;