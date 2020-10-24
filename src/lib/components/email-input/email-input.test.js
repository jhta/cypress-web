import EmailsInput from '.'
import { createUniqueBlockId } from '../../utils'

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

  describe('> getElement()', () => {
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

  describe('> addEmail()', () => {
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

  describe('> addEmailsFromPaste()', () => {
    const copyPasteEmailsMock = 'exampe@emai.com,anotheremail@email.co,bademail'

    const copyPasteEmailsMockFormatted = [
      'exampe@emai.com',
      'anotheremail@email.co',
      'bademail',
    ]

    it('should split the text to get the emails, and call `this.addEmail` the emails number times', () => {
      const $el = document.createElement('div')
      const $emailsInput = new EmailsInput($el)

      const spy = jest.spyOn($emailsInput, 'addEmail')

      $emailsInput.addEmailsFromPaste(copyPasteEmailsMock)
      expect(spy).toHaveBeenCalledTimes(copyPasteEmailsMockFormatted.length)

      spy.mockRestore()
    })

    it('should call `this.add` with the `email` and `valid` arguments', () => {
      const $el = document.createElement('div')
      const $emailsInput = new EmailsInput($el)

      const spy = jest.spyOn($emailsInput, 'addEmail')

      $emailsInput.addEmailsFromPaste(copyPasteEmailsMock)

      expect(spy).toHaveBeenCalledWith(copyPasteEmailsMockFormatted[0])
      expect(spy).toHaveBeenCalledWith(copyPasteEmailsMockFormatted[1])
      expect(spy).toHaveBeenCalledWith(copyPasteEmailsMockFormatted[2])

      spy.mockRestore()
    })
  })

  describe('> removeBlockEmail()', () => {
    it('should remove the block email from the DOM if element with id=`block-email-{args.email}` exists', () => {
      const $el = document.createElement('div')
      $el.id = 'email-input'
      document.body.appendChild($el)
      const $emailsInput = new EmailsInput($el)
      const email = 'emaito@remove.co'

      const id = createUniqueBlockId($el.id, email)
      // insert email to remove
      $emailsInput.addEmail(email)
      const blockIsPresent = Boolean(document.getElementById(id))

      expect(blockIsPresent).toBeTruthy()

      $emailsInput.removeBlockEmail(email)
      const blockIsPresentAfterDelete = Boolean(document.getElementById(id))

      expect(blockIsPresentAfterDelete).toBeFalsy()
    })

    it('should remove email from this.emails if it exist there', () => {
      const $el = document.createElement('div')
      $el.id = 'email-input'
      document.body.appendChild($el)
      const $emailsInput = new EmailsInput($el)
      const email = 'emaito@remove.co'

      // insert email to remove
      $emailsInput.addEmail(email)

      const hasEmail = $emailsInput.emails.hasOwnProperty(email)
      expect(hasEmail).toBeTruthy()

      $emailsInput.removeBlockEmail(email)
      const hasEmailAfterRemove = $emailsInput.emails.hasOwnProperty(email)

      expect(hasEmailAfterRemove).toBeFalsy()
    })
  })
})
