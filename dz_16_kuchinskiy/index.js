/* Изучить самостоятельно основы jQuery (см презентацию и документацию).
Сделать попап (модальное окно).
Показывать его при клике на кнопку и при изменении экрана меньше 768рх 
Использовать jQuery и bootstrap для модального окна.
Библиотеки скачать с помощью npm.
Подключать можно через link и script на странице
https://getbootstrap.com/docs/3.3/javascript/#modals */

// при клике на кнопку

let isModal = false;

let previousWidth = $(window).width();

$(window).on("resize", function () {
  if (!isModal && $(window).width() <= 768) {
    isModal = true;
    $("#modal").trigger("click");
  }
});
