import { isElement, isValidEmail } from './utils'
import createInputElement from './input'
import createBlockEmail from './block-email'
import createWrapperElement from './wrapper'

export default function EmailInput($el, options) {
  if (typeof $el === 'undefined') throw new Error('Argument $el is required')
  if (!isElement($el)) throw new Error('Container $el is not a DOM element')
  this.emails = {}

  this.$input = createInputElement(options, {
    keyup: value => {
      this.addEmail(value)
    },
    paste: value => {
      this.addEmailsFromPaste(value)
    },
  })

  const onClickWrapper = () => {
    this.$input.focus()
  }

  const $wrapper = createWrapperElement({}, { click: onClickWrapper })
  const $blockElements = document.createElement('span')

  $wrapper.appendChild($blockElements)
  $wrapper.appendChild(this.$input)
  $el.appendChild($wrapper)
  this.$blockElements = $blockElements
  this.$el = $el
}

EmailInput.prototype.getElement = function() {
  return this.$el
}

EmailInput.prototype.addEmail = function(email) {
  if (!email) return

  const emailObj = { email, valid: isValidEmail(email) }
  this.emails[email] = emailObj
  this.insertBlockEmail(emailObj)
}

EmailInput.prototype.insertBlockEmail = function({ email, valid }) {
  const $blockEmail = createBlockEmail({ email, valid })
  this.$blockElements.appendChild($blockEmail)
}

EmailInput.prototype.addEmailsFromPaste = function(text) {
  if (!text) return

  const emails = text.split(',')
  emails.forEach(email => this.addEmail(email))
}
