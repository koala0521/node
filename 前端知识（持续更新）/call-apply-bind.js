/*
 * @Author: 子非鱼
 * @Description: 文件描述~
 * @Date: 2021-02-24 16:04:51
 * @LastEditTime: 2021-02-24 16:59:59
 * @LastEditors: Do not edit
 * @FilePath: /前端知识（持续更新）/call-apply-bind.js
 */


/**
 * 模拟实现call
 * 1.判断当前this是否为函数，防止 Function.prototype.myCall() 直接调用
 * 2.context 为可选参数，如果不传的话默认上下文为 window
 * 3.为context 创建一个 Symbol（保证不会覆盖同名属性）属性，将当前函数赋值给这个属性
 * 4.处理参数，传入第一个参数后的其余参数
 * 5.调用函数后即删除该Symbol属性
 * 6. 返回函数原本的返回值
 * 
 * @param {*} context 
 * @param  {...any} args 
 * 
 */

Function.prototype.myCall = function (context = window, ...args){
    
    if( this == Function.prototype ){
        return undefined
    }
    context = context || window
    const fn = Symbol()
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result
}


// 示例

function say(n) {
    console.log('this',this);
    return n+100
}

let a = {a:1}
let sum = say.myCall(a,100)

console.log('sum', sum);





/**
 * 模拟实现 apply
 * 1.判断当前this是否为函数，防止 Function.prototype.myCall() 直接调用
 * 2.context 为可选参数，如果不传的话默认上下文为 window
 * 3.为context 创建一个 Symbol（保证不会覆盖同名属性）属性，将当前函数赋值给这个属性
 * 4.处理参数，判断参数是否为数组
 * 5.调用函数后即删除该Symbol属性
 * 6. 返回函数原本的返回值
 *
 * @param {*} context
 * @param  {Array} args
 *
 */

Function.prototype.myApply = function (context = window, args) {

    if (this == Function.prototype) {
        return undefined
    }
    context = context || window
    const fn = Symbol()
    context[fn] = this
    let result;

    if ( Array.isArray(args) ){
        result = context[fn](...args)
    }else{
        result = context[fn]()
    }
    delete context[fn]
    return result
}


/**
 * 模拟实现 bind
 * 1.处理参数，返回闭包函数
 * 5.调用函数后即删除该Symbol属性
 * 6. 返回函数原本的返回值
 *
 * @param {*} context
 * @param  {Array} args
 *
 */
Function.prototype.myBind = function (context, ...args) {
    if (this === Function.prototype) {
        throw new TypeError('Error')
    }    
    const _this = this
    return function Fn(...params) {
        // 检测闭包函数是否用 new 调用
        if ( _this instanceof Fn ){
            return new _this(...args, ...params)
        }
        // 非构造函数时，使用apply调用，并传入参数
        return _this.apply(context, args.concat(params))
    }
}


function fn1(params) {
    
}

fn1.myBind({})