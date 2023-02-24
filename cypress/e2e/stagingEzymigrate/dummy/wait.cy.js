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
    const password = 'nabeel@123';
    describe('potential client', () => {
        it('Add potential', () => {
            cy.intercept('GEt','https://beta-api.ezymigrate.co.nz/v1/employer/contact/All/8ec6fc30-72bb-49ff-b858-aae844436acc').as('load')

            cy.intercept('GEt','https://beta-api.ezymigrate.co.nz/v1/employer/All/f918a441-a5e4-44bd-9e4c-0c96144445c5').as('emp')
      
            cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/dashboardbi/IdleSince').as('login')
          cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/client/SearchClient').as('search')
          const XLSX = require('xlsx');

cy.readFile('cypress/downloads/EmployersList.xlsx', 'binary').then(fileContent => {
  const workbook = XLSX.read(fileContent, { type: 'binary' });
  const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  expect(data[1][0]).to.equal('cy new employer'); // assuming the data you're looking for is in the first cell of the first row
});

cy.readFile('cypress/downloads/PotentialClientsList.xlsx', 'binary').then(fileContent => {
    const workbook = XLSX.read(fileContent, { type: 'binary' });
    const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
    expect(data[0][4]).to.not.equal('nabeel123@gmail.com'); // assuming the data you're looking for is in the first cell of the second row
  });
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
          cy.wait('@login')
          cy.wait(8000)
          

          cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[12]/span/a').click()
          cy.wait(4000)
          cy.contains('Export').click()
          cy.readFile('cypress/download/EmployersList.xlsx').should('contain', 'munna mbbs')

            

           









            

        })
    })