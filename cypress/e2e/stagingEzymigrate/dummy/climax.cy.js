

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
    const password = 'Nabeel@123';
    const futureDate ='25/03/2023';
    describe('potential client', () => {
      

        it('Add potential', () => {

          //  cy.intercept('GET', 'https://beta-api.ezymigrate.co.nz/v1/company/BranchVisaType/All/f918a441-a5e4-44bd-9e4c-0c96144445c5').as('branchtype')
          //   cy.intercept('GET', 'https://beta-api.ezymigrate.co.nz/v1/company/visastatus/All').as('visatatud')
          //   cy.intercept('GET', 'https://beta-api.ezymigrate.co.nz/v1/users/ddl/All').as('allusers')
          //   cy.intercept('POST', 'https://beta-api.ezymigrate.co.nz/v1/client/SearchClient').as('searchclient')
          //   cy.intercept('GET', 'https://beta-api.ezymigrate.co.nz/v1/potentialclient/markedtags/All/*').as('tags')
      
      
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

            cy.get('a[href="/account-settings"]').click()
            cy.contains('span', 'Outlook Integration').click()
            cy.wait(3000)
           cy.window().then((win) => {
  cy.stub(win, 'open').callsFake((url) => {
    // Instead of going to Microsoft, simulate what would happen after successful login
    win.location.href = 'https://app.ezymigrate.com/outlook-integration?code=fake_code';
  });
});

// Step 2: Click ADD ACCOUNT (which normally opens Microsoft login)
cy.contains('button', 'ADD ACCOUNT').click();

// Step 3: Assert redirected to integration page
cy.url().should('include', '/outlook-integration');

        

    cy.wait(6000)
    cy.pause()



            cy.get('a[href="/all-clients"]').click()
           
            cy.wait('@branchtype').its("response.statusCode").should('eq', 200)
            cy.wait('@visatatud').its("response.statusCode").should('eq', 200)
            cy.wait('@allusers').its("response.statusCode").should('eq', 200)
            cy.wait('@searchclient').then((nil)=>{
              expect(nil.response.statusCode).to.eq(200)
              cy.log('before first request count',nil.response.body.count)
              cy.log('first api response body', JSON.stringify(nil.response.body.items))
            })
            cy.wait('@tags').its("response.statusCode").should('eq', 200)

            cy.wait(2000)

            cy.get('#first_name').type('sufi').type('{enter}')

            cy.wait(2000)

            cy.wait('@searchclient').then((interception)=>{
              expect(interception.response.statusCode).to.eq(200)
              cy.log('body',interception.response.body.count)
              console.log('body',interception.response.body.count)
              cy.log('without body',interception.response.count)
              console.log('without body',interception.response.count)
              cy.log('first api response body', JSON.stringify(interception.response.body.items))
              if(interception.response.body.count=== 0){
                cy.log('you can add new client here')
              }else if(interception.response.body.count > 0){
                cy.log('you can search your client')

              }
            })







            cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span').click()
            cy.wait(2000)
            cy.contains('Web Assessment').click()
            cy.wait(5000)
            cy.contains('Basic Assessment Link').click()
            cy.wait(4000)
            cy.visit('https://app-stage.ezymigrate.co.nz/CustomQuestionnaire/Survey?para=eyJDbGllbnRJZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsIkJyYW5jaElkIjoiNmU4YWQ0M2YtZTdlMC00ZjJhLTgzZTEtZjQyMDlkYjg0MzJmIiwiVXNlcklkIjoiNTRlYTk3MTUtNmYyNC00YzYyLWEzZWMtNGYzMmE3MzRiOTJmIiwiUXVlc3Rpb25uYWlyZUlkIjoxODM4LCJCcmFuY2giOm51bGwsInF1ZXN0aW9ubmFpcmUiOm51bGwsIkdyb3VwcyI6bnVsbCwiSXNHcm91cGVkIjpmYWxzZSwiSXNQb3RlbnRpYWwiOnRydWUsIklzRW1wbG95ZXIiOmZhbHNlLCJHcm91cElkIjowfQ==')
            cy.wait(6000)
            cy.get('#clientName').type('basic name')
            cy.get('#sections_0_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_0_questions_1_answers_0_answer').type('first name')
            cy.get('#sections_0_questions_2_answers_0_answer').type('middle name')
            cy.get('#sections_0_questions_3_answers_0_answer').type('first name')
            cy.get('#sections_0_questions_4_answers_0_answer').type('np name')
            cy.get('#sections_0_questions_5_answers_0_answer').type(futureDate, {force:true}).type('{enter}')
            //cy.get(date).click({multiple:true, force:true})
            cy.get('#sections_0_questions_6_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_0_questions_7_answers_0_answer').click()
            cy.get('div[title="ALBANIA"]').click({multiple:true, force:true})
            cy.get('#sections_0_questions_8_answers_0_answer').click()
            cy.get('div[title="ALBANIA"]').click({multiple:true, force:true})
            cy.get('#sections_0_questions_9_answers_0_answer').type('testing by')
            cy.get('#sections_0_questions_10_answers_0_answer').type('testi g  nz team')
            cy.get('#sections_0_questions_11_answers_0_answer').type(futureDate, {force:true}).type('{enter}')
            //cy.get(date).click({multiple:true, force:true})
            cy.get('#sections_0_questions_12_answers_0_answer').click()
            cy.get('div[title="Appeal - IPT"]').click({multiple:true, force:true})
            cy.get('#sections_0_questions_13_answers_0_answer').type(futureDate, {force:true}).type('{enter}')
            //cy.get(date).click({multiple:true, force:true})
            cy.get('#sections_0_questions_14_answers_0_answer').click()
            cy.get('div[title="ALBANIA"]').click({multiple:true, force:true})
            cy.get('#sections_0_questions_15_answers_0_answer').type(randName(5))
            cy.get('#sections_0_questions_16_answers_0_answer').type(randName(5))
            cy.get('#sections_0_questions_17_answers_0_answer').type(randName(5))
            cy.get('#sections_0_questions_18_answers_0_answer').type(randName(5))
            cy.get('#sections_0_questions_19_answers_0_answer > :nth-child(2) > .ant-radio > .ant-radio-input').click()


            cy.get('#sections_1_questions_0_answers_0_answer').type(randName(5))
            cy.get('#sections_1_questions_1_answers_0_answer').type(randName(5))
            cy.get('#sections_1_questions_2_answers_0_answer').type(randName(5))
            cy.get('#sections_1_questions_3_answers_0_answer').type(randName(5))
            cy.get('#sections_1_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_1_questions_5_answers_0_answer').type(randName(5))
            cy.get('#sections_1_questions_6_answers_0_answer').type(randName(5))
            cy.get('#sections_1_questions_7_answers_0_answer').type(randName(5))
            cy.get('#sections_1_questions_8_answers_0_answer').type(randName(5))


            cy.get('#sections_2_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_2_questions_1_answers_0_answer > :nth-child(2) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_2_questions_2_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_2_questions_3_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_2_questions_4_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()

            cy.get('#sections_3_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_3_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_3_questions_2_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_3_questions_3_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()

            cy.get('#sections_4_questions_1_answers_0_answer').type(randName(5))

            cy.get('#sections_4_questions_2_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_4_questions_3_answers_0_answer').type(randName(5))
            cy.get('#sections_4_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_4_questions_5_answers_0_answer').type(randName(5))


            cy.get(':nth-child(6) > .title-container > .cq-add-button > img').click()
            cy.get(':nth-child(6) > .title-container > .cq-add-button > img').click()
            cy.get(':nth-child(6) > .title-container > .cq-add-button > img').click()

            cy.get('#sections_5_questions_0_answers_0_answer').type(randName(5))
            cy.get('#sections_5_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_5_questions_3_answers_0_answer').type(randName(5))
            cy.get('#sections_5_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_5_questions_5_answers_0_answer').type(randName(5))
            cy.get('#sections_5_questions_6_answers_0_answer').type(randName(5))

            cy.get('#sections_6_questions_0_answers_0_answer').type(randName(5))
            cy.get('#sections_6_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            
            cy.get('#sections_6_questions_3_answers_0_answer').type(randName(5))
            cy.get('#sections_6_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_6_questions_5_answers_0_answer').type(randName(5))
            cy.get('#sections_6_questions_6_answers_0_answer').type(randName(5))

            cy.get('#sections_7_questions_0_answers_0_answer').type(randName(5))
            cy.get('#sections_7_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            
            cy.get('#sections_7_questions_3_answers_0_answer').type(randName(5))
            cy.get('#sections_7_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_7_questions_5_answers_0_answer').type(randName(5))
            cy.get('#sections_7_questions_6_answers_0_answer').type(randName(5))

            cy.get('#sections_8_questions_0_answers_0_answer').type(randName(5))
            cy.get('#sections_8_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_8_questions_3_answers_0_answer').type(randName(5))
            cy.get('#sections_8_questions_5_answers_0_answer').type(randName(5))
            cy.get('#sections_8_questions_6_answers_0_answer').type(randName(5))


            cy.get(':nth-child(10) > .title-container > .cq-add-button > img').click()
            cy.get(':nth-child(10) > .title-container > .cq-add-button > img').click()

            cy.get('#sections_9_questions_0_answers_0_answer').type(randName(5))
            cy.get('#sections_9_questions_3_answers_0_answer').type(randName(5))
            cy.get('#sections_9_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_9_questions_5_answers_0_answer').type(randName(5))
            cy.get('#sections_9_questions_6_answers_0_answer').type(randName(5))

            cy.get('#sections_10_questions_0_answers_0_answer').type(randName(5))
            cy.get('#sections_10_questions_3_answers_0_answer').type(randName(5))
            cy.get('#sections_10_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_10_questions_5_answers_0_answer').type(randName(5))
            cy.get('#sections_10_questions_6_answers_0_answer').type(randName(5))

            cy.get('#sections_11_questions_0_answers_0_answer').type(randName(5))
            cy.get('#sections_11_questions_3_answers_0_answer').type(randName(5))
            cy.get('#sections_11_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_11_questions_5_answers_0_answer').type(randName(5))
            cy.get('#sections_11_questions_6_answers_0_answer').type(randName(5))


            cy.get('#sections_12_questions_0_answers_0_answer').type(randName(5))
            cy.get('#sections_12_questions_1_answers_0_answer').type(randName(5))
            cy.get('#sections_12_questions_2_answers_0_answer').type(randName(5))
            cy.get('#sections_12_questions_3_answers_0_answer').type(randName(5))
            cy.get('#sections_12_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_12_questions_5_answers_0_answer').type(randName(5))
            cy.get('#sections_12_questions_6_answers_0_answer').type(randName(5))
            cy.get('#sections_12_questions_7_answers_0_answer').type(randName(5))

            cy.get(':nth-child(14) > .title-container > .cq-add-button > img').click()
            cy.get(':nth-child(14) > .title-container > .cq-add-button > img').click()

            cy.get('#sections_13_questions_1_answers_0_answer').type(randName(5))
            cy.get('#sections_13_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_13_questions_5_answers_0_answer').type(randName(5))


            cy.get('#sections_14_questions_1_answers_0_answer').type(randName(5))
            cy.get('#sections_14_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_14_questions_5_answers_0_answer').type(randName(5))

            cy.get('#sections_15_questions_1_answers_0_answer').type(randName(5))
            cy.get('#sections_15_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_15_questions_5_answers_0_answer').type(randName(5))


            cy.get('#sections_16_questions_0_answers_0_answer').type(randName(5))
            cy.get('#sections_16_questions_1_answers_0_answer').type(randName(5))
            cy.get('#sections_16_questions_2_answers_0_answer').type(randName(5))
            cy.get('#sections_16_questions_3_answers_0_answer').type(randName(5))
            cy.get('#sections_16_questions_4_answers_0_answer').type(randName(5))
            cy.get('#sections_16_questions_5_answers_0_answer').type(randName(5))
            cy.get('#sections_16_questions_8_answers_0_answer').type(randName(5))

            cy.get('#sections_16_questions_9_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_16_questions_10_answers_0_answer').type(randName(5))
            cy.get('#sections_16_questions_11_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_16_questions_12_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_16_questions_13_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()

            cy.get('#sections_16_questions_14_answers_0_answer').type(randName(5))
            cy.get('#sections_17_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()

            cy.get('#sections_17_questions_0_questionOptions_0_optionalQuestions_0_questions_0_answers_0_answer').type(randName(5))
            cy.get('#sections_17_questions_0_questionOptions_0_optionalQuestions_0_questions_1_answers_0_answer').type(randName(5))
            cy.get('#sections_17_questions_0_questionOptions_0_optionalQuestions_0_questions_2_answers_0_answer').type(randName(5))
            cy.wait(15000)
            cy.get('#clientName').scrollIntoView()

            cy.get('.ant-btn > span').click()
            cy.wait(10000)
            cy.visit('https://app.ezymigrate.com/CustomQuestionnaire/Survey?para=eyJDbGllbnRJZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsIkJyYW5jaElkIjoiNjUxODc2ZTYtYjBjOC00YzMxLWFhYzItMjEyOWQ5M2E4YzliIiwiVXNlcklkIjoiYTBmMzFiYzctMjA2Ni00MTNiLThmMjctOGIxNWE5YTgyZWZmIiwiUXVlc3Rpb25uYWlyZUlkIjoxODM4LCJCcmFuY2giOm51bGwsInF1ZXN0aW9ubmFpcmUiOm51bGwsIkdyb3VwcyI6bnVsbCwiSXNHcm91cGVkIjpmYWxzZSwiSXNQb3RlbnRpYWwiOnRydWUsIklzRW1wbG95ZXIiOmZhbHNlLCJHcm91cElkIjowfQ==')
            cy.wait(6000)
            cy.get('#clientName').type('basic name')
            cy.get('#sections_0_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_0_questions_1_answers_0_answer').type('first name')
            cy.get('#sections_0_questions_2_answers_0_answer').type('middle name')
            cy.get('#sections_0_questions_3_answers_0_answer').type('first name')
            cy.get('#sections_0_questions_4_answers_0_answer').type('np name')
            cy.get('#sections_0_questions_5_answers_0_answer').click()
            cy.get(date).click({multiple:true, force:true})
            cy.get('#sections_0_questions_6_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_0_questions_7_answers_0_answer').click()
            cy.get('div[title="ALBANIA"]').click({multiple:true, force:true})
            cy.get('#sections_0_questions_8_answers_0_answer').click()
            cy.get('div[title="ALBANIA"]').click({multiple:true, force:true})
            cy.get('#sections_0_questions_9_answers_0_answer').type('testing by')
            cy.get('#sections_0_questions_10_answers_0_answer').type('testi g  nz team')
            cy.get('#sections_0_questions_11_answers_0_answer').click()
            cy.get(date).click({multiple:true, force:true})
            cy.get('#sections_0_questions_12_answers_0_answer').click()
            cy.get('div[title=" 2021 RV - Phase 1"]').click({multiple:true, force:true})
            cy.get('#sections_0_questions_13_answers_0_answer').click()
            cy.get(date).click({multiple:true, force:true})
            cy.get('#sections_0_questions_14_answers_0_answer').click()
            cy.get('div[title="ALBANIA"]').click({multiple:true, force:true})
            cy.get('#sections_0_questions_15_answers_0_answer').type('test')
            cy.get('#sections_0_questions_16_answers_0_answer').type('test')
            cy.get('#sections_0_questions_17_answers_0_answer').type('test')
            cy.get('#sections_0_questions_18_answers_0_answer').type('test')
            cy.get('#sections_0_questions_19_answers_0_answer > :nth-child(2) > .ant-radio > .ant-radio-input').click()


            cy.get('#sections_1_questions_0_answers_0_answer').type('test')
            cy.get('#sections_1_questions_1_answers_0_answer').type('test')
            cy.get('#sections_1_questions_2_answers_0_answer').type('test')
            cy.get('#sections_1_questions_3_answers_0_answer').type('test')
            cy.get('#sections_1_questions_4_answers_0_answer').type('test')
            cy.get('#sections_1_questions_5_answers_0_answer').type('test')
            cy.get('#sections_1_questions_6_answers_0_answer').type('test')
            cy.get('#sections_1_questions_7_answers_0_answer').type('test')
            cy.get('#sections_1_questions_8_answers_0_answer').type('test')


            cy.get('#sections_2_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_2_questions_1_answers_0_answer > :nth-child(2) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_2_questions_2_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_2_questions_3_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_2_questions_4_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()

            cy.get('#sections_3_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_3_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_3_questions_2_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_3_questions_3_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()

            cy.get('#sections_4_questions_1_answers_0_answer').type('test')

            cy.get('#sections_4_questions_2_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_4_questions_3_answers_0_answer').type('test')
            cy.get('#sections_4_questions_4_answers_0_answer').type('test')
            cy.get('#sections_4_questions_5_answers_0_answer').type('test')


            cy.get(':nth-child(6) > .title-container > .cq-add-button > img').click()
            cy.get(':nth-child(6) > .title-container > .cq-add-button > img').click()
            cy.get(':nth-child(6) > .title-container > .cq-add-button > img').click()

            cy.get('#sections_5_questions_0_answers_0_answer').type('test')
            cy.get('#sections_5_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_5_questions_3_answers_0_answer').type('test')
            cy.get('#sections_5_questions_4_answers_0_answer').type('test')
            cy.get('#sections_5_questions_5_answers_0_answer').type('test')
            cy.get('#sections_5_questions_6_answers_0_answer').type('test')

            cy.get('#sections_6_questions_0_answers_0_answer').type('test')
            cy.get('#sections_6_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            
            cy.get('#sections_6_questions_3_answers_0_answer').type('test')
            cy.get('#sections_6_questions_4_answers_0_answer').type('test')
            cy.get('#sections_6_questions_5_answers_0_answer').type('test')
            cy.get('#sections_6_questions_6_answers_0_answer').type('test')

            cy.get('#sections_7_questions_0_answers_0_answer').type('test')
            cy.get('#sections_7_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            
            cy.get('#sections_7_questions_3_answers_0_answer').type('test')
            cy.get('#sections_7_questions_4_answers_0_answer').type('test')
            cy.get('#sections_7_questions_5_answers_0_answer').type('test')
            cy.get('#sections_7_questions_6_answers_0_answer').type('test')

            cy.get('#sections_8_questions_0_answers_0_answer').type('test')
            cy.get('#sections_8_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_8_questions_3_answers_0_answer').type('test')
            cy.get('#sections_8_questions_5_answers_0_answer').type('test')
            cy.get('#sections_8_questions_6_answers_0_answer').type('test')


            cy.get(':nth-child(10) > .title-container > .cq-add-button > img').click()
            cy.get(':nth-child(10) > .title-container > .cq-add-button > img').click()

            cy.get('#sections_9_questions_0_answers_0_answer').type('test')
            cy.get('#sections_9_questions_3_answers_0_answer').type('test')
            cy.get('#sections_9_questions_4_answers_0_answer').type('test')
            cy.get('#sections_9_questions_5_answers_0_answer').type('test')
            cy.get('#sections_9_questions_6_answers_0_answer').type('test')

            cy.get('#sections_10_questions_0_answers_0_answer').type('test')
            cy.get('#sections_10_questions_3_answers_0_answer').type('test')
            cy.get('#sections_10_questions_4_answers_0_answer').type('test')
            cy.get('#sections_10_questions_5_answers_0_answer').type('test')
            cy.get('#sections_10_questions_6_answers_0_answer').type('test')

            cy.get('#sections_11_questions_0_answers_0_answer').type('test')
            cy.get('#sections_11_questions_3_answers_0_answer').type('test')
            cy.get('#sections_11_questions_4_answers_0_answer').type('test')
            cy.get('#sections_11_questions_5_answers_0_answer').type('test')
            cy.get('#sections_11_questions_6_answers_0_answer').type('test')

            cy.get('#sections_12_questions_0_answers_0_answer').type('test')
            cy.get('#sections_12_questions_1_answers_0_answer').type('test')
            cy.get('#sections_12_questions_2_answers_0_answer').type('test')
            cy.get('#sections_12_questions_3_answers_0_answer').type('test')
            cy.get('#sections_12_questions_4_answers_0_answer').type('test')
            cy.get('#sections_12_questions_5_answers_0_answer').type('test')
            cy.get('#sections_12_questions_6_answers_0_answer').type('test')
            cy.get('#sections_12_questions_7_answers_0_answer').type('test')

            cy.get(':nth-child(14) > .title-container > .cq-add-button > img').click()
            cy.get(':nth-child(14) > .title-container > .cq-add-button > img').click()

            cy.get('#sections_13_questions_1_answers_0_answer').type('test')
            cy.get('#sections_13_questions_4_answers_0_answer').type('test')
            cy.get('#sections_13_questions_5_answers_0_answer').type('test')


            cy.get('#sections_14_questions_1_answers_0_answer').type('test')
            cy.get('#sections_14_questions_4_answers_0_answer').type('test')
            cy.get('#sections_14_questions_5_answers_0_answer').type('test')
            cy.get('#sections_15_questions_1_answers_0_answer').type('test')
            cy.get('#sections_15_questions_4_answers_0_answer').type('test')
            cy.get('#sections_15_questions_5_answers_0_answer').type('test')


            cy.get('#sections_16_questions_0_answers_0_answer').type('test')
            cy.get('#sections_16_questions_1_answers_0_answer').type('test')
            cy.get('#sections_16_questions_2_answers_0_answer').type('test')
            cy.get('#sections_16_questions_3_answers_0_answer').type('test')
            cy.get('#sections_16_questions_4_answers_0_answer').type('test')
            cy.get('#sections_16_questions_5_answers_0_answer').type('test')
            cy.get('#sections_16_questions_8_answers_0_answer').type('test')

            cy.get('#sections_16_questions_9_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_16_questions_10_answers_0_answer').type('test')
            cy.get('#sections_16_questions_11_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_16_questions_12_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#sections_16_questions_13_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()

            cy.get('#sections_16_questions_14_answers_0_answer').type('test')
            cy.get('#sections_17_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input').click()

            cy.get('#sections_17_questions_0_questionOptions_0_optionalQuestions_0_questions_0_answers_0_answer').type('test')
            cy.get('#sections_17_questions_0_questionOptions_0_optionalQuestions_0_questions_1_answers_0_answer').type('test')
            cy.get('#sections_17_questions_0_questionOptions_0_optionalQuestions_0_questions_2_answers_0_answer').type('test')
            cy.wait(15000)
            cy.get('#clientName').scrollIntoView()

            cy.get('.ant-btn > span').click()
            cy.wait(30000)
            // cy.visit('https://app.ezymigrate.com/web-assessment')
            // cy.wait(4000)
            // cy.get('[style="display: flex; margin-top: 3px;"] > .pc-add-btn > .sus-modal-button-text').click()
            // cy.wait(7000)
            // cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a').click()
            // cy.contains('basic name').scrollIntoView()
            // cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg').click({force:true})
            // cy.wait(5000)


            





            






            
        })     
        
})   