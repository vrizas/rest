const showFlashMessage = (message, type) => {
  const flashMessage = document.querySelector('#flashMessage')
  const closeButton = flashMessage.querySelector('button')

  flashMessage.style.display = 'initial'
  flashMessage.querySelector('.flashMessage__message').innerHTML = message
  setTimeout(() => {
    flashMessage.classList.add('active', type)
    closeButton.focus()
  }, 100)
  setTimeout(() => {
    flashMessage.className = ''
    setTimeout(() => {
      flashMessage.style.display = 'none'
    }, 300)
  }, 5000)

  closeButton.addEventListener('click', () => {
    flashMessage.className = ''
    setTimeout(() => {
      flashMessage.style.display = 'none'
    }, 300)
  })
}

export default showFlashMessage
