/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-16 11:51:13
 * @LastEditors: Do not edit
 * @FilePath: /node学习/koa/app.js
 */
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();  // 等待下一个中间件执行完成
    const ms = Date.now() - start;
    console.log('2——————ms_____' , ms);
    
    // ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async(ctx)=>{

    console.log( '1——————Hello World' );
    ctx.body = 'Hello World';
})

app.listen(3000)