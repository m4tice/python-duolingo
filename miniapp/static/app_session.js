document.addEventListener('DOMContentLoaded', function() {
    console.log('App session script loaded');
    validateAnswer();
});

function validateAnswer() {
    const btnCheck = document.getElementById('btn-check');

    if (btnCheck) {
        btnCheck.addEventListener('click', function() {

            const question = document.getElementById('input-question').textContent;
            const answer = document.getElementById('input-answer').value;
            
            if (answer.trim() === '') {
                alert('Please fill in the answer field.');
                return;
            }
            else {
                alert(`"${question}"\nYour answer: "${answer}"\n`);
            }
        });
    }
}