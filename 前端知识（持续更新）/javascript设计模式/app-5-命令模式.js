/*
 * @Author: XueBaBa
 * @Description: JS 设计模式 - 命令模式
 * @Date: 2020-09-03 11:03:38
 * @LastEditTime: 2020-09-07 11:40:48
 * @LastEditors: Do not edit
 * @FilePath: /node学习/javascript设计模式/app-4-命令模式.js
 */


/*

一.什么是命名模式？

    命名模式的目标是将方法的调用,请求或者操作封装到一个单独的对象中,给我们酌情执行同时参数化和传递方法调用的能力.

    如下：买车demo
*/ 



let carManager = {
    // 了解车的信息
    info(model ,id){
        return `这是一辆最新款的${ model },车的编号是${ id }`
    },  
    // 预定车
    arrangeViewing(model ,id){
        return `恭喜您，成功预定一辆${ model },车的编号是${ id }`
    },

    // 买车
    buyVehicle(model ,id){
        return `恭喜您，成功购买一辆${ model },车的编号是${ id }`
    },
    
};



// 普通方式调用

// carManager.info(`宝马X3`,'1000')
// carManager.arrangeViewing(`奔驰 c300`,'2000')
// carManager.buyVehicle(`保时捷 911`,'9000')




// 抽象为命令模式 : 输入什么命令，执行什么方法
carManager.execute = function( name ){
    let arr = Array.from(arguments);
    return carManager[name] && carManager[name].apply(carManager , arr.slice(1) )
}

let info = carManager.execute(`info`,`宝马X3`,`1000`);
let arrangeViewing = carManager.execute(`arrangeViewing`,`奥迪Q7`,`7000`);
let buyVehicle = carManager.execute(`buyVehicle`,`特斯拉 3`,`3000`);

console.log('info _____' , info);
console.log('arrangeViewing _____' , arrangeViewing);
console.log('buyVehicle _____' , buyVehicle);
