/**
 * @param {Object} _ Options
 * @param {Object} events
 * @param {Funciton} events.click click callback
 * @return {HTMLElement}
 */
function createWrapperElement(_, events = {}) {
  const { click } = events

  const $wrapper = document.createElement('div')
  $wrapper.classList.add('email-input--wrapper')

  $wrapper.addEventListener('click', event => {
    event.preventDefault()
    console.log('click')
    click()
  })

  return $wrapper
}

export default createWrapperElement
