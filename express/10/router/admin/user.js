/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-08-20 16:10:38
 * @LastEditTime: 2020-08-20 16:13:36
 * @LastEditors: Do not edit
 * @FilePath: /express/10/router/admin/user.js
 */
const express = require('express');
let router = express.Router();

router.get("/",(req,res)=>{
    res.send("用户列表")
})
router.get("/add",(req,res)=>{
    res.send("增加用户")
})
router.get("/edit",(req,res)=>{
    res.send("修改用户")
})
router.post("/doAdd",(req,res)=>{
    res.send("增加用户完成")
})
router.post("/doEdit",(req,res)=>{
    res.send("修改用户完成")
})

module.exports = router;