/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-21 16:12:04
 * @LastEditTime: 2020-09-21 17:08:25
 * @LastEditors: Do not edit
 * @FilePath: /koa-router-module/routes/admin.js
 */




const router = require('koa-router')();

const user = require('./admin/user');
const focus = require('./admin/focus');

router.get('/',(ctx)=>{

    // ctx.body = `后台首页~~`
    ctx.render('admin/index');
})

// 二级子路由配置  user
router.use('/user', user );
// 二级子路由配置  focus
router.use('/focus', focus );

// 导出路由
module.exports = router;