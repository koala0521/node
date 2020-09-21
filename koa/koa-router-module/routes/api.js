/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-21 16:38:45
 * @LastEditTime: 2020-09-21 17:17:08
 * @LastEditors: Do not edit
 * @FilePath: /koa-router-module/routes/api.js
 */
const router = require('koa-router')();


router.get('/user',async(ctx)=>{

    ctx.body = `用户信息api`
})

router.get('/news',async(ctx)=>{

    ctx.body = `新闻列表api`
})

module.exports = router.routes();