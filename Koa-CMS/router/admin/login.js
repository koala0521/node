/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-09-23 18:07:45
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/admin/login.js
 */
const router = require('koa-router')();
const DB = require('../../module/db').myDb;
const tools = require('../../module/tools');


router.get('/',async(ctx)=>{
    await ctx.render('admin/login');
})

router.post('/doLogin',async(ctx)=>{
    
    // console.log('body', ctx.body);

    // 1. 验证账号密码
    // 2. 数据库匹配

    let { username , password , yanzheng } = ctx.request.body;

    let result = await DB.find('user',{ 
        username:username, 
        password: tools.md5(password).toLocaleLowerCase() 
    });

    if( result.length ){
        
        console.log('登录成功');
        ctx.session.userinfo = result[0];
        ctx.redirect( ctx.state.__HOST__ + '/admin' );        
    }else{

        console.log('登录失败~');
        
    }
})


module.exports = router.routes();