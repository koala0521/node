/*
 * @Author: XueBaBa
 * @Description: get传值 ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-16 18:26:08
 * @LastEditors: Do not edit
 * @FilePath: /node学习/koa/app-3-动态路由.js
 */
const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();


router.get('/', async(ctx,next)=>{

    // 获取get传参
    // console.log('ctx___' , ctx.query);
    // console.log('ctx___' , ctx.querystring);
    // console.log('ctx.request___' , ctx.request.query);
    // console.log('ctx.request___' , ctx.request.querystring);
    // 获取get传参    
  
    ctx.body = '首页';
})


// 动态路由  /:xxx[:xxx...]
router.get('/news/:id', async(ctx,next)=>{
    
    // 获取动静态路由参数
    console.log('ctx___',ctx.params);

    ctx.body =  '新闻/' + ctx.params.id;

})


// 动态路由多个参数
router.get('/list/:aid/:cid', async(ctx,next)=>{
    
    // 获取动静态路由
    console.log('ctx___',ctx.params);

    ctx.body =  '列表===>' + ctx.params.aid +' / '+ ctx.params.cid;

})





app.use(router.routes());  // 启动路由
app.use(router.allowedMethods());  // 设置响应头

app.listen(3000)