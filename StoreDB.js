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