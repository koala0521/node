/*
 * @Author: XueBaBa
 * @Description: get传值 ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-17 10:04:35
 * @LastEditors: Do not edit
 * @FilePath: /node学习/koa/app.js
 */
const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();


// 错误处理中间件
app.use(async(ctx,next)=>{

    console.log('错误处理中间件开始执行');
    next();

    if(ctx.status === 404 ){

        ctx.body = `这是404页面~~`;
    }else{
        console.log('url___', ctx.url);
    }

})


router.get('/', async(ctx,next)=>{
  
    ctx.body = '首页';
})

// 路由中间件
router.get('/news', async(ctx,next)=>{
  
    console.log('新闻——路由中间件');
    next();
})



// 输出时间中间件  koa 中，中间件的执行与代码先后顺序无关。这点于 express 不同
app.use(async (ctx,next)=>{
    
    console.log('中间件___', new Date());
    next(); // 中间件执行完成后继续向下匹配
})



app.use(router.routes());  // 启动路由
app.use(router.allowedMethods());  // 设置响应头

app.listen(3000)