document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent);
            
            if (this.id === 'de-button') {
                window.location.href = 'app_session_de.html';
            } else if (this.id === 'cn-button') {
                window.location.href = 'app_session_cn.html';
            } else {
                // Do nothing
            }
        });
    });
});
