Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

    const date = 'td[title="2023-02-05"]';
  
  describe('general information', () => {
    it('Add questionaire', () => {
  

      cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/dashboardbi/AccountAnalytics').as('load')
      
      //cy.visit('https://app-stage.ezymigrate.co.nz/login')
      cy.visit('https://app.ezymigrate.com/login')

      cy.getCookies({log:true})

      cy.clearCookies({log:true})

      cy.getCookies().should('be.empty')

      cy.clearAllCookies({log:true})
      
      cy.clearAllLocalStorage({log:true})

      

      //cy.intercept('POST', '/ActiveSince*').as('login')

      cy.get('#userName > .profile-input-login').type('rananabeelahmed772@gmail.com')
      cy.get('#password > .profile-input-login').type('Nabeel@123')
      cy.get('.sus-modal-button-text').click()
      cy.wait(9000)
      
      
      cy.contains('Client Analytics').should('be.visible')
      
      //cy.wait(9000)
      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[12]/span/a').click()
      cy.wait(5000)

      cy.scrollTo('left')
      
      cy.contains('cy new employer').click()
      cy.wait(4000)

      cy.get('.ant-tabs-tab-btn').eq(7).click()
      cy.get(':nth-child(2) > [style="margin-top: 8px;"] > .ant-select > .ant-select-selector').click()
      cy.get('div[title="my personal questonare"]').click()
      cy.wait(4000)
      cy.get('.pc-link-text').then(function(text2){
        cy.visit(text2.text())
      })
      //cy.visit('https://app.ezymigrate.com/CustomQuestionnaire/Survey?para=eyJDbGllbnRJZCI6ImUxZmUzNTc0LWVkMDYtNGY1ZC1iMTJkLWVlOWZmNmM0YjVhYSIsIkJyYW5jaElkIjoiNjUxODc2ZTYtYjBjOC00YzMxLWFhYzItMjEyOWQ5M2E4YzliIiwiVXNlcklkIjoiYTBmMzFiYzctMjA2Ni00MTNiLThmMjctOGIxNWE5YTgyZWZmIiwiUXVlc3Rpb25uYWlyZUlkIjoyOTI4LCJCcmFuY2giOm51bGwsInF1ZXN0aW9ubmFpcmUiOm51bGwsIkdyb3VwcyI6bnVsbCwiSXNHcm91cGVkIjpmYWxzZSwiSXNQb3RlbnRpYWwiOmZhbHNlLCJJc0VtcGxveWVyIjp0cnVlLCJHcm91cElkIjowfQ==')
      cy.get('#clientName').type('nabeel')
      cy.get('#sections_0_questions_0_answers_0_answer').type('test qw')
      cy.get('#sections_0_questions_1_answers_0_answer').type('test qw2')
      cy.get('#sections_0_questions_2_answers_0_answer').type('test qw3')
      cy.get('#sections_0_questions_3_answers_0_answer').click()
      cy.get(date).click()

      cy.get('.ant-btn > span').click()
      cy.wait(7000)
      cy.visit('https://app.ezymigrate.com/employer-management')

      cy.scrollTo('left')
      
      cy.contains('cy new employer').click()
      cy.wait(4000)

      cy.get('.ant-tabs-tab-btn').eq(7).click()
      cy.get(':nth-child(2) > [style="margin-top: 8px;"] > .ant-select > .ant-select-selector').click()


      
      // //cy.visit('https://app-stage.ezymigrate.co.nz/login')
      // cy.visit('https://app-stage.ezymigrate.co.nz/CustomQuestionnaire/Survey?para=eyJDbGllbnRJZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsIkJyYW5jaElkIjoiNmU4YWQ0M2YtZTdlMC00ZjJhLTgzZTEtZjQyMDlkYjg0MzJmIiwiVXNlcklkIjoiNTRlYTk3MTUtNmYyNC00YzYyLWEzZWMtNGYzMmE3MzRiOTJmIiwiUXVlc3Rpb25uYWlyZUlkIjoyMjI4LCJCcmFuY2giOm51bGwsInF1ZXN0aW9ubmFpcmUiOm51bGwsIkdyb3VwcyI6bnVsbCwiSXNHcm91cGVkIjpmYWxzZSwiSXNQb3RlbnRpYWwiOnRydWUsIklzRW1wbG95ZXIiOmZhbHNlLCJHcm91cElkIjowfQ==')

      // cy.get('#clientName')

      // cy.get('#sections_0_questions_0_answers_0_answer')

      // cy.get('#sections_0_questions_1_answers_0_answer')

      // cy.get('#sections_0_questions_2_answers_0_answer')

      // cy.get('#sections_0_questions_3_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input')
      // cy.get('#sections_0_questions_4_answers_0_answer')
      // cy.get('#sections_0_questions_5_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input')
      // cy.get('#sections_0_questions_7_answers_0_answer')
      // cy.get('#sections_0_questions_8_answers_0_answer')
      // cy.get('#sections_0_questions_9_answers_0_answer')
      // cy.get('#sections_0_questions_10_answers_0_answer')
      // cy.get('#sections_0_questions_11_answers_0_answer')
      // cy.get('#sections_0_questions_13_answers_0_answer')
      // cy.get('#sections_0_questions_14_answers_0_answer')
      // cy.get('#sections_0_questions_16_answers_0_answer')
      // cy.get('#sections_0_questions_17_answers_0_answer')
      // cy.get('#sections_0_questions_20_answers_0_answer')
      // cy.get('#sections_0_questions_23_answers_0_answer')
      // cy.get('#sections_0_questions_29_answers_0_answer')
      // cy.get('#sections_0_questions_27_answers_0_answer')
      // cy.get('#sections_0_questions_31_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input')
      // cy.get('#sections_0_questions_32_answers_0_answer')
      // cy.get('#sections_0_questions_33_answers_0_answer')
      // cy.get('#sections_0_questions_34_answers_0_answer')
      // cy.get('#sections_0_questions_35_answers_0_answer')
      // cy.get('#sections_0_questions_38_answers_0_answer')
      // cy.get('#sections_0_questions_39_answers_0_answer')
      // cy.get('#sections_0_questions_40_answers_0_answer')
      // cy.get('#sections_0_questions_41_answers_0_answer')
      // cy.get('#sections_0_questions_44_answers_0_answer')


    })

})