<!--
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-10-09 16:39:21
 * @LastEditTime: 2020-10-09 16:54:13
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/doc/#koa-导入导出.md
-->
#koa 


##数据库导入导出



在 Mongodb 中我们使用 **mongodump** 命令来备份 MongoDB 数据。该命令可以导出所有数据 

到指定目录中。mongodump 命令可以通过参数指定导出的数据量级转存的服务器。使用 

**mongorestore** 命令来恢复备份的数据。


dbhost: 数据库地址

dbname: 集合名词

path:路劲



###1、导出数据

```
mongodump -h dbhost -d dbname -o path

```



###2、导入数据

```
mongorestore -h dbhost -d dbname path

```



