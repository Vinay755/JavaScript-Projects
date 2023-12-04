function checkPalindrome() {
    const input = document.getElementById('input').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = input.split('').reverse().join('');

    const resultElement = document.getElementById('result');

    if (input === reversed) {
        resultElement.textContent = 'It\'s a Palindrome!';
        resultElement.style.color = '#27ae60';
    } else {
        resultElement.textContent = 'It\'s not a Palindrome!';
        resultElement.style.color = '#e74c3c';
    }
}
