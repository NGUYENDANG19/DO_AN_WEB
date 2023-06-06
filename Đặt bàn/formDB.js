const form = document.querySelector('form');
const nameInput = document.getElementById('Name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('SDT');
const dayInput = document.getElementById('day');
const peopleInput = document.getElementById('SL');
const timeInput = document.getElementById('time');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting
  
  checkInputs();
});

function checkInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const dayValue = dayInput.value.trim();
  const peopleValue = peopleInput.value.trim();
  const timeValue = timeInput.value.trim();

  // Check name input
  if (nameValue === '') {
    setErrorFor(nameInput, 'Vui lòng nhập tên của bạn');
  } else {
    setSuccessFor(nameInput);
  }

  // Check email input
  if (emailValue === '') {
    setErrorFor(emailInput, 'Vui lòng nhập email của bạn');
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailInput, 'Email không hợp lệ');
  } else {
    setSuccessFor(emailInput);
  }

  // Check phone input
  if (phoneValue === '') {
    setErrorFor(phoneInput, 'Vui lòng nhập số điện thoại của bạn');
  } else {
    setSuccessFor(phoneInput);
  }

  // Check day input
  if (dayValue === '') {
    setErrorFor(dayInput, 'Vui lòng chọn ngày đến');
  } else {
    setSuccessFor(dayInput);
  }

  // Check people input
  if (peopleValue === '') {
    setErrorFor(peopleInput, 'Vui lòng nhập số người đi cùng');
  } else {
    setSuccessFor(peopleInput);
  }

  // Check time input
  if (timeValue === '') {
    setErrorFor(timeInput, 'Vui lòng chọn thời gian đến');
  } else {
    setSuccessFor(timeInput);
  }
}

function setErrorFor(input, message) {
  const formValue = input.parentElement;
  const small = formValue.querySelector('small');
  const span = formValue.querySelector('span');
  span.className = 'error-icon fa-solid fa-exclamation-triangle';
  small.innerText = message;
  formValue.className = 'inputbox error';
}

function setSuccessFor(input) {
  const formValue = input.parentElement;
  const small = formValue.querySelector('small');
  const span = formValue.querySelector('span');
  span.className = 'error-icon hidden';
  small.innerText = '';
  formValue.className = 'inputbox success';
}

function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
