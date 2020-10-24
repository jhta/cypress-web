import EmailInput from './components/email-input'

/**
 * EmailInput factory created in order to encapsulate EmailInput properties.
 * @param {HTMLElement} $el
 * @param {Object} options
 */
function emailInputFactory($el, options) {
  const emailInput = new EmailInput($el, options)

  return {
    getElement: () => emailInput.getElement(),
    addEmail: email => emailInput.addEmail(email),
    countValidEmails: () =>
      Object.values(emailInput.emails).filter(({ valid }) => valid).length,
  }
}

export default emailInputFactory
