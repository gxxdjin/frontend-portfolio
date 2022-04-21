var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

function zoomIn(event) {
    event.target.style.transform = "scale(1.2)";
    event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.transition = "all 0.5s";
}
$("html").hide();
$(document).ready(function(){
  $("html").fadeIn(300);
    $('.sec1_txt > span').hide();
    $('.sec1_txt > h3').hide();
    $('.sec1_txt > p').hide();
    $('.sec1_txt > span').delay(400).fadeIn(1000);
    $('.sec1_txt > h3').delay(900).fadeIn(1000);
    $('.sec1_txt > p').delay(1300).fadeIn(1000);


    // 검색버튼 나오는거
  $(".r_search").click(function(){
    $('.search_box').animate({width:"toggle"},400);
  })
})