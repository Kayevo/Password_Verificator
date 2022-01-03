class PasswordGenerator {
  constructor() {}

  
  generateRandomPassword(passwordLength) {

    var randomPassword = "";
    var alphanumericBaseString =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefABCDEF01234567!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var alphaBaseStringLength = alphanumericBaseString.length;

    for (var i = 0; i < passwordLength; i++) {
      randomPassword =
        randomPassword +
        alphanumericBaseString.charAt(
          Math.floor(Math.random() * alphaBaseStringLength)
        );
    }

    alert("Password generated: "+randomPassword);
  }
}

var passwordGenerator = new PasswordGenerator();
