/// <reference types= "cypress" />



beforeEach(()=>{
    cy.login()

})
describe('account setting', ()=>{
  const futureDate = Cypress.env('futureDate')
  
    it('Settings', ()=>{

        cy.intercept('GET','https://beta-api.ezymigrate.co.nz/v1/users/UserSignature/*')
          .as('signature')

        cy.intercept('PUT', 'https://beta-api.ezymigrate.co.nz/v1/users/UserSignature')
          .as('UserSignature')
        
        cy.intercept('https://beta-api.ezymigrate.co.nz/v1/users/DocumentView/*')
          .as('DocumentView')

        cy.intercept('https://beta-api.ezymigrate.co.nz/v1/users/DocumentView')
          .as('users/DocumentView')

        cy.intercept('https://beta-api.ezymigrate.co.nz/v1/OutlookMail')
          .as('OutlookMail')

        cy.get('a[href="/account-settings"]')
          .click()

        cy.get('img[src="/static/media/signature.f768e9da.svg"]')
          .click()

        cy.wait('@signature')
          .its('response.statusCode')
          .should('eq', 200)

        cy.contains('UPDATE')
          .click()

        cy.wait('@signature')
          .its('response.statusCode')
          .should('eq', 200)

        cy.wait('@UserSignature')
          .its('response.statusCode')
          .should('eq', 200)

        cy.get('.anticon.anticon-left-circle.ac-back-icon')
          .scrollIntoView()

        cy.get('.anticon.anticon-left-circle.ac-back-icon')
          .click()

        cy.get('img[src="/static/media/documents.87dcbd39.svg"]')
          .click()

        cy.wait('@DocumentView')
          .its('response.statusCode')
          .should('eq', 200)

        cy.get('.ant-checkbox-input')
          .click()

        cy.wait('@users/DocumentView')
          .its('response.statusCode')
          .should('eq', 200)

        cy.get('.ant-checkbox-input')
          .click()

        cy.wait('@users/DocumentView')
          .its('response.statusCode')
          .should('eq', 200)

        cy.get('.anticon.anticon-left-circle.ac-back-icon')
          .click()
        
        cy.get('img[src="/static/media/creative-commons.ee0ddd09.png"]')  
          .click()

        cy.wait('@OutlookMail').then((interception) => {
            cy.wrap(interception.response.statusCode).should('eq', 200)
            cy.wrap(interception.response.body.givenName).should('eq', 'Nabeel Ahmad')
          })

        
        cy.get('.anticon.anticon-left-circle.ac-back-icon')
          .click()

        cy.contains('Company/Branch Level Setting')
          .click()

        


        




    })

})