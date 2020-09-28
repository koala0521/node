/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 17:19:29
 * @LastEditTime: 2020-09-28 11:09:46
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/module/tools.js
 */

const md5 = require('md5');

function findChildren( id ,data){

    let list = data.filter( el => {
        return el.pid == id
    });

    list.forEach( el =>{
        
        el.list = findChildren( el._id ,  data ) || []; 
    })      

    return list
}

const tools = {
    md5,
    cateToList: function( id , data ){
        
        return findChildren( id , data );
    }
}

module.exports = tools;