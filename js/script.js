new Swiper('.brand-slider', {
  pagination: {
    el: '.swiper-pagination',
    //Буллеты
    clickable: true,
  },
});

let swiperOpen = document.querySelector('.swiper-container');
let buttonShow = document.querySelector('.button-show');

buttonShow.addEventListener('click', function () {
  swiperOpen.classList.toggle('swiper-button-active');
  buttonShow.classList.toggle('button-hide');
  if (buttonShow.classList.toggle('button-show')) {
    buttonShow.textContent = 'Показать все';
  } else {
    buttonShow.textContent = 'Скрыть';
  }
});
