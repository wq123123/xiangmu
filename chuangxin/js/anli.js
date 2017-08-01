$(function(){
	var i=0;
	$(".right ul li").click(function(){
		i=$(this).index();
		$(".nerongz").hide().eq(i).show();
	})
})
