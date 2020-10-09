/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 10:40:34
 * @LastEditTime: 2020-10-09 15:55:45
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/router/admin/index.js
 */

const { Db } = require('mongodb');


const router = require('koa-router')();
const DB = require('../../module/db').myDb;

router.get('/',async(ctx)=>{

    await ctx.render('admin/index');
})


// 修改状态封装
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


// 删除数据
router.get('/delete',async(ctx)=>{

    try {
     
        let { collection ,id } = ctx.query;

        let result = DB.remove(collection,{"_id": DB.getObjId(id) });
    
        // 删除后返回上一页
        ctx.redirect( ctx.state.G.prePage );       
    } catch (error) {
        // 删除后返回上一页
        ctx.redirect( ctx.state.G.prePage );           
    }


})

module.exports = router.routes();