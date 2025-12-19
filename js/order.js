/* js/order.js */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Order page script loaded');

    // Функция 1: Плавная прокрутка к форме при загрузке (если пользователь пришел по ссылке "Заказать")
    // Если в URL есть #form, скроллим к форме
    if (window.location.hash === '#order-form') {
        const formElement = document.querySelector('.order-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Функция 2: Динамическая подстройка высоты iframe (экспериментально)
    // Яндекс.Формы иногда отправляют postMessage с высотой.
    // Если ваша форма настроена на передачу высоты, этот код уберет двойные скроллы.
    window.addEventListener('message', function (e) {
        // Проверяем, что сообщение пришло от Яндекса (или доверяем источнику)
        // Структура сообщения может отличаться, это стандартный паттерн
        if (e.data && e.data.type === 'iframe-resize') {
            const iframe = document.querySelector('iframe[name="ya-form-order"]');
            if (iframe && e.data.height) {
                iframe.style.height = e.data.height + 'px';
                // Также обновляем контейнер
                const box = document.querySelector('.iframe-box');
                if (box) box.style.minHeight = e.data.height + 'px';
            }
        }
    });
});