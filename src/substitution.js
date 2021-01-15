// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false;
    }
    const subAlph = alphabet.split("");
    const letters = input.toLowerCase().split("");
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let array = [];
    if (subAlph.length !== 26) {
      return false;
    }
     for (let i = 0; i < subAlph.length; i++) { 
       for (let j = i + 1 ; j < subAlph.length; j++) { 
         if (subAlph[i] === subAlph[j]) {
           return false;
         } 
       } 
     }
    letters.forEach(letter => {
      if (encode && letter !== " ") {    
        array.push(subAlph[alpha.indexOf(letter)]);
      } 
      if (encode === false && letter !== " ") {
        array.push(alpha[subAlph.indexOf(letter)]);
      }
      if (letter === " ") {
      array.push(" ");
      }
    })
    return array.join("");
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
