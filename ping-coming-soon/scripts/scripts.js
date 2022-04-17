// function for feather icons
feather.replace();

const emailField = document.getElementById("jsemailfld");
const submitBtn = document.querySelector(".notify-me");
const messageFld = document.getElementById("jsmessage");
messageFld.classList.add("hidden");

submitBtn.onclick = function () {
  submitBtn.innerHTML = "Notify Me";
  messageFld.innerText = "";
  isValid = emailField.checkValidity();
  if (emailField.value == "" || emailField.value == null || emailField.value == "undefined" || emailField.value == " ") {
    messageFld.classList.remove("hidden");
    messageFld.innerText = "Whoops! It looks like you forgot to add your email";
    emailField.style.border.color = "red";
  }
  else {
    if (!isValid) {
      messageFld.classList.remove("hidden");
      emailField.style.border.color = "red";
      messageFld.innerText = "Please enter a valid email address";
    }
    else {
      submitBtn.innerHTML = "Thank you";
    }
  }
}