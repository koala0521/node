/*
 * @Author: XueBaBa
 * @Description: session ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-17 17:58:38
 * @LastEditors: Do not edit
 * @FilePath: /koa/app.js
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
 * session koa中 session 的使用
 * 
 * */ 
const session = require('koa-session');
app.keys = ['some secret hurr'];  // cookie 的签名

const CONFIG = {
    key: 'koa.sess',
    maxAge: 20*1000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,   // 每次请求重置过期时间
    renew: false,   // 请求时，如果session即将过期，重置过期时间
};

app.use(session(CONFIG, app));  // session 中间件





router.get('/', async(ctx,next)=>{

    // 设置 session
    ctx.session.userinfo = '张三';

    ctx.body = `首页`;
})


router.get('/news', async(ctx,next)=>{

    // 获取session
    let userinfo = ctx.session.userinfo;
    
    console.log('userinfo___' , userinfo);

    await ctx.render('art_index',{
        user: userinfo,
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