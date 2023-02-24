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

describe('potential client', () => {
  it('Add potential', () => {
    cy.viewport(1366, 657)


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
      
      
      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span').click()
      cy.wait(2000)
      cy.contains('Inquiry').click()
      cy.wait(4000)
      cy.contains('ADD POTENTIAL CLIENT').click()
      cy.wait(2000)
      cy.get('#firstName').type('test potential client')
      cy.get('#lastName').type(randName(5))
      cy.get('#email').type('nabeel123@gmail.com')
      cy.get('#address').type('test')
      cy.get('[style="width: 20%;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
      cy.get('[style="width: 20%;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').type('NEW ZEALAND{enter}')
      cy.get('#mobile').type(sms)
      cy.get('#phone').type('3323232')
      cy.get('#worth').type('142')
      cy.get('#occupation').type('test')
      cy.get('.fr-element > p').type('testing by me')

      cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(5000)

      

      //adding file notes
      cy.contains('test potential client').click()
      cy.wait(3000)
      
      cy.get(':nth-child(4) > .sus-inactive-tab-text-school').click()
      cy.get('.fr-element > p').type('potential client file note')
      cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
      cy.wait(3000)

      //adding task for potential client

      cy.get(':nth-child(5) > .sus-inactive-tab-text-school').click()
      cy.wait(3000)
      cy.get('[style="margin-bottom: 15px;"] > .ant-btn').click()
      cy.wait(2000)
      cy.get('#basic_task_title').type('potntial client ')
      cy.get('#basic_task_description').type('description for potential client')
      cy.get('#basic_select_date').click()
      cy.get(date).click({Multiple:true, force:true})
      cy.get('[style="text-align: right;"] > .ant-btn > span').click()
       
      cy.wait(5000)

      //adding questionaire

      cy.get('.sus-inactive-tab-text-school').eq(4).click()
      cy.wait(2000)
      cy.get(':nth-child(3) > [style="margin-top: 8px;"] > .ant-select > .ant-select-selector').click()
      cy.wait(2000)
      cy.get('div[title="mobile testing questionare"]').click()
      cy.wait(4000)
      cy.get('.pc-link-text').then(function(text2){
        cy.visit(text2.text())
      })
      
      cy.wait(2000)
      cy.get('#clientName').type('nabeel')
      cy.get('#sections_0_questions_0_answers_0_answer').type('test qw')
      cy.get('#sections_0_questions_1_answers_0_answer').type('test qw2')
      cy.get('#sections_0_questions_2_answers_0_answer').click()
      cy.get(date).click({multiple:true, force:true})
      cy.get('#sections_0_questions_3_answers_0_answer').type('testing 123')
      cy.get('#sections_0_questions_4_answers_0_answer').type('testing limk')

      cy.get('.ant-btn > span').click()
      cy.wait(7000)

      cy.visit('https://app.ezymigrate.com/potential-client/potential-clients')
      cy.wait(10000)





      

      //validating the questionaire submit 
      cy.contains('test potential client').click()
      cy.wait(3000)
      cy.get('.sus-inactive-tab-text-school').eq(1).click()
      cy.wait(2000)
      cy.contains('mobile testing questionare.pdf..pdf ').should('be.visible')

      cy.get('.sus-inactive-tab-text-school').eq(4).click()
      cy.wait(4000)
      cy.contains('mobile testing questionare').should('be.visible')



     //updating the potential client
     

     cy.contains('DETAIL').click()
     cy.get(':nth-child(11) > .ant-col-xs-24 > .ant-form-item > .ant-row > .ant-col-11 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
     cy.get('div[title=" 2021 RV - Phase 1"]').click({Multiple:true, force:true})
     cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()

     cy.wait(7000)

     //signing the employer digital signature
     cy.contains('test potential client').click()
     cy.wait(4000) 
     cy.get(':nth-child(2) > .sus-inactive-tab-text-school').click()
     cy.wait(7000) 
     cy.get('[data-node-key="2"]').contains('CREATE').click()
     cy.wait(7000)
     cy.get(':nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
     cy.contains('potential clinet signtaturee').click()
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
     cy.wait(11000)
     cy.visit('https://app.ezymigrate.com/potential-client/potential-clients')
     cy.wait(5000)
     //validating the digital signature
     cy.contains('test potential client').click()
     cy.wait(3000)
     cy.get('.sus-inactive-tab-text-school').eq(1).click()
     cy.wait(2000)
     cy.contains('Contract-Signed-PDF.pdf ').should('be.visible')

      



      
      //deleting the potential client
      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span').click()
      cy.wait(2000)
      cy.contains('Inquiry').click()
      cy.wait(4000)

      cy.contains('Export').click()
      cy.wait(7000)

      cy.readFile('cypress/downloads/PotentialClientsList.xlsx', 'binary').then(fileContent => {
        const workbook = XLSX.read(fileContent, { type: 'binary' });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
        expect(data[0][4]).to.not.equal('nabeel123@gmail.com'); // assuming the data you're looking for is in the first cell of the fourth row
      });
      //cy.reload()

      
      cy.get('#root > div > div > div > section > main > div > div > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div > div.ant-row > div > div > div > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > a:nth-child(5) > span > svg').click()
      cy.get('[style="display: flex; margin-top: 40px;"] > :nth-child(2) > .ant-btn > span').click()
      cy.wait(4000)
      cy.wait(7000)


    });

});