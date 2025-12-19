document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    // Открытие/закрытие мобильного меню
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку (удобство для одностраничной навигации)
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
});