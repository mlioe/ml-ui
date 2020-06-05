// function 

function getMonthData(year,month){//计算日历
	var ret = [];
	var year,month
	if(!year || !month){
		var today = new Date()//获取当前年月
		year = today.getFullYear()
		month = today.getMonth() + 1 //0-11，所以加1
	}
	var firstDay = new Date(year,month - 1,1)//当月第一天
	var firstDayWeekeyDay = firstDay.getDay()//第一天在星期几
	if(firstDayWeekeyDay === 0) firstDayWeekeyDay = 7;//周日是0，赋值7
	var lastDayOfLastMonth = new Date(year,month - 1,0)//获取上个月最后一天
	var lastDateOfLastMonth = lastDayOfLastMonth.getDate();//获取上个月日期
	var perMonthDayCount = firstDayWeekeyDay //获取这个月的日期，周一则前面显示1个上月的日期以此类推，周日则前面没有
	var lastDay = new Date(year,month,0)//获去本月最后一天
	var lastDate = lastDay.getDate()
	
	for(var i = 0;i<7*6;i++){//获取42天的数据
		var date = i + 1 - perMonthDayCount;
		var showDate = date;
		var thisMonth = month;
		if(date<=0){
			//上一个月
			thisMonth = month - 1
			showDate = lastDateOfLastMonth+date
		}else if(date > lastDate){
			//下一个月
			thisMonth = month + 1
			showDate = showDate - lastDate
		}
		if(thisMonth === 0) thisMonth = 12
		if(thisMonth === 13) thisMonth = 1
		
		ret.push({
			month:thisMonth,
			date:date,
			showDate:showDate,
			year:year
		})
	}
	return ret
}



export default {
	getMonthData,
}