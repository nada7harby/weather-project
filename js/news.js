window.onload = function () {
    var isDark = localStorage.getItem('darkMode');
    if (isDark === 'true') {
        document.body.classList.add('dark-mode');
    }
};

function toggledarkmode() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');
    } else {
        localStorage.removeItem('darkMode');
    }
}