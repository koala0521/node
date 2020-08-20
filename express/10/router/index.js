/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-08-20 15:59:52
 * @LastEditTime: 2020-08-20 16:03:12
 * @LastEditors: Do not edit
 * @FilePath: /express/10/router/index.js
 */
const express = require('express');

let router = express.Router();

router.get("/",(req,res)=>{

    res.send("前端路由~~~")
})

module.exports = router;