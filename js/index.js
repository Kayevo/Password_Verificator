class PasswordGenerator {
  constructor() {
    window.specialCharBase = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    window.asciiCharBase =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    window.numericCharBase = "0123456789";
    window.uppercaseCharBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    window.lowercaseCharBase = "abcdefghijklmnopqrstuvwxyz";
    window.whiteSpaceChar = " ";
  }

  thereIsWhiteSpaceCharacters(password) {
    var passwordLength = password.length;
    var whiteSpaceCharLength = whiteSpaceChar.length;
    var thereIsWhiteSpaceChar = false;

    for (let i = 0; i < passwordLength; i++) {
      for (let j = 0; j < whiteSpaceCharLength; j++) {
        if (password.charAt(i) == whiteSpaceChar.charAt(j)) {
          thereIsWhiteSpaceChar = true;
        }
      }
    }

    return thereIsWhiteSpaceChar;
  }

  thereIsLowercaseCharacters(password) {
    var passwordLength = password.length;
    var lowercaseCharLength = lowercaseCharBase.length;
    var thereIsLowercaseChar = false;

    for (let i = 0; i < passwordLength; i++) {
      for (let j = 0; j < lowercaseCharLength; j++) {
        if (password.charAt(i) == lowercaseCharBase.charAt(j)) {
          thereIsLowercaseChar = true;
        }
      }
    }

    return thereIsLowercaseChar;
  }

  thereIsUppercaseCharacters(password) {
    var passwordLength = password.length;
    var uppercaseCharLength = uppercaseCharBase.length;
    var thereIsUppercaseChar = false;

    for (let i = 0; i < passwordLength; i++) {
      for (let j = 0; j < uppercaseCharLength; j++) {
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

    for (let i = 0; i < passwordLength; i++) {
      for (let j = 0; j < numericCharBaseLength; j++) {
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

    for (let i = 0; i < passwordLength; i++) {
      for (let j = 0; j < specialCharBaseLength; j++) {
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

    for (let i = 0; i < passwordLength; i++) {
      /*
        A random character on ASCII base string is selected and
        used to compose the random password 
      */
      randomPassword =
        randomPassword +
        asciiCharBase.charAt(Math.floor(Math.random() * asciiCharBaseLength));
    }

    alert("Generated password: " + randomPassword);
  }

  // method to verify strong's passwords
  verifyStrongSPassword() {
    const password = document.querySelector("#password").value;
    var thereIsSpecialChar = false;
    var thereIsNumericChar = false;
    var thereIsUppercaseChar = false;
    var thereIsLowercaseChar = false;
    var thereIsWhiteSpaceChar = false;
    var passwordIsStrong = true;
    var passwordAdvices = new Array();
    var passwordAdvicesPrintable = "";

    thereIsSpecialChar = this.thereIsSpecialCharacters(password);
    thereIsNumericChar = this.thereIsNumericCharacters(password);
    thereIsUppercaseChar = this.thereIsUppercaseCharacters(password);
    thereIsLowercaseChar = this.thereIsLowercaseCharacters(password);
    thereIsWhiteSpaceChar = this.thereIsWhiteSpaceCharacters(password);

    if (!thereIsSpecialChar) {
      passwordIsStrong = false;
      passwordAdvices.push(
        "Try complement your password with special characters."
      );
    }

    if (!thereIsNumericChar) {
      passwordIsStrong = false;
      passwordAdvices.push(
        "You should add some numbers on your secrect key word."
      );
    }

    if (!thereIsUppercaseChar) {
      passwordIsStrong = false;
      passwordAdvices.push("Write uppercase letters on your password.");
    }

    if (!thereIsLowercaseChar) {
      passwordIsStrong = false;
      passwordAdvices.push(
        "Insert on your key word a little bit lowercase characters."
      );
    }

    if (thereIsWhiteSpaceChar) {
      passwordIsStrong = false;
      passwordAdvices.push(
        "It's not a good idea use white spaces on any password."
      );
    }

    alert(
      "There is special characters: " +
        thereIsSpecialChar +
        "\n" +
        "There is numeric characters: " +
        thereIsNumericChar +
        "\n" +
        "There is uppercase characters: " +
        thereIsUppercaseChar +
        "\n" +
        "There is lowercase characters: " +
        thereIsLowercaseChar +
        "\n" +
        "There is white space characters: " +
        thereIsWhiteSpaceChar +
        "\n" +
        "\n" +
        "Password is strong: " +
        passwordIsStrong
    );

    for (let i in passwordAdvices) {
      passwordAdvicesPrintable += "\n" + passwordAdvices[i];
    }

    alert(passwordAdvicesPrintable);
  }
}

var passwordGenerator = new PasswordGenerator();
