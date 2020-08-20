/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-08-20 16:10:38
 * @LastEditTime: 2020-08-20 16:14:39
 * @LastEditors: Do not edit
 * @FilePath: /express/10/router/admin/nav.js
 */
const express = require('express');
let router = express.Router();

router.get("/",(req,res)=>{
    res.send("导航")
})
router.get("/add",(req,res)=>{
    res.send("增加导航")
})
router.get("/edit",(req,res)=>{
    res.send("修改导航")
})
router.post("/doAdd",(req,res)=>{
    res.send("增加导航完成")
})
router.post("/doEdit",(req,res)=>{
    res.send("修改导航完成")
})

module.exports = router;