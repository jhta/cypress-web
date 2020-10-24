/**
 * @return {HTMLElement} close icon
 */
function createIconCloseElement() {
  const $closeIcon = document.createElement('span')
  $closeIcon.innerHTML = '&times'
  $closeIcon.classList.add('i-close')
  return $closeIcon
}

/**
 *
 * @param {String} emailObj.email
 * @param {Valid} emailObj.valid
 * @return {HTMLElement} block email
 */
function createBlockEmailElement(emailObj) {
  if (!emailObj) return

  const { email, valid } = emailObj
  const classNameValid = valid ? 'valid' : 'invalid'
  const $blockEmail = document.createElement('p')

  $blockEmail.classList.add('email-block')
  $blockEmail.classList.add(classNameValid)

  const $text = document.createTextNode(email)
  const $closeIcon = createIconCloseElement()
  $blockEmail.appendChild($text)
  $blockEmail.appendChild($closeIcon)

  return $blockEmail
}

export default createBlockEmailElement
