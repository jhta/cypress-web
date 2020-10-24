import createCloseIcon from '.'

describe('EmailBlock', () => {
  it('Should return an html elemnt with tag `SPAN`', () => {
    const $block = createCloseIcon(
      { email: 'email', containerId: 'input' },
      { close: jest.fn() }
    )
    expect($block.tagName).toBe('SPAN')
  })

  it('Should call `close` event if is clicked', () => {
    const cb = jest.fn()
    const $block = createCloseIcon(
      { email: 'email', containerId: 'input' },
      { close: cb }
    )

    $block.click()
    expect(cb).toHaveBeenCalled()
  })
})
