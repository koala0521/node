/*
 * @Author: XueBaBa
 * @Description: 静态资源中间件 koa-static ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-17 15:15:23
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

/*
*
* 静态资源中间件 koa-static 可以配置多个
*/ 
const static = require('koa-static');

app.use(static('static'));
app.use(static('public'));


app.use(views( __dirname + '/views', { map: {html: 'ejs' }}));  
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