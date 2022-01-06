class PasswordGenerator {
  constructor() {
    window.specialCharBase = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    window.asciiCharBase =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefABCDEF01234567!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    window.numericCharBase = "0123456789";
    window.uppercaseCharBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    window.lowercaseCharBase = "abcdefghijklmnopqrstuvwxyz";
  }

  thereIsUppercaseCharacters(password) {
    var passwordLength = password.length;
    var uppercaseCharLength = uppercaseCharBase.length;
    var thereIsUppercaseChar = false;

    for (var i = 0; i < passwordLength; i++) {
      for (var j = 0; j < uppercaseCharLength; j++) {
        if (password.charAt(i) == uppercaseCharBase.charAt(j)) {
          thereIsUppercaseChar = true;
        }
      }
    }

    return thereIsUppercaseChar;
  }

  thereIsNumericCharacters(password) {
    var passwordLength = password.length;
    var numericCharBaseLength = numericCharBase.length;
    var thereIsNumericChar = false;

    for (var i = 0; i < passwordLength; i++) {
      for (var j = 0; j < numericCharBaseLength; j++) {
        if (password.charAt(i) == numericCharBase.charAt(j)) {
          thereIsNumericChar = true;
        }
      }
    }

    return thereIsNumericChar;
  }

  thereIsSpecialCharacters(password) {
    var passwordLength = password.length;
    var specialCharBaseLength = specialCharBase.length;
    var thereIsSpecialChar = false;

    for (var i = 0; i < passwordLength; i++) {
      for (var j = 0; j < specialCharBaseLength; j++) {
        if (password.charAt(i) == specialCharBase.charAt(j)) {
          thereIsSpecialChar = true;
        }
      }
    }

    return thereIsSpecialChar;
  }

  // method to generate random passwords
  generateRandomPassword(passwordLength) {
    /*  
      add Char you wish on ASCII base string variable.  
      The password charaters will extract to this ASCII base.
    */

    var randomPassword = "";
    var asciiCharBaseLength = asciiCharBase.length;

    for (var i = 0; i < passwordLength; i++) {
      /*
        A random character on ASCII base string is selected and
        used to compose the random password 
      */
      randomPassword =
        randomPassword +
        asciiCharBase.charAt(
          Math.floor(Math.random() * asciiCharBaseLength)
        );
    }

    alert("Generated password: " + randomPassword);
  }

  // method to verify strong's passwords
  verifyStrongSPassword() {
    const password = document.querySelector("#password").value;
    var thereIsSpecialChar = false;
    var thereIsNumericChar = false;
    var thereIsUppercaseChar = false;

    thereIsSpecialChar = this.thereIsSpecialCharacters(password);
    thereIsNumericChar = this.thereIsNumericCharacters(password);
    thereIsUppercaseChar = this.thereIsUppercaseCharacters(password);

    alert(
      "There is special characters: " +
        thereIsSpecialChar +
        "\n" +
        "There is numeric characters: " +
        thereIsNumericChar +
        "\n" +
        "There is uppercase characters: " +
        thereIsUppercaseChar
    );
  }
}

var passwordGenerator = new PasswordGenerator();
