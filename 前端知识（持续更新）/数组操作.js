/*
 * @Author: 子非鱼
 * @Description: 文件描述~
 * @Date: 2021-02-25 12:28:13
 * @LastEditTime: 2021-02-25 19:51:45
 * @LastEditors: Do not edit
 * @FilePath: /前端知识（持续更新）/数组操作.js
 */


//  利用存储空间
function unique (array=[]){
    let container = {}
    return array.filter((item, index)=>{
        return container.hasOwnProperty(item) ? false : (container[item] = true)
    })
}

// indexOf + filter 组合查找（双循环）
function unique2(array=[]){
    return array.filter((item, idnex) => array.indexOf(item) === 1 )
}

// Set 去重
function unique3 (array){
    
    // 方法1
    return Array.from(new Set(array))
    // 方法2
    return [...new Set(array)]
}


// 去除重复的值
function filterunique(arr){
    return arr.filter(item => arr.indexOf(item) === arr.lastindexOf(item) )
}


// 最大值
array.reduce((count, item) => Math.max(count,item))


// 斐波那契数列

function Fibonacci(n){
    console.log('n', n);
    
    if (n < 2) return n
    return Fibonacci(n - 1) + Fibonacci(n-2)
}


//  优化版 使用一个数组缓存计算过的值。提升性能

function Fibonacci2(n, arr=[]) {
    if (n < 2){
        arr[n] = n
        return n
    } 
    if ( !arr[n] ){
        arr[n] = Fibonacci2(n - 1, arr) + Fibonacci2(n - 2, arr)
    }
    console.log('n', n, arr);
    
    return arr[n] 
}