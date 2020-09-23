/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-09-23 12:15:04
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/admin.js
 */
const router = require('koa-router')();

let login = require('./admin/login');
let user = require('./admin/user');

router.get('/',async(ctx)=>{
    await ctx.render('admin/index');
})


router.use('/login',login);
router.use('/user',user);


module.exports = router.routes();