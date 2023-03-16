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
      cy.viewport(1366, 657)
  
  
      //cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/dashboardbi/AccountAnalytics').as('load')
      
      cy.visit('https://app-stage.ezymigrate.co.nz/login')
      //cy.visit('https://app.ezymigrate.com/login')
  
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
        cy.contains('Custom Questionnaires').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .ant-select > .ant-select-selector').click()
        cy.wait(2000)
        cy.get('[title="unique questionaire"] > .ant-select-item-option-content').click()
        cy.wait(4000)
        cy.get('.pc-link-text').then( function(text2){
               cy.visit(text2.text())
        })
        cy.wait(6000)
        cy.get('#clientName').type('automation custom')
        cy.get('#sections_0_questions_0_answers_0_answer').type('automation first name')
        cy.get('#sections_0_questions_1_answers_0_answer').type('automation lst name')
        cy.get('#sections_0_questions_2_answers_0_answer').click()
        cy.wait(3000)
        cy.get('.ant-picker-cell.ant-picker-cell-in-view.ant-picker-cell-today').click()
        cy.get('.cq-add-button > img').click()
        cy.get('.cq-add-button > img').click()
        cy.get('#sections_1_questions_0_answers_0_answer').type(randName(5))
        cy.get('#sections_1_questions_1_answers_0_answer').type(randName(5))
        cy.get('#sections_1_questions_2_answers_0_answer').type(randName(5))
        cy.get('#sections_2_questions_0_answers_0_answer').type(randName(5))
        cy.get('#sections_2_questions_1_answers_0_answer').type(randName(5))
        cy.get('#sections_2_questions_2_answers_0_answer').type(randName(5))

        cy.get(':nth-child(1) > .ant-radio > .ant-radio-input').click()
        cy.get('#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_0_answers_0_answer').type('child name ')
        cy.get('.ant-btn > span').click()
        cy.wait(7000)

        cy.visit('https://app-stage.ezymigrate.co.nz/potential-client-questionnaire')

        cy.contains('automation custom').scrollIntoView()

        cy.wait(3000)
        cy.get(':nth-child(9) > :nth-child(4) > [style="display: inline-block;"] > :nth-child(5) > span').click()
        cy.wait(3000)







    })

})