/*
 * @Author: 子非鱼
 * @Description: 文件描述~
 * @Date: 2021-02-26 18:27:55
 * @LastEditTime: 2021-03-01 18:29:48
 * @LastEditors: Do not edit
 * @FilePath: /前端知识（持续更新）/test.js
 */
console.log('start');

setTimeout(() => {
    console.log('children2');
    Promise.resolve().then(() => {
        console.log('children3');
    })
}, 0);

new Promise(function (resolve, reject) {
    console.log('children4');
    setTimeout(function () {
        console.log('children5');
        resolve('children6')
    }, 0)
}).then((res) => {
    console.log('children7');
    setTimeout(() => {
        console.log(res);
    }, 0)
})
