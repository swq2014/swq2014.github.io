window.onload=
setInterval(function(){
	var h1=document.getElementById('hours');
	var m1=document.getElementById('min');
	var s1=document.getElementById('sc');
	var h=new Date().getHours();
	var m=new Date().getMinutes();
	var s=new Date().getSeconds();
	h<10?h1.innerHTML="0"+h+":":h1.innerHTML=h+":";
	m<10?m1.innerHTML="0"+m+":":m1.innerHTML=m+":";
	s<10?s1.innerHTML="0"+s:s1.innerHTML=s;
},1000);
function week(){
	var w1=document.getElementById("week");
	var w=new Date().getDay();
	switch(w){
		case 1:
		w1.innerHTML="周一";
		break;
		case 2:
		w1.innerHTML="周二";
		break;
		case 3:
		w1.innerHTML="周三";
		break;
		case 4:
		w1.innerHTML="周四";
		break;
		case 5:
		w1.innerHTML="周五";
		break;
		case 6:
		w1.innerHTML="周六";
		break;
		default:
		w1.innerHTML="周日";
	}
}
function nav(){
$("#tj").hover(function(){
		$("#tj").addClass("active");
		$("#gw").removeClass("active");
		$("#sp").removeClass("active");
		$("#yx").removeClass("active");
		$("#xw").removeClass("active");
		$("#zzs").removeClass("active");
		$("#ty").removeClass("active");
		$("#tjlist").addClass("active");
		$("#gwlist").removeClass("active");
		$("#splist").removeClass("active");
		$("#yxlist").removeClass("active");
		$("#xwlist").removeClass("active");
		$("#zzslist").removeClass("active");
		$("#tylist").removeClass("active");
})
$("#gw").hover(function(){
	$("#gw").addClass("active");
	$("#tj").removeClass("active");
	$("#sp").removeClass("active");
	$("#yx").removeClass("active");
	$("#xw").removeClass("active");
	$("#zzs").removeClass("active");
	$("#ty").removeClass("active");
	$("#gwlist").addClass("active");
	$("#tjlist").removeClass("active");
	$("#splist").removeClass("active");
	$("#yxlist").removeClass("active");
	$("#xwlist").removeClass("active");
	$("#zzslist").removeClass("active");
	$("#tylist").removeClass("active");
})
$("#sp").hover(function(){
	$("#sp").addClass("active");
	$("#tj").removeClass("active");
	$("#gw").removeClass("active");
	$("#yx").removeClass("active");
	$("#xw").removeClass("active");
	$("#zzs").removeClass("active");
	$("#ty").removeClass("active");	
	$("#splist").addClass("active");
	$("#tjlist").removeClass("active");
	$("#gwlist").removeClass("active");
	$("#yxlist").removeClass("active");
	$("#xwlist").removeClass("active");
	$("#zzslist").removeClass("active");
	$("#tylist").removeClass("active");
})
$("#yx").hover(function(){
	$("#yx").addClass("active");
	$("#tj").removeClass("active");
	$("#gw").removeClass("active");
	$("#sp").removeClass("active");
	$("#xw").removeClass("active");
	$("#zzs").removeClass("active");
	$("#ty").removeClass("active");	
	$("#yxlist").addClass("active");
	$("#tjlist").removeClass("active");
	$("#splist").removeClass("active");
	$("#gwlist").removeClass("active");
	$("#xwlist").removeClass("active");
	$("#zzslist").removeClass("active");
	$("#tylist").removeClass("active");
})
$("#xw").hover(function(){
	$("#xw").addClass("active");
	$("#tj").removeClass("active");
	$("#gw").removeClass("active");
	$("#sp").removeClass("active");
	$("#yx").removeClass("active");
	$("#zzs").removeClass("active");
	$("#ty").removeClass("active");	
	$("#xwlist").addClass("active");
	$("#tjlist").removeClass("active");
	$("#splist").removeClass("active");
	$("#yxlist").removeClass("active");
	$("#gwlist").removeClass("active");
	$("#zzslist").removeClass("active");
	$("#tylist").removeClass("active");
})
$("#zzs").hover(function(){
	$("#zzs").addClass("active");
	$("#tj").removeClass("active");
	$("#gw").removeClass("active");
	$("#sp").removeClass("active");
	$("#yx").removeClass("active");
	$("#xw").removeClass("active");
	$("#ty").removeClass("active");	
	$("#zzslist").addClass("active");
	$("#tjlist").removeClass("active");
	$("#splist").removeClass("active");
	$("#yxlist").removeClass("active");
	$("#xwlist").removeClass("active");
	$("#gwlist").removeClass("active");
	$("#tylist").removeClass("active");
})
$("#ty").hover(function(){
	$("#ty").addClass("active");
	$("#tj").removeClass("active");
	$("#gw").removeClass("active");
	$("#sp").removeClass("active");
	$("#yx").removeClass("active");
	$("#xw").removeClass("active");
	$("#zzs").removeClass("active");	
	$("#tylist").addClass("active");
	$("#tjlist").removeClass("active");
	$("#splist").removeClass("active");
	$("#yxlist").removeClass("active");
	$("#xwlist").removeClass("active");
	$("#zzslist").removeClass("active");
	$("#gwlist").removeClass("active");
})
}