const DEFAULT_PLACEHOLDER = 'add more people..'
const KEYCODE_ENTER = 13
const kEYCODE_COMMA = 188

function isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument
}

function keyPressedIsCommaOrEnter(keyCode) {
  return keyCode === KEYCODE_ENTER || keyCode === kEYCODE_COMMA
}

function createInput(options) {
  const $input = document.createElement('input')

  const placeholder = (options && options.placeholder) || DEFAULT_PLACEHOLDER
  $input.placeholder = placeholder
  $input['data-test'] = 'input'
  $input.id = 'input'

  $input.classList.add('email-input--input')

  $input.addEventListener('keyup', event => {
    if (!keyPressedIsCommaOrEnter(event.keyCode)) return
    const {
      target: { value },
    } = event

    event.preventDefault()
    event.stopPropagation()
    console.log('email', value)
  })

  return $input
}

function EmailInputs($el, options) {
  if (typeof $el === 'undefined') throw new Error('Argument $el is required')
  if (!isElement($el)) throw new Error('Container $el is not a DOM element')

  this.$input = createInput(options)
  $el.appendChild(this.$input)
  this.$el = $el
}

EmailInputs.prototype.getElement = function() {
  return this.$el
}

function emailInputFactory($el, options) {
  const emailInputs = new EmailInputs($el, options)

  return {
    getElement: () => emailInputs.getElement(),
    test: 'fsdfs',
  }
}

export default emailInputFactory
