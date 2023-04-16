// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', () =>{
    
    cy.viewport(1366, 657)
    //const sms= '211267313';

    cy.getCookies({log: true})

    cy.clearCookies({log: true})

    cy.getCookies().should('be.empty')

    cy.clearAllCookies({log:true})
    
    cy.clearAllLocalStorage({log:true})

    
    //cy.visit('https://app-stage.ezymigrate.co.nz/login')
    cy.visit('https://app.ezymigrate.com/login')
    cy.get('#userName > .profile-input-login').type('rananabeelahmed772@gmail.com')

      cy.get('#password > .profile-input-login').type('Nabeel@123')
      

      cy.get('.sus-modal-button-text').click()

      cy.wait(3000)

      cy.contains('Client Analytics').should('be.visible')
      
      cy.wait(2000)
  })