/*
 * @Author: XueBaBa
 * @Description: koa - 路由模块化~
 * @Date: 2020-09-21 16:09:16
 * @LastEditTime: 2020-09-21 17:21:54
 * @LastEditors: Do not edit
 * @FilePath: /koa-router-module/app.js
 */
const koa = require('koa'),
    router = require('koa-router')(),
    art = require('koa-art-template'),
    path = require('path');


let app = new koa();
let admin = require('./routes/admin');
let api = require('./routes/api');
let index = require('./routes/index');


/**
 * 
 * 配置模板引擎
 * */ 
art(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});


    
// router.get('/',async(ctx)=>{ 
//     // 渲染模板引擎
//     ctx.render('index')
// })

// 模块化路由配置：配置 首页 下面的子路由
router.use('/', index );

// 模块化路由配置：配置 admin下面的子路由
router.use('/admin',admin.routes());

// 模块化路由配置：配置 api 下面的子路由
router.use('/api', api );

// 启动路由
app.use(router.routes()).use(router.allowedMethods());

// 监听端口
app.listen(3001);