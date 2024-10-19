const password = document.getElementById('register-password')
const passwordError = document.getElementsByClassName('password-error')[0]
const confirmPassword = document.getElementById('register-confirm-password')
const confirmPasswordError = document.getElementsByClassName(
  'confirm-password-error'
)[0]

// ! Password
password.addEventListener('input', () => {
  if (password.value.length < 8) {
    passwordError.className = 'password-error'
  } else {
    passwordError.className = 'password-error hidden'
  }
})

password.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text'
  } else {
    password.type = 'password'
  }
})

// ! Confirm

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value.length < 8) {
    passwordError.className = 'confirm-password-error'
  } else {
    passwordError.className = 'confirm-password-error hidden'
  }
})

confirmPassword.addEventListener('click', () => {
  if (confirmPassword.type === 'password') {
    confirmPassword.type = 'text'
  } else {
    confirmPassword.type = 'password'
  }
})
