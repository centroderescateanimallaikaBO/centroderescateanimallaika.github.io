// home.js
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function() {
        card.querySelector('.flip-card-inner').classList.toggle('rotate');
    });
});
