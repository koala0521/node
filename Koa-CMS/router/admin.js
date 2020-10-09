/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-10-09 15:50:49
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/admin.js
 */
const router = require('koa-router')();
const url = require('url');

let index = require('./admin/index');
let login = require('./admin/login');
let manage = require('./admin/manage');
let category = require('./admin/category');

router.use('/',async(ctx,next)=>{

    let parh = url.parse(ctx.url);
    
    // 保存用户信息
    ctx.state.G = {
        userinfo: ctx.session.userinfo,
        pathArr: ctx.url.substr(1).split('/'),
        prePage: ctx.request.headers['referer']
    }

    // 判断登录状态
    if( !ctx.session.userinfo ){

        // 没有登录，去登陆页面
        if( parh.pathname === '/admin/login' || parh.pathname === '/admin/login/doLogin' || parh.pathname === '/admin/login/code'){

            await next();

        }else{
            ctx.redirect('/admin/login');

        }
        return
    }

    await next();
})

router.use(index);
router.use('/login',login);
router.use('/manage',manage);
router.use('/category',category);


module.exports = router.routes();