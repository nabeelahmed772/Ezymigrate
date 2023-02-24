/// <reference types= "cypress" />
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

       const sms= '211267313';
       const date = 'td[title="2023-02-05"]';
       const futureDate = "25/02/2023"
  
  describe('Adding client', () => {
    it('Add client', () => {

      cy.viewport(1366, 657)
      //const sms= '211267313';

      cy.getCookies({log: true})

      cy.clearCookies({log: true})

      cy.getCookies().should('be.empty')

      cy.clearAllCookies({log:true})
      
      cy.clearAllLocalStorage({log:true})

      
      //cy.visit('https://app-stage.ezymigrate.co.nz/login')
      cy.visit('https://app.ezymigrate.com/login')

    

      //cy.intercept('POST', '/ActiveSince*').as('login')

     

    

      

      cy.get('#userName > .profile-input-login').type('rananabeelahmed772@gmail.com')

      cy.get('#password > .profile-input-login').type('Nabeel@123')
      

      cy.get('.sus-modal-button-text').click()

      cy.wait(3000)

      cy.contains('Client Analytics').should('be.visible')
      
      cy.wait(2000)

      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[9]/span/a').click()
      
      //cy.get('.ca-gray-cont').find('input[value="milt"]').scrollIntoView()
      //cy.reload()
      cy.contains('Daily Transactions').click()
      cy.wait(6000)
      cy.get('#rc-tabs-2-tab-1').click()
      cy.wait(2000)
      //cy.get('.anticon.anticon-delete').click()
      cy.get('.ant-col.ant-col-offset-1.ant-col-xs-23')
        .each(($el, index, $list) => {
        
        var del = $el.find('input[type="text"]').val()
        
         
        debugger
        console.log(del)
        if(del.includes('milt')){
            cy.wrap($el).find('.anticon.anticon-delete').click()

        }
        
            
        

      })
        
        

    })

})