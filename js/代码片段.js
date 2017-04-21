//******************************我的代码片段********************************
//******************************随机数生成器********************************
function random( range ){
	var max = Math.max( range[0] , range[1] ) ;
	var min = Math.min( range[0] , range[1]) ;
	var diff = max-min ;//计算差值
	var number = Math.ceil( (Math.random()*diff + min) ) ;
	return number ;
}
