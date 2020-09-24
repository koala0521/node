/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-09-24 11:37:45
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/admin/login.js
 */
const router = require('koa-router')();
const DB = require('../../module/db').myDb;
const tools = require('../../module/tools');
const svgCaptcha = require('svg-captcha');


router.get('/',async(ctx)=>{

    // 已登录时，跳转到首页
    // if(ctx.session.userinfo){

    //     ctx.redirect( ctx.state.__HOST__ + '/admin' );    
    //     return
        
    // }
    await ctx.render('admin/login');
})

// 执行登录
router.post('/doLogin',async(ctx)=>{
    
    // console.log('body', ctx.body);

    // 1. 验证账号密码格式
    // 2. 数据库匹配

    let { username , password , code } = ctx.request.body;


    // 账号密码匹配数据库
    let result = await DB.find('user',{ 
        username:username, 
        password: tools.md5(password).toLocaleLowerCase() 
    })

    if( code.toLocaleLowerCase() !== ctx.session.code.toLocaleLowerCase() ){
        
        console.log('验证码错误~');
        ctx.redirect('back');
        return
    }    

    if( result.length ){
        
        console.log('登录成功');
        ctx.session.userinfo = result[0];
        ctx.redirect( ctx.state.__HOST__ + '/admin' );        
    }else{

        console.log('登录失败~');
        
    }

})


router.get('/code',async(ctx)=>{

    var c = svgCaptcha.create({
        width: 120,
        height: 36,
        size: 4, // 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        noise: 1, // 干扰线条的数量
        color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
        background: '#cc9966' // 验证码图片背景颜色
    
    });
    console.log('c.text___' , c.text );
    
    ctx.session.code = c.text;
    // 需要设置响应头
    ctx.response.type = 'image/svg+xml';
    ctx.body = c.data;
    
})


module.exports = router.routes();