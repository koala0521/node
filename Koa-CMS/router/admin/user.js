/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-09-23 12:11:44
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/admin/user.js
 */
const router = require('koa-router')();

router.get('/',async(ctx)=>{
    
    await ctx.render('admin/user/list')
})


router.get('/add',async(ctx)=>{
    await ctx.render('admin/user/add')
})




module.exports = router.routes();