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

          cy.visit('https://app.ezymigrate.com/login')

    

      cy.intercept('GET', 'https://beta-api.ezymigrate.co.nz/v1/reminder/All/651876e6-b0c8-4c31-aac2-2129d93a8c9b').as('allclients')

     

    

      

      cy.get('#userName > .profile-input-login').type('rananabeelahmed772@gmail.com')

      cy.get('#password > .profile-input-login').type('Nabeel@123')
      

      cy.get('.sus-modal-button-text').click()

      cy.wait(3000)

      cy.get('a[href="/account-settings"]').click();

      cy.contains("Company/Branch Level Setting").click();

      cy.get('span[style="margin-left: 20px;"]').contains("Client Tags").click();
      cy.wait(5000)

    

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      

    if (mo==='Test tag automation test') {
      

      cy.wrap($el).find(".anticon.anticon-delete").should('be.visible').click();

        cy.get("#main_name").type(" test");

        cy.get(".ant-btn.ant-btn-primary.form-btn").contains("Submit").click();
    }
    });
  

    

           









            

        })
    })