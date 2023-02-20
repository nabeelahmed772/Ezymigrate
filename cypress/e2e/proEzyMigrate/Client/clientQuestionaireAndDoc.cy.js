

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
      cy.get('#firstName').type('margalla')
      cy.get('#lastName').type(randName(5))
      cy.get('#preferredName').type('pre name')
      //cy.get('#email').type('nabeeloutsourcenz1@gmail.com')
      cy.get('#gender').click()
      cy.wait(2000)
      cy.contains('Male').click({force:true})
      cy.get('#address').type('test addess')
      cy.get('#dateOfBirth').click()
      cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({ multiple: true, force: true })

      cy.get('#dealWorth').type('12')
      //cy.get('#countryCode').click()
      //cy.get('.body > div:nth-child(13) > div > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div').click()
      cy.get('#mobile').type(sms)
      cy.get('#dependentChildren').type('2')
      cy.get('#secondaryMobile').type('324324324')
      cy.get('#overseasMobile').type('324324')
      cy.get('#phone').type('3434324')
      cy.get('#nationalityId').type('3535')
      cy.get('#agentId').click()
      cy.get('div[title="arsalan team member"]').and('have.class', 'ant-select-item ant-select-item-option').click({multiple: true, force:true})

      cy.get('#jobSectorId').click()
      cy.get('div[title="Administrative"]').and('have.class', 'ant-select-item ant-select-item-option ant-select-item-option-active').click({multiple: true, force:true})
      cy.get('#occupation').type('test occupation')
      cy.get('#companyOptional').type('test')
      cy.get('[style="width: 101%;"] > .ant-col > .letter-froala > .froala-font-arial-use > .fr-box > .fr-wrapper > .fr-element > p').type('test')

      //adding billing

      cy.get('#contactPersonBilling').type('test')
      cy.get('#flat').type('tst')
      cy.get('#streetName').type('test')
      cy.get('#suburb').type('test')
      cy.get('#city').type('test')
      cy.get('#country').click()
      cy.wait(3000)
      cy.get('div[title="ALGERIA"]').click({multiple:true , force:true});

      cy.get('#zip').type('234')


      //adding passport
      cy.get('#passportNo').type('543534')
      cy.get('#passportCountry').click()
      cy.get('div[title="AFGHANISTAN"]').click({multiple:true , force:true});
      cy.get('#passportIssueDate').click()

      cy.get(date).click({multiple:true , force:true});
      cy.get('#passportExpiryDate').click()

      cy.get(date).click({multiple:true , force:true});


      //cy.get('.ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today').click({force:true})



      //medical details
      cy.get('#er').type('434')
      cy.get('[style="width: 101%; margin-top: 40px;"] > .ant-col > .letter-froala > .froala-font-arial-use > .fr-box > .fr-wrapper > .fr-element > p').click()

      //inz login details

      cy.get('#clientNumber').type(randomNo(12))
      cy.get('#inzUserName').type('name')
      cy.get('#inzPassword').type('123')


      cy.get(':nth-child(2) > .save-button-add-client > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(8000)


      //adding document checklist
      cy.get(':nth-child(4) > a > .header-bar-text-div > .header-text').click()
      cy.wait(6000)
      cy.contains('DOCUMENT CHECKLIST').click()
      cy.wait(8000)
      cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
      cy.wait(4000)
      cy.contains('test document checklist').click()
      cy.wait(2000)
      cy.get(':nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(8000)
      cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(2000)
      cy.get(':nth-child(5) > a > .header-bar-text-div > .header-text').click()
      cy.wait(8000)
      cy.get(':nth-child(4) > a > .header-bar-text-div > .header-text').click()
      cy.wait(8000)
      cy.contains('DOCUMENT CHECKLIST').click()
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
      cy.visit('https://app.ezymigrate.com/documents')
      cy.wait(8000)
      cy.contains('ABC.jpg').should('be.visible')

      //adding questionaire
      cy.get(':nth-child(10) > a > .header-bar-text-div > .header-text').click()
      cy.wait(6000)
      cy.get(':nth-child(3) > [style="margin-top: 8px;"] > .ant-select > .ant-select-selector').click()
      cy.wait(5000)
      cy.contains('mobile testing questionare').click()
      cy.wait(5000)
      cy.get('.pc-link-text').then(function(text1){

       cy.visit(text1.text())
       cy.wait(2000)
      })
      cy.wait(8000)
      cy.get('#clientName').type('nabeel')
      cy.get('#sections_0_questions_0_answers_0_answer').type('test qw')
      cy.get('#sections_0_questions_1_answers_0_answer').type('test qw2')
      cy.get('#sections_0_questions_2_answers_0_answer').click()
      cy.get(date).click({multiple:true, force:true})
      cy.get('#sections_0_questions_3_answers_0_answer').type('testing 123')
      cy.get('#sections_0_questions_4_answers_0_answer').type('testing limk')
      

      cy.get('.ant-btn > span').click()
      cy.wait(10000)
      cy.visit('https://app.ezymigrate.com/documents')
      cy.wait(8000)
      cy.contains('mobile testing questionare.pdf..pdf ').should('be.visible')


      //deleting the client
      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a').click()
      cy.wait(8000)

      
      
      cy.contains('margalla').scrollIntoView()
      cy.wait(2000)

      cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg').click()
        //cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(2) > td:nth-child(8) > div > span > svg').click()
      //cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg').click()
      cy.wait(3000)
      //cy.window().then(function(){
        //cy.contains('OK').click()

      //});
      //cy.type('{enter}')
      cy.wait(5000)

    })

})