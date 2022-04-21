$(document).ready(function(){
    $(".big_img").animate({
        borderWidth : "200px 80px 200px 80px",
    }, 1500);

    $(".spring_txt").animate({
        top: "400px",
        opacity : 1
    }, 2000)
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        if(sct > 120){
            $(".spring_title").animate({
                top: "-140px",
                opacity : 1
            }, 1500)
            $("figure>img").animate({
                opacity : 1
            },2000)
        }
    })
   
    $(".zs_img>img").css("visibility", "hidden");
    $(".zs span").hide();
    $(".zs>p").css("visibility", "hidden");
    $(".zs").mouseenter(function(){
      $(".zs>h4").addClass("zs_active");
      $(".zs>h4").siblings().removeClass("zs_active");
      $(this).find(".zs_img>img").css("visibility", "visible");
      $(this).find("span").show();
      $(this).find("p").css("visibility", "visible", "color" ,"#333").animate({top:"0"});
      $(this).siblings().find(".zs_img>img").css("visibility", "hidden");
      $(this).siblings().find("span").hide();
      $(this).siblings().find("p").css("visibility", "hidden",).animate({top:"50px"});
    });
 
      var swiper = new Swiper(".s_list", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".s_slide", {
        slidesPerView:1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

      $(".s_list>ul>li").onclick(function(){
        $(this).addClass("s_active");
        $(this).siblings().removeClass("s_active");
      })
      $(window).scroll(function(){
        var sct1 = $(window).scrollTop();
        if(sct1 > 250){
            $(".spring_title1").animate({
                paddingTop: "-140px",
                opacity : 1
            }, 1500)
        }
    })
  }); 
