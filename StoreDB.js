/*
	2012/8/31 23:32 	
	API定义

	1.Index(索引)
	2.Table
	3.DB(主要功能为支持SQL查询)
	
	以上的对象操作的只是索引。并非实际对象。

	4.Storage 索引对应的Localstorage对象。可能会涉及到数据结构的封装和过滤。

	伪代码：
		var user = new Table("user");
		user.add({name:"AKI",age:"22"});
		user.save();// 此步骤进行建立索引+存入localstorage

		DB.excuteSQL("select * from user"); // return [User,User......]

		Index则为Localstorage存储。
		面对=逻辑，采用key/value存储。
		面对>,<等逻辑，则采用sort特殊字段来做存储。

		DB查询可以根据查询结果进行复合查询。
		DB的功能也可以读取一个TableList，进行SQL查询。

	大概定义是这些。欢迎补充。
	至于用setItem和[]来做，我比较赞成setItem。函数式编程嘛。

 */





function Store(){

	/* 创建数据库方法 */
	this.create = function(dbjson){
		for(var i in dbjson){
			dbKey = i;
			dbValue = dbjson[i];
			localStorage.setItem(dbKey,dbValue);
		}
	}

	/* 清除整个数据库 */
	this.removeAll = function(){
		localStorage.clear();
	}

}