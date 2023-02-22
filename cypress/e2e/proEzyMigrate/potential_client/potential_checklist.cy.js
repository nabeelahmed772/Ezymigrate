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
    const password = 'Nabeel@123';
  
  describe('potential client', () => {
    it('Add potential', () => {
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
      cy.wait(9000)
      
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
        cy.wait(5000)

        cy.contains('jason client').click()
        cy.wait(3000)

        cy.contains('DOCUMENTS').click()
        cy.wait(5000)
        cy.contains('DOCUMENT CHECKLIST').click()
        cy.wait(5000)
        cy.get('#gender').click()
         cy.wait(4000)
        //cy.wait(4000)
      cy.contains('test document checklist').click()
      cy.wait(2000)
      cy.get('.flex-end > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span')
        .click()
      cy.wait(8000)
      cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(4000)
      cy.reload()
      cy.wait(8000)

      cy.scrollTo('left')
      
      cy.contains('jason client')
        .click()

        cy.wait(6000)

        cy.contains('DOCUMENTS').click()
        cy.wait(5000)
        cy.contains('DOCUMENT CHECKLIST').click()
        cy.wait(5000)

        cy.wait(8000)
      cy.get('.ant-space-item:visible').eq(0).then(function(text2){
        cy.visit(text2.text())
        cy.wait(2000)
      })
      cy.wait(8000)
      cy.get('input[type="file"]').attachFile('ABC.jpg')
      cy.wait(2000)
      cy.get('.btn.btn-default').click()
      cy.wait(6000)

      cy.visit('https://app.ezymigrate.com/potential-client/potential-clients')
      cy.wait(8000)
      cy.scrollTo('left')
      
      cy.contains('jason client')
        .click()

        cy.wait(6000)

        cy.contains('DOCUMENTS').click()
        cy.wait(5000)

        cy.contains('ABC.jpg').should('be.visible')

        cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span').click()
        cy.wait(2000)
        cy.contains('Inquiry').click()
        cy.wait(4000)
  
        
  
        
        cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div > div.ant-row > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > a:nth-child(5) > span > svg').click()
        cy.get('[style="display: flex; margin-top: 40px;"] > :nth-child(2) > .ant-btn > span').click()
        cy.wait(4000)
        cy.wait(7000)


        
        


    })

})