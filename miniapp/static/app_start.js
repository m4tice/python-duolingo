document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent);
            alert('You have selected ' + this.textContent);
            window.location.href = 'app_session.html';
        });
    });
});
