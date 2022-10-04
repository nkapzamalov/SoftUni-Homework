function passwordValidator(password) {
  if (
    checkPasswordLength(password) &&
    checkToContainOnlyLettersAndDigits(password) &&
    checkForNumberOfDigits(password)
  ) {
    console.log("Password is valid");
  }

  if (!checkPasswordLength(password)) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!checkToContainOnlyLettersAndDigits(password)) {
    console.log("Password must consist only of letters and digits");
  }
  if (!checkForNumberOfDigits(password)) {
    console.log("Password must have at least 2 digits");
  }

  function checkPasswordLength(password) {
    let isValid = false;
    if (password.length >= 6 && password.length <= 10) {
      isValid = true;
    }
    return isValid;
  }

  function checkToContainOnlyLettersAndDigits(password) {
    let isValid = false;
    for (let i = 0; i < password.length; i++) {
      let charCode = password[i].charCodeAt(0);
      if (
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 97 && charCode <= 122) ||
        (charCode >= 65 && charCode <= 90)
      ) {
        isValid = true;
      } else {
        isValid = false;
        break;
      }
    }
    return isValid;
  }

  function checkForNumberOfDigits(password) {
    let isValid = false;
    let counter = 0;
    for (let i = 0; i < password.length; i++) {
      let charCode = password[i].charCodeAt(0);
      if (charCode >= 48 && charCode <= 57) {
        counter += 1;
      }
      if (counter >= 2) {
        isValid = true;
      }
    }
    return isValid;
  }
}
passwordValidator("My$ass123");
