import { DEFAULT_PLACEHOLDER } from './constants'
import { isElement, isValidEmail, keyPressedIsCommaOrEnter } from './utils'

function createInputElement(options, addEmail) {
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
    addEmail(value)
  })

  return $input
}

function EmailInputs($el, options) {
  if (typeof $el === 'undefined') throw new Error('Argument $el is required')
  if (!isElement($el)) throw new Error('Container $el is not a DOM element')
  this.emails = {}

  this.$input = createInputElement(options)
  $el.appendChild(this.$input)
  this.$el = $el
}

EmailInputs.prototype.getElement = function() {
  return this.$el
}

EmailInputs.prototype.addEmail = function(email) {
  const emailObj = { email, valid: isValidEmail(email) }
  this.emails[email] = emailObj
  this.insertEmailBockElement(emailObj)
}

function emailInputFactory($el, options) {
  const emailInputs = new EmailInputs($el, options)

  return {
    getElement: () => emailInputs.getElement(),
    test: 'fsdfs',
  }
}

export default emailInputFactory
