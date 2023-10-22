const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
let registered = false;
form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput()
    if (registered) {
        const loginconf = confirm('Would you like to Login?');
        if(loginconf){
            alert('Login Successful');
        }
      }
    });
    
function checkInput() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (emailValue === "") {
    setError(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setError(email, "Enter valid Email");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password cannot be blank");
  } else if(passwordValue.length<"8") {
     setError(password, "Password must be minimum 8 characters");
  } else {
    setSuccess(password);
  }
  if (isEmail(emailValue) && passwordValue !== "" && passwordValue.length>"8") {
    registered = true;
  } else {
    registered = false;
  }
}

function setError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("p");
  formGroup.className = "form-div error";
  small.innerText = message;
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-div success";
}

function isEmail(email) {
return /^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/.test(email);
}