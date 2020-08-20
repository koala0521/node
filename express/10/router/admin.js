/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-08-20 15:59:45
 * @LastEditTime: 2020-08-20 16:16:37
 * @LastEditors: Do not edit
 * @FilePath: /express/10/router/admin.js
 */
const express = require('express');
let router = express.Router();
const user = require('./admin/user');
const nav = require('./admin/nav');

// 挂载路由

router.use("/user",user);
router.use("/nav",nav);

router.get("/",(req,res)=>{
    res.send("后台路由~~~")
})

module.exports = router;