/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-21 16:43:56
 * @LastEditTime: 2020-09-21 17:16:51
 * @LastEditors: Do not edit
 * @FilePath: /koa-router-module/routes/admin/focus.js
 */
const router = require('koa-router')();

router.get('/', async(ctx)=>{

    ctx.body = `焦点图首页`
})


router.get('/add',async(ctx)=>{

    ctx.body = `焦点图增加`
})

router.get('/edit',async(ctx)=>{

    ctx.body = `焦点图编辑`
})


module.exports = router.routes();


