
    // smooth scroll
    $("html").easeScroll();
    
    // scroll effect
    $(window).scroll(function() {
        scrollEft('.move');
    });
    
    setTimeout(function() {
        active();
    }, 1800)

    function ace() {
        location.href = 'AceBed_main.html';
    }
    function round() {
        location.href = 'roundAround_main.html';
    }
    function eoyeomo() {
        location.href = 'eoyeomo_main.html';
    }
    function kumkang() {
        location.href = 'main.html';
    }

    function zoomIn(event) {
        event.target.style.transform = "scale(1.2)";
        event.target.style.transition = "all 0.5s";
    }
    
    function zoomOut(event) {
        event.target.style.transform = "scale(1)";
        event.target.style.transition = "all 0.5s";
    }

    function home(){
        var offset = $('#sec1').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    }
    function about(){
        var offset = $('#sec2').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    }
    function project(){
        var offset = $('#sec3').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    }
    function contact(){
        var offset = $('#sec_cont').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    }
    function scrollEft(ele) {
        var getScroll = $(window).scrollTop();
        var scrollObj = $(ele);
        
        scrollObj.each(function() {
            var moveSpd = $(this).data('speed');
            var getSpd = getScroll*(moveSpd/10);
            
            $(this).attr('style', 'transform: translate3d(0px,' + (getSpd) + 'px,0px)');
            if($(this).hasClass('up')) {
            $(this).attr('style', 'transform: translate3d(0px,-' + (getSpd) + 'px,0px)');
            }
        })
    }

    var home_lo = document.querySelector(".logo").offsetTop;
    var about_lo = document.querySelector("#sec2").offsetTop;
    var project_lo = document.querySelector(".attr").offsetTop;
    var contact_lo = document.querySelector("#sec_cont").offsetTop;
 
    // $(".banner").click(function(){
    //         $(".banner>.ban_slide>li").slideToggle('fast');
        
    // });
    $('.ban_slide').slideUp();
    $('.banner').click(function(){
        if ($(this).children('.ban_slide').is(':hidden')){
           $(this).children('.ban_slide').slideDown(400);
        } else{
           $(this).children('.ban_slide').slideUp(400);
        }
     });
