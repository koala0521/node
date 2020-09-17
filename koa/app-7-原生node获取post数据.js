/*
 * @Author: XueBaBa
 * @Description: 执行流程 ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-17 14:43:06
 * @LastEditors: Do not edit
 * @FilePath: /koa/app-7-原生node获取post数据.js
 */
const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const path = require('path');
const common = require('./module/common');

const app = new Koa();
const router = new Router();
// 配置 ejs 模板
app.use(views( __dirname + '/views', { map: {html: 'ejs' }}));  





// 获取 post 参数
router.post('/doAdd', async(ctx,next)=>{

    let str =  await common.getDate(ctx);
    ctx.body = str;
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