/*
 * @Author: XueBaBa
 * @Description: JS 设计模式 - 工厂模式
 * @Date: 2020-09-03 11:03:38
 * @LastEditTime: 2020-09-07 12:09:27
 * @LastEditors: Do not edit
 * @FilePath: /node学习/javascript设计模式/app-6-工厂模式.js
 */


/*


一.什么是工厂模式？

    工厂模式是另外一种关注对象创建概念的创建模式。
    它的领域中同其它模式的不同之处在于它并没有明确要求我们使用一个构造器。
    取而代之，一个工厂能提供一个创建对象的公共接口，我们可以在其中指定我们希望被创建的工厂对象的类型。

*/ 


function Car(options){
    this.doors = options.doors || 4;
    this.brand = options.brand || `奔驰`;
    this.color = options.color || `红色`;    
}

function Truck( options){
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

function Animal(options){
    this.category = options.category || `熊猫🐼`;
    this.age = options.age || `3`;
    this.color = options.color || `黑白`;

}


// 工厂

function Factory(){}

Factory.prototype.vehicleClass

Factory.prototype.createVehicle = function (options){
    
    switch ( options.vehicleType ) {
        case `Truck`:
            this.vehicleClass = Truck;
            break;

        case `Animal`:
            this.vehicleClass = Animal;
            break;            
    
        default:
            this.vehicleClass = Car;
            break;
    }

    return new this.vehicleClass( options )
}


//  启动工厂模式
let factory = new Factory()



let theCar = factory.createVehicle({
    vehicleType: '',  // 默认为车
    doors: 2,
    brand: '保时捷',
    color: '天空蓝'
})


let elphot = factory.createVehicle({
    vehicleType: 'Animal', // 产品类型
    category: `大象🐘`,
    age: 2,
    color: '灰色'
})


console.log('theCar____' , theCar);
console.log('elphot____' , elphot);

