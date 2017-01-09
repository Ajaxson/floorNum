/*
	@param (sumPrice)   必选，比例总数
	@param (chance) 	必选，比率, 各种奖品所占用百分比 
	@param (ratio)  	可选，扩大取值范围，默认是 100 倍
*/
function priceFloor(options){
	// 自定义参数
	var sumQuota = options.sumQuota;	
	var chance = options.chance;  
	var ratio = options.ratio || 100;

	//无需修改
	var sum = sumQuota * ratio;	//取值范围扩大后的倍数
	var newChance = [ ];	//用于存储  新的  各奖品所占的长度
	var nowAdd = 0;			//现奖品所在位置
	var floorNum = 0;		//随机数
	var returnNum = 0;		//最终结果
	
	floorNum = Math.floor(Math.random()*sum+1);
	for(var i=0,l=chance.length; i<l; i ++){
		nowAdd = nowAdd + chance[i] / sumQuota * sum;
		newChance[i] = nowAdd;
	}
	if(floorNum <= newChance[0]){
		returnNum = 1;
	}else if(floorNum <= newChance[1]){
		returnNum = 2;
	}else if(floorNum <= newChance[2]){
		returnNum = 3;
	}else if(floorNum <= newChance[3]){
		returnNum = 4;
	}else if(floorNum <= newChance[4]){
		returnNum = 5;
	}else if(floorNum < newChance[5]){
		returnNum = 6;
	}

	// test
	var text = '0' + ' < 产生数 <= ' + newChance[0] + '奖品为 1</br>' + 
		newChance[0] + ' < 产生数 <= ' + newChance[1] + '奖品为 2</br>' + 
		newChance[1] + ' < 产生数 <= ' + newChance[2] + '奖品为 3</br>' +
		newChance[2] + ' < 产生数 <= ' + newChance[3] + '奖品为 4</br>' +
		newChance[3] + ' < 产生数 <= ' + newChance[4] + '奖品为 5</br>' +
		newChance[4] + ' < 产生数 <= ' + newChance[5] + '奖品为 6</br>' +
		'随机数 ' + floorNum + '</br>' +
		'结果 ' + returnNum + '</br>';
	document.querySelector('.text').innerHTML = text;
	// test end

	return floorResult = returnNum;
}

// new demo
// priceFloor({
// 	sumQuota: 100,
// 	chance : [10,20,5,5,1,59]
// });
