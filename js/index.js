class PasswordGenerator {
  constructor() {}

  // method to generate random passwords
  generateRandomPassword(passwordLength) {
    /*  
      add characters you wish on ASCII base string variable.  
      The password charaters will extract to this ASCII base.
    */

    var asciiBaseString =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefABCDEF01234567!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
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
}

var passwordGenerator = new PasswordGenerator();
