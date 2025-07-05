document.addEventListener('DOMContentLoaded', function() {
    const returnBtn = document.getElementById('btn-return');
    if (returnBtn) {
        returnBtn.addEventListener('click', function() {
            window.location.href = 'app_start.html';
        });
    }
});