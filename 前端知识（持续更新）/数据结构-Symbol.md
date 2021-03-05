# 数据结构 Symbol

symbol 是一种基本数据类型 （primitive data type）。Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的symbol注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"。

每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的

语法

`Symbol([description])`


参数

description 可选

可选的，字符串类型。对symbol的描述，可用于调试但不是访问symbol本身。 

描述

直接使用Symbol()创建新的symbol类型，并用一个可选的字符串作为其描述。

```javascript

var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');

```

上面的代码创建了三个新的symbol类型。 注意，Symbol("foo") 不会强制将字符串 “foo” 转换成symbol类型。它每次都会创建一个新的 symbol类型：

```javascript
    Symbol("foo") === Symbol("foo"); // false
```

下面带有 new 运算符的语法将抛出 TypeError 错误：

```javascript

var sym = new Symbol(); // TypeError

```


## 全局共享的 Symbol

上面使用Symbol() 函数的语法，不会在你的整个代码库中创建一个可用的全局的symbol类型。 要创建跨文件可用的symbol，甚至跨域（每个都有它自己的全局作用域） , 使用 Symbol.for() 方法和  Symbol.keyFor() 方法从全局的symbol注册表设置和取得symbol。

## 在对象中查找 Symbol 属性

Object.getOwnPropertySymbols() 方法让你在查找一个给定对象的符号属性时返回一个symbol类型的数组。注意，每个初始化的对象都是没有自己的symbol属性的，因此这个数组可能为空，除非你已经在对象上设置了symbol属性。

```javascript

    Object.getOwnPropertySymbols({})    // []

```

## 属性


Symbol.length

长度属性，值为0。

Symbol.prototype

symbol构造函数的原型。 

## 方法

`Symbol.for(key)`

使用给定的key搜索现有的symbol，如果找到则返回该symbol。否则将使用给定的key在全局symbol注册表中创建一个新的symbol。

返回值

返回由给定的 key 找到的 symbol，否则就是返回新创建的 symbol。

描述

和 Symbol() 不同的是，用 Symbol.for() 方法创建的的 symbol 会被放入一个全局 symbol 注册表中。Symbol.for() 并不是每次都会创建一个新的 symbol，它会首先检查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个。

示例

```javascript

    Symbol.for("foo"); // 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
    Symbol.for("foo"); // 从 symbol 注册表中读取键为"foo"的 symbol


    Symbol.for("bar") === Symbol.for("bar"); // true，证明了上面说的
    Symbol("bar") === Symbol("bar"); // false，Symbol() 函数每次都会返回新的一个 symbol


    var sym = Symbol.for("mario");
    sym.toString();
    // "Symbol(mario)"，mario 既是该 symbol 在 symbol 注册表中的键名，又是该 symbol 自身的描述字符串

```

为了防止冲突，最好给你要放入 symbol 注册表中的 symbol 带上键前缀。

```javascript

    Symbol.for("mdn.foo");
    Symbol.for("mdn.bar");

```


`Symbol.keyFor(sym)`

从全局symbol注册表中，为给定的symbol检索一个共享的?symbol key。 

参数

sym    必选参数，需要查找键值的某个 Symbol 。 

返回值

如果全局注册表中查找到该symbol，则返回该symbol的key值，返回值为字符串类型。否则返回 undefined 

示例

```javascript

    // 创建一个全局 Symbol
    var globalSym = Symbol.for("foo");
    Symbol.keyFor(globalSym); // "foo"

    var localSym = Symbol();
    Symbol.keyFor(localSym); // undefined，

    // 以下Symbol不是保存在全局Symbol注册表中
    Symbol.keyFor(Symbol.iterator) // undefined

```

## Symbol 原型

所有 Symbols 继承自 Symbol.prototype.

属性

Symbol.prototype.constructor

返回创建实例原型的函数. 默认为 Symbol 函数。

Symbol.prototype.description

一个包含symbol描述的只读字符串。 

示例

对 symbol 使用 typeof 运算符。typeof运算符能帮助你识别 symbol 类型

```javascript

    typeof Symbol() === 'symbol'
    typeof Symbol('foo') === 'symbol'
    typeof Symbol.iterator === 'symbol'

```

Symbols 与 for...in 迭代

Symbols 在 for...in 迭代中不可枚举。

另外，Object.getOwnPropertyNames() 不会返回 symbol 对象的属性，但是你能使用 Object.getOwnPropertySymbols() 得到它们。

