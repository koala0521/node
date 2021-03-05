# JS数据结构 Map




|           | Map   | Object  |
| --------- | ---------------- | ----------------- |
| 默认Key   | Map 默认情况不包含任何键。只包含显式插入的键                 | 一个 Object 有一个原型, 原型链上的键名有可能和你自己在对象上的设置的键名产生冲突 |
| Key的类型 | 一个 Map的键可以是任意值，包括函数、对象或任意基本类型       | 一个Object 的键必须是一个 String 或是Symbol                  |
| Key的顺序 | Map 中的 key 是有序的。因此，当迭代的时候，一个 Map 对象以插入的顺序返回键值 | 一个 Object 的键是无序的                                     |
| Size      | Map 的键值对个数可以轻易地通过size 属性获取                  | Object 的键值对个数只能手动计算                              |
| 迭代      | Map 是 iterable 的，所以可以直接被迭代                       | 迭代一个Object需要以某种方式获取它的键然后才能迭代           |
| 性能      | 在频繁增删键值对的场景下表现更好                             | 在频繁添加和删除键值对的场景下未作出优化                     |


## 构造函数

Map() 构造函数 创建 Map 对象.

`new Map([iterable])`

参数 iterable

Iterable 可以是一个数组或者其他 iterable 对象，其元素为键值对(两个元素的数组，例如: [[ 1, 'one' ],[ 2, 'two' ]])。 每个键值对都会添加到新的 Map。null 会被当做 undefined。

示例

```javascript

let myMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
])

```

## 属性

Map.length

属性 length 的值为 0 。
想要计算一个Map 中的条目数量， 使用 Map.prototype.size.

## 方法

- clear() 方法会移除Map对象中的所有元素。

语法

`myMap.clear();` 返回值 undefined.


示例

```javascript

let myMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
])

myMap.set('bar', 'baz')

console.log( myMap.size )   // 4

myMap.clear()

console.log(myMap.size)     // 0

```


- delete() 方法用于移除 Map 对象中指定的元素。

语法

`myMap.delete(key);`  

参数 key   必须。从 Map 对象中移除的元素的键。 

返回值 Boolean

`console.log( myMap.delete('bar'));   //true`


- entries() 方法返回一个新的包含 [key, value] 对的 Iterator 对象，返回的迭代器的迭代顺序与 Map 对象的插入顺序相同。

语法    

`myMap.entries()`

返回值

一个新的 Map 迭代器对象.


示例

```javascript

    var myMap = new Map();
    myMap.set("0", "foo");
    myMap.set(1, "bar");
    myMap.set({}, "baz");

    var mapIter = myMap.entries();

    console.log(mapIter.next().value); // ["0", "foo"]
    console.log(mapIter.next().value); // [1, "bar"]
    console.log(mapIter.next().value); // [Object, "baz"]

```

- forEach() 方法按照插入顺序依次对 Map 中每个键/值对执行一次给定的函数
  

语法

`myMap.forEach(callback([value][,key][,map])[, thisArg])`

参数

callback

myMap 中每个元素所要执行的函数。它具有如下的参数：

    value 可选
        每个迭代的值。
    key 可选
        每个迭代的键。
    map 可选
        被迭代的map（上文语法框中的 myMap）。
    thisArg 可选
        在 callback 执行中使用的 this 的值。 

示例

```javascript

function logMapElements(value, key, map) {
    console.log(`map.get('${key}') = ${value}`)
}
new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements)
// logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"

```

- get() 方法返回某个 Map 对象中的一个指定元素。
  

语法

myMap.get(key);

参数

key 必须参数，也是它唯一的参数，要从目标 Map 对象中获取的元素的键。 

返回值

返回一个 Map 对象中与指定键相关联的值，如果找不到这个键则返回 undefined。

示例

```javascript

var myMap = new Map();
myMap.set("bar", "foo");

myMap.get("bar");  // 返回 "foo"
myMap.get("baz");  // 返回 undefined


```

- 方法has() 返回一个bool值，用来表明map 中是否存在指定元素.

语法

myMap.has(key);

参数 key 必填. 用来检测是否存在指定元素的键值. 

返回值  Boolean  如果指定元素存在于Map中，则返回true。其他情况返回false 

案例

```javascript

    var myMap = new Map();
    myMap.set("bar", "foo");

    myMap.has("bar");  // returns true
    myMap.has("baz");  // returns false

```

- keys() 返回一个引用的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的key值。

语法

myMap.keys()

返回值

一个存在引用关系的 Map iterator 对象.

例子

```javascript

    var myMap = new Map();
    myMap.set("0", "foo");
    myMap.set(1, "bar");
    myMap.set({}, "baz");

    var mapIter = myMap.keys();

    console.log(mapIter.next().value); // "0"
    console.log(mapIter.next().value); // 1
    console.log(mapIter.next().value); // Object

```

- set() 方法为 Map 对象添加或更新一个指定了键（key）和值（value）的（新）键值对。
  

语法

`myMap.set(key, value);`


参数

key
要添加至相应 Map 对象的元素的键。
value
要添加至相应 Map 对象的元素的值。

返回值

Map 对象

示例

```javascript

    var myMap = new Map();

    // 将一个新元素添加到 Map 对象
    myMap.set("bar", "foo");
    myMap.set(1, "foobar");

    // 在Map对象中更新某个元素的值
    myMap.set("bar", "baz");

```

链式使用 set 方法

因为 Set() 方法返回 Map 对象本身，所以你可以像下面这样链式调用它:

```javascript

// Add new elements to the map with chaining.
myMap.set('bar', 'foo')
     .set(1, 'foobar')
     .set(2, 'baz');

```

- values() 方法返回一个新的Iterator对象。它包含按顺序插入Map对象中每个元素的value值。

语法

`myMap.values()`

返回值

一个新的 Map 可迭代对象.

例子

使用 values()

```javascript

var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

var mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"

```