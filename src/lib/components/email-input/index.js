import { isElement, isValidEmail, createUniqueBlockId } from '../../utils'
import createInputElement from '../input'
import createBlockEmail from '../block-email'
import createWrapperElement from '../wrapper'

/**
 * EmailInput class component
 * @constructor
 * @param {HTMLElement} $el Element to insert the input
 * @param {Object} options
 * @param {String} options.placeholder Input placeHolder
 */
export default function EmailInput($el, options) {
  if (typeof $el === 'undefined') throw new Error('Argument $el is required')
  if (!isElement($el)) throw new Error('Container $el is not a DOM element')
  this.emails = {}

  const inputEvents = this.createInputHandlers()
  const $input = createInputElement(options, inputEvents)

  const onClickWrapper = () => {
    $input.focus()
  }

  const $blockElements = document.createElement('span')

  const $wrapper = createWrapperElement({}, { click: onClickWrapper })
  $wrapper.appendChild($blockElements)
  $wrapper.appendChild($input)
  $el.appendChild($wrapper)

  this.$blockElements = $blockElements
  this.$el = $el
  this.id = $el.id
}

/**
 * Get initial handlers for input with class context scoped
 */
EmailInput.prototype.createInputHandlers = function() {
  return {
    keyup: value => {
      this.addEmail(value)
    },
    paste: value => {
      this.addEmailsFromPaste(value)
    },
  }
}

EmailInput.prototype.getElement = function() {
  return this.$el
}

/**
 * @param {String} email
 */
EmailInput.prototype.addEmail = function(email) {
  if (!email) return

  const emailObj = { email, valid: isValidEmail(email) }
  this.emails[email] = emailObj
  this.insertBlockEmail(emailObj)
}

/**
 *
 * @param {String} params.email
 * @param {Boolean} params.vaid
 */
EmailInput.prototype.insertBlockEmail = function({ email, valid }) {
  const $blockEmail = createBlockEmail(
    { email, valid, containerId: this.id },
    {
      close: value => {
        console.log('to remove', value)
        this.removeBlockEmail(value)
      },
    }
  )
  this.$blockElements.appendChild($blockEmail)
}

/**
 *
 * @param {String} email
 */
EmailInput.prototype.removeBlockEmail = function(email) {
  if (!email) return

  const id = createUniqueBlockId(this.id, email)
  const $blockEmail = document.getElementById(id)

  if (!$blockEmail || !$blockEmail.parentNode) return

  $blockEmail.parentNode.removeChild($blockEmail)

  delete this.emails[email]
}

/**
 *
 * @param {String} text
 */
EmailInput.prototype.addEmailsFromPaste = function(text) {
  if (!text) return

  const emails = text.split(',')
  emails.forEach(email => this.addEmail(email))
}
