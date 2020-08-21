/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-08-20 16:10:38
 * @LastEditTime: 2020-08-21 12:07:14
 * @LastEditors: Do not edit
 * @FilePath: /express/13/router/admin/nav.js
 */
const express = require('express');
let router = express.Router();
const tools = require('../../model/tools');

router.get("/",(req,res)=>{
    res.send("导航")
})
router.get("/add",(req,res)=>{
    // res.send("增加导航")
    res.render("admin/nav/add");

})
router.get("/edit",(req,res)=>{
    res.send("修改导航")
})

router.post("/doAdd",tools.upload().fields([{name:'img1',maxCount:1},{name:'img2',maxCount:1}]),(req,res)=>{
    
    console.log('____',req.files);

    res.files = req.files;
    
    res.send(req.files);
})

router.post("/doEdit",(req,res)=>{
    res.send("修改导航完成")
})

module.exports = router;