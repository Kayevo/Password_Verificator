class PasswordGenerator {
  constructor() {
    window.specialCharactersBase = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    window.asciiBaseString =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefABCDEF01234567!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  isThereSpecialCharacters(password) {
    var passwordLength = password.length;
    var specialCharactersBaseLength = specialCharactersBase.length;
    var thereIsSpecialCharacters = false;

    for (var i = 0; i < passwordLength; i++) {
      for (var j = 0; j < specialCharactersBaseLength; j++) {
        if (password.charAt(i) == specialCharactersBase.charAt(j)) {
          thereIsSpecialCharacters = true;
        }
      }
    }

    return thereIsSpecialCharacters;
  }

  // method to generate random passwords
  generateRandomPassword(passwordLength) {
    /*  
      add characters you wish on ASCII base string variable.  
      The password charaters will extract to this ASCII base.
    */

    var randomPassword = "";
    var asciiBaseStringLength = asciiBaseString.length;

    for (var i = 0; i < passwordLength; i++) {
      /*
        A random character on ASCII base string is selected and
        used to compose the random password 
      */
      randomPassword =
        randomPassword +
        asciiBaseString.charAt(
          Math.floor(Math.random() * asciiBaseStringLength)
        );
    }

    alert("Generated password: " + randomPassword);
  }

  // method to verify strong's passwords
  verifyStrongSPassword() {
    const password = document.querySelector("#password").value;
    var thereIsSpecialCharacters = false;

    thereIsSpecialCharacters = this.isThereSpecialCharacters(password);

    alert("Is there character: "+thereIsSpecialCharacters);
  }
}

var passwordGenerator = new PasswordGenerator();
