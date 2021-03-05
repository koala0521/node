/*
 * @Author: 子非鱼
 * @Description: 文件描述~
 * @Date: 2021-02-24 08:59:17
 * @LastEditTime: 2021-02-25 16:58:29
 * @LastEditors: Do not edit
 */

async function async1() {
    console.log('async1 start')  // 2
    await async2()
    console.log('async1 end')   // 6
}

async function async2() {
    console.log('async2')  // 3
}

console.log('script start');    // 1

setTimeout(() => {
    console.log('setTimeout');   // 8 
    
}, 0);

async1();

new Promise(function(res) {
    console.log('Promise1')     // 4
    res()
    
}).then(function(){

    console.log('Promise2')     // 7
})

console.log('script end');    // 5

//  1 - 5 log为同步代码，按顺序执行，6，7为异步微任务，根据进入队列顺序执行，8 异步宏任务，最后执行。


let data = [
    {

        id:1,
        title: `1`,
        children: [{ id:4,title: `1-1`,}]
    },
     {
         id:2,
         title: `2`,
         children: [
             {
                id:5,
                title: `2-1`, 
                children: [{ id:8,title: `2-1-1`, }]
            },
             {
                id:6,
                title: `2-2`,
                children: [{ id:9,title: `2-2-1`, }]
             }            
        ]
     },
     {
        id:3,
        title: `3`,
        children: [{ id:7,title: `3-1`, }]
    }   
 ]

 /**
  * 
  * @param {Array} data 
  * @returns {Array}
  */
function unfoldArr( data=[] ){
    if ( !Array.isArray( data ) ){
        console.warn('warnning: "data" shuold be array');
        return []
    }
    let List = [];
    function query( arr ){
        arr.forEach( el => {
            List.push({
                title: el.title,
                id: el.id
            })
            if ( el.children && el.children.length ) {
                //递归查找
                query( el.children )
            }
        })        
    }
    query(data)
    return List
}




/**
 * 
 * @param {function} fn 去抖动函数
 * @param {number} delay 延迟执行时间
 * @param {Boolean} flag 首次触发是否立即实行
  * @returns {Function}
 */

function debounce(fn, delay, flag) {
    let timer = null 
    return function (...args) {
        // 短时间多次触发时，只有最后一次执行业务函数
        if ( timer ) {
            clearTimeout( timer )
        }
        // 开启首次触发立即实行
        if (flag && !timer){
            fn.apply(this, args)
        }
        timer = setTimeout(fn.bind( this, args), delay ) 
    }
}





