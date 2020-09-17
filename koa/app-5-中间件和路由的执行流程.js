/*
 * @Author: XueBaBa
 * @Description: 执行流程 ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-17 10:21:12
 * @LastEditors: Do not edit
 * @FilePath: /node学习/koa/app.js
 */
const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();


/*

    koa 中，中间件和路由的执行顺序与代码先后顺序无关。这点于 express 不同

    执行顺序如下：

    中间件1 -> 中间件2 -> ... 中间件n -> 路由  -> 中间件n -> ... 中间件2 -> 中间件1


    先进入中间件 ，再进入匹配到的路由 ，离开路由 ，离开中间件

*/ 

// 错误处理中间件
app.use(async(ctx,next)=>{

    console.log('错误处理中间件开始执行 -- 1');
    next();

    if(ctx.status === 404 ){

        ctx.body = `这是404页面~~`;
    }

    console.log('错误处理中间件执行完毕 -- 5');
})



router.get('/', async(ctx,next)=>{
    console.log('3 -- 首页');
    
    ctx.body = '首页';
})

// 路由中间件
router.get('/news', async(ctx,next)=>{
  
    console.log('新闻页');


    ctx.body = '新闻页';
})


// 输出时间中间件  
app.use(async (ctx,next)=>{
    
    console.log('日期中间件开始___ 2', new Date());
    next(); // 中间件执行完成后继续向下匹配


    console.log('日期中间件完成___4', new Date());
})



app.use(router.routes());  // 启动路由
app.use(router.allowedMethods());  // 设置响应头

app.listen(3000)