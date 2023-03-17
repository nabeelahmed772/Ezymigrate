Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
  
    function randomNo(y){
      let x = Math.floor(Math.random() * 10)+y
      return x
      
  
  }
  
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  function randName(length) {
      let result = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
      return result;
  }
  
    const date = 'td[title="2023-02-05"]';
    const sms= '211267313';
    const user_name ='rananabeelahmed772@gmail.com';
    const password = 'nabeel@123';
  
  describe('potential client', () => {
    it('Add potential', () => {
      defaultCommandTimeout: 10000
      cy.viewport(1366, 657)
      
  
  
      //cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/dashboardbi/AccountAnalytics').as('load')
      
      //cy.visit('https://app-stage.ezymigrate.co.nz/login')
      cy.visit('https://app.ezymigrate.com/login')
  
      cy.getCookies({log:true})
  
      cy.clearCookies({log:true})
  
      cy.getCookies().should('be.empty')
  
      cy.clearAllCookies({log:true})
      
      cy.clearAllLocalStorage({log:true})
  
      
  
      //cy.intercept('POST', '/ActiveSince*').as('login')
  
      cy.get('#userName > .profile-input-login').type(user_name)
      cy.get('#password > .profile-input-login').type(password)
      cy.get('.sus-modal-button-text').click()
      //cy.wait(9000)
      
        cy.contains('Client Analytics').should('be.visible')
        
        
        cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span').click()
        cy.wait(2000)
        cy.contains('Inquiry').click()
        cy.wait(4000)
        cy.contains('ADD POTENTIAL CLIENT').click()
        cy.wait(2000)
        cy.get('#firstName').type('jason client')
        cy.get('#lastName').type('mia')
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
        cy.wait(4000)

        cy.contains('jason client').click()
        cy.wait(4000)

        cy.contains('DOCUMENTS').click()
        cy.wait(4000)
        cy.contains('DOCUMENT CHECKLIST').click()
        
        cy.get('#gender').click()
        cy.wait(4000)
        //cy.wait(4000)
      cy.contains('test document checklist').click({force:true})
      cy.wait(2000)
      cy.get('.flex-end > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span')
        .click()
      
      cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(4000)
      cy.reload()
      

      cy.scrollTo('left')
      cy.intercept('GET', 'https://app.ezymigrate.com/AgreementBuilder/Thanks.htm').as('thanksd')
      cy.wait(4000)
      cy.contains('jason client')
        .click()

        
        cy.wait(4000)
        cy.contains('DOCUMENTS').click()
        cy.wait(5000)
        cy.contains('DOCUMENT CHECKLIST').click()
        

        cy.wait(8000)
      cy.get('.ant-space-item:visible').eq(0).then(function(text2){
        cy.visit(text2.text())
        
      })
      
      cy.get('input[type="file"]').attachFile('ABC.jpg')
      
      cy.get('.btn.btn-default').click()
      
      cy.wait(6000)
      cy.wait('@thanksd').its('response.statusCode').should('eq', 200)

      

      cy.visit('https://app.ezymigrate.com/potential-client/potential-clients')
      
      cy.scrollTo('left')
      
      cy.contains('jason client')
        .click()

        

        cy.contains('DOCUMENTS').click()
        

        cy.contains('ABC.jpg').should('be.visible')

        //cy.contains('test potential client').click()
     cy.wait(4000) 
     cy.get(':nth-child(2) > .sus-inactive-tab-text-school').click()
     cy.wait(7000) 
     cy.get('[data-node-key="2"]').contains('CREATE').click()
     cy.wait(7000)
     cy.get(':nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
     cy.contains('potential clinet signtaturee').click()
     cy.wait(8000)
     cy.contains('Generate Contract Link').click()
     cy.wait(9000)
     cy.contains('Copy the link in the email to send this contract, contract should have signature key (@ClientSignature) as the link purpose is to get the documents signed.').should('exist')
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
     cy.wait(14000)
     cy.wait('@thanksd').its('response.statusCode').should('eq', 200)
     cy.visit('https://app.ezymigrate.com/potential-client/potential-clients')
     cy.wait(5000)
     //validating the digital signature
     cy.contains('jason client').click()
     cy.wait(3000)
     cy.get('.sus-inactive-tab-text-school').eq(1).click()
     cy.wait(2000)
     cy.contains('Contract-Signed-PDF.pdf ').should('be.visible')

        cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span').click()
        
        cy.contains('Inquiry').click()
        
  
        
  
        
        cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div > div.ant-row > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > a:nth-child(5) > span > svg').click()
        cy.get('[style="display: flex; margin-top: 40px;"] > :nth-child(2) > .ant-btn > span').click()
        
        


        
        


    })

})