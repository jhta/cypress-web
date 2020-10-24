import { isElement, isValidEmail } from './utils'
import EmailInput from './components/email-input'

function emailInputFactory($el, options) {
  const emailInput = new EmailInput($el, options)

  return {
    getElement: () => emailInput.getElement(),
    test: 'fsdfs',
  }
}

export default emailInputFactory
