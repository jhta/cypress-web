import EmailsInput from './index'

describe('EmailsInput', () => {
  it('Should be defined', () => {
    expect(EmailsInput).toBeDefined()
  })

  it('Should throw an error if it does not receive any parameter', () => {
    expect(() => {
      EmailsInput()
    }).toThrow('Argument $el is required')
  })

  it('Should throw an error if args.$el is not a HTML element', () => {
    expect(() => {
      EmailsInput('hello')
    }).toThrow('args.$el is not a DOM element')
  })

  it('Should process the element', () => {
    const $el = document.createElement('BUTTON')
    $el.innerHTML = 'CLICK ME'

    expect(EmailsInput($el)).toBe($el)
  })
})
