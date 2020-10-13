/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-10-13 10:42:12
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/admin/article.js
 */

const router = require('koa-router')();
const DB = require('../../module/db').myDb;
const tools = require('../../module/tools');

const multer = require('@koa/multer');


// 磁盘存储引擎 (DiskStorage)

// 磁盘存储引擎可以让你控制文件的存储。
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/upload')
  },
  filename: function (req, file, cb) {
      console.log('====================================');
      console.log( file );
      console.log('====================================');

    //   获取图片后缀名
      let arr = file.originalname.split('.');
      let mime = arr[ arr.length-1 ];

    cb(null, Date.now() + '.' + mime )
  }
})

const upload = multer({ storage: storage });


router.get('/',async(ctx)=>{

    let page = ctx.query.page;
    let size = 5;

    let list = await DB.find( 'article', {}, {}, page, size );

    let count = await DB.count('article');

    await ctx.render('admin/article/list',{
        list,
        page: page || 1,
        pageCount: Math.ceil( count / size )
    });

})

// 添加分类
router.get('/add',async(ctx)=>{

    let list = await DB.find('article',{"pid": "0"});

    await ctx.render('admin/article/add' , {
        list
    })
})


router.post( '/doAdd',upload.single('avatar'), async(ctx) => {

    // console.log('ctx.request.file', ctx.request.file);
    // console.log('ctx.file', ctx.file);
    // console.log('ctx.request.body', ctx.request.body);
    
    
    // ctx.body = 'upload';


    ctx.redirect(`${ ctx.state.__HOST__ }/admin/article`);

});


// 添加分类
// router.post('/doAdd',async(ctx)=>{

//     // 1. 获取表单数据
//     let data = ctx.request.body;

//     // 2.验证数据合法性
//     if( !/^[\u4e00-\u9fa5\w]{2,12}$/.test( data.title ) ){
        
//         await ctx.render('admin/error',{
//             msg: '分类名格式错误~',
//             url: ctx.state.__HOST__ + '/admin/article/add'
//         });          
        
//         return
//     }

//     // 3.数据库查询有用户名是否存在

//     let result = await DB.find('article',{ "title": data.title });  

//     if( result.length ){

//         await ctx.render('admin/error',{
//             msg: '分类已存在~',
//             url: ctx.state.__HOST__ + '/admin/article/add'
//         });  

//         return
//     }
  
//     // 4. 数据库增加数据
//     let state = await DB.insert('article',{
//         title: data.title, 
//         description: data.description,
//         keywords: data.keywords,
//         state: data.state,
//         pid: data.pid,
//         add_time: new Date()
//     });
    
//     ctx.redirect(`${ ctx.state.__HOST__ }/admin/article`);

// })


// 编辑用户
router.get('/edit',async(ctx)=>{

    let { id } = ctx.query;

    let list = await DB.find('article',{"pid": "0"});  // 分类

    let result = await DB.find('article',{ "_id": DB.getObjId(id) });

    await ctx.render('admin/article/edit',{
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
            url: ctx.state.__HOST__ + '/admin/article/edit?id=' + data._id
        });          
        
        return
    }

    // 3.数据库查询有用户名是否存在
    let result = await DB.find('article',{ "_id": DB.getObjId(data._id) });  

    if( !result.length ){

        await ctx.render('admin/error',{
            msg: '分类不存在~',
            url: ctx.state.__HOST__ + '/admin/article'
        });  

        return
    }
  
    // 4. 数据库更新数据
    let state = await DB.update('article',{"_id": DB.getObjId(data._id) },{
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
    
    ctx.redirect(`${ ctx.state.__HOST__ }/admin/article`);

})


// 删除分类

router.get('/delete',async(ctx)=>{

    let { id } = ctx.query;

    let result = await DB.remove('article',{"_id": DB.getObjId(id) });


    if( result.result.ok == 1 ){

        ctx.redirect(ctx.state.__HOST__ + '/admin/article')

    }else{

        console.log(`删除失败`);
        await ctx.render('admin/error',{
            msg: '分类删除失败~',
            url: ctx.state.__HOST__ + '/admin/article'
        });  

    }

    ctx.body = `删除分类`;
    
})

module.exports = router.routes();