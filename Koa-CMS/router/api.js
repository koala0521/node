/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-09-24 10:39:14
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/api.js
 */
const router = require('koa-router')();
const svgCaptcha = require('svg-captcha');

router.get('/',async(ctx)=>{
    ctx.body = 'api接口'
})

// 获取验证码
router.get('/captcha',async(ctx)=>{
    ctx.body = 'api接口'
})


module.exports = router.routes();