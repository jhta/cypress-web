import { DEFAULT_PLACEHOLDER } from './constants'
import { keyPressedIsCommaOrEnter } from './utils'

/**
 * onkeyup event handler factory
 * @param {Function} cb callback to execute
 * @param {Function} reset callback to reset input value
 */
export function onKeyupFactory(cb, reset) {
  return event => {
    if (!keyPressedIsCommaOrEnter(event.keyCode)) return
    const {
      target: { value },
    } = event

    event.preventDefault()
    event.stopPropagation()
    cb(value)
    reset()
  }
}

/**
 * onpaste event handler factory
 * @param {Function} cb callback to execute
 * @param {Function} reset callback to reset input value
 */
export function onPasteFactory(cb, reset) {
  return event => {
    event.preventDefault()
    event.stopPropagation()

    const clipboardData = event.clipboardData || window.clipboardData
    const value = clipboardData.getData('text')
    cb(value)
    reset()
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

  const reset = () => {
    $input.value = ''
  }

  const onKeyup = onKeyupFactory(keyup, reset)
  $input.addEventListener('keyup', onKeyup)

  const onPaste = onPasteFactory(paste, reset)
  $input.addEventListener('paste', onPaste)

  return $input
}

export default createInputElement