// Cyro-UI Navigation Control
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.nav-link.active').classList.remove('active');
        this.classList.add('active');
        
        // Brand Voice Log [cite: 45]
        console.log("CyroTech System: Navigation shifted to " + this.innerText);
    });
});

// Button Interaction - Smooth Ease-Out
const mainBtn = document.querySelector('.cyro-btn-primary');
mainBtn.addEventListener('mouseenter', () => {
    mainBtn.style.letterSpacing = '0.15em';
});
mainBtn.addEventListener('mouseleave', () => {
    mainBtn.style.letterSpacing = '0.08em';
});