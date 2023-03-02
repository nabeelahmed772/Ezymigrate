

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
  
  describe('Adding client', () => {
    it('Add client', () => {

      cy.viewport(1366, 657)
      //const sms= '211267313';

      
      //cy.visit('https://app-stage.ezymigrate.co.nz/login')
      cy.visit('https://app.ezymigrate.com/login')

    

      //cy.intercept('POST', '/ActiveSince*').as('login')

      cy.getCookies({log: true})

      cy.clearCookies({log: true})

      cy.getCookies().should('be.empty')

      cy.clearAllCookies({log:true})
      
      cy.clearAllLocalStorage({log:true})

    

      

      cy.get('#userName > .profile-input-login').type('rananabeelahmed772@gmail.com')

      cy.get('#password > .profile-input-login').type('Nabeel@123')

      cy.get('.sus-modal-button-text').click()

      cy.wait(9000)

      cy.contains('Client Analytics').should('be.visible')
      
      cy.wait(2000)

      //adding client

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
      cy.get('#firstName').type('toyota')
      cy.get('#lastName').type(randName(5))
      cy.get('#preferredName').type('pre name')
      //cy.get('#email').type('nabeeloutsourcenz1@gmail.com')
      cy.get('#gender').click()
      cy.wait(2000)
      cy.contains('Male').click({force:true})
      cy.get('#address').type('test addess')
      cy.get('#dateOfBirth').type(futureDate, {force:true}).type('{enter}')
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({ multiple: true, force: true })

      cy.get('#dealWorth').type('12')
      //cy.get('#countryCode').click()
      //cy.get('.body > div:nth-child(13) > div > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div').click()
      cy.get('#mobile').type(sms)
      cy.get('#dependentChildren').type('2')
      cy.get('#secondaryMobile').type('324324324')
      cy.get('#overseasMobile').type('324324')
      cy.get('#phone').type('3434324')
      cy.get('#nationalityId').type('3535')

      cy.get(':nth-child(2) > .save-button-add-client > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(8000)

       //adding employer

       cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[12]/span/a').click()
      cy.wait(5000)
      cy.contains('Add New').scrollIntoView()
      cy.wait(3000)
      cy.get(':nth-child(4) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(5000)
      cy.get('#main_name').type('toyota employer')
      cy.get('#main_business').type('test sqa')
      cy.get('#main_email').type('test123@gmail.com')
      cy.get('#main_contact_no').type('03420811293')
     
      
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
      
       cy.contains('toyota employer').click()
       cy.wait(4000)
 
       
       
       cy.get('#main_name').should('be.visible')
       //cy.wait(9000)
       cy.get('#main_business').clear()
       cy.wait(2000)
       cy.get('#main_business').type('test sqa update')
       cy.wait(2000)
       cy.get('#main_accredationStartDate').type(futureDate, {force:true}).type('{enter}')
       cy.wait(2000)
       //cy.get(date).click({multiple:true, force:true})
       cy.wait(2000)
       cy.get('#main_accredationExpiryDate').type(futureDate, {force:true}).type('{enter}')
       cy.wait(1000)
       //cy.get(futureDate).type('{enter}').click({force:true})
       cy.wait(1000)
       cy.contains('Save').scrollIntoView()
       cy.wait(1000)
       cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
       cy.wait(8000)


      //adding job 

      cy.scrollTo('left')
      
      cy.contains('toyota employer').click()
      //cy.wait(4000)

      cy.wait(5000)
      cy.get('.icons-client').eq(1).scrollIntoView()
      cy.get('.icons-client').eq(1).click()
      cy.wait(1000)
      cy.get('#main_job_no').type('msm34')
      cy.get('#main_job_tittle').type('software12')
      cy.get('#main_openDate').click()
      cy.wait(4000)
      cy.get('.ant-picker-cell-in-view.ant-picker-cell-today').click({multiple:true, force:true})
      //cy.get('.ant-picker-cell-inner>20').click()
      cy.get('#main_closeDate').type(futureDate, {force:true}).type('{enter}')
      cy.wait(1000)
      //cy.get(date).click({multiple:true, force:true})
      

      cy.get('#main_position').type('sqa')
      cy.get('#main_remuneration').type('123')
   
     
      cy.get('#main_visa_length').type('2')
      cy.get('#main_advertisingExpiry').click().type(futureDate, {force:true}).type('{enter}')
      
      cy.wait(1000)
      //cy.get('.ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today').eq(1).click
      cy.get(':nth-child(4) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #main_address').type('test addreess')
      cy.get('#main_liaId').click()
      cy.wait(1000)
      //cy.get('.ant-select-item ant-select-item-option ant-select-item-option-active').click()
      cy.get('#main_skillMatesReportExpiry').click().type(futureDate, {force:true}).type('{enter}')
      cy.wait(1000)
      
      //cy.get('.ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today').eq(2).click()
      cy.get('#main_skill_level').type('basic')
      cy.get('#main_salesPersonId').click()
      cy.wait(1000)
      //cy.get('.ant-select-item ant-select-item-option ant-select-item-option-active').eq(1).click()
      cy.get('.emp-froala > .letter-froala > .froala-font-arial-use > .fr-box > .fr-wrapper > .fr-element > p').click({multiple:true, force:true}).type('testing by nabeel')
      cy.contains('Save').scrollIntoView()
      cy.get('.document-checklist--btn > [type="submit"] > span').click()
      cy.wait(4000)

      //adding job case status

      cy.scrollTo('left')

      cy.get('.ant-tabs-tab-btn').eq(4).click()
      cy.wait(3000)
      cy.get('.cv-top-lbtn-text').click()
      cy.wait(2000)
      cy.get('[style="padding: 10px;"] > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.wait(5000)
      cy.get('.ant-select-item-option-content:visible').eq(3).click()
      cy.wait(3000)
      cy.get('[style="padding: 0px 10px 10px;"] > .ant-picker > .ant-picker-input > input').type(futureDate, {force:true}).type('{enter}')
      cy.wait(2000)
      cy.get(':nth-child(4) > .ant-input').type('honda')
      cy.wait(3000)
      cy.get('.form-container > :nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.wait(3000)
      cy.get('div[title="software12"]').click({multiple:true, force:true})
      cy.wait(3000)
      cy.get('.button-blue-cont > .ant-btn > span').click()
      cy.wait(6000)

      //adding employer to client from client side

      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a').click()
      cy.wait(6000)
      cy.contains('toyota').scrollIntoView()
      cy.contains('toyota').click()
      cy.wait(6000)
      cy.contains('EMPLOYER INFORMATION').click()
      cy.wait(5000)
      cy.get('[style="padding-left: 1px; width: 55%;"] > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.wait(3000)
      cy.contains('toyota employer').click()
      cy.wait(3000)

      //updating the employer from client update
      cy.get('#business').clear().type('update from client side')
      cy.get('[style="margin-top: 30px;"] > .ant-btn > span').click()
      cy.wait(6000)

      //attaching job to client

      cy.get('[style="padding-left: 1px; width: 65%;"] > .ant-select > .ant-select-selector').click()
      cy.wait(3000)
      cy.contains('software12').click()
      cy.wait(6000)

      //updating the job from clinet side
      cy.contains('JOB HISTORY').click()
      cy.wait(5000)
      cy.get('#workStay').type('5')
      cy.get('.button-blue-cont > .ant-btn > span').click()
      cy.wait(6000)

      //going back to employer
      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[12]/span/a').click()
      cy.wait(7000)
      cy.scrollTo('left')
      
       cy.contains('toyota employer').click()
       cy.wait(4000)
 
       
       
       cy.get('#main_name').should('be.visible')
       //cy.wait(9000)
       cy.scrollTo('left')

       cy.get('.ant-tabs-tab-btn').eq(5).click()
       cy.wait(7000)

       cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(3) > .ant-table-row > .ant-table-row-expand-icon-cell > .table-action > div').click({force:true})
       cy.wait(6000)

       //deleting the employer
       cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[12]/span/a').click()
       cy.wait(7000)
       cy.scrollTo('left')
       cy.get('[data-row-key="4"] > .ant-table-row-expand-icon-cell').scrollIntoView()
       cy.wait(1000)
      //cy.xpath('//*[@id="root"]/div/div/div/section/main/div/div[2]/div/div/div/div/div/div[2]/div/div/div/div/div/div/div/div/div/table/tbody/tr[3]/td[8]/div/span[4]/svg')
        cy.get('.anticon.anticon-delete').eq(0).scrollIntoView().click({force:true})
        //cy.get('.anticon.anticon-delete').eq(0).scrollIntoView().click({force:true})
      
      //cy.get('.ant-btn ant-btn-primary').eq(5).click()
      cy.get('.ant-modal-footer > .ant-btn-primary > span').click()
      cy.wait(5000)

      //deleting the client
      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a').click()
      cy.wait(6000)

      //deleting the client
      
      cy.contains('toyota').scrollIntoView()
      cy.wait(2000)

      cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg').click()
        //cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(2) > td:nth-child(8) > div > span > svg').click()
      //cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg').click()
      cy.wait(3000)
      
 

    })

})