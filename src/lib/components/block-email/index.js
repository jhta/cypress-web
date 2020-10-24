import { createUniqueBlockId } from '../../utils'

/**
 * @return {HTMLElement} close icon
 */
function createIconCloseElement({ email, containerId }, events) {
  const { close } = events
  const $closeIcon = document.createElement('span')
  $closeIcon.innerHTML = '&times'
  $closeIcon.classList.add('i-close')
  $closeIcon['data-email'] = email
  $closeIcon['data-test'] = createUniqueBlockId(containerId, email)

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
 * @param {String} emailObj.containerId container id, needed to create unique id's and prevent conflicts if more 'EmailsInput` components are present
 * @param {Valid} emailObj.valid
 * @return {HTMLElement} block email
 */
function createBlockEmailElement({ email, valid, containerId } = {}, events) {
  if (!email) return

  const { close } = events
  const classNameValid = valid ? 'valid' : 'invalid'
  const $blockEmail = document.createElement('p')

  $blockEmail['data-email'] = email
  $blockEmail.id = createUniqueBlockId(containerId, email)

  $blockEmail.classList.add('email-block')
  $blockEmail.classList.add(classNameValid)

  const $text = document.createTextNode(email)
  const $closeIcon = createIconCloseElement({ email, containerId }, { close })
  $blockEmail.appendChild($text)
  $blockEmail.appendChild($closeIcon)

  return $blockEmail
}

export default createBlockEmailElement
