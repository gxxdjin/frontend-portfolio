$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        });


        $(".video_2").hide();
        $(".video_3").hide();
        $(".video_4").hide();

        $(".vi_btn1").click(function(){
            $(".video_2").show();
            $(".video_1, .video_3, .video_4").hide();
            $(".vi_btn1").css({
                "backgroundColor" : "#ae0f14"
            });
            $(".vi_btn2, .vi_btn3, .vi_btn_on").css({
                "backgroundColor" : "rgb(204, 204, 204)"
            });
        });
        $(".vi_btn2").click(function(){
            $(".video_3").show();
            $(".video_1, .video_2, .video_4").hide();
            $(".vi_btn2").css({
                "backgroundColor" : "#ae0f14"
            });
            $(".vi_btn1, .vi_btn3, .vi_btn_on").css({
                "backgroundColor" : "rgb(204, 204, 204)"
            });
        });
        $(".vi_btn3").click(function(){
            $(".video_4").show();
            $(".video_1, .video_2, .video_3").hide();
            $(".vi_btn3").css({
                "backgroundColor" : "#ae0f14"
            });
            $(".vi_btn1, .vi_btn2, .vi_btn_on").css({
                "backgroundColor" : "rgb(204, 204, 204)"
            });
        });
        $(".vi_btn_on").click(function(){
            $(".video_1").show();
            $(".video_2, .video_3, .video_4").hide();
            $(".vi_btn_on").css({
                "backgroundColor" : "#ae0f14"
            });
            $(".vi_btn1, .vi_btn2, .vi_btn3").css({
                "backgroundColor" : "rgb(204, 204, 204)"
            });
        });
});