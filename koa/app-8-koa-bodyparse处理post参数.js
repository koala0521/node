/*
 * @Author: XueBaBa
 * @Description: koa-bodyparser ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-17 14:46:19
 * @LastEditors: Do not edit
 * @FilePath: /koa/app.js
 */
const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const path = require('path');
const common = require('./module/common');
const bodyParse = require('koa-bodyparser');
const app = new Koa();
const router = new Router();
app.use(views( __dirname + '/views', { map: {html: 'ejs' }}));  


//  koa-bodyparser  中间件的使用 。作用：处理 post 传参
app.use(bodyParse());

router.post('/doAdd', async(ctx,next)=>{

    console.log('ctx.request.body' , ctx.request.body);
    // 接收 post 参数
    ctx.body = ctx.request.body;
})




router.get('/', async(ctx)=>{
    await ctx.render('test');   // 渲染模板
})


router.get('/add',async (ctx)=>{

    let title = 'hello koa2';    
    // 渲染模板
    await ctx.render( 'index',{
        title
    })  
    
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