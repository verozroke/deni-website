const button = document.getElementById('create-post-button')
const form = document.getElementById('form')

button.addEventListener('click', function () {
  form.className = 'post-form'
  button.className = 'profile-button hidden'
})

// copy
form.addEventListener('submit', function (e) {
  // убирает типичное поведение (не перезагружается)
  e.preventDefault()

  const post = document.createElement('div')
  post.className = 'post'

  post.innerHTML = `
    <h1>${form.title.value}</h1>
    <p>
      ${form.description.value}
    </p>
  `

  const posts = document.getElementsByClassName('posts')[0]
  posts.appendChild(post)
})
