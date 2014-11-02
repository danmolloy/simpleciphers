//event listening: when either form button is pressed,
//store selected cipher and key in variables,
//take string in corresponding textarea and pass it to (de)ciphering function,
//then return output to other textarea

/*
  Todo: -Allow for arbitrary key input, not just +-260
        -Tidy up code, remove debugging logs
        -Additional ciphers to implement: Atbash, mixed alphabet, 
         Vigenère...
         
*/


var alphabet = ['A','B','C','D','E','F','G','H','I','J','K', 'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

document.getElementById("cipherButton").addEventListener("click", 
                              function(){cipherSetup("cipher");});
document.getElementById("decipherButton").addEventListener("click", 
                              function(){cipherSetup("decipher");});

function cipherSetup(mode) {
  var selectedCipher = document.getElementById("cipherSelect").value;
  var selectedKey = document.getElementById("cipherOption").value;
  console.log("Cipher Setup!");
  console.log(selectedCipher);
  console.log(selectedKey);
  
  if (selectedCipher === "caesar") {
    if (mode === "cipher") {
      caesarCipher(selectedKey);
      console.log("mode = cipher");
    }
    else if (mode === "decipher") {
      caesarDecipher(selectedKey);
      console.log("mode = decipher");
    }
  }
}

function caesarCipher(key) {
  key = parseInt(key, 10);
  var cipheredText = '';
  
  console.log("Caesar Cipher!");
  console.log(key);
  var plainText = document.getElementById("plainText").value.toUpperCase();
  console.log(plainText);
  for (var i = 0; i < plainText.length; i++) {
    char = plainText.charAt(i);
    charIndex = alphabet.indexOf(char);
    newChar = char;
    newCharIndex = charIndex;

    if ((charIndex >= 0) && (charIndex <= 25)) {
      newCharIndex = (charIndex + key + 260) % 26;
      newChar = alphabet[newCharIndex];
    }
    cipheredText = cipheredText + newChar;
    
    console.log(plainText.charAt(i) + ' ' + charIndex + ' ' + newCharIndex + ' ' + newChar);
  }
  
  document.getElementById("cipheredText").value = cipheredText;
}


function caesarDecipher(key) {
  key = parseInt(key, 10);
  var decipheredText = '';
  
  console.log("Caesar Decipher!");
  console.log(key);
  var cipheredText = document.getElementById("cipheredText").value.toUpperCase();
  console.log(cipheredText);
  for (var i = 0; i < cipheredText.length; i++) {
    char = cipheredText.charAt(i);
    charIndex = alphabet.indexOf(char);
    newChar = char;
    newCharIndex = charIndex;

    if ((charIndex >= 0) && (charIndex <= 25)) {
      newCharIndex = (charIndex - key + 260) % 26;
      newChar = alphabet[newCharIndex];
    }
    decipheredText = decipheredText + newChar;
    
    console.log(cipheredText.charAt(i) + ' ' + charIndex + ' ' + newCharIndex + ' ' + newChar);
  }
  
  document.getElementById("plainText").value = decipheredText;
}
