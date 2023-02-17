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
    const futureDate = "25/02/2023"
  
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
      
      //cy.wait(9000)
      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[12]/span/a').click()
      cy.wait(5000)
      cy.contains('Add New').scrollIntoView()
      cy.wait(3000)
      cy.get(':nth-child(4) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(5000)
      cy.get('#main_name').type('cy new employer')
      cy.get('#main_business').type('test sqa')
      cy.get('#main_email').type('test123@gmail.com')
      cy.get('#main_contact_no').type('03420811293')
      cy.get('#main_city > :nth-child(2) > .ant-input').type('test city')
      cy.get('#main_address > :nth-child(2) > .ant-input').type('test address')
      cy.scrollTo(0, 500)
      cy.wait(1000)
      cy.get('#main_contact_person > :nth-child(2) > .ant-input').type('nabeel')
      cy.get('#main_countryCodeId').type('NEW ZEALAND{enter}')

      cy.get('#main_mobile').type(sms)
      cy.get('#main_website > :nth-child(2) > .ant-input').type('test website')
      cy.get(':nth-child(11) > [style="padding-left: 4px; padding-right: 4px;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.wait(2000)
      //need to fix later 
      cy.get('div[title="Administrative"]').click({multiple:true, force:true})
        
        
      //cy.contains('Agriculture').eq(0).click()
      cy.get('#main_nzbn').type('123')
      cy.get('#main_occupation > :nth-child(2) > .ant-input').type('test9')
      cy.get('#main_company_size > :nth-child(2) > .ant-input').type('test')
      cy.get('#main_how_many_years > :nth-child(2) > .ant-input').type('5')
      cy.get('[type="file"]').attachFile('ABC.jpg' )
      cy.wait(2000)
      cy.contains('ABC.jpg').should('be.visible')
      cy.get('.add-emp-btn > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(5000)
      

      //updating the employer 
      
      cy.scrollTo('left')
      
      cy.contains('cy new employer').click()
      cy.wait(4000)

      
      
      cy.get('#main_name').should('be.visible')
      //cy.wait(9000)
      cy.get('#main_business').clear()
      cy.wait(2000)
      cy.get('#main_business').type('test sqa update')
      cy.wait(2000)
      cy.get('#main_accredationStartDate').click({force:true})
      cy.wait(2000)
      cy.get(date).click({multiple:true, force:true})
      cy.wait(2000)
      cy.get('#main_accredationExpiryDate').type(futureDate, {force:true}).type('{enter}')
      cy.wait(1000)
      //cy.get(futureDate).type('{enter}').click({force:true})
      cy.wait(1000)
      cy.contains('Save').scrollIntoView()
      cy.wait(1000)
      cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(5000)
      // cy.get('.ant-message').should(($lis) => {
      //   expect($lis).to.have.length(3)
      //   expect($lis).to.contain('Successfully Updated')
      //   expect($lis.eq(1)).to.contain('Feed the cat')
      //   expect($lis.eq(2)).to.contain('Write JavaScript')
      // })

      

      // cy.get('.ant-tabs-tab-btn').eq(7).click()
      // cy.wait(2000)
      // cy.get('.pc-text-inner-tab').should('be.visible')








      
      //adding the file notes
      cy.wait(4000)
      cy.scrollTo('left')
      cy.contains('cy new employer').click()
      cy.wait(4000)
      cy.contains('FILE NOTES').click()
      cy.wait(5000)
      cy.get('.fr-element > p').type('testing by team , plz dont proceed this')
      cy.get('.filenote-btn > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(2000)

      //adding the accredition case cases

      cy.scrollTo('left')

      cy.get('.ant-tabs-tab-btn').eq(4).click()
      cy.wait(3000)
      cy.get('.cv-top-lbtn-text').click()
      cy.wait(2000)
      cy.get('[style="padding: 10px;"] > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.wait(2000)
      cy.get('div[title="Employer accreditation"]').click({multiple:true, force:true})
      cy.wait(2000)
      cy.get('[style="padding: 0px 10px 10px;"] > .ant-picker > .ant-picker-input > input').click()
      cy.get(date).click({multiple:true, force:true})
      cy.get(':nth-child(4) > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.get('div[title="High-Volume"]').click({multiple:true, force:true})
      cy.get('.button-blue-cont > .ant-btn > span').click({force:true})
      cy.wait(7000)



      //updating the case status

      cy.get('#rc-tabs-5-tab-1 > [style="display: block;"] > .rightbar-icons').click()
      cy.wait(2000)
      cy.get(':nth-child(6) > :nth-child(2) > .ant-picker > .ant-picker-input > input').click()
      cy.wait(2000)
      cy.get(date).click({multiple:true, force:true})

      cy.get(':nth-child(7) > :nth-child(2) > .ant-picker > .ant-picker-input > input').click()
      cy.wait(2000)
      cy.get(date).click({multiple:true, force:true})

      cy.get('[style="padding: 10px;"] > .ant-select > .ant-select-selector > .ant-select-selection-item').click({multiple:true, force:true})
      cy.wait(2000)
      cy.get('div[title="Client Awaiting Document Instructions"]').click({multiple:true, force:true})
      cy.wait(2000)
      cy.get('.ant-form > [style="padding: 0px 10px 10px;"] > .ant-picker > .ant-picker-input > input').click({multiple:true, force:true})
      cy.wait(2000)
      cy.get(date).click({multiple:true, force:true})
      cy.wait(2000)
      cy.get('.ant-form > .button-blue-cont > .ant-btn > span').click({force:true})
      cy.wait(4000)

      //sending the SMS  

      cy.get('#rc-tabs-5-tab-2 > [style="display: flex;"] > .rightbar-icons').click()
      cy.wait(2000)
      cy.get('.ant-col > .ant-input').type('employer SMS testing ')
      cy.get('[style="justify-content: flex-end; margin-top: 10px;"] > .ant-col > .ant-btn > span').click()
      cy.wait(3000)

      //adding the task

      cy.get('#rc-tabs-5-tab-3 > [style="display: flex;"] > .rightbar-icons').click()
      cy.wait(5000)
      cy.get('[style="padding: 10px; height: 54px;"] > .ant-btn').click()
      cy.wait(1000)
      cy.get('#basic_task_title').type('employer task test')
      cy.get('#basic_task_description').type('employer task test description by me')
      cy.get('#basic_select_date').click()
      cy.get(date).click({multiple:true, force:true})
      cy.get('[style="text-align: right;"] > .ant-btn > span').click({force:true})
      cy.wait(5000)






 





      

      // Adding the contacts 
      cy.wait(5000)
      //cy.scrollTo('top')
      cy.contains('PROFILE').click()
      //cy.xpath('//*[@id="root"]/div/div/div/section/main/div/div[2]/div/div/div/div/div/div[2]/div/div/div/div/div/div/div/div/div/table/tbody/tr[1]/td[7]/div/span[3]').click()
      cy.wait(5000)
      cy.get('.icons-client').eq(0).scrollIntoView()
      cy.get('.icons-client').eq(0).click()
      cy.wait(1000)
      cy.get(':nth-child(1) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #main_name').type('Nabeel ahmed contact')
      cy.get(':nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #main_email').type('nabeel@gmail.com')
      cy.get('#main_number').type('383838383')
      cy.get('[style="margin-left: -4px; margin-right: -4px;"] > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(2000)
      cy.contains('Nabeel ahmed contact').should('be.visible')

      //Adding the job

      cy.scrollTo('left')
      cy.contains('cy new employer').click()
      //cy.xpath('//*[@id="root"]/div/div/div/section/main/div/div[2]/div/div/div/div/div/div[2]/div/div/div/div/div/div/div/div/div/table/tbody/tr[1]/td[7]/div/span[3]').click()
      cy.wait(5000)
      cy.get('.icons-client').eq(1).scrollIntoView()
      cy.get('.icons-client').eq(1).click()
      cy.wait(1000)
      cy.get('#main_job_no').type('msm34')
      cy.get('#main_job_tittle').type('software')
      cy.get('#main_openDate').click()
      cy.wait(4000)
      cy.get('.ant-picker-cell-in-view.ant-picker-cell-today').click({multiple:true, force:true})
      //cy.get('.ant-picker-cell-inner>20').click()
      cy.get('#main_closeDate').click()
      cy.wait(1000)
      cy.get(date).click({multiple:true, force:true})
      

      cy.get('#main_position').type('sqa')
      cy.get('#main_remuneration').type('123')
      cy.get('#main_experience_required').type('2 years')
      cy.get('#main_required').type('1')
      cy.get('#main_other_requirements').type('nothing')
      cy.get('#main_anzsco_code').type('mzn3243')
      cy.get('#main_policy').type('policy3')
      //cy.get('#main_policy').type('mzn3243')
      //cy.get('#main_visa_length')
      cy.get('#main_visa_length').type('2')
      cy.get('#main_advertisingExpiry').click()
      cy.get(date).click({multiple:true, force:true})
      cy.wait(1000)
      //cy.get('.ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today').eq(1).click
      cy.get(':nth-child(4) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #main_address').type('test addreess')
      cy.get('#main_liaId').click()
      cy.wait(1000)
      //cy.get('.ant-select-item ant-select-item-option ant-select-item-option-active').click()
      cy.get('#main_skillMatesReportExpiry').click()
      cy.wait(1000)
      cy.get(date).click({multiple:true, force:true})
      //cy.get('.ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today').eq(2).click()
      cy.get('#main_skill_level').type('basic')
      cy.get('#main_salesPersonId').click()
      cy.wait(1000)
      //cy.get('.ant-select-item ant-select-item-option ant-select-item-option-active').eq(1).click()
      cy.get('.emp-froala > .letter-froala > .froala-font-arial-use > .fr-box > .fr-wrapper > .fr-element > p').click({multiple:true, force:true}).type('testing by nabeel')
      cy.contains('Save').scrollIntoView()
      cy.get('.document-checklist--btn > [type="submit"] > span').click()
      cy.wait(4000)

      //adding questionaire
      cy.wait(2000)
      cy.scrollTo('left')
      
      cy.contains('cy new employer').click()
      cy.wait(4000)


      cy.get('.ant-tabs-tab-btn').eq(7).click()
      cy.wait(2000)
      cy.get(':nth-child(2) > [style="margin-top: 8px;"] > .ant-select > .ant-select-selector').click()
      cy.wait(2000)
      cy.get('div[title="mobile testing questionare"]').click({force:true})
      cy.wait(4000)
      cy.get('.pc-link-text').then(function(text2){
        cy.visit(text2.text())
      })
      
      cy.wait(5000)
      cy.get('#clientName').type('nabeel')
      cy.get('#sections_0_questions_0_answers_0_answer').type('test qw')
      cy.get('#sections_0_questions_1_answers_0_answer').type('test qw2')
      cy.get('#sections_0_questions_2_answers_0_answer').click()
      cy.get(date).click({multiple:true, force:true})
      cy.get('#sections_0_questions_3_answers_0_answer').type('testing 123')
      cy.get('#sections_0_questions_4_answers_0_answer').type('testing limk')
      

      cy.get('.ant-btn > span').click()
      cy.wait(10000)
      cy.visit('https://app.ezymigrate.com/employer-management')

      //validating questionaire has beeb submitted

      cy.wait(7000)
      cy.scrollTo('left')
      cy.contains('cy new employer').click()
      cy.wait(7000)
      cy.scrollTo('top')
      cy.get('.ant-tabs-tab-btn').eq(2).click()
      cy.wait(5000)
      cy.contains('mobile testing questionare.pdf..pdf ').should('be.visible')


      //signing the employer digital signature
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





      //deleting the employer
      cy.contains('Employer Management').click()
      cy.wait(1000)
      cy.scrollTo('right')
      cy.wait(4000)
      //cy.get('#root > div > div > div > section > main > div > div.ant-spin-nested-loading > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(2) > td.ant-table-cell.ant-table-row-expand-icon-cell > div > span.anticon.anticon-delete > svg').scrollIntoView()
      cy.get('[data-row-key="4"] > .ant-table-row-expand-icon-cell').scrollIntoView()
      //cy.xpath('//*[@id="root"]/div/div/div/section/main/div/div[2]/div/div/div/div/div/div[2]/div/div/div/div/div/div/div/div/div/table/tbody/tr[3]/td[8]/div/span[4]/svg')
        cy.get('.anticon.anticon-delete').eq(0).scrollIntoView().click({force:true})
        //cy.get('.anticon.anticon-delete').eq(0).scrollIntoView().click({force:true})
      
      //cy.get('.ant-btn ant-btn-primary').eq(5).click()
      cy.get('.ant-modal-footer > .ant-btn-primary > span').click()
      cy.wait(1000)
      
  
  
    })
  })