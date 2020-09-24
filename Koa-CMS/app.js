/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:32:35
 * @LastEditTime: 2020-09-24 14:24:32
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/app.js
 */
const koa = require('koa');
const router = require('koa-router')();
const path = require('path');
const render = require('koa-art-template');
const static = require('koa-static');
const session = require('koa-session');
var bodyParser = require('koa-bodyparser');

let app = new koa();

app.keys = ['some secret hurr'];

const CONFIG = {
    
    key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
    maxAge: 86400000,
    autoCommit: true,   
    overwrite: true,    
    httpOnly: true, 
    signed: true,   
    rolling: true,  // 每次请求都重置 session
    renew: false,   
    secure: false,  // 如设置为 true ，则只应通过被 HTTPS 协议加密过的请求发送给服务端
    sameSite: null,     
  };

app.use(session(CONFIG ,app));

app.use(static( __dirname + '/public'));

app.use(bodyParser()); // 处理post请求参数


router.use('/',async(ctx,next)=>{
    
    
    // 模板引擎的全局变量
    ctx.state.__HOST__ = `http://` + ctx.request.header.host;

    ctx.body = ctx.request.body;

    await next();
})

render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});


let index = require('./router/index');
let admin = require('./router/admin');
let api = require('./router/api');



/**
 * 
 * 路由模块化，需要使用 router.use()
 * 
 * */ 
router.use('/admin',admin);
router.use('/api',api );
router.use(index);

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

app.listen(3001);
