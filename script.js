let globalSubmit = false;

function reset() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("email-address").value = "";

  document.getElementById("password").value = "";
  document.getElementById("confirm-password").value = "";
  document.getElementById("TNC").checked = false;
  document.getElementById("first-name-valid").style.display = "none";
  document.getElementById("last-name-valid").style.display = "none";
  document.getElementById("email-valid").style.display = "none";

  document.getElementById("password-valid").style.display = "none";
  document.getElementById("confirm-valid").style.display = "none";
  document.getElementById("TNC-valid").style.display = "none";
  globalSubmit = false;
}

function validate(isSubmit) {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let Email = document.getElementById("email-address").value;

  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  let checked = document.getElementById("TNC").checked;
  let error = false;

  if (isSubmit) {
    globalSubmit = true;
  }

  if (globalSubmit) {
    if (firstName.length >= 3) {
      document.getElementById("first-name-invalid").style.display = "none";
    } else {
      document.getElementById("first-name-invalid").style.display = "block";
      document.getElementById("first-name-valid").style.display = "none";
      error = true;
    }

    if (lastName.length >= 3) {
      document.getElementById("last-name-invalid").style.display = "none";
    } else {
      document.getElementById("last-name-invalid").style.display = "block";
      document.getElementById("last-name-valid").style.display = "none";
      error = true;
    }

    if (
      Email.includes("@") &&
      Email.includes(".") &&
      Email.indexOf("@") > 0 &&
      Email.substr(Email.lastIndexOf(".") + 1).length >= 2
    ) {
      document.getElementById("email-invalid").style.display = "none";
    } else {
      document.getElementById("email-invalid").style.display = "block";
      document.getElementById("email-valid").style.display = "none";
      error = true;
    }
    if (
      password.length >= 8 &&
      (password.includes("@") ||
        password.includes("#") ||
        password.includes("$")) &&
      (password.includes("0") ||
        password.includes("1") ||
        password.includes("2") ||
        password.includes("3") ||
        password.includes("4"))
    ) {
      document.getElementById("password-invalid").style.display = "none";
    } else {
      document.getElementById("password-invalid").style.display = "block";
      document.getElementById("password-valid").style.display = "none";
      error = true;
    }
    if (password === confirmPassword && confirmPassword != "") {
      document.getElementById("confirm-invalid").style.display = "none";
    } else {
      document.getElementById("confirm-invalid").style.display = "block";
      document.getElementById("confirm-valid").style.display = "none";
      error = true;
    }
    if (checked) {
      document.getElementById("TNC-invalid").style.display = "none";
    } else {
      document.getElementById("TNC-invalid").style.display = "block";
      error = true;
    }

    if (!error && isSubmit) {
      alert("your information have been submitted succesfully");
      reset();
    }
  }

  console.log(firstName, lastName, Email, password, confirmPassword, checked);
}
