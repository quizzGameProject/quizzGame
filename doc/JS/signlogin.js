function SignUp() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var user = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password,
  };

  console.log(user);

  localStorage.setItem("user", JSON.stringify(user));
}

function signIn() {
  var enteredEmail = document.getElementById("email").value;
  var enteredPassword = document.getElementById("psw").value;

  var storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    enteredEmail === storedUser.email &&
    enteredPassword === storedUser.password
  ) {
    window.location.href = "../html/index.html";
  } else {
    console.log("Sign-in failed.");
  }
}

$(document).ready(function () {
  $("#signIn").click(function () {
    window.location.href = "signIn.html";
  });

  $("#logIn").click(function () {
    window.location.href = "signup.html";
  });
});
