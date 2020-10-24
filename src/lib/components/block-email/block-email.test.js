import createEmailBlock from '.'
import { createUniqueBlockId } from '../../utils'

describe('EmailBlock', () => {
  it('should throw an error if required param email is not set', () => {
    expect(() => {
      createEmailBlock()
    }).toThrow('`email` is required to create email block')
  })

  it('should throw an error if required param email is not set', () => {
    expect(() => {
      createEmailBlock({ email: 'hello@hi.xyz' })
    }).toThrow('`containerId` is required to create email block')
  })

  it('Should return an html elemnt with tag `p`', () => {
    const $block = createEmailBlock(
      { email: 'email', containerId: 'input' },
      {}
    )
    expect($block.tagName).toBe('P')
  })

  it('Should have unique id based on containerId and email', () => {
    const $block = createEmailBlock(
      { email: 'email', containerId: 'input' },
      {}
    )
    expect($block.id).toBe(createUniqueBlockId('input', 'email'))
  })

  it('Should append a `span` html element (close button)', () => {
    const $block = createEmailBlock(
      { email: 'email', containerId: 'input' },
      {}
    )
    expect($block.firstElementChild.tagName).toBe('SPAN')
  })
})
