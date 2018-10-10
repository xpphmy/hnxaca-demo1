// 标签栏Tab切换
	var lia=document.getElementsByClassName("nav")[0].getElementsByTagName("a");
	var lis=document.getElementsByClassName("nav")[0].getElementsByTagName("li");
	var lias=document.getElementsByClassName("nav")[0].getElementsByClassName("as");
	var navs=document.getElementsByClassName("nav");
	var xiala=document.getElementsByClassName("xiala");
	

	for(var i=0;i<lis.length;i++){//遍历
		lis[i].onmouseover=function(){
			lia[0].id="";
			for(var j=0;j<lis.length;j++){
				if(lis[j]==this){//匹配
					lia[j].id="select";
				}else{
					lia[j].id="";
				}
			}
		}
	}
lis[1].onmouseout=function(){
	lia[1].id="";
	lia[0].id="select";
}
$('#ulHeaderNav > li').each(function(navId){
	$(this).bind('mouseenter',function(){
		if(navId > 0 && navId <= 6){
			$('#popHeaderNav > .navTab').hide();
			$('#popHeaderNav > .navTab').eq(navId-1).show();
			$('#popHeaderNav > .navTab').parent().stop().slideDown();
		}
		else{

			$('#popHeaderNav > .navTab').parent().slideUp();
		}
	});
	$('#popHeaderNav > .navTab').parent().bind('mouseleave',function(){
		$('#popHeaderNav > .navTab').parent().slideUp();
		lia[0].id="select";
		lia[navId].id="";
	});
});




// 大图轮播
	// var outer=document.getElementsByClassName("outer")[0];
	// var outIns=document.getElementsByClassName("slideshow-image");
	// var liss=document.getElementsByClassName("ulLi")[0].getElementsByTagName("li");
	// var op=document.getElementsByClassName("ps");
	// var x=0,timer=null,timer2=null;
	// function move(){
	// 	clearInterval(timer);
	// 	var start=outer.scrollLeft;
	// 	var end=outIns[0].offsetWidth*x;
	// 	var step=0;
	// 	var maxStep=5;
	// 	var everyStep=(end-start)/maxStep;
	// 	timer=setInterval(function(){
	// 		step++;
	// 		if(step>=maxStep){
	// 			step=0;
	// 			clearInterval(timer);
	// 		}
	// 		outer.scrollLeft+=everyStep;
	// 	},1);
	// }
	// function autoMove(){
	// 	clearInterval(timer2);
	// 	timer2=setInterval(function(){
	// 		x++;
	// 		if(x>=outIns.length){
	// 			x=0;
	// 		}
	// 		move();
	// 		fn_style();
	// 	},5000);
	// }
	// autoMove();
	// function fn_style(){
	// 	for(var i=0;i<liss.length;i++){
	// 		liss[i].id="";
	// 	}
	// 	liss[x].id="select0";
	// }
	// for(var m=0;m<liss.length;m++){
	// 	liss[m].onmouseover=function(){
	// 		for(var n=0;n<liss.length;n++){
	// 			if(liss[n]==this){
	// 				x=n;
	// 				clearInterval(timer2);
	// 				move();
	// 				fn_style();
	// 				autoMove();
	// 			}
	// 		}
	// 	}
	// }

	// op[0].onclick=function(){
	// 	clearInterval(timer2);
	// 	if(x<=0){
	// 		x=outIns.length;
	// 	}
	// 	x--;
	// 	move();
	// 	fn_style();
	// 	autoMove();
	// }
	// op[1].onclick=function(){
	// 	clearInterval(timer2);
	// 	x++;
	// 	if(x>=outIns.length){
	// 		x=0;
	// 	}
	// 	move();
	// 	fn_style();
	// 	autoMove();
	// }


// outer.onmouseover=function(){
// 	op[0].style.opacity=" .5";
// 	op[0].style.opacity=" .5";
// }
// outer.onmouseout=function(){
// 	op[0].style.display="none";
// 	op[1].style.display="none";
// }

//动画
