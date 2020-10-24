/**
 * @return {HTMLElement} close icon
 */
function createIconCloseElement({ email }, events) {
  const { close } = events
  const $closeIcon = document.createElement('span')
  $closeIcon.innerHTML = '&times'
  $closeIcon.classList.add('i-close')
  $closeIcon['data-email'] = email
  $closeIcon['data-test'] = `close-icon-${email}`

  $closeIcon.addEventListener('click', event => {
    event.stopPropagation()
    event.preventDefault()

    close(email)
  })
  return $closeIcon
}

/**
 *
 * @param {String} emailObj.email
 * @param {Valid} emailObj.valid
 * @return {HTMLElement} block email
 */
function createBlockEmailElement({ email, valid } = {}, events) {
  if (!email) return

  const { close } = events
  const classNameValid = valid ? 'valid' : 'invalid'
  const $blockEmail = document.createElement('p')

  $blockEmail['data-email'] = email
  $blockEmail.id = `block-email-${email}`

  $blockEmail.classList.add('email-block')
  $blockEmail.classList.add(classNameValid)

  const $text = document.createTextNode(email)
  const $closeIcon = createIconCloseElement({ email }, { close })
  $blockEmail.appendChild($text)
  $blockEmail.appendChild($closeIcon)

  return $blockEmail
}

export default createBlockEmailElement
