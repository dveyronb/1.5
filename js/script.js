let buttonShow = document.querySelector('.button-show');
let buttonHide = document.querySelector('.button-hide');
let swiperOpen = document.querySelector('.swiper-container');

if (window.screen.width <= 766);
{
  buttonShow.classList.add('button-none');
  buttonHide.classList.add('button-none');
}
if (window.screen.width >= 767);
{
  buttonShow.classList.remove('button-none');

  buttonShow.addEventListener('click', function (evt) {
    buttonHide.classList.remove('button-none');
    buttonShow.classList.add('button-none');
    swiperOpen.classList.add('swiper-button-active');
  });

  buttonHide.addEventListener('click', function (evt) {
    buttonHide.classList.add('button-none');
    buttonShow.classList.remove('button-none');
    swiperOpen.classList.remove('swiper-button-active');
  });
}

new Swiper('.brand-slider', {
  pagination: {
    el: '.swiper-pagination',
    //Буллеты
    clickable: true,
  },
});
