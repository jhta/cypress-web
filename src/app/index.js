import './style.less'
import EmailsInput from '../lib'

function init() {
  const inputContainerNode = document.querySelector('#emails-input')
  const emailsInput = EmailInputs(inputContainerNode)
  console.log(emailsInput)
}

init()
