/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-09-23 10:48:27
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/api.js
 */
const router = require('koa-router')();

router.get('/',async(ctx)=>{
    ctx.body = 'api接口'
})



module.exports = router.routes();