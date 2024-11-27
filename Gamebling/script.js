document.querySelectorAll('.category-tabs button').forEach((button) => {
    button.addEventListener('click', () => {
        // Удаляем класс "active" у всех кнопок
        document.querySelectorAll('.category-tabs button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active'); // Добавляем "active" к текущей кнопке

        const targetSectionId = button.getAttribute('data-target');
        const currentSection = document.querySelector('.game-section:not([style*="display: none"])');
        const targetSection = document.getElementById(targetSectionId);

        if (currentSection !== targetSection) {
            // Удаляем текущий раздел с анимацией
            currentSection.classList.add('fade-out');
            currentSection.addEventListener('animationend', () => {
                currentSection.style.display = 'none';
                currentSection.classList.remove('fade-out');

                // Показываем новый раздел с анимацией
                targetSection.style.display = 'block';
                targetSection.classList.add('fade-in');
                targetSection.addEventListener('animationend', () => {
                    targetSection.classList.remove('fade-in');
                }, { once: true });
            }, { once: true });
        }
    });
});

const navItems = document.querySelectorAll('.nav-item');

// Добавим слушатель событий для каждого элемента
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс 'active' у всех элементов
        navItems.forEach(nav => nav.classList.remove('active'));

        // Добавляем класс 'active' к выбранному элементу
        item.classList.add('active');
    });
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

