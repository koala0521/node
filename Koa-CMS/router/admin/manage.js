/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-09-24 15:57:37
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/admin/manage.js
 */

const router = require('koa-router')();
const DB = require('../../module/db').myDb;

router.get('/',async(ctx)=>{

    let result = await DB.find('user');

    console.log('result____' , result);
    
    
    await ctx.render('admin/user/list',{
        list: result
    });
    
})

router.get('/add',async(ctx)=>{
    await ctx.render('admin/user/add')
})




module.exports = router.routes();