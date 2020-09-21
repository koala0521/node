/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-21 17:20:08
 * @LastEditTime: 2020-09-21 17:25:33
 * @LastEditors: Do not edit
 * @FilePath: /koa-router-module/routes/index.js
 */
const router = require('koa-router')();


router.get('/',async(ctx)=>{

    // ctx.body = `首页`
    ctx.render('default/index')
})

router.get('detail',async(ctx)=>{

    ctx.render('default/detail')
})
router.get('about',async(ctx)=>{

    ctx.render('default/about')
})

module.exports = router.routes();