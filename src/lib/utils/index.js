import { KEYCODE_ENTER, kEYCODE_COMMA } from '../constants'

export function isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument
}

export function keyPressedIsCommaOrEnter(keyCode) {
  return keyCode === KEYCODE_ENTER || keyCode === kEYCODE_COMMA
}

export function isValidEmail(email) {
  if (!email) return false
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}

/**
 *
 * @param {String} containerId
 * @param {String} email
 * @return {String} "unique id" based on the email and container id
 */
export function createUniqueBlockId(containerId, email) {
  return `block-email-${containerId}-${email}`
}
