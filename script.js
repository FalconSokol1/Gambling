document.querySelectorAll('.category-tabs button').forEach((button) => {
    button.addEventListener('click', () => {

        document.querySelectorAll('.category-tabs button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const targetSectionId = button.getAttribute('data-target');
        const currentSection = document.querySelector('.game-section:not([style*="display: none"])');
        const targetSection = document.getElementById(targetSectionId);

        if (currentSection !== targetSection) {
            currentSection.classList.add('fade-out');
            currentSection.addEventListener('animationend', () => {
                currentSection.style.display = 'none';
                currentSection.classList.remove('fade-out');
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

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

