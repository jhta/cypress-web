import EmailsInput from './index'

describe('EmailsInput', () => {
  describe('> Initial validations', () => {
    it('Should be defined', () => {
      expect(EmailsInput).toBeDefined()
    })

    it('Should throw an error if it does not receive any parameter', () => {
      expect(() => {
        EmailsInput()
      }).toThrow('Argument $el is required')
    })

    it('Should throw an error if Container element is not a HTML element', () => {
      expect(() => {
        EmailsInput('hello')
      }).toThrow('Container $el is not a DOM element')
    })
  })

  describe(' > getElement', () => {
    const $el = document.createElement('div')
    const $emailsInput = EmailsInput($el).getElement()

    it('Should return formatted container', () => {
      expect($emailsInput).toBe($el)
    })

    describe('> Input', () => {
      const $input = $emailsInput.lastChild

      it('Should insert a input element to the container $el', () => {
        expect($input.tagName).toBe('INPUT')
      })
    })
  })
})