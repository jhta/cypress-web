import { KEYCODE_ENTER, kEYCODE_COMMA } from './constants'

export function isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument
}

export function keyPressedIsCommaOrEnter(keyCode) {
  return keyCode === KEYCODE_ENTER || keyCode === kEYCODE_COMMA
}

export function isValidEmail(email) {
  if (!email) return false
  return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
}
