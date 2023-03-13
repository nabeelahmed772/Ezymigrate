Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
  
  describe('Adding Employer', () => {
    it('Add employer', () => {
      cy.viewport(1366, 657)

      
      //cy.visit('https://app-stage.ezymigrate.co.nz/login')
      cy.visit('https://app.ezymigrate.com/login')

      //cy.intercept('POST', '/ActiveSince*').as('login')

      cy.get('#userName > .profile-input-login').type('rananabeelahmed772@gmail.com')
      cy.get('#password > .profile-input-login').type('nabeel@123')
      cy.get('.sus-modal-button-text').click()
      cy.contains('Client Analytics').should('be.visible')
      
      cy.wait(9000)

      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[11]/span/a').click()
      cy.wait(5000)
      cy.get(':nth-child(2) > .header-bar-text-div > .header-text').click()
      cy.wait(5000)
      cy.get('.icons-client').click()
      cy.wait(2000)
      cy.get('#type').click()
      cy.contains('Highschool').click()
      cy.get('#name').type('test school name')
      cy.get('#city').type('city test')
      cy.get('#address').type('test address')
      cy.get('#website').type('www.test.com')
      cy.get('#email').type('test@gmail.com')
      cy.get('#notes').type('testig by nabeel')
      cy.get('[type="file"]').attachFile('ABC.jpg' )
      //cy.get('.anticon anticon-upload').attachFile('ABC.jpg' )
      cy.wait(3000)

      //adding contacts

      cy.get(':nth-child(2) > :nth-child(1) > .margin-contact-container > .ant-col-xs-12 > .add-tag-btn > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .icons-client').click()
      cy.wait(2000)
      cy.get('#contacts_0_name').type('test name')
      cy.get('#contacts_0_email').type('test@gmail.com')
      cy.get('#contacts_0_description').type('test address descriptio')

      //adding level

      cy.get(':nth-child(5) > :nth-child(1) > .margin-contact-container > .ant-col-xs-12 > .add-tag-btn > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .icons-client').click()
      cy.get('#levels_0_name').type('first level')
      cy.get('#levels_0_description').type('test description')
      cy.get('#levels_0_percentage').type('12%')
      cy.get('.ant-col-offset-18 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(6000)

        //deleting school

        cy.contains('HIGHSCHOOL').click()
        cy.wait(3000)
        
        cy.get('[data-row-key="2"] > :nth-child(4) > :nth-child(1) > :nth-child(2)').click()
        cy.get('[style="display: flex; margin-top: 40px;"] > :nth-child(2) > .ant-btn > span').click()
        cy.wait(2000)




    });

});   

