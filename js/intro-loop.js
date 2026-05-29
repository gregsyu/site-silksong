document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro-video');
    const loop = document.getElementById('loop-video');

    intro.onended = () => {
        intro.style.display = 'none';
        loop.classList.remove('hidden');
        loop.play();
    };
});