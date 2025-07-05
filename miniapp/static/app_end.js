document.addEventListener('DOMContentLoaded', function() {
    // Debug: Log the full URL and search parameters
    console.log('Current URL:', window.location.href);
    console.log('Search params:', window.location.search);
    
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    const total = urlParams.get('total');
    const status = urlParams.get('status');
    
    // Debug: Log the extracted parameters
    console.log('Score:', score);
    console.log('Total:', total);
    console.log('Status:', status);
    
    const scoreCont = document.getElementById('score');
    
    if (score !== null && total !== null) {
        if (status === 'lives_exhausted') {
            scoreCont.textContent = `Game Over! You scored ${score} out of ${total} questions answered. You ran out of lives.`;
        } else {
            scoreCont.textContent = `Congratulations! You scored ${score} out of ${total} questions correctly!`;
        }
    } else if (score === null && total === null) {
        // No parameters passed - fallback
        scoreCont.textContent = 'Session completed!';
    } else {
        // Fallback message
        scoreCont.textContent = 'Session completed!';
    }

    const returnBtn = document.getElementById('btn-return');
    if (returnBtn) {
        returnBtn.addEventListener('click', function() {
            window.location.href = 'app_start.html';
        });
    }
});