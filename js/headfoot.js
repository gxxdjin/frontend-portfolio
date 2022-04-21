$(document).ready(function(){
    $(".sub, .kor, .sub_r, .search_wrap ").hide();
    $(".h_left>ul>li").mouseenter(function(){
        $(".sub").fadeIn(300);
        $("header").animate({height:"400px"})
        $(".sub").animate({height : "300px"})
        $(".logo").fadeOut(300);
        $(".eng").hide();
        $(".kor").show();
});
    $(".h_left").mouseleave(function(){
        $(".logo").fadeIn();
        $(".sub").animate({height : "0px"});
        $("header").animate({height:"155px"});
        $(".kor").hide().delay(500);
        $(".eng").show().delay(500);
    });
     $(".h_right>ul>li").mouseenter(function(){
        $(".sub_r").fadeIn(300);
        $("header").animate({height:"400px"})
        $(".sub_r").animate({height : "300px"})
        $(".logo").fadeOut(300);
   
});
   $(".h_right").mouseleave(function(){
        $(".logo").fadeIn();
        $(".sub_r").animate({height :"0px"})
        $("header").animate({height:"155px"})
    })
    //$(".search_wrap").slideUp();
    
    $(".search").click(function(){
        $(".search_wrap").slideDown();
        $("header").animate({height : "400px"})
    })
    $(".search_close").click(function(){
        $(".search_wrap").slideUp();
        $("header").animate({height : "150px"})
    });
    $(".top").hide();
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        if(sct > 100){
            $(".top").show(700);
        }   
     });

        $(".footer_sel>li").hide();
     $(".footer_sel").click(function(){
        $(".footer_sel>li").toggle();
        $(".sel_name").toggle();
     },)

});