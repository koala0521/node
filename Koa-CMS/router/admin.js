/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-10-29 11:25:07
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/admin.js
 */
const router = require('koa-router')();
const url = require('url');
const ueditor = require('koa2-ueditor'); 


let index = require('./admin/index');
let login = require('./admin/login');
let manage = require('./admin/manage');
let category = require('./admin/category');
let article = require('./admin/article');


// 百度富文本编辑器 图片上传路由
router.all(
    '/editor/controller', 
    ueditor([ 
        'public', 
        { 
            "imageAllowFiles": [".png", ".jpg", ".jpeg"],
            "imagePathFormat": "/upload/ueditor/image/{yyyy}{mm}{dd}/{filename}" 
        }
    ])
)


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
router.use('/article',article);


module.exports = router.routes();