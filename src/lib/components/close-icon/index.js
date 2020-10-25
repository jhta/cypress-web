import { createUniqueBlockId } from '../../utils'

/**
 * @return {HTMLElement} close icon
 */
function createIconCloseElement({ email, containerId }, events) {
  const { close } = events
  const $closeIcon = document.createElement('span')
  const id = createUniqueBlockId(containerId, email)
  $closeIcon.innerHTML = '&times'
  $closeIcon.classList.add('i-close')
  $closeIcon.setAttribute('data-test', id)

  $closeIcon.addEventListener('click', event => {
    event.stopPropagation()
    event.preventDefault()

    close(email)
  })
  return $closeIcon
}

export default createIconCloseElement
