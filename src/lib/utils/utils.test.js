import { keyPressedIsCommaOrEnter, isElement, isValidEmail } from '.'

describe('Utills', () => {
  describe('> isElement', () => {
    it('Should return true if the argument is an html element', () => {
      const $el = document.createElement('div')
      expect(isElement($el)).toBeTruthy()
    })

    it('Should return false if the argument is an not a html element', () => {
      const $el = 'hello'
      expect(isElement($el)).toBeFalsy()
    })
  })

  describe('> keyPressedIsCommaOrEnter ', () => {
    it('Should return true if the key pressed is `,`', () => {
      const keycode = 188
      expect(keyPressedIsCommaOrEnter(keycode)).toBeTruthy()
    })

    it('Should return true if the key pressed is `enter`', () => {
      const keycode = 13
      expect(keyPressedIsCommaOrEnter(keycode)).toBeTruthy()
    })
  })
  describe('> isValidEmail', () => {
    it('Should return true if the email format is valid', () => {
      const email = 'test@gmail.com'
      expect(isValidEmail(email)).toBeTruthy()
    })

    it('Should return fase if the email format is invalid', () => {
      const email = 'invalidemai@'
      expect(isValidEmail(email)).toBeFalsy()
    })
  })
})
