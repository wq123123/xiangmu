		$(function(){
			var h=$(window).height();
			var index=0;
			var flag=true;
			var jj=0;   //  滚轮滚一次不动让它滚第二次触发事件
			var time=null;
			var len=$(".bottom ul li").length;
			//获取屏幕的高度，然后赋值给需要滚动的盒子
			$(".bottom,.bottom ul li").css({height:h});
			$(window).resize(function(){
				//监听窗口大小的改变，再重新获取窗口的高度，再重新赋值
				h=$(window).height();
				$(".bottom,.bottom ul li").css({height:h});
			})
			function add(a,evt,fn){
				if(a.addEventListener){
					a.addEventListener(evt,fn)
				}else{
					a.attachEvent("on"+evt,fn)
				}
			}
			add(window,"mousewheel",gun);
//			谷歌ie的鼠标滚轮事件
       add(window,"DOMMouseScroll",gun);
//          火狐的滚轮事件
     function gun(evt){
     	var e=evt||window.event;
     	if(e.detail){
//   		如果你是火狐
             if(e.detail<0){
             	myUp()
             }else if(e.detail>0){
//           if(ll){
     				myDown()
//   			}
             	
             	
             }
     	}else if(e.wheelDelta){
//   		如果你是谷歌和IE
     		if(e.wheelDelta>0){
     			myUp()
     		}else if(e.wheelDelta<0){
     			
     				myDown()
     			
             	
             	
             }
     		
     	}
     };
     //滚轮第二次发生的时候我们让他滚动
        $(".dingweiyi").click(function(){
        	flag=false;
          	index=$(this).index();
          	
          })
        function Run(){
        	$(".bottom ul").animate({top:-index*h},400,function(){
        		
          		flag=true;      //节流阀
          		jj=0;
          		$(".dingweiyi").removeClass("col").eq(index).addClass("col");
          	})
        }
       function myUp(){
       	if(jj<1){
       		clearInterval(time);
       		time=setTimeout(function(){
       			jj++;   //延时器
       		},200)
       	}else if(flag){
       		flag=false;
       		index--;
          	if(index<0){
          		index=0;
          	}
          	Run();	
       	} 	
          }
          function myDown(){
          	$(".zhezhao").slideUp()
          	$(".jue").show(500);
          	if(jj<1){
          		clearInterval(time);
          		time=setTimeout(function(){
          			jj++;
          		},200)
          	}else if(flag){
          		flag=false;
          		index++;
          	if(index>len-1){
          		index=len-1;
          	}
          	Run();
          	}   	
          }
          
          setTimeout(function(){
          	$(".zhezhao_center").animate({top:30},600,function(){
          		$(".zhezhao_center .dd").each(function(i){
          			var that=$(this);
          			setTimeout(function(){
          				that.show().addClass("animated fadeInUp");
          			},200*i)
          			
          		})
          	})
          	setTimeout(function(){
          		$(".zhezhao").slideUp()
          	},1200)
          },2000)
          var ll=false;
          var ff=0;
          $(".zhezhao").click(function(){
          	if(ff<1){
          		ff++
          		
          	}else{
          		$(".zhezhao").slideUp(function(){
          			ll=true;
          		});
          	}
          });
        
		})
		
//		$(function(){
//			 $(window).scroll(function(){
//       	var i=$("window").scrollTop()-60;
//       	if(i>0){
//       		
//       	}
//       })
//		})
			