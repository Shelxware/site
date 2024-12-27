// Add interactivity to the menu icon
document.querySelector('.menu-icon').addEventListener('click', () => {
    alert('Menu clicked!'); // Replace with your menu toggle functionality
});

// Update footer year dynamically
document.getElementById('year').textContent = new Date().getFullYear();
