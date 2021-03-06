/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-09-30 14:16:03
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/admin/category.js
 */

const router = require('koa-router')();
const DB = require('../../module/db').myDb;
const tools = require('../../module/tools');

router.get('/',async(ctx)=>{

    let result = await DB.find('category');

    let list = tools.cateToList( result );

    await ctx.render('admin/category/list',{
        list
    });

})

// 添加分类
router.get('/add',async(ctx)=>{

    let list = await DB.find('category',{"pid": "0"});

    await ctx.render('admin/category/add' , {
        list
    })
})

// 添加分类
router.post('/doAdd',async(ctx)=>{

    // 1. 获取表单数据
    let data = ctx.request.body;

    // 2.验证数据合法性
    if( !/^[\u4e00-\u9fa5\w]{2,12}$/.test( data.title ) ){
        
        await ctx.render('admin/error',{
            msg: '分类名格式错误~',
            url: ctx.state.__HOST__ + '/admin/category/add'
        });          
        
        return
    }

    // 3.数据库查询有用户名是否存在

    let result = await DB.find('category',{ "title": data.title });  

    if( result.length ){

        await ctx.render('admin/error',{
            msg: '分类已存在~',
            url: ctx.state.__HOST__ + '/admin/category/add'
        });  

        return
    }
  
    // 4. 数据库增加数据
    let state = await DB.insert('category',{
        title: data.title, 
        description: data.description,
        keywords: data.keywords,
        state: data.state,
        pid: data.pid,
        add_time: new Date()
    });
    
    ctx.redirect(`${ ctx.state.__HOST__ }/admin/category`);

})


// 编辑用户
router.get('/edit',async(ctx)=>{

    let { id } = ctx.query;

    let list = await DB.find('category',{"pid": "0"});  // 分类

    let result = await DB.find('category',{ "_id": DB.getObjId(id) });

    await ctx.render('admin/category/edit',{
        info: result[0],
        list
    });
    
})

// 编辑分类
router.post('/doEdit',async(ctx)=>{
    
    // 1. 获取表单数据
    let data = ctx.request.body;

    // 2.验证数据合法性
    if( !/^[\u4e00-\u9fa5\w]{2,12}$/.test( data.title ) ){
        
        await ctx.render('admin/error',{
            msg: '分类名格式错误~',
            url: ctx.state.__HOST__ + '/admin/category/edit?id=' + data._id
        });          
        
        return
    }

    // 3.数据库查询有用户名是否存在
    let result = await DB.find('category',{ "_id": DB.getObjId(data._id) });  

    if( !result.length ){

        await ctx.render('admin/error',{
            msg: '分类不存在~',
            url: ctx.state.__HOST__ + '/admin/category'
        });  

        return
    }
  
    // 4. 数据库更新数据
    let state = await DB.update('category',{"_id": DB.getObjId(data._id) },{
        title: data.title, 
        description: data.description,
        keywords: data.keywords,
        state: data.state,
        pid: data.pid
    });
    if(state.result.ok == 1 ){
        console.log(`修改成功~`);
    }else{
        console.log(`修改失败~`);
    }
    
    ctx.redirect(`${ ctx.state.__HOST__ }/admin/category`);

})


// 删除分类

router.get('/delete',async(ctx)=>{

    let { id } = ctx.query;

    let result = await DB.remove('category',{"_id": DB.getObjId(id) });


    if( result.result.ok == 1 ){

        ctx.redirect(ctx.state.__HOST__ + '/admin/category')

    }else{

        console.log(`删除失败`);
        await ctx.render('admin/error',{
            msg: '分类删除失败~',
            url: ctx.state.__HOST__ + '/admin/category'
        });  

    }

    ctx.body = `删除分类`;
    
})

module.exports = router.routes();