const targetNumber = generateRandomNumber(1, 100);
let attempts = 0;

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        feedback.style.color = '#e74c3c';
    } else {
        attempts++;

        if (userGuess === targetNumber) {
            feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            feedback.style.color = '#27ae60';
            disableInputAndButton();
        } else {
            const hint = userGuess > targetNumber ? 'Too high' : 'Too low';
            feedback.textContent = `${hint}! Try again.`;
            feedback.style.color = '#e74c3c';
        }
    }
}

function disableInputAndButton() {
    const guessInput = document.getElementById('guessInput');
    const submitButton = document.querySelector('button');

    guessInput.disabled = true;
    submitButton.disabled = true;
}
