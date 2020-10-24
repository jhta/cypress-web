import EmailsInput from './email-input'

describe('EmailsInput', () => {
  describe('> Initial validations', () => {
    it('Should be defined', () => {
      expect(EmailsInput).toBeDefined()
    })

    it('Should throw an error if it does not receive any parameter', () => {
      expect(() => {
        new EmailsInput()
      }).toThrow('Argument $el is required')
    })

    it('Should throw an error if Container element is not a HTML element', () => {
      expect(() => {
        new EmailsInput('hello')
      }).toThrow('Container $el is not a DOM element')
    })
  })

  describe(' > getElement', () => {
    const $el = document.createElement('div')
    const $emailsInput = new EmailsInput($el)

    it('Should return formatted container', () => {
      expect($emailsInput.getElement()).toBe($el)
    })

    describe('> Input', () => {
      const $input = $emailsInput.$input

      it('Should insert a input element to the container $el', () => {
        expect($input.tagName).toBe('INPUT')
      })
    })
  })

  describe(' > addEmail', () => {
    describe('if receive email as argument', () => {
      it('Should add email object = { email, valid } to this.emails Map with email as key ', () => {
        const $el = document.createElement('div')
        const $emailsInput = new EmailsInput($el)

        const email = 'example@email.com'
        $emailsInput.addEmail(email)
        expect($emailsInput.emails[email]).toStrictEqual({ email, valid: true })
      })
      it('should execute this.insertBlockEmail with emailObj argument', () => {
        const $el = document.createElement('div')
        const $emailsInput = new EmailsInput($el)
        const spy = jest.spyOn($emailsInput, 'insertBlockEmail')
        const email = 'example@email.com'

        $emailsInput.addEmail(email)

        expect(spy).toHaveBeenCalled()

        spy.mockRestore()
      })
    })
  })
})
