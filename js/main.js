/*Слайдер*/
$(document).ready(function(){
    $('.multiple-items').slick({
      settingname: setting-value
    });
  });
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          
        }
      }]
  });
  /*Меню*/
  $('ul.menu a[href^="#"').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
    $('ul.menu a[href^="#"').css({'color':'#FFFFFF'});
    $(this).css({'color':'#E8232E'});
    return false;
    })  

   /*кнопка вверх*/
   $(window).scroll(function () {
    if ($(this).scrollTop() != 0)
       $('#toTop').fadeIn();
    else
       $('#toTop').fadeOut();
 });
 $('#toTop').click(function () {
    $('body,html').animate({
       scrollTop: 0
    }, 800);
 });

    /* Выпадающее меню */
    $('.menu-icon').click(function () {
      $('.topmenu').slideToggle(500);
      $('ul.menu').css({
         'display': 'flex',
         'flex-direction': 'column'
      });
      if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
       
         $(this).html(newLocal);
      } else {
         $(this).html('<i class="fas fa-bars"></i>');
      }
   });


   
