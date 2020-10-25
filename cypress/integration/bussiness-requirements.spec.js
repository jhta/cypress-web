/// <reference types="cypress" />

context('Bussiness requirements', () => {
  beforeEach(() => {
    cy.visit('http://jhta.github.io/miro')
  })

  it('Should add email pressing ENTER', () => {
    cy.get('#input').type('email1@correct.co')
    cy.wait(200)
    cy.get('.email-block').should('have.length', 0)
    cy.get('#input')
      .type('email1@correct.co')
      .type('{enter}')
    cy.wait(200)
    cy.get('.email-block').should('have.length', 1)
  })

  it('Should add email pressing COMMA', () => {
    cy.get('#input').type('email1@correct.co')
    cy.wait(200)
    cy.get('.email-block').should('have.length', 0)
    cy.get('#input').type(',')
    cy.wait(200)
    cy.get('.email-block').should('have.length', 1)
  })

  it('Should add email if the input lose the focus', () => {
    cy.get('#input').type('email1@correct.co')
    cy.wait(200)
    cy.get('.email-block').should('have.length', 0)
    cy.get('#input').blur()
    cy.get('.email-block').should('have.length', 1)
  })

  it('Should add a random email clicking `Add Email` button', () => {
    cy.get('#button-add').click()

    cy.wait(200)

    cy.get('.email-block')
      .first()
      .should('contain.text', 'email1@miro.com')
      .should('have.class', 'valid')
  })

  it('Should throw an alert with the count clicking `Get email count`', () => {
    const randomEmail1 = 'email1@miro.com'

    cy.get('#button-add').click()
    cy.get('#button-add').click()
    cy.get('#button-add').click()

    cy.wait(500)

    cy.get('#button-count').click()

    cy.wait(300)

    cy.on('window:alert', txt => {
      //Mocha assertions
      expect(txt).to.contains('Valid emails: 3')
    })
  })

  it('Should be able to delete an item pressing X', () => {
    cy.get('#button-add').click()

    cy.get('[data-test="email1@miro.com"]').should('exist')

    cy.wait(500)
    cy.get(`[data-test="block-email-emails-input-email1@miro.com"]`).click()
    cy.wait(200)
    cy.get('[data-test="email1@miro.com"]').should('not.exist')
  })

  it('Should add emails with copy/paste string', () => {
    cy.get('#input').type('email1@correct.co,emailinvalid,email2@correct.co,')
    cy.wait(500)
    cy.get('.email-block').should('have.length', 3)
  })

  it('Should add `invalid` class if email is incorrect or `valid` if the email is correct', () => {
    cy.get('#input').type('email1@correct.co,emailinvalid,email2@correct.co,')
    cy.wait(500)
    cy.get('.valid').should('have.length', 2)
    cy.get('.invalid').should('have.length', 1)
  })
})
