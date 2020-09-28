/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-23 17:19:29
 * @LastEditTime: 2020-09-28 15:12:10
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/module/tools.js
 */

const md5 = require('md5');

function formatList( id , data ){

    let list = findChildrenById( id , data );

    list.forEach( el =>{
        
        el.list = formatList( el._id ,  data ) || []; 
    })      

    return list
}

function findChildrenById( id , data ){

    return data.filter( el => {
        return el.pid == id
    })
}

const tools = {
    md5,
    cateToList: function( data ){
        
        return formatList( 0 , data );
    },
    findChildrenById
}

module.exports = tools;