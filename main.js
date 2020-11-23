$(".slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});

$(".img-slide").click(function() {
  let imgSlides = $('.img-slide').find('img');
  imgSlides.addClass('grey-filter');

  let imgClick = $(this).find('img');
  if (imgClick.hasClass('grey-filter')) {
    imgClick.removeClass('grey-filter');
  }
});