document.addEventListener('DOMContentLoaded', () => {
    
    // --- Логика FAQ (Аккордеон) ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        
        questionBtn.addEventListener('click', () => {
            // Если хотим, чтобы при открытии одного закрывались другие:
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Тоггл текущего элемента
            item.classList.toggle('active');
        });
    });


    // --- Логика Политики конфиденциальности ---
    const privacyBtn = document.getElementById('togglePrivacy');
    const privacyContent = document.getElementById('privacyText');

    if (privacyBtn && privacyContent) {
        privacyBtn.addEventListener('click', () => {
            if (privacyContent.style.display === 'block') {
                privacyContent.style.display = 'none';
                privacyBtn.textContent = 'Показать текст';
            } else {
                privacyContent.style.display = 'block';
                privacyBtn.textContent = 'Скрыть текст';
                // Плавная прокрутка к тексту при открытии
                privacyContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Если в URL есть #privacyText (переход из футера), открываем политику автоматически
    if (window.location.hash === '#privacyText') {
        if (privacyContent) {
            privacyContent.style.display = 'block';
            if (privacyBtn) privacyBtn.textContent = 'Скрыть текст';
        }
    }
});