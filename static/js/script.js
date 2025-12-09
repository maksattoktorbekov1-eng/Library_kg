document.addEventListener("DOMContentLoaded", () => {
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    ratingInputs.forEach(input => {
        const display = document.createElement('span');
        input.parentNode.appendChild(display);
        input.addEventListener('input', () => {
            let value = parseInt(input.value) || 0;
            display.textContent = '❤️'.repeat(value);
        });
    });
});
