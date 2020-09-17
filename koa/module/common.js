/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-17 11:57:13
 * @LastEditTime: 2020-09-17 12:18:35
 * @LastEditors: Do not edit
 * @FilePath: /koa/module/common.js
 */

//  post 数据获取封装
exports.getDate = function(ctx){
    

    
    return new Promise((resolve,reject)=>{
        let str = '';
        
        ctx.req.on('data',(chunk)=>{
            str += chunk;
        })

        ctx.req.on('end',(chunk)=>{
            resolve(str)
        })
        
    })
}