function times(){
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
}
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
	$("#tj,#tjlist").addClass("active");
	$("#gw,#sp,#yx,#xw,#zzs,#ty,#gwlist,#splist,#yxlist,#xwlist,#zzslist,#tylist").removeClass("active");
})
$("#gw").hover(function(){
	$("#gw,#gwlist").addClass("active");
	$("#tj,#sp,#yx,#xw,#zzs,#ty,#tjlist,#splist,#yxlist,#xwlist,#zzslist,#tylist").removeClass("active");
})
$("#sp").hover(function(){
	$("#sp,#splist").addClass("active");
	$("#gw,#tj,#yx,#xw,#zzs,#ty,#tjlist,#gwlist,#yxlist,#xwlist,#zzslist,#tylist").removeClass("active");
})
$("#yx").hover(function(){
	$("#yx,#yxlist").addClass("active");
	$("#gw,#tj,#sp,#xw,#zzs,#ty,#tjlist,#gwlist,#splist,#xwlist,#zzslist,#tylist").removeClass("active");
})
$("#xw").hover(function(){
	$("#xw,#xwlist").addClass("active");
	$("#gw,#tj,#sp,#yx,#zzs,#ty,#tjlist,#gwlist,#splist,#yxlist,#zzslist,#tylist").removeClass("active");
})
$("#zzs").hover(function(){
	$("#zzs,#zzslist").addClass("active");
	$("#gw,#tj,#sp,#yx,#xw,#ty,#tjlist,#gwlist,#splist,#yxlist,#xwlist,#tylist").removeClass("active");
})
$("#ty").hover(function(){
	$("#ty,#tylist").addClass("active");
	$("#gw,#tj,#sp,#yx,#xw,#zzs,#tjlist,#gwlist,#splist,#yxlist,#xwlist,#zzslist").removeClass("active");
})
}