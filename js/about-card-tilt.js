// js/about-card-tilt.js
// Adds a 3D tilt effect to the .about-card on mouse movement

document.querySelectorAll('.about-card').forEach(card => {
    card.style.perspective = '1200px';
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 6; // max 6deg
        const rotateY = ((x - centerX) / centerX) * 12; // max 12deg
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        card.classList.add('is-tilting');
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.classList.remove('is-tilting');
    });
});
