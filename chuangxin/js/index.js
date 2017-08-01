$(function(){
$(document).ready(function() {
	$.fn.fullpage({
       controlArrowColor:"#cccccc",
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		 navigation:true,
		 navigationPosition:"left",
		afterLoad: function(anchorLink,index){
			if(index == 1){
				$(".tubiao1").hide();
				$('.section2').find("p").delay(700).removeClass("pp")
				$(".tubiao .tubiao1").each(function(i){
					var that=$(this);
					setTimeout(function(){
						that.show().removeClass("animated fadeInUp")
					},200*i)
				})
				
			}
			if(index == 2){
				
				$(".tubiao .tubiao1").each(function(i){
					var that=$(this);
					setTimeout(function(){
						that.show().addClass("animated fadeInUp")
					},200*i)
				})
				$('.section2').find("p").delay(700).addClass("pp")
			}
			if(index == 3){
				$('.section3').find("p").delay(700).addClass("pp")
				var i=0;
				$(".prevz").click(function(){
					i++;
					if(i>$(".lunbo_left").length-1){
						i=0
					}
					$(".lunbo_left").fadeOut(500).eq(i).fadeIn(500).addClass("animated zoomInLeft")
					$(".lunbo_right").fadeOut(500).eq(i).fadeIn(500).addClass("animated zoomInRight")
				})
				$(".nextz").click(function(){
					i++;
					if(i>$(".lunbo_right").length-1){
						i=0
					}
					$(".lunbo_left").fadeOut(500).eq(i).fadeIn(500).addClass("animated zoomInRight")
					$(".lunbo_right").fadeOut(500).eq(i).fadeIn(500).addClass("animated zoomInLeft")
				})
				
				$('.section2').find("p").delay(700).removeClass("pp")
			}
			if(index == 4){
				$('.section4').find('p').fadeIn(2000);
			}
			if(index == 5){
				$(".youshi .youshi_left").each(function(i){
					var that=$(this);
					setTimeout(function(){
						that.show().addClass("animated fadeInUp")
						
					},200*i)
				})
				$(".shuzi .shuzi1").each(function(i){
					var that=$(this);
					setTimeout(function(){
						that.show().addClass("animated zoomInUp")
						
					},300*i)
				})
				$(".youshi_left").hover(function(){
					$(this).stop().removeClass("animated fadeInUp").addClass("animated bounceIn")
				},function(){
					$(".youshi_left").removeClass("animated bounceIn")
				})
				$('.section5').find("p").delay(700).addClass("pp")
				$('.ziti').find("p").addClass("animated fadeInUp")
			}
				if(index == 6){
				$(".lianxi1 .lian_left").each(function(i){
					var that=$(this);
					setTimeout(function(){
						that.show().addClass("animated zoomInUp")
						
					},200*i)
				})
				
				$(".lianxi1 .lian_left").hover(function(){
					$(this).stop().removeClass("animated zoomInUp").addClass("animated bounceIn")
				},function(){
					$(".lianxi1 .lian_left").removeClass("animated bounceIn")
				})
				$('.section6').find("p").delay(700).addClass("pp")
				$('.ziti').find("p").addClass("animated fadeInUp")
				$(".xia_right").delay(200).addClass("animated fadeInRight")
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.section3').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
				
			}
			if(index == '4'){
				$('.section4').find('p').fadeOut(2000);
			}
		}
	});
});
    
    //banner
    var time=null;
    var len=$("ol li").length;
    var i=0
    $("ol li").click(function(){
    	 i=$(this).index();
       $("ol li").removeClass("col").eq(i).addClass("col");
      $(".zz").fadeOut().eq(i).fadeIn();
      
      
    })
    Run()
    time=setInterval(Run,3000)
    function Run(){
    	i++
    	if(i>len-1){
    		i=0
    		
    	}
    	$("ol li").removeClass("col").eq(i).addClass("col");
      $(".zz").fadeOut().eq(i).fadeIn(200);
      animationed()
    }
    function animationed(){
    	
    	$(".banner1").find("img").addClass("animated fadeInLeft")
    	$(".banner2").find("h4").show().addClass("animated bounceIn");
    	$(".banner2").find(".span1").addClass("animated fadeInLeft");
    	$(".banner2").find(".z").addClass("animated fadeInRight");
    	
    	$(".banner3").find("p").find(".img22").addClass("animated fadeInRight")
    	$(".banner3").find("p").find(".img23").addClass("animated fadeInLeft")
    	$(".banner3").find(".p5").addClass("animated fadeInUp")
    }
})