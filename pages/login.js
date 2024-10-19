const password = document.getElementById('login-password')
const passwordError = document.getElementsByClassName('password-error')[0]

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
