import { createUniqueBlockId } from '../../utils'
import createCloseIconElement from '../close-icon'

/**
 *
 * @param {String} emailObj.email
 * @param {String} emailObj.containerId container id, needed to create unique id's and prevent conflicts if more 'EmailsInput` components are present
 * @param {Valid} emailObj.valid
 * @return {HTMLElement} block email
 */
function createBlockEmailElement(
  { email, valid, containerId } = {},
  events = {}
) {
  if (!email) throw new Error('`email` is required to create email block')
  if (!containerId)
    throw new Error('`containerId` is required to create email block')

  const { close } = events
  const classNameValid = valid ? 'valid' : 'invalid'
  const $blockEmail = document.createElement('p')

  $blockEmail['data-email'] = email
  $blockEmail.id = createUniqueBlockId(containerId, email)

  $blockEmail.classList.add('email-block')
  $blockEmail.classList.add(classNameValid)

  const $text = document.createTextNode(email)
  const $closeIcon = createCloseIconElement({ email, containerId }, { close })
  $blockEmail.appendChild($text)
  $blockEmail.appendChild($closeIcon)

  return $blockEmail
}

export default createBlockEmailElement
