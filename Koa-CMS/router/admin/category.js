/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-09-28 11:57:41
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/admin/category.js
 */

const router = require('koa-router')();
const DB = require('../../module/db').myDb;
const tools = require('../../module/tools');

router.get('/',async(ctx)=>{

    let result = await DB.find('category');

    let list = tools.cateToList( 0 , result );

    await ctx.render('admin/category/list',{
        list
    });

})

router.get('/add',async(ctx)=>{
    
    await ctx.render('admin/category/add')
})

// 添加用户
router.post('/doAdd',async(ctx)=>{

    // 1. 获取表单数据
    let { username, password, repassword } = ctx.request.body;

    // 2.验证数据合法性
    if( !/^\w{5,12}$/.test(username) ){
        console.log('用户名格式错误');
        
        await ctx.render('admin/error',{
            msg: '用户名格式错误~',
            url: ctx.state.__HOST__ + '/admin/manage/add'
        });          
        
        return
    }

    if( !password || !repassword || password !== repassword || password.length < 6 ){

        await ctx.render('admin/error',{
            msg: '秘密错误~',
            url: ctx.state.__HOST__ + '/admin/manage/add'
        });   

        return
    }

    // 3.数据库查询有用户名是否存在

    let result = await DB.find('user',{username});  

    if( result.length ){

        await ctx.render('admin/error',{
            msg: '用户名已存在~',
            url: ctx.state.__HOST__ + '/admin/manage/add'
        });  

        return
    }
  
    // 4. 数据库增加数据
    let state = await DB.insert('user',{
        username, 
        password: tools.md5(password),
        sex: '测试',
        age: Number.parseInt( Math.random()*100 )
    });
    
    ctx.redirect(`${ ctx.state.__HOST__ }/admin/manage`);

})


// 编辑用户
router.get('/edit',async(ctx)=>{
    console.log('edit');

    let { id } = ctx.query;

    let result = await DB.find('user',{ "_id": DB.getObjId(id) });

    await ctx.render('admin/manage/edit',{
        info: result[0]
    });
    
})

// 编辑用户
router.post('/doEdit',async(ctx)=>{
    
    // 1. 获取表单数据
    let { username, password, repassword ,id } = ctx.request.body;

    // 2.验证数据合法性
    if( !/^\w{5,12}$/.test(username) ){

        await ctx.render('admin/error',{
            msg: '用户名格式错误~',
            url: ctx.state.__HOST__ + '/admin/manage/edit?id=' + id
        });          
        
        return
    }

    if( !password || !repassword || password !== repassword || password.length < 6 ){

        await ctx.render('admin/error',{
            msg: '秘密错误~',
            url: ctx.state.__HOST__ + '/admin/manage/edit?id=' + id
        });   

        return
    }

    // 3.数据库查询用户名是否存在
    let result = await DB.find('user',{username});  

    if( !result.length ){

        await ctx.render('admin/error',{
            msg: '账号或密码错误~',
            url: ctx.state.__HOST__ + '/admin/manage/edit?id=' + id
        });  

        return
    }    
    // 4. 数据库更新数据
    let state = await DB.update('user',{ "_id": DB.getObjId(id) },{
        username, 
        password: tools.md5(password),
    });
    
    ctx.redirect(`${ ctx.state.__HOST__ }/admin/manage`);
})


module.exports = router.routes();