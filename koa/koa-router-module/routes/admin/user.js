/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-21 16:43:56
 * @LastEditTime: 2020-09-21 17:19:22
 * @LastEditors: Do not edit
 * @FilePath: /koa-router-module/routes/admin/user.js
 */
const router = require('koa-router')();

router.get('/',async(ctx)=>{

    // ctx.body = `后台用户首页`
    await ctx.render('admin/user/index')
})


router.get('/add',async(ctx)=>{

    await ctx.render('admin/user/add')
})

router.get('/edit',async(ctx)=>{

    await ctx.render('admin/user/edit')
})


module.exports = router.routes();


