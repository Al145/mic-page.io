const orderButton = document.querySelectorAll('[data-button]');

orderButton.forEach(button => {
    button.addEventListener('click', () => {
        swal({
            title: "Готово!",
            text: "Наш менеджер с Вами свяжеться в ближайшее время!",
            icon: "success",
          });
    })
});
AOS.init();
