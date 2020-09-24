/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-09-24 19:27:37
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/admin/index.js
 */


const router = require('koa-router')();
const DB = require('../../module/db').myDb;

router.get('/',async(ctx)=>{

    await ctx.render('admin/index');
})

router.get('/changeState',async(ctx)=>{

    let { collectionName ,attr ,id } = ctx.query;

    let user = await DB.find(collectionName,{"_id": DB.getObjId(id)});

    if( user.length ){

        let json = {};
        let statu = -1;
        
        if( user[0].statu == 1 ){

            json = {
                [ attr ] : 0
            }
            statu = 0;
        }else{
            json = {
                [ attr ] : 1
            }     
            statu = 1;       
        }

        let result = await DB.update(collectionName,{"_id": DB.getObjId(id)},json);      
        
        if( result.result.ok == 1 ){
            ctx.body = `{
                "massage": "成功~",
                "success": true,
                "statu": ${ statu }
            }`; 
        }else{

            ctx.body = `{
                "massage": "修改失败啦~",
                "success": false
            }`;  
        }

    }else{
        console.log('数据不存在~~~');
    
        ctx.body = `{
            "massage": "成功~",
            "success": false
        }`;        
    }  

})


module.exports = router.routes();