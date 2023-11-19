var nameError = document.getElementById('name-error');
var telError = document.getElementById('tel-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
  let name = document.getElementById('name').value;
  if (name.length == 0) {
    nameError.innerHTML = 'please complete name';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]$/)) {
    nameError.innerHTML = 'name and family name please ';
    return false;
  }
  nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validatePhoneNumber() {
  let phoneNumber = document.getElementById('phone-number').value;
  if (phoneNumber.length === 0) {
    telError.innerHTML = 'please complete phone number';
    return false;
  }
  if (phoneNumber.length !== 10) {
    telError.innerHTML = 'phone number must be 10 digits';
    return false;
  }
  if (!phoneNumber.match(/^[0-9]{10}$/)) {
    telError.innerHTML = 'only numbers please.';
    return false;
  }
  telError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validateEmail() {
  let eMail = document.getElementById('email').value;
  if (eMail.length === 0) {
    emailError.innerHTML = 'please add your email';
    return false;
  }
  if (!eMail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'invalid email';
    return false;
  }
  emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById('message').value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + 'more characters required';
    return false;
  }
  messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validateForm() {
  if (
    !validateName() ||
    !validatePhoneNumber ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
}
