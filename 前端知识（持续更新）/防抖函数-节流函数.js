/*
 * @Author: 子非鱼
 * @Description: 文件描述~
 * @Date: 2021-02-24 18:16:19
 * @LastEditTime: 2021-02-25 11:17:21
 * @LastEditors: Do not edit
 * @FilePath: /前端知识（持续更新）/防抖函数-节流函数.js
 */


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
        if (timer) {
            clearTimeout(timer)
        }
        // 开启首次触发立即实行
        if (flag && !timer) {
            fn.apply(this, args)
        }
        timer = setTimeout(fn.bind(this, args), delay)
    }
}


/**
 * 节流（throttle）:不管事件触发频率多高，只在单位时间内执行一次。
 * @param {function} fn 节流函数
 * @param {number} time 延迟执行时间
 * @returns {Function}
 * 
 */

// 定时器版 
function throttle(fn, time) {
    let timer = null
    return function(...arg){
        if(!timer){
            setTimeout(() => {
                fn.apply(this, arg)
                timer = null;
            }, time)  
        } 
    }
}

// 时间戳版
function throttle2(fn, time){
    let lastTimetrmp = 0
    return function (...arg){
        if (Date.time() - lastTimetrmp >= time) {
            lastTimetrmp = Date.time()
            fn.apply(this, arg)
        }
    }
}
