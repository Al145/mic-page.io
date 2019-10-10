const orderButton = document.querySelector('[data-button]');

orderButton.addEventListener('click', () => {
        swal({
            title: "Готово!",
            text: "Наш менеджер с Вами свяжеться в ближайшее время!",
            icon: "success",
          });
    });

$(function(){
    $("#phone").mask("8(999) 999-9999");
});

AOS.init();
