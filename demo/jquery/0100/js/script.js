var g_Interval = 1;
var g_PersonCount = 500;//参加抽奖人数
var g_Timer;
var running = false;
function beginRndNum(trigger){
	if(running){
		running = false;
		clearTimeout(g_Timer);		
		$(trigger).val("开始");
		$('#ResultNum').css('color','red');
	}
	else{
		running = true;
		$('#ResultNum').css('color','black');
		$(trigger).val("停止");
		beginTimer();
	}
}

function updateRndNum(){
	var num = Math.floor(Math.random()*g_PersonCount+1);
	$('#ResultNum').html(num);
}

function beginTimer(){
	g_Timer = setTimeout(beat, g_Interval);
}

function beat() {
	g_Timer = setTimeout(beat, g_Interval);
	updateRndNum();
}
/*
本代码由模板在线收集并编辑整理;
尊重他人劳动成果;
转载请保留模板在线链接 - www.htmldivcss.com
*/