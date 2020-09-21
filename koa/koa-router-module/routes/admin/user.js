/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-21 16:43:56
 * @LastEditTime: 2020-09-21 16:48:27
 * @LastEditors: Do not edit
 * @FilePath: /koa-router-module/routes/admin/user.js
 */
const router = require('koa-router')();

router.get('/',(ctx)=>{

    ctx.body = `后台用户首页`
})


router.get('/add',(ctx)=>{

    ctx.body = `后台用户z增加`
})

router.get('/edit',(ctx)=>{

    ctx.body = `后台用户编辑`
})


module.exports = router.routes();


