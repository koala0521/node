/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-09-23 11:36:21
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/index.js
 */
const router = require('koa-router')();


router.get('/',async(ctx)=>{
    // ctx.body = '前端路由~'
    
    await ctx.render('default/index');
})



module.exports = router.routes();