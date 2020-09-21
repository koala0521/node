/*
 * @Author: XueBaBa
 * @Description: art-template 数据库操作封装 ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-21 15:17:44
 * @LastEditors: Do not edit
 * @FilePath: /koa/app.js
 */

const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const bodyParse = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
const DB = require('./module/db').myDb;


app.use(bodyParse());


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


// 列表展示
router.get('/news', async(ctx,next)=>{

    let result = await DB.find('user');
    
    await ctx.render('art_news',{
        user: '小猪~~~',
        list:result
    });

})

// 添加数据页面
router.get('/add', async(ctx,next)=>{

    await ctx.render('art_add');
    
})

// 执行添加
router.post('/doAdd', async(ctx,next)=>{

    let data = ctx.request.body;
    
    let random = Number.parseInt( Math.random()*100 )

    let result = await DB.insert('user',{
        "id": random,
        ...data
    });   
    
    try {

        if( result.result.ok ){
            console.log('添加成功~');
            ctx.redirect('/news');
            
        }else{
            ctx.redirect('back');      
        }        
    } catch (error) {
        ctx.redirect('back');  
    }

})

router.get('/edit', async(ctx,next)=>{
    let id = ctx.query.id;

    let data = await DB.find('user',{"_id": DB.getObjId(id) });

    await ctx.render('art_edit',{
        data:data[0]
    });
})

// 编辑用户
router.post('/doEdit', async(ctx,next)=>{
    let data = ctx.request.body;
    let { _id,username,age,sex } = data;

    let result = await DB.update('user',{ "_id": DB.getObjId( _id ) },{
        username,
        age,
        sex
    });

    try {
        if(result.result.ok){
            ctx.redirect('/news')
        }else{
            ctx.redirect('/back')
        }        
    } catch (error) {
        ctx.redirect('/back')
    }



})

// 删除用户
router.get('/delete', async(ctx,next)=>{

    let id = ctx.query.id;

    let data = await DB.remove('user',{"_id":  DB.getObjId(id) });
    console.log('data___',data.result);
    
    try {
        if(result.result.ok){
            ctx.redirect('/news')
        }    
    } catch (error) {
        ctx.redirect('/news')
    }
    
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