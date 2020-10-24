import { createUniqueBlockId } from '../../utils'

/**
 * @return {HTMLElement} close icon
 */
function createIconCloseElement({ email, containerId }, events) {
  const { close } = events
  const $closeIcon = document.createElement('span')
  $closeIcon.innerHTML = '&times'
  $closeIcon.classList.add('i-close')
  $closeIcon['data-test'] = createUniqueBlockId(containerId, email)

  $closeIcon.addEventListener('click', event => {
    event.stopPropagation()
    event.preventDefault()

    close(email)
  })
  return $closeIcon
}

export default createIconCloseElement
