// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only handle in-page anchors
        if (href.length > 1 && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            // Get sticky nav height
            const nav = document.querySelector('nav');
            const navHeight = nav ? nav.offsetHeight : 0;
            const extraOffset = 8; // Add a small buffer for margin/border/shadow
            const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight - extraOffset;
            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        }
    });
});
