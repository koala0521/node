/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-24 18:03:02
 * @LastEditTime: 2020-10-09 16:23:57
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/public/admin/assets/basic.js
 */

 $(function(){
     app.conformDel();
 })

const app = {

    // 点击切换状态
    toggle : (el,collectionName,attr,id) =>{
        $.get('/admin/changeState',{collectionName:collectionName,attr:attr,id:id},(data)=>{
            
            if( data.success ){
                let children = $(el).children();
                $(el).removeClass('btn-success btn-danger');
                children.removeClass('success remove icon-ok icon-remove');

                if( data.statu == 1 ){
                    $(el).addClass('btn-success');
                    children.addClass('success icon-ok');
                }else{
                    $(el).addClass('btn-danger');
                    children.addClass('remove icon-remove');
                }   

            }
        })
    },
    conformDel(){
        $('.delete').on('click' , function(){
            
            let result = confirm(`确定删除吗？`);
            return result
        })
    }
    
}
