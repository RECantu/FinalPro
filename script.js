function toggleParagraph(button) {
    const hiddenParagraph = button.previousElementSibling;
    hiddenParagraph.classList.toggle('visible');
    button.textContent = hiddenParagraph.classList.contains('visible') ? 'Hide Details' : 'Learn More';
}
