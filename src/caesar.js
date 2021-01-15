// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    const letters = input.toLowerCase().split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let array = [];
      letters.forEach(letter => {
        let position = alphabet.indexOf(letter);
        if (encode && alphabet.includes(letter)) {
        
        if (position + shift >= 26) {
          position = position - 26;
        }
        if (position + shift < 0) {
          position = position + 26;
        }
        array.push(alphabet[position + shift]);
        } if (encode === false && alphabet.includes(letter)) {
          if (position - shift >= 26) {
          position = position - 26;
        }
        if (position - shift < 0) {
          position = position + 26;
        }
        array.push(alphabet[position - shift]);      
      }
        if (alphabet.includes(letter) === false) {
          array.push(letter);
        }
      })
    return array.join('');
    }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
