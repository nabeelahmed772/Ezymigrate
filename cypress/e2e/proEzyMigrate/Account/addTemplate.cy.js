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

    

      cy.intercept('GET', 'https://beta-api.ezymigrate.co.nz/v1/reminder/All/651876e6-b0c8-4c31-aac2-2129d93a8c9b').as('allclients')

     

    

      

      cy.get('#userName > .profile-input-login').type('rananabeelahmed772@gmail.com')

      cy.get('#password > .profile-input-login').type('Nabeel@123')
      

      cy.get('.sus-modal-button-text').click()

      cy.wait(3000)

      cy.contains('Client Analytics').should('be.visible')
      
      cy.wait(2000)

      cy.get('.ant-menu-title-content').eq(4).click()

      //cy.find('sufi cup').scrollIntoView()

      
    

      


     cy.intercept('GET','https://beta-api.ezymigrate.co.nz/v1/invoice/template/All/*').as('getTemplate')
     cy.intercept('GET', 'https://beta-api.ezymigrate.co.nz/v1/branch/tax/All/*').as('getTax')
     cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/payment/dailytransaction').as('dailytran')
     

      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[9]/span/a').click()
      
      
      cy.contains('Daily Transactions').click()
      cy.wait('@dailytran').its('response.statusCode').should('eq', 200)
      cy.get('.ant-tabs-tab-btn').eq(0).click()
      
      cy.wait('@getTemplate').its('response.statusCode').should('eq', 200)
      cy.wait('@getTax').its('response.statusCode').should('eq', 200)
      cy.contains('ADD TEMPLATE').should('be.visible')
      cy.contains('ADD TEMPLATE').click()
      cy.wait(4000)
      cy.get('#name').type('trianlge')
      cy.get('#description').type('this is test description for the triangle add template')
      cy.get('.icons-client').click()
      cy.get('#stages_0_description').type('stage 1 description for the triangle template')
      cy.get('#stages_0_amount').type('50')
      
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-col-offset-1 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox')
        .click()
     cy.get('[style=""] > [style="margin-top: -20px;"] > .ant-col-offset-1 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()


      

      cy.get('.ant-select-item-option-content')
        .should('exist')
        .contains('Nsbeel -1.5')
        .click()
        .wait(1000);
      
        
        
      

      cy.get('#stages_1_description').type('second stage input')
      cy.get('#stages_1_amount').type('60')
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .ant-col-offset-1 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox')
        .click()
      cy.get(':nth-child(2) > :nth-child(1) > [style=""] > [style="margin-top: -20px;"] > .ant-col-offset-1 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        cy.get('.ant-select-item-option-content:visible')
        .should('exist')
        .contains('Nsbeel -1.5')
        .click()
        .wait(1000);

      cy.get('[style="margin-top: 15px;"] > .ant-col > .ant-btn > span').click()
      cy.get('#total').should('have.value', 111.65)
     //cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/invoice/template').as('template')
      cy.get('.ant-col-offset-18 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span')
        .click()
      //cy.wait('@template').its('Response.statusCode').should('eq', 200)

      cy.get('.anticon.anticon-close.ant-modal-close-icon').click()
      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[9]/span/a').click()
      cy.contains('Daily Transactions').click()
      cy.get('.ant-tabs-tab-btn').eq(0).click()
      cy.wait('@getTemplate').its('response.statusCode').should('eq', 200)
      cy.wait('@getTax').its('response.statusCode').should('eq', 200)
      cy.wait(2000)
       cy.get('.ant-menu-title-content').eq(4).click()
        cy.wait('@allclients').its('response.statusCode').should('eq', 404)
      cy.get('.ant-table-row.ant-table-row-level-0')
        .each(($el, index, $list) => {
        
        const del = $el.find('span').text().trim()
        
         
        debugger
        console.log(del)
        if(del==='sufi cup'){
            cy.wrap($el).find('span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]').click()
            cy.get('.right-bar-icon').eq(8).click()

        }
    })
     cy.get('.ant-collapse-item.ant-collapse-item-active').each(($el, index, $list) =>{
       
       const ok = $el.find('h5').text().trim()
       console.log(ok)
       if(ok==='trianlge'){
            
            cy.wrap($el).find('.anticon.anticon-delete').click()
            cy.get('.ant-col-4 > .ant-btn > span').click()
            
        }})
        
          cy.wait(5000)
          cy.get(':nth-child(2) > .ant-col > .ant-select > .ant-select-selector').click()
            cy.contains('trianlge').click()

            cy.get(':nth-child(3) > .ant-col > .ant-btn > span').click()
            
        



     

     cy.wait(8000)

     cy.contains('trianlge').should('exist')
     cy.get('.ant-collapse-item.ant-collapse-item-active').each(($el, index, $list) =>{

        const no = $el.find('h5').text().trim()
        console.log(no)
        if(no==='trianlge'){
             
          cy.get('.ant-input-number-input-wrap').each(($el, index, $list) =>{
            const moj= $el.find('.ant-input-number-input').val()
            if(moj.includes(50)){
              cy.wrap($el).find('.ant-input-number-input').type(0)
              


            }
              
            })
            cy.wrap($el).find('.ant-btn.ant-btn-primary.ant-btn-sm.button-blue').click()
            cy.get('.ant-col.ant-col-offset-14.ant-col-xs-10').each(($el, index, $list) =>{
              const pipe= $el.find('p').text()
              if(pipe.includes('Total: 568.4')){
                cy.log('total is correct which is', pipe)

              }
            
          })
         }

        })


      
        cy.wait(3000)

        cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[9]/span/a').click()
      
      
        cy.contains('Daily Transactions').click()
        cy.wait('@dailytran').its('response.statusCode').should('eq', 200)
        cy.get('.ant-tabs-tab-btn').eq(0).click()
        
        cy.wait('@getTemplate').its('response.statusCode').should('eq', 200)
        cy.wait('@getTax').its('response.statusCode').should('eq', 200)
        cy.wait(2000)
      //cy.get('.anticon.anticon-delete').click()
      cy.get('.ant-col.ant-col-offset-1.ant-col-xs-23')
        .each(($el, index, $list) => {
        
        var del = $el.find('input[type="text"]').val()
        
         
        debugger
        console.log(del)
        if(del.includes('trianlge')){
            cy.wrap($el).find('.anticon.anticon-delete').click()
            cy.get('.ant-btn.ant-btn-default.button').click()

        }
        
            
        

      })
        
        

    })

})