/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-16 17:58:32
 * @LastEditors: Do not edit
 * @FilePath: /node学习/koa/app.js
 */
const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();

router.get('/', async(ctx,next)=>{
    
    ctx.body = '首页';
})

router.get('/news', async(ctx,next)=>{
    
    ctx.body = '新闻';

})

app.use(router.routes());  // 启动路由

app.use(router.allowedMethods());  // 设置响应头

app.listen(3000)