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
      const cb = jest.fn()
      const reset = jest.fn()
      const onKeyup = onKeyupFactory(cb, reset)
      const eventKeyup = {
        keyCode: 13,
        target: { value: 'hello,' },
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      }
      onKeyup(eventKeyup)
      it('should call the callback if the key pressed is comma or enter', () => {
        expect(cb).toHaveBeenCalledWith('hello,')
      })

      it('shoud call the reset method', () => {
        expect(reset).toHaveBeenCalled()
      })
    })

    describe('onPasteFactory', () => {
      const cb = jest.fn()
      const reset = jest.fn()

      const onPaste = onPasteFactory(cb, reset)
      const event = {
        clipboardData: { getData: () => 'clipboard_text' },
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      }

      onPaste(event)
      it('should call the callback if the key pressed is comma or enter', () => {
        expect(cb).toHaveBeenCalledWith('clipboard_text')
      })

      it('shoud call the reset method', () => {
        expect(reset).toHaveBeenCalled()
      })
    })
  })
})
