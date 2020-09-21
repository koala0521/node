/*
 * @Author: XueBaBa
 * @Description: art-template 数据库操作封装 ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-21 11:43:38
 * @LastEditors: Do not edit
 * @FilePath: /koa/app.js
 */

const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const app = new Koa();
const router = new Router();

const DB = require('./module/db').myDb;

/**
 * 
 * 数据库操作封装
 * 
 * */ 
const render = require('koa-art-template');
render( app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});


router.get('/', async(ctx,next)=>{
    ctx.body = `首页~~~`
})


router.get('/news', async(ctx,next)=>{

    let result = await DB.find('user');
    
    await ctx.render('art_news',{
        user: '小猪~~~',
        list:result
    });

})

router.get('/add', async(ctx,next)=>{

    await ctx.render('art_add');
    
})

router.get('/insert', async(ctx,next)=>{
    let random = Number.parseInt( Math.random()*100 )

    let result = await DB.insert('user',{
        "id": random,
        "username": "小羊" +random,
        "age": random+1,
        "sex": "羊"
    });

    ctx.body = `插入数据`;
    
})

router.get('/update', async(ctx,next)=>{
    let random = Number.parseInt( Math.random()*100 )

    let result = await DB.update('user',{"id": 38},{

        "username": "小羊" + `007`,
        "age": 7,
        "sex": "007"
    });

    ctx.body = `更新数据`;
    
})

router.get('/delete', async(ctx,next)=>{

    let data = await DB.remove('user',{"id": 82});
    console.log('data___',data.result);
    
    ctx.body = `删除数据`;
    
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