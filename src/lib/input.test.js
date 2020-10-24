import createInput, { onKeyupFactory, onPasteFactory } from './input'

describe('Input', () => {
  const $input = createInput()

  it('Should insert a input element to the container $el', () => {
    expect($input.tagName).toBe('INPUT')
  })

  it('Shoud have element id=input', () => {
    expect($input.id).toBe('input')
  })

  it('Should use the placeholder set in the options param', () => {
    const $inputWithPlaceHoder = createInput({
      placeholder: 'PLACEHOLDER TEST',
    })
    expect($inputWithPlaceHoder.placeholder).toBe('PLACEHOLDER TEST')
  })

  describe('> Event factories', () => {
    describe('onKeyupFactory', () => {
      it('should call the callback if the key pressed is comma or enter', () => {
        const cb = jest.fn()
        const onKeyup = onKeyupFactory(cb)
        const eventKeyup = {
          keyCode: 13,
          target: { value: 'hello,' },
          preventDefault: jest.fn(),
          stopPropagation: jest.fn(),
        }
        onKeyup(eventKeyup)
        expect(cb).toHaveBeenCalledWith('hello,')
      })
    })

    describe('onPasteFactory', () => {
      it('should call the callback if the key pressed is comma or enter', () => {
        const cb = jest.fn()

        const onPaste = onPasteFactory(cb)
        const event = {
          clipboardData: { getData: () => 'clipboard_text' },
          preventDefault: jest.fn(),
          stopPropagation: jest.fn(),
        }
        onPaste(event)
        expect(cb).toHaveBeenCalledWith('clipboard_text')
      })
    })
  })
})
