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
    const futureDate = "25/03/2023"
  
  describe('Adding Employer', () => {
    it('Add employer', () => {
      cy.viewport(1366, 657)


      cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/dashboardbi/AccountAnalytics').as('load')
      
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
      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[6]/span/a').click()
      cy.wait(4000)

      cy.get('[type="file"]').attachFile('ABC.jpg' )

      cy.get('#visaCountryId').click()

      cy.wait(6000)

      cy.contains('NEW ZEALAND').click({force:true})
      cy.wait(2000)
      cy.get('#visaCountyType').click()
      cy.wait(3000)
      cy.get('.ant-select-item-option-content:visible').eq(1).contains('Visa').click()
      //cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.get('#clientSerial').type(randomNo(5))
      cy.get('#title').click({force:true}).type('title')
      cy.get('#firstName').type('amjad')
      cy.get('#lastName').type('ali')
      cy.get('#preferredName').type('pre name')

      cy.get(':nth-child(2) > .save-button-add-client > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span')
        .scrollIntoView()
        .click()

      cy.wait(7000)

      cy.contains('Case Management')
        .scrollIntoView()
        .click()
      
       cy.wait(2000)

      cy.contains('Cases')
        .scrollIntoView()
        .click({force:true})

        cy.wait(6000)

      cy.contains('Add Case')
        .click()

      cy.get('#basic_client')
        .click()
        .type('amjad ali')
        .type('{enter}')

      cy.wait(2000)


      cy.get('.ant-form-item-control-input-content > .ant-btn > span')
        .click({force:true})
      
        cy.wait(5000)

       cy.get('.top-row-button > :nth-child(1) > .ant-btn > span')
         .click()

          cy.wait(1000)

       cy.get('#basic_Country')
         .click()

         cy.wait(3000)

       cy.contains('NEW ZEALAND')
         .click({force:true})

         cy.wait(5000)

        cy.get('#basic_Visa')
          .click()

          cy.wait(3000)


        cy.contains('Critical Purpose Visitor Visa')
          .click()

        cy.get('#basic_date')
          .type(futureDate, {force:true})
          .type('{enter}')

          cy.wait(1000)

          cy.get('.ant-spin-container > :nth-child(1) > [style="overflow: inherit; padding-bottom: 6px; align-items: center; justify-content: space-between; padding-right: 5px;"] > #basic > [style="text-align: end;"] > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span')
            .click()

        cy.wait(5000)

        cy.get('.cm-status-approved > .ant-btn > :nth-child(1)')
          .click({force:true})

          cy.wait(1000)

        cy.contains('Client Awaiting Document Instructions')
          .click({force:true})

        cy.wait(3000)

        cy.get('.ant-modal-body > :nth-child(1) > [style="overflow: inherit; padding-bottom: 6px; align-items: center; justify-content: space-between; padding-right: 5px;"] > #basic > [style="width: 100%;"] > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker > .ant-picker-input > #basic_date')
          .type(futureDate, {force:true})
          .type('{enter}')

          cy.contains('Save')
            .click()

        cy.wait(3000)


        cy.get('.top-row-button > :nth-child(2) > .ant-btn > span')
          .click()

        cy.wait(3000)


        cy.get('#basic_schoolType')
          .click()

          cy.wait(5000)

        cy.contains('Secondary')
          .click()

          cy.wait(3000)

        cy.get('#basic_school')
          .click()

          cy.wait(3000)

        cy.contains('new secondary')
          .click()

          cy.wait(3000)


        cy.get('#basic_schoolLevel')
          .click()

          cy.wait(3000)

        cy.contains('bsic level')
          .click()

          cy.wait(3000)
        
        cy.get('#basic_program')
          .type('4')

          cy.get('button[type="submit"]:visible')
            .click({force:true})

            cy.wait(5000)

            cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a')
              .click()

            cy.wait(6000)
      
            
            
            cy.contains('amjad')
              .scrollIntoView()
              .click()


            cy.wait(5000)

            cy.get(':nth-child(2) > a > .header-bar-text-div > .header-text')
              .click()

              cy.wait(7000)

            cy.get('.cv-bold-text')
              .should('contain', 'CRITICAL PURPOSE VISITOR VISA')

              cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a')
              .click()

            cy.wait(6000)

            cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg')
              .click()

            cy.wait(5000)
   


            





        



    })

})