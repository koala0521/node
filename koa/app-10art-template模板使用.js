/*
 * @Author: XueBaBa
 * @Description: art-template 模板引擎 ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-17 16:38:17
 * @LastEditors: Do not edit
 * @FilePath: /koa/app-10art-template模板使用.js
 */
const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const app = new Koa();
const router = new Router();

/**
 * 
 * art-template 模板引擎使用
 * 
 * */ 
const render = require('koa-art-template');
render( app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

router.get('/', async(ctx,next)=>{
    await ctx.render('art_index',{
        user: '小猪~~~',
        code: '<h4>哈哈哈</h4>'
    });
})



// 错误处理中间件
app.use(async(ctx,next)=>{

    await next();
    if( ctx.status === 404 ){

        ctx.body = `这是404页面~~`;
    }
})



app.use(router.routes());  // 启动路由
app.use(router.allowedMethods());  // 设置响应头

app.listen(3000)