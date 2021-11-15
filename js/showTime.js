window.addEventListener('load', () => {
    window.setInterval(() => {
        const now = new Date();
        const clock = document.querySelector('[data-clock]');
        clock.textContent = now.toLocaleTimeString();
    }, 1000);
});
