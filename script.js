document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('check').addEventListener('change', function () {
        document.querySelector('header .navigation').classList.toggle('active');
    });
});
