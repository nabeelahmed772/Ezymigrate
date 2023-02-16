Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  });

describe('Adding Employer', () => {
  it('Add employer', () => {

    
    //cy.visit('https://app-stage.ezymigrate.co.nz/login')
    cy.visit('https://app.ezymigrate.com/login')

    //cy.intercept('POST', '/ActiveSince*').as('login')

    cy.get('#userName > .profile-input-login').type('rananabeelahmed772@gmail.com')
    cy.get('#password > .profile-input-login').type('Nabeel@123')
    cy.get('.sus-modal-button-text').click()
    cy.contains('Client Analytics').should('be.visible')
    
    cy.wait(9000)
    cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[12]/span/a').click()
    cy.wait(9000)
    
    cy.contains('Employer Management').click()
    cy.wait(1000)

    cy.wait(7000)
      cy.scrollTo('left')
      cy.contains('cy new employer').click()
      cy.wait(7000)
      cy.scrollTo('top')
      cy.get('.ant-tabs-tab-btn').eq(2).click()
      cy.wait(5000)
    //cy.get('.ant-table-row ant-table-row-level-0').scrollTo('right')
    
    //cy.get('#root > div > div > div > section > main > div > div.ant-spin-nested-loading > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(2) > td.ant-table-cell.ant-table-row-expand-icon-cell > div > span.anticon.anticon-delete > svg').scrollIntoView()
    cy.get('.ant-tabs-tab-btn').eq(3).click()
      cy.wait(7000) 
      cy.get('.ant-tabs-tab-btn').contains('CREATE').click()
      cy.wait(7000)
      cy.get('[style="margin-left: -4px; margin-right: -4px;"] > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.contains('employer signature').click()
      cy.wait(8000)
      cy.contains('Generate Contract Link').click()
      cy.wait(6000)
      cy.get('[style="margin-top: 10px; display: flex;"] > a')
      .then(function(text1){
        cy.visit(text1.text())
      })
      cy.wait(6000)
      cy.get('#write').click()
      cy.wait(2000)
      cy.get('#txtSign').type('nabeel')
      cy.get('.modal-content > .BtnAdd').click()
      cy.wait(6000)
      cy.get('#signature-pad-').click()
      cy.contains('Save Signature').click()
      cy.wait(8000)
      cy.visit('https://app.ezymigrate.com/employer-management')

      //validating the digital signature
      cy.wait(7000)
      cy.scrollTo('left')
      cy.contains('cy new employer').click()
      cy.wait(7000)
      cy.scrollTo('top')
      cy.get('.ant-tabs-tab-btn').eq(2).click()
      cy.wait(5000)
      cy.contains('Contract-Signed-PDF.pdf').should('be.visible')
  })
})