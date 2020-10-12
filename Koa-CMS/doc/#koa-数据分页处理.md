<!--
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-10-09 16:39:21
 * @LastEditTime: 2020-10-12 14:52:15
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/doc/#koa-数据分页处理.md
-->

# koa 

```

    skip(number)    // 查询数据时，跳过指定的数量的数据

    limit(number)   // 限制返回数据的数量

```

## 一、 数据库分页查询数据的原理算法

### 规则：

规定每页 20 条数据的查询方式： 

查询第一页（page=1）: db.表名.find().skip(0).limit(20) 
查询第二页（page=2）: db.表名.find().skip(20).limit(20) 
查询第三页（page=3）: db.表名.find().skip(40).limit(20)



### 总结：分页查询的 sql 语句 

```
    db.表名.find().skip((page-1)*pageSize).limit(pageSize)

```


## 二、 数据库分页方法封装

1. find 方法修改 

```

    db.collection(collectionName).find(json1,{fields:attr}).skip(slipNum).limit(pageSize);


    // json1 为查询数据的条件

    // {fields:attr}   attr 为查询的具体字段的 json ，默认返回全部字段

```