import { isElement, isValidEmail } from './utils'
import createInputElement from './input'
import EmailInput from './email-input'

function emailInputFactory($el, options) {
  const emailInput = new EmailInput($el, options)

  return {
    getElement: () => emailInput.getElement(),
    test: 'fsdfs',
  }
}

export default emailInputFactory
