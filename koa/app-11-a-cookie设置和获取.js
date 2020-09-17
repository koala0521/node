/*
 * @Author: XueBaBa
 * @Description: cookie ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-17 18:01:08
 * @LastEditors: Do not edit
 * @FilePath: /koa/app-11-cookie设置和获取.js
 */
const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const app = new Koa();
const router = new Router();
const render = require('koa-art-template');

render( app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

/**
 * 
 * cookie koa中cookie的设置和获取
 * 
 * */ 
router.get('/', async(ctx,next)=>{

    ctx.cookies.set('name','cookie: wangxiaoer',{
        maxAge: 10000,
        // domain: '',         // 可使用的域名、默认只在当前域下使用
        // path: '',           // 可访问的页面
        httpOnly: false,    // true 表示只有服务端可以获取cookie
    });
    ctx.body = `首页`;
})


router.get('/news', async(ctx,next)=>{

    let name = ctx.cookies.get('name');
    
    console.log('cookie' , name);

    await ctx.render('art_index',{
        user: name,
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