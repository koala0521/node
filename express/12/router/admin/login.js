/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-08-20 16:10:38
 * @LastEditTime: 2020-08-20 16:26:27
 * @LastEditors: Do not edit
 * @FilePath: /express/10/router/admin/login.js
 */
const express = require('express');
let router = express.Router();

router.get("/",(req,res)=>{
    res.send("后台登录")
})
router.post("/doLogin",(req,res)=>{
    res.send("后台登录完成")
})
router.post("/logout",(req,res)=>{
    res.send("注销登录")
})

module.exports = router;