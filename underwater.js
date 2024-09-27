document.addEventListener('DOMContentLoaded', () => {
    const underwater = document.querySelector('.underwater');
    const bubbleCount = 20; // Adjust the number of bubbles

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        underwater.appendChild(bubble);
    }
});