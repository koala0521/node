/*
 * @Author: XueBaBa
 * @Description: cookie ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-17 18:15:17
 * @LastEditors: Do not edit
 * @FilePath: /koa/app-11-b-cookie设置中文.js
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
 * cookie koa中无法直接设置中文的 cookie，需要转换为 base64 格式
 * 
 * new Buffer('张三').toString('base64');
 * 
 * new Buffer('5byg5LiJ','base64').toString();
 * 
 * */ 
router.get('/', async(ctx,next)=>{

    // 设置中文cookie
    let name = Buffer.from('张三').toString('base64');

    ctx.cookies.set('name', name ,{
        maxAge: 100000,
        // domain: '',         // 可使用的域名、默认只在当前域下使用
        // path: '',           // 可访问的页面
        httpOnly: false,    // true 表示只有服务端可以获取cookie
    });
    ctx.body = `首页`;
})


router.get('/news', async(ctx,next)=>{

    // 获取中文 cookie
    let str = ctx.cookies.get('name') || '';
    let name = Buffer.from( str , 'base64' ).toString();

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