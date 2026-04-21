const elements = document.querySelectorAll('.fade-in, .slide-in');

window.addEventListener('scroll', () => {
elements.forEach(el => {
const position = el.getBoundingClientRect().top;
if (position < window.innerHeight - 100) {
el.classList.add('show');
}
});
});

