import './style.less'
import EmailsInput from '../lib'

function handleAddEmailButton(emailsInput) {
  const $buttonAdd = document.getElementById('button-add')
  let counter = 1
  $buttonAdd.addEventListener('click', event => {
    event.preventDefault()
    emailsInput.addEmail(`email${counter}@miro.com`)
    counter++
  })
}

function handleCountValidEmailsButton(emailsInput) {
  const $buttonCount = document.getElementById('button-count')
  $buttonCount.addEventListener('click', event => {
    event.preventDefault()
    const numberOfValidEmails = emailsInput.countValidEmails()

    alert(`Valid emails: ${numberOfValidEmails} ✅`)
  })
}

function init() {
  const $inputContainerNode = document.querySelector('#emails-input')
  const emailsInput = EmailsInput($inputContainerNode)

  handleAddEmailButton(emailsInput)
  handleCountValidEmailsButton(emailsInput)
}

init()
