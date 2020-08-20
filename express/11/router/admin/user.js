/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-08-20 16:10:38
 * @LastEditTime: 2020-08-20 17:55:35
 * @LastEditors: Do not edit
 * @FilePath: /express/11/router/admin/user.js
 */

 
// 文件上传 01  multer 的基础使用

const express = require('express');
const path = require('path');
const multer  = require('multer');
let router = express.Router();
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 上传路劲
        cb(null, 'static/uploads')
    },
    // 自定义文件
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + '.' + ext);
    }
  })
  
  var upload = multer({ storage: storage })


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


router.post("/doAdd",upload.single("img"),(req,res)=>{
    
    console.log('____',req.body);
    
    res.send("增加用户完成~~")
})


router.post("/doEdit",(req,res)=>{
    res.send("修改用户完成")
})

module.exports = router;