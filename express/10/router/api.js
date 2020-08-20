/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-08-20 15:59:57
 * @LastEditTime: 2020-08-20 16:01:13
 * @LastEditors: Do not edit
 * @FilePath: /express/10/router/api.js
 */

const express = require('express');

let router = express.Router();
router.get("/",(req,res)=>{

    res.send("api 接口路由~~~")
})
module.exports = router;