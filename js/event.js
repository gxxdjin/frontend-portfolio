$(document).ready(function(){

$(".select_wrap>p").click(function(){
    $(".select").slideToggle(300);
})
$(".page_move>ul>li").hover(function(){
    $(this).addClass(".p_active");
})
    
})
