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
    const user_name ='nabeeloutsourcenzhard@gmail.com';
    const password = 'nabeel@123';
    describe('potential client', () => {
        it('Add potential', () => {
            cy.intercept('GEt','https://beta-api.ezymigrate.co.nz/v1/employer/contact/All/8ec6fc30-72bb-49ff-b858-aae844436acc').as('load')

            cy.intercept('GEt','https://beta-api.ezymigrate.co.nz/v1/employer/All/f918a441-a5e4-44bd-9e4c-0c96144445c5').as('emp')
      
            cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/dashboardbi/IdleSince').as('login')
          cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/client/SearchClient').as('search')
          
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
          cy.wait('@login')
          
            cy.contains('Client Analytics').should('be.visible')

            cy.contains('All Clients').click()
            cy.wait('@search')
            cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[12]/span/a').click()
            cy.wait(4000)    
           









            

        })
    })