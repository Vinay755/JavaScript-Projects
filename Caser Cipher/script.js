function caesarCipher(text, shift) {
    return text
      .split('')
      .map(char => {
        if (char.match(/[a-zA-Z]/)) {
          const code = char.charCodeAt(0);
          const isUpperCase = char === char.toUpperCase();
          const offset = isUpperCase ? 65 : 97;
          return String.fromCharCode(((code - offset + shift) % 26) + offset);
        } else {
          return char;
        }
      })
      .join('');
  }
  
  function encrypt() {
    const textInput = document.getElementById('text');
    const shiftInput = document.getElementById('shift');
    const resultTextarea = document.getElementById('result');
  
    const text = textInput.value;
    const shift = parseInt(shiftInput.value, 10);
    
    const encryptedText = caesarCipher(text, shift);
    resultTextarea.value = encryptedText;
  }
  
  function decrypt() {
    const textInput = document.getElementById('text');
    const shiftInput = document.getElementById('shift');
    const resultTextarea = document.getElementById('result');
  
    const text = textInput.value;
    const shift = parseInt(shiftInput.value, 10);
    
    const decryptedText = caesarCipher(text, 26 - shift); // Decryption is the same as encryption with the opposite shift
    resultTextarea.value = decryptedText;
  }
  