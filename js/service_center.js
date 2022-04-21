$(document).ready(function(){
    $('#selectEmail').change(function(){ 
        $("#selectEmail option:selected").each(function () { if($(this).val()== '1'){ //직접입력일 경우 
            $("#str_email02").val(''); //값 초기화 
            $("#str_email02").attr("disabled",false); //활성화 
        }else{ //직접입력이 아닐경우 
            $("#str_email02").val($(this).text()); //선택값 입력 
            $("#str_email02").attr("disabled",true); //비활성화 
            } 
        }); 
    });

    $('.inner2').hide();
    $('.inner3').hide();

    $('.cate2>span>div').hide();
    $('.cate3>span>div').hide();

    $('.cate1').click(function(){
        $('.cate2>span>div').hide();
        $('.cate3>span>div').hide();
        $('.cate1>span>div').show(300);
        $('.inner2').hide();
        $('.inner3').hide();
        $('.inner').fadeIn(300);
        $('.cate1 > span ').css({
            "color" : "#444"
        });
        $('.cate2 > span ').css({
            "color" : "#999"
        });
        $('.cate3 > span ').css({
            "color" : "#999"
        });
    });
    $('.cate2').click(function(){
        $('.cate1>span>div').hide();
        $('.cate3>span>div').hide();
        $('.cate2>span>div').show(300);
        $('.inner').hide();
        $('.inner3').hide();
        $('.inner2').fadeIn(300);
        $('.cate2 > span ').css({
            "color" : "#444"
        });
        $('.cate1 > span ').css({
            "color" : "#999"
        });
        $('.cate3 > span ').css({
            "color" : "#999"
        });
    });
    $('.cate3').click(function(){
        $('.cate1>span>div').hide();
        $('.cate2>span>div').hide();
        $('.cate3>span>div').show(300);
        $('.inner').hide();
        $('.inner2').hide();
        $('.inner3').fadeIn(300);
        $('.cate3 > span').css({
            "color" : "#444"
        });
        $('.cate1 > span ').css({
            "color" : "#999"
        });
        $('.cate2 > span ').css({
            "color" : "#999"
        });
    });

    $('.hide').hide();
    $(".menu>li>a").click(function(){
        var submenu = $(this).next(".hide");
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });





});