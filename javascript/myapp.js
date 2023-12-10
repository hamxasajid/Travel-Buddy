document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navList = document.querySelector('.nav-list');

    toggleButton.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});