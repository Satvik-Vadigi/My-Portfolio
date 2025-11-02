const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load previously selected mode
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.checked = true;
} else {
    body.classList.add('light-mode');
}

toggle.addEventListener('change', () => {
if (toggle.checked) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
} else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
}
});