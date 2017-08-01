$(function(){
	$(".top").hover(function(){
		$(".top_zi").delay(200).addClass("animated fadeInLeft")
		$(".top_tupian").delay(400).addClass("animated fadeInRight")
	},function(){
		$(".top_zi").delay(200).removeClass("animated fadeInLeft")
		$(".top_tupian").delay(400).removeClass("animated fadeInRight")
	})
	$(".zz").hover(function(){
		$(".wenzi_left").addClass("animated zoomInLeft")
		$(".wenzi_right").addClass("animated zoomInRight")
		$(".qian1").addClass("animated fadeInLeft")
	},function(){
		$(".wenzi_left").removeClass("animated zoomInLeft")
		$(".wenzi_right").removeClass("animated zoomInRight")
	})
	$(".yunying_center").hover(function(){
		$(".yun_left").delay(200).addClass("animated zoomInLeft");
		$(".yun_right").delay(200).addClass("animated zoomInRight");
		$(".tuandui1").each(function(i){
			var that=$(this);
			setTimeout(function(){
				that.addClass("animated fadeInUp");
			},400*i)
			
		})
		
	},function(){
		$(".yun_left").delay(200).removeClass("animated zoomInLeft");
		$(".yun_right").delay(200).removeClass("animated zoomInRight");
	    $(".tuandui1").removeClass("animated fadeInUp")
	})
})
