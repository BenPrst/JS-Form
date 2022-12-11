let firstname = document.getElementById("firstname");
let span = document.getElementById("display-firstname");
let age = document.getElementById("age");
let hardTruth = document.getElementById("a-hard-truth");

firstname.addEventListener("keyup", () => {
  span.textContent = firstname.value;
});

age.addEventListener("keyup", () => {
  if (age.value < 18) {
    hardTruth.style.visibility = "hidden";
  } else {
    hardTruth.style.visibility = "visible";
  }
});

let pwd = document.getElementById("pwd");
let pwdConfirm = document.getElementById("pwd-confirm");

function passCheck() {
  if (pwd.value === pwdConfirm.value && pwd.value.length > 5) {
    pwd.style.border = "3px solid green";
    pwd.style.color = "green";
    pwdConfirm.style.border = "2px solid green";
    pwdConfirm.style.color = "green";
  } else {
    pwd.style.border = "3px solid red";
    pwd.style.color = "red";
    pwdConfirm.style.border = "3px solid red";
    pwdConfirm.style.color = "red";
  }
}

pwdConfirm.addEventListener("keyup", passCheck);
pwd.addEventListener("keyup", passCheck);

let toggleDarkMode = document.getElementById("toggle-darkmode");

toggleDarkMode.addEventListener("change", darkMode);

function darkMode() {
  let darkMode = toggleDarkMode.selectedIndex;
  let optionMode = toggleDarkMode.getElementsByTagName("option")[darkMode];
  let selectMode = optionMode.value;

  if (selectMode === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}
