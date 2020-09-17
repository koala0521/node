/*
 * @Author: XueBaBa
 * @Description: 执行流程 ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-17 11:49:29
 * @LastEditors: Do not edit
 * @FilePath: /koa/app.js
 */
const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const path = require('path');


const app = new Koa();
const router = new Router();


app.use(views( __dirname + '/views', { map: {html: 'ejs' }}));  


// 配置公共数据 ctx.state  公共数据可以在模板中直接使用，无需在render的时候传参
app.use(async(ctx,next)=>{
    
    ctx.state.username = '张三';
    await next();
})


router.get('/', async(ctx)=>{
    

    await ctx.render('test');   // 渲染模板

})


router.get('/add',async (ctx)=>{

    let title = 'hello koa2';    
    
    // 渲染模板
    await ctx.render( 'index',{
        title,
        username: ctx.state.username
    })  
    
})

router.get('/news', async(ctx,next)=>{
 
    ctx.body = '新闻页';
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