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