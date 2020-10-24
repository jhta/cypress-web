import { DEFAULT_PLACEHOLDER } from './constants'
import { keyPressedIsCommaOrEnter } from './utils'

/**
 * onkeyup event handler factory
 * @param {Function} cb callback to execute
 */
export function onKeyupFactory(cb) {
  return event => {
    if (!keyPressedIsCommaOrEnter(event.keyCode)) return
    const {
      target: { value },
    } = event

    event.preventDefault()
    event.stopPropagation()
    cb(value)
  }
}

/**
 * onpaste event handler factory
 * @param {Function} cb callback to execute
 */
export function onPasteFactory(cb) {
  return event => {
    event.preventDefault()
    event.stopPropagation()

    const clipboardData = event.clipboardData || window.clipboardData
    const value = clipboardData.getData('text')
    cb(value)
  }
}

/**
 *
 * @param {Object} options
 * @param {String} options.placeholder
 * @param {Object} events
 * @param {Function} events.keyup
 * @param {Function} events.paste
 * @return {HTMLDocument}
 */
function createInputElement(options = {}, events = {}) {
  const { placeholder = DEFAULT_PLACEHOLDER } = options
  const { keyup, paste } = events
  const $input = document.createElement('input')
  $input.placeholder = placeholder
  $input['data-test'] = 'input'
  $input.id = 'input'
  $input.classList.add('email-input--input')

  const onKeyup = onKeyupFactory(keyup)
  $input.addEventListener('keyup', onKeyup)

  const onPaste = onPasteFactory(paste)
  $input.addEventListener('paste', onPaste)

  return $input
}

export default createInputElement
