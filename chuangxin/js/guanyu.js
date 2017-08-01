$(function(){
//	$(window).scroll(function(){
//		var i=$(window).scrollTop()-60;
//		if(i>0){
//			$(".nav").addClass("fix");
//			
//		}else{
//			$(".nav").removeClass("fix");
//		}
//	})
	   var ll=0;
	   var ww=183;
	$(".daohang_xia ul li").hover(function(){
		  $(this).find(".nav_ding").stop().slideDown(200,"elasticOut")
		 var oWid=$(this).outerWidth();
		 var oL=$(this).position().left;
	},function(){
		 $(this).find(".nav_ding").stop().slideUp();
		 $(".nav_d").stop().animate({left:ll,width:ww})
		
	})
	$(".daohang_xia ul li").click(function(){
		ww=$(this).outerWidth();
		ll=$(this).position().left;
	})
	
//	banner
  
   	   var Ob=$(".banner");
   	   var oR=$(".next");
   	   var oL=$(".prev");
   	   var oLen=$(".banner").length;
   	   var oyuna=$(".bannerz ul li");
   	   var index=0;
   	   var time=null;
    oR.click(function(){
    	index++;
    	if(index>oLen-1){
  		index=0;
  	}
  	fv();
    })
     oL.click(function(){
    	index--;
    	if(index<0){
  		index=oLen-1;
  	}
  	fv();
    })

   time=setInterval(function(){
	index++;
	if(index>oLen-1){
		index=0;
	}
	fv();
	
   },2000)
    function fv(){
    	$(".banner").stop().fadeOut().eq(index).stop().fadeIn(1000);
    	$(".bannerz ul li").removeClass("col").eq(index).addClass("col");
    	$(".banner").find(".img1,.img2").hide();
    	$(".banner").find(".img1").show().addClass("animated bounceIn");
    	$(".banner").eq(1).find(".img1").addClass("animated bounceInDown");
    	$(".banner").eq(1).find(".img2").addClass("animated bounceInUp");
    	$(".banner").find(".img2").show().addClass("animated fadeInRight");
    }
    
    
    
	
	$(".xia_shang .shangtu").hover(function(){
		$(this).addClass("animated shake");
	},function(){
		$(this).removeClass("animated shake");
	})
	
//	无缝轮播
   //小点的排他
    var ii=0;
	var jj=0;
	var xk=true;
	var www=$(".xia").eq(0).height();
	var lenn=$(".xia").length;
   $(".shang ul li").click(function(){
   	if(xk){
   		xk=false;
   		jj=$(this).index();
   	   $(".shang ul li").eq(jj).addClass("coll").siblings().removeClass();
   	   ii=jj;
   	   $(".xiaz").stop().animate({top:-www*ii},function(){
   	   	xk=true;
   	   });
   	}
   	
   	   
   })
   //字体效果
   $(".p3").hover(function(){
   	$(this).stop().addClass("animated flip")
   },function(){
   	$(".p3").stop().removeClass("animated flip")
   })
    $(".p4").hover(function(){
   	$(this).stop().addClass("animated zoomInLeft")
   },function(){
   	$(".p4").stop().removeClass("animated zoomInLeft")
   })
	
	
	
})
window.onload=function(){
	     var oDiv=document.getElementsByClassName("gunlun")[0];
	//onscroll事件发生在元素内容滚动时候，也包括键盘上下键，载入也可触发
				window.onscroll=function(){
					var clientH=document.documentElement.clientHeight;
					var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
					oDiv.style.top=scrollTop+clientH/2-51+"px";
				}
}
