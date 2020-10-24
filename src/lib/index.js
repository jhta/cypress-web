function isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument
}

const EmailInputs = $el => {
  if (typeof $el === 'undefined') throw new Error('Argument $el is required')
  if (!isElement($el)) throw new Error('args.$el is not a DOM element')

  return $el
}

export default EmailInputs
