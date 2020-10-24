import emailInputFactory from './index'
import { createUniqueBlockId } from './utils'

describe('emailInputFactory', () => {
  describe('addEmail(email)', () => {
    it('should add email if $el DOM element is present', () => {
      const $el = document.createElement('div')
      $el.id = 'email-input'
      document.body.appendChild($el)
      const emailInput = emailInputFactory($el)
      const email = 'email@test.co'
      emailInput.addEmail(email)

      const blockId = createUniqueBlockId($el.id, email)
      const $block = document.getElementById(blockId)

      expect($block).not.toBeNull()
    })
  })

  describe('countValidEmails()', () => {
    it('should count the valid emails', () => {
      const $el = document.createElement('div')
      $el.id = 'email-input'
      document.body.appendChild($el)
      const emailInput = emailInputFactory($el)

      emailInput.addEmail('valid@valid.co')
      emailInput.addEmail('invalid')
      emailInput.addEmail('valid2@valid.co')
      emailInput.addEmail('valid3@valid.co')
      emailInput.addEmail('valid4@valid.co')
      emailInput.addEmail('invalid2')
      emailInput.addEmail('valid5@valid.co')

      expect(emailInput.countValidEmails()).toBe(5)
    })
  })
})
