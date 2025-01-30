document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.remove('dark-mode');
    var isDark = localStorage.getItem('darkMode');
    if (isDark === 'true') {
        document.body.classList.add('dark-mode');
    }
});

function toggledarkmode() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');
    } else {
        localStorage.removeItem('darkMode');
    }
}