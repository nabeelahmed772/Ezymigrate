

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
       const futureDate = "25/03/2023"
  
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

      cy.get('#password > .profile-input-login').type('nabeel@123')

      cy.get('.sus-modal-button-text').click()

      cy.wait(9000)

      cy.contains('Client Analytics').should('be.visible')
      
      cy.wait(2000)

      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[6]/span/a').click()
      cy.wait(3000)

      cy.get('[type="file"]').attachFile('ABC.jpg' )

      cy.get('#visaCountryId').click()

      cy.wait(3000)

      cy.contains('NEW ZEALAND').click({force:true})
      cy.wait(2000)
      cy.get('#visaCountyType').click()
      cy.wait(2000)
      cy.get('.ant-select-item-option-content:visible').eq(1).contains('Visa').click()
      //cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.get('#clientSerial').type(randomNo(5))
      cy.get('#title').click({force:true}).type('title')
      cy.get('#firstName').type('finame')
      cy.get('#lastName').type('shuja')
      cy.get('#preferredName').type('pre name')
      cy.get('#email').type('nabeeloutsourcenz1@gmail.com')
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
      cy.get('#passportIssueDate').type(futureDate, {force:true}).type('{enter}')

      //cy.get(date).click({multiple:true , force:true});
      cy.get('#passportExpiryDate').type(futureDate, {force:true}).type('{enter}')

      //cy.get(date).click({multiple:true , force:true});


      //cy.get('.ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today').click({force:true})



      //medical details
      cy.get('#er').type('434')
      cy.get('[style="width: 101%; margin-top: 40px;"] > .ant-col > .letter-froala > .froala-font-arial-use > .fr-box > .fr-wrapper > .fr-element > p').click()

      //inz login details

      cy.get('#clientNumber').type(randomNo(12))
      cy.get('#inzUserName').type('name')
      cy.get('#inzPassword').type('123')


      cy.get(':nth-child(2) > .save-button-add-client > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(7000)

      //updating the client profile

      cy.get('#clientSerial').clear()
      cy.wait(1000)
      cy.get('#clientSerial').type(randomNo(40))
      cy.get('#secondaryEmail').type('test@gmail.com')
      cy.get('#visaDenied > label:nth-child(1) > span.ant-radio > input').click()
      cy.get('#deniedText').type('testing')
      cy.contains('Update').click()
      cy.wait(5000)
      //cy.get('#clientSerial').should('have.value', '546')

      //updating the client current visa

      cy.get('[style="padding-bottom: 0px; justify-content: space-between;"] > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click({force:true})
      cy.get('div[title=" 2021 RV - Phase 1"]').click({multiple:true, force:true})
      cy.get('#visaText').type('test visa')
      cy.get('#currentNewZealandVisaExpiry').type(futureDate,{force:true}).type('{enter}')
      cy.get('#travelConditionsValidTo').type(futureDate,{force:true}).type('{enter}')
      cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(2) > form > div.denied-cont > div.ant-form-item > div > div > div > div > button > span').click()
      cy.wait(5000)

      //updating the medical details

      cy.get('#er').clear({force:true}).type('123456')
      cy.get('#medicalIssueDate').type(futureDate, {force:true}).type('{enter}')
      
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({ multiple: true, force:true })
      cy.get('#medicalExpiryDate').type(futureDate, {force:true}).type('{enter}')
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({multiple:true, force: true })
      cy.get('#xrayExpiryDate').type(futureDate,{force:true}).type('{enter}')
      cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(3) > form > div.denied-cont > div.ant-form-item > div > div > div > div > button > span').click()
      cy.wait(5000)

      //adding police certificate
      cy.get('#certificateIssueDate').type(futureDate, {force:true}).type('{enter}')
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({multiple:true, force: true })
      cy.get('#certificateExpiryDate').type(futureDate, {force:true}).type('{enter}')
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({multiple:true, force: true })
      cy.get('#selectedCountry').click()
      cy.get('div[title="ALBANIA"]').click({multiple:true, force:true})
      cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(4) > div:nth-child(2) > form > div.button-org-cont > button > span').click()
      cy.wait(4000)

      //updating the passport details

      cy.get('#passportNo').type('5')
      cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(4) > form > div:nth-child(1) > div.ant-form-item > div > div > div > div > button > span').click()
      cy.wait(5000)

      

      
      //updating acessing authorties



      //updating inz login details
      cy.get('#clientNumber').click({force:true}).type(randomNo(12))
      cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(5) > form > div.denied-cont > div.ant-form-item > div > div > div > div > button > span').click()
      cy.wait(5000)
      //updating NZQA login details


      //updating billing address
      cy.get('#flat').click({force:true}).type('flat')
      cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(7) > form > div.denied-cont > div.ant-form-item > div > div > div > div > button > span').click()
      cy.wait(5000)


      //adding visa of client

      cy.get(':nth-child(2) > a > .header-bar-text-div > .header-text').scrollIntoView()
      cy.wait(1000)
      cy.get(':nth-child(2) > a > .header-bar-text-div > .header-text').click()
      cy.wait(6000)
      cy.get('.cv-top-lbtn-text').eq(0).click()
      cy.get('[style="padding: 10px;"] > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.get('div[title="Critical Purpose Visitor Visa"]').click({multiple:true , force:true})
      cy.get('.ant-picker-input > input').type(futureDate, {force:true}).type('{enter}')
      //cy.get(date).click({multiple:true , force:true});
      cy.wait(1000)
      cy.get('.button-blue-cont > .ant-btn > span').click()

      cy.wait(3000)

      cy.get(':nth-child(1) > .cv-gray-cont > .cv-row > :nth-child(2) > [style="display: flex;"] > .cv-preparing-box > .cv-imm-cont > .cv-imm-text').click()
      cy.wait(2000)
      cy.get('#visaDescription').type('visa description')
      cy.get('#liaName').type('li name')
      cy.get('#visaAppNumber').type('34343434')
      cy.get('#visaOfficerEmail').type('test@gmail.com')
      cy.get('#branch').type('branch emal')
      cy.get('#courierName').type('courier name')
      cy.get('#trackingNumber').type('32323fr23')
      cy.get('#documentDescription').type('testing by nabeel')
      cy.get('#worth').type('323')
      cy.get('#followupDate').type(futureDate, {force:true}).type('{enter}')
      //cy.get(date).click({multiple:true , force:true});
      cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(6000)

      //adding admission of client

      cy.get(':nth-child(3) > a > .header-bar-text-div > .header-text').scrollIntoView()
      cy.wait(3000)
      cy.get(':nth-child(3) > a > .header-bar-text-div > .header-text').click()
      cy.wait(4000)

      cy.get('.cv-top-lbtn-text').click()

      cy.get('#schoolType').click()

      cy.get('div[title="Secondary"]').click({multiple:true , force:true})

      cy.get('#school').click()

      cy.get('div[title="new secondary"]').click({multiple:true , force:true})

      cy.wait(2000)

      cy.get('#schoolLevel').click()

      cy.wait(3000)


      cy.get('div[title="bsic level"]').click({multiple:true , force:true})



      cy.get('#program').type('program no')

      cy.get('#fee').type('123')


      cy.get('#studentNo').type('32')

      cy.get('#description').type('testing description')

      cy.get('#startDate').type(futureDate, {force:true}).type('{enter}')

      //cy.get(date).click({multiple:true , force:true});

      cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(3000)

      //adding the digital signature 

      cy.intercept('GET', 'https://app.ezymigrate.com/AgreementBuilder/Thanks.htm').as('thankyou')

      cy.get(':nth-child(5) > a > .header-bar-text-div > .header-text').click()
      cy.wait(7000)
      cy.get('.bg-white > .ant-tabs > .ant-tabs-nav > .ant-tabs-nav-wrap > .ant-tabs-nav-list > [data-node-key="2"]').contains('CREATE').click()
      cy.wait(5000)
      cy.get(':nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.wait(6000)
      cy.contains('signature contract').click({force:true})
      cy.wait(8000)
      cy.contains('Generate Contract Link').click({force:true})
     cy.wait(8000)
     cy.contains('Copy the link in the email to send this contract, contract should have signature key (@ClientSignature) as the link purpose is to get the documents signed.').should('exist')
     cy.get('[style="margin-top: 10px; display: flex;"] > a')
     .then(function(text1){
       cy.visit(text1.text())
     })
     cy.wait(10000)
     cy.get('#write').click()
     cy.wait(2000)
     cy.get('#txtSign').type('nabeel')
     cy.get('.modal-content > .BtnAdd').click()
     cy.wait(6000)
     cy.get('#signature-pad-').click()
     cy.contains('Save Signature').click()
     cy.wait(10000)
     cy.wait('@thankyou').its('response.statusCode').should('eq', 200)

     cy.visit('https://app.ezymigrate.com/client-email')
     cy.wait(6000)
     cy.get(':nth-child(4) > a > .header-bar-text-div > .header-text').click()
     cy.wait(6000)
     cy.contains('Contract-Signed-PDF.pdf ').should('be.visible')



      //adding file notes of client

      cy.get(':nth-child(7) > a > .header-bar-text-div > .header-text').scrollIntoView()

      cy.get(':nth-child(7) > a > .header-bar-text-div > .header-text').click()

      cy.wait(5000)

      cy.get('.fr-element > p').type('testing by naeel ,dont proceed this')

      cy.get('.button-container > .ant-btn > span').click()

      cy.wait(5000)




      //open case management of client

      cy.get(':nth-child(9) > a > .header-bar-text-div > .header-text').scrollIntoView()

      cy.get(':nth-child(9) > a > .header-bar-text-div > .header-text').click()

      cy.wait(5000)

      cy.get(':nth-child(1) > .ant-btn > span').click()

      cy.wait(5000)

      cy.get('#basic_Country').click()
      cy.get('div[title="New Zealand"]').click({multiple:true , force:true})
      cy.wait(5000)

      cy.get('#basic_Visa').click()

      cy.get('div[title= " 2021 RV - Phase 1"]').click({multiple:true , force:true})

      cy.get('#basic_date').type(futureDate, {force:true}).type('{enter}')

      //cy.get(date).click({multiple:true , force:true})

      cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(7000)


      //update visa case status in sidebar

      cy.get('#rc-tabs-7-tab-1 > [style="display: block;"] > .rightbar-icons').click({force:true})

      cy.wait(3000)

      cy.get(':nth-child(1) > .form-container > .ant-form > :nth-child(5) > :nth-child(2) > .ant-picker > .ant-picker-input > input').type(futureDate, {force:true}).type('{enter}')

      //cy.get(date).click({multiple:true , force:true})

      cy.get(':nth-child(1) > .form-container > .ant-form > :nth-child(6) > :nth-child(2) > .ant-picker > .ant-picker-input > input').type(futureDate, {force:true}).type('{enter}')

      //cy.get(date).click({multiple:true , force:true})

      cy.get(':nth-child(1) > .form-container > .ant-form > [style="padding: 10px;"] > .ant-select > .ant-select-selector > .ant-select-selection-item').click()

      cy.get('div[title="Client Awaiting Document Instructions"]').click({multiple:true , force:true})

      cy.get(':nth-child(1) > .form-container > .ant-form > .button-blue-cont > .ant-btn > span').click()

      cy.wait(8000)

      //send SMS to client

       cy.get('#rc-tabs-7-tab-5 > [style="display: flex;"] > .rightbar-icons').click()

       cy.wait(3000)

       cy.get('.ant-col > .ant-input').click({force:true}).type('testing by NZ team')

       cy.get('[style="justify-content: flex-end; margin-top: 10px;"] > .ant-col > .ant-btn > span').click()

       cy.wait(5000)



      //adding task for client

      cy.get('#rc-tabs-7-tab-6 > [style="display: flex;"] > .rightbar-icons').click()

      cy.wait(5000)

      cy.get('[style="padding: 10px; height: 54px;"] > .ant-btn').click()

      cy.get('#basic_task_title').type('testing from auto')

      cy.get('#basic_task_description').type('testing description')

      cy.get('#basic_select_date').type(futureDate, {force:true}).type('{enter}')

      //cy.get(date).click({multiple:true , force:true})



      cy.get('[style="text-align: right;"] > .ant-btn > span').click()

      cy.wait(5000)


      

      //adding partner
      cy.get('.header-downarrow-cont > .ant-dropdown-trigger > img').scrollIntoView()
      cy.get('.header-downarrow-cont > .ant-dropdown-trigger > img').click({force:true})
      cy.wait(5000)
      cy.contains('PARTNER DETAILS').click()
      cy.wait(3000)
      cy.contains('ADD PARTNER').click()
      cy.get('[type="file"]').attachFile('ABC.jpg')
      cy.get('#visaCountryId').click()
      cy.contains('NEW ZEALAND').click()
      //cy.get('#visaCountryType').click()
      //cy.get('[title= "Visa"]').click()
      cy.get('#title').type('title')
      cy.get('#firstName').type('wife ')
      cy.get('#lastName').type(randName(5))
      cy.get('#email').type('test@gmail.com')
      cy.get('#address').type('test')
      cy.get('#nationalityId').type('3540404040')
      cy.get('#occupation').type('occupation')
      cy.get(':nth-child(2) > .ant-spin-nested-loading > .ant-spin-container > .froala-font-arial-use > .fr-box > .fr-wrapper > .fr-element > p').type('34')
      cy.get(':nth-child(1) > .ant-radio > .ant-radio-input').click()
      cy.get('#deniedText').type('tws')
      cy.get('#er').type('test')
      cy.get('[style="margin-top: 20px;"] > .ant-spin-nested-loading > .ant-spin-container > .froala-font-arial-use > .fr-box > .fr-wrapper > .fr-element > p').type('test')
      cy.get('#passportNo').type('43434343')
      cy.get('#secondPassportNo').type('434343')
      cy.get('#clientNumber').type(randomNo(12))
      cy.get('#inzUserName').type('nabel3')
      cy.get('#inzPassword').type('123445')
      cy.get('#contactPerson').type('nabeel')
      cy.get('#flat').type('flat')
      cy.get('#city').type('city')
      cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(10000)
      

      //updating the partner details
      cy.get('#clientSerial').click({force:true}).type(randomNo(40))
      cy.get('#middleName').type('middlename')
      cy.get('[style="display: flex; justify-content: space-between; margin-right: 30px;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(5000)

      //updating the current visa info
      cy.get('[style="padding-bottom: 0px; justify-content: space-between;"] > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.get('div[title=" 2021 RV - Phase 1"]').click({multiple:true, force:true})
      cy.get('#visaText').type('test visa')
      //cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(2) > form > div.denied-cont > div.ant-form-item > div > div > div > div > button > span').click()
      cy.get(':nth-child(2) > .ant-form > [style="justify-content: space-between; align-items: center;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(5000)

      //updating the medical details

      cy.get('#er').clear().type('123456')
      cy.get('#medicalIssueDate').type(futureDate, {force:true}).type('{enter}')
      
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({ multiple: true })
      cy.get('#medicalExpiryDate').type(futureDate, {force:true}).type('{enter}')
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({multiple:true, force: true })
      //cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(3) > form > div.denied-cont > div.ant-form-item > div > div > div > div > button > span').click()
      cy.get(':nth-child(3) > .ant-form > [style="justify-content: space-between; align-items: center;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(5000)

      //adding police certificate
      cy.get('#certificateIssueDate').type(futureDate, {force:true}).type('{enter}')
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({multiple:true, force: true })
      cy.get('#certificateExpiryDate').type(futureDate, {force:true}).type('{enter}')
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({multiple:true, force: true })
      cy.get('#selectedCountry').click()
      cy.get('div[title="ALBANIA"]').click({multiple:true, force:true})
      //cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(4) > div:nth-child(2) > form > div.button-org-cont > button > span').click()
      cy.get(':nth-child(2) > .ant-form > .button-org-cont > .ant-btn > span').click()

      cy.wait(4000)

      //updating the passport details

      cy.get('#passportNo').type('5')
      //cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(4) > form > div:nth-child(1) > div.ant-form-item > div > div > div > div > button > span').click()
      cy.get(':nth-child(3) > [style="justify-content: space-between; align-items: center;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(5000)

      

      
      //updating acessing authorties



      //updating inz login details
      cy.get('#clientNumber').click({force:true}).type(randomNo(12))
      //cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(5) > form > div.denied-cont > div.ant-form-item > div > div > div > div > button > span').click()
      //cy.get(':nth-child(3) > [style="justify-content: space-between; align-items: center;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.get(':nth-child(5) > .ant-form > [style="justify-content: space-between; align-items: center;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(5000)
      //updating NZQA login details


      //updating billing address
      cy.get('#flat').click({force:true}).type('flat')
      //cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(7) > form > div.denied-cont > div.ant-form-item > div > div > div > div > button > span').click()
      cy.get(':nth-child(7) > .ant-form > [style="justify-content: space-between; align-items: center;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(5000)



        //adding partner visa of client

        cy.get(':nth-child(2) > a > .header-bar-text-div > .header-text').scrollIntoView()
        cy.wait(1000)
        cy.get(':nth-child(2) > a > .header-bar-text-div > .header-text').click()
        cy.wait(6000)
        cy.get('[style="cursor: pointer;"] > :nth-child(1) > .cv-top-lbtn-text').click()
        cy.get('[style="padding: 10px;"] > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
        cy.get('div[title="Critical Purpose Visitor Visa"]').click({multiple:true , force:true})
        cy.get('.ant-picker-input > input').type(futureDate, {force:true}).type('{enter}')
        //cy.get(date).click({multiple:true , force:true});
        cy.wait(1000)
        cy.get('.button-blue-cont > .ant-btn > span').click()
  
        cy.wait(3000)
  
        cy.get(':nth-child(1) > .cv-gray-cont > .cv-row > :nth-child(2) > [style="display: flex;"] > .cv-preparing-box > .cv-imm-cont > .cv-imm-text').click()
        cy.wait(2000)
        cy.get('#visaDescription').type('visa description')
        cy.get('#liaName').type('li name')
        cy.get('#visaAppNumber').type('34343434')
        cy.get('#visaOfficerEmail').type('test@gmail.com')
        cy.get('#branch').type('branch emal')
        cy.get('#courierName').type('courier name')
        cy.get('#trackingNumber').type('32323fr23')
        cy.get('#documentDescription').type('testing by nabeel')
        cy.get('#worth').type('323')
        cy.get('#followupDate').type(futureDate, {force:true}).type('{enter}')
        //cy.get('td[title="2023-01-30"]').click({multiple:true , force:true});
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
        cy.wait(4000)
  
        //adding partner admission of client
  
        cy.get(':nth-child(3) > a > .header-bar-text-div > .header-text').scrollIntoView()
        cy.get(':nth-child(3) > a > .header-bar-text-div > .header-text').click({force:true})
        cy.wait(4000)
  
        cy.get('.cv-top-lbtn-text').click()
  
        cy.get('#schoolType').click()
  
        cy.get('div[title="Secondary"]').click({multiple:true , force:true})
  
        cy.get('#school').click()
  
        cy.get('div[title="new secondary"]').click({multiple:true , force:true})
  
        cy.wait(2000)
  
        cy.get('#schoolLevel').click()
  
        cy.wait(3000)
  
  
        cy.get('div[title="bsic level"]').click({multiple:true , force:true})
  
  
  
        cy.get('#program').type('program no')
  
        cy.get('#fee').type('123')
  
  
        cy.get('#studentNo').type('32')
  
        cy.get('#description').type('testing description')
  
        cy.get('#startDate').type(futureDate, {force:true}).type('{enter}')
  
        //cy.get(date).click({multiple:true , force:true});
  
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
  
        cy.wait(3000)
  
        //adding partner file notes of client
  
        cy.get(':nth-child(7) > a > .header-bar-text-div > .header-text').scrollIntoView()
  
        cy.get(':nth-child(7) > a > .header-bar-text-div > .header-text').click()
  
        cy.wait(5000)
  
        cy.get('.fr-element > p').type('testing by naeel ,dont proceed this')
  
        cy.get('.button-container > .ant-btn > span').click()
  
        cy.wait(5000)
  
  
  
  
        //partner open case management of client
  
        cy.get(':nth-child(9) > a > .header-bar-text-div > .header-text').scrollIntoView()
  
        cy.get(':nth-child(9) > a > .header-bar-text-div > .header-text').click()
  
        cy.wait(5000)
  
        cy.get(':nth-child(1) > .ant-btn > span').click()
  
        cy.wait(5000)
  
        cy.get('#basic_Country').click()
        cy.get('div[title="New Zealand"]').click({multiple:true , force:true})
        cy.wait(5000)
  
        cy.get('#basic_Visa').click()
  
        cy.get('div[title= " 2021 RV - Phase 1"]').click({multiple:true , force:true})
  
        cy.get('#basic_date').type(futureDate, {force:true}).type('{enter}')
  
        //cy.get(date).click({multiple:true , force:true})
  
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
  
        cy.wait(8000)

        // if( cy.get('.ant-notification-notice-message').contains('Visa Added')) {

        //   cy.get('.ant-notification-notice-close').click()
        // }

        // else{

        //   console.log("good to go")
        // }

        cy.wait(3000)
  
  
        // partner update visa case status in sidebar
  
        cy.contains('Update Visa Status').click({force:true})
  
        cy.wait(3000)
  
        cy.get(':nth-child(1) > .form-container > .ant-form > :nth-child(5) > :nth-child(2) > .ant-picker > .ant-picker-input > input').type(futureDate, {force:true}).type('{enter}')
  
        //cy.get(date).click({multiple:true , force:true})
  
        cy.get(':nth-child(1) > .form-container > .ant-form > :nth-child(6) > :nth-child(2) > .ant-picker > .ant-picker-input > input').type(futureDate, {force:true}).type('{enter}')
  
        //cy.get(date).click({multiple:true , force:true})
  
        cy.get(':nth-child(1) > .form-container > .ant-form > [style="padding: 10px;"] > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
  
        cy.get('div[title="Client Awaiting Document Instructions"]').click({multiple:true , force:true})
  
        cy.get(':nth-child(1) > .form-container > .ant-form > .button-blue-cont > .ant-btn > span').click()
  
        cy.wait(4000)

        //partner adding task for client

        cy.get('#rc-tabs-12-tab-6 > [style="display: flex;"] > .rightbar-icons').click()

      cy.wait(5000)

      cy.get('[style="padding: 10px; height: 54px;"] > .ant-btn').click()

      cy.get('#basic_task_title').type('testing from auto')

      cy.get('#basic_task_description').type('testing description')

      cy.get('#basic_select_date').type(futureDate, {force:true}).type('{enter}')

      //cy.get(date).click({multiple:true , force:true})



      cy.get('[style="text-align: right;"] > .ant-btn > span').click()

      cy.wait(5000)

      //adding a child

      cy.get('.header-downarrow-cont > .ant-dropdown-trigger > img').scrollIntoView()
      cy.get('.header-downarrow-cont > .ant-dropdown-trigger > img').click()
      cy.wait(5000)

      cy.contains('FAMILY DETAILS').click()
      cy.wait(3000)
      cy.contains('Add Child').click()
      cy.wait(2000)
      cy.get('[type="file"]').attachFile('ABC.jpg')
      cy.wait(2000)
      cy.get('#visaCountryId').click()
      cy.wait(4000)
      cy.contains('NEW ZEALAND').click()
      cy.wait(2000)
      //cy.get('#visaCountryType').click()
      //cy.get('[title= "Visa"]').click()
      cy.get('#title').type('title')
      cy.get('#firstName').type('child ')
      cy.get('#lastName').type(randName(5))
      cy.get('#email').type('test@gmail.com')
      cy.get('#address').type('test')
      cy.get('#nationalityId').type('3540404040')
      cy.get('#occupation').type('occupation')
      cy.get(':nth-child(2) > .ant-spin-nested-loading > .ant-spin-container > .froala-font-arial-use > .fr-box > .fr-wrapper > .fr-element > p').type('34')
      cy.get(':nth-child(1) > .ant-radio > .ant-radio-input').click()
      cy.get('#deniedText').type('tws')
      cy.get('#er').type('test')
      cy.get('[style="margin-top: 20px;"] > .ant-spin-nested-loading > .ant-spin-container > .froala-font-arial-use > .fr-box > .fr-wrapper > .fr-element > p').type('test')
      cy.get('#passportNo').type('43434343')
      cy.get('#secondPassportNo').type('434343')
      cy.get('#clientNumber').type(randomNo(12))
      cy.get('#inzUserName').type('nabel3')
      cy.get('#inzPassword').type('123445')
      cy.get('#contactPerson').type('nabeel')
      cy.get('#flat').type('flat')
      cy.get('#city').type('city')
      cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(10000)

      cy.get('.client-tag-btn > span').scrollIntoView()

      cy.get('.client-tag-btn > span').click()
      cy.wait(3000)

      //updating the child 

      cy.get('#clientSerial').click({force:true}).type(randomNo(40))
      cy.get('#middleName').type('middlename')
      cy.get('[style="display: flex; justify-content: space-between; margin-right: 30px;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(5000)

      //updating the current visa info
      cy.get('[style="padding-bottom: 0px; justify-content: space-between;"] > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
      cy.get('div[title=" 2021 RV - Phase 1"]').click({multiple:true, force:true})
      cy.get('#visaText').type('test visa')
      //cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(2) > form > div.denied-cont > div.ant-form-item > div > div > div > div > button > span').click()
      cy.get(':nth-child(2) > .ant-form > [style="justify-content: space-between; align-items: center;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(5000)

      //updating the medical details

      cy.get('#er').clear().type('123456')
      cy.get('#medicalIssueDate').type(futureDate, {force:true}).type('{enter}')
      
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({ multiple: true })
      cy.get('#medicalExpiryDate').type(futureDate, {force:true}).type('{enter}')
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({multiple:true, force: true })
      //cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(3) > form > div.denied-cont > div.ant-form-item > div > div > div > div > button > span').click()
      cy.get(':nth-child(3) > .ant-form > [style="justify-content: space-between; align-items: center;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(5000)

      //adding police certificate
      cy.get('#certificateIssueDate').type(futureDate, {force:true}).type('{enter}')
      cy.wait(1000)
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({multiple:true, force: true })
      cy.wait(1000)
      cy.get('#certificateExpiryDate').type(futureDate, {force:true}).type('{enter}')
      cy.wait(1000)
      //cy.get(date).and('have.class', 'ant-picker-cell ant-picker-cell-in-view').click({multiple:true, force: true })
      cy.get('#selectedCountry').click()
      cy.wait(1000)
      cy.get('div[title="ALBANIA"]').click({multiple:true, force:true})
      cy.wait(1000)
      //cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(4) > div:nth-child(2) > form > div.button-org-cont > button > span').click()
      cy.get(':nth-child(2) > .ant-form > .button-org-cont > .ant-btn > span').click()

      cy.wait(4000)

      //updating the passport details

      cy.get('#passportNo').type('5')
      //cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(4) > form > div:nth-child(1) > div.ant-form-item > div > div > div > div > button > span').click()
      cy.get(':nth-child(3) > [style="justify-content: space-between; align-items: center;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(5000)

      

      
      //updating acessing authorties



      //updating inz login details
      cy.get('#clientNumber').click({force:true}).type(randomNo(12))
      //cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(5) > form > div.denied-cont > div.ant-form-item > div > div > div > div > button > span').click()
      //cy.get(':nth-child(3) > [style="justify-content: space-between; align-items: center;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
      cy.get(':nth-child(5) > .ant-form > [style="justify-content: space-between; align-items: center;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(5000)
      //updating NZQA login details


      //updating billing address
      cy.get('#flat')
        .click({force:true})
        .clear()
        .type('flat')

      //cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div.page-container > div.profile-container > div.content-width-close-sidebar > div > div.profile-additional-box > div:nth-child(7) > form > div.denied-cont > div.ant-form-item > div > div > div > div > button > span').click()
      cy.get(':nth-child(7) > .ant-form > [style="justify-content: space-between; align-items: center;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()

      cy.wait(5000)

      







      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a').click()
      cy.wait(6000)

      //deleting the client
      
      cy.contains('finame shuja').scrollIntoView()
      cy.wait(2000)

      cy.get('.ant-table-row.ant-table-row-level-0').each(($el, index, $list) => {
        
        var del = $el.find('span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]').text().trim()
        if(del==='finame shuja'){
          cy.log(del)
          cy.wrap($el).find('.anticon.anticon-delete').click()
          
          

        }
        

      })

      

      //cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(3) > td:nth-child(8) > div > span > svg').click()
        //cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(2) > td:nth-child(8) > div > span > svg').click()
      //cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg').click()
      //cy.wait(3000)
      //cy.window().then(function(){
        //cy.contains('OK').click()

      //});
      //cy.type('{enter}')
      cy.wait(5000)


    });

});