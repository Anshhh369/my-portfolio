// Dark mode toggle
const toggleBtn = document.querySelector('.dark-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll reveal animation
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

