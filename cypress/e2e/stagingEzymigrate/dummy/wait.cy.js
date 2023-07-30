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

      cy.xpath(
        '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
      ).click();

      cy.contains('finame shuja').click()

      cy.get(':nth-child(9) > a > .header-bar-text-div > .header-text').click()

      cy.get(".cm-student-visa-cnt").each(($el, index, $list) => {
        var del = $el
          .find(
            '.cm-student-visa-text'
          )
          .text()
          .trim();

        cy.log(del)
        if (del ==="2021 RV - Phase 1") {
          cy.log(del);
          cy.wrap($el).find(".ant-btn.ant-btn-default.ant-dropdown-trigger").click();
          cy.contains('Further Info Request Received').click()
          cy.get('#basic_date').type('01/02/2022', { force: true }).type("{enter}");
          cy.get('.ant-btn.ant-btn-primary').contains('Save').click()
          cy.wait("@UpdateSubjectCaseStatus").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
        }
      });

      cy.pause()


      cy.xpath(
        '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
      ).click();
  
      cy.contains("Inquiry").click();
  
      cy.get('input[placeholder="First Name"]')
        .type('jason client')
        .type("{enter}")

      cy.contains('Select sales person')
        .click({force:true})

      cy.get('div[title="Owner nabeel"]')
        .click()

      cy.get('.ant-btn.ant-btn-primary.button-blue')
        .contains('Search')
        .click()
        cy.wait(5000)

        cy.get('.ant-checkbox-input')
          .eq(2)
          .click()

          cy.get('.anticon.anticon-plus-circle')
            .eq(0)
            .click()

            cy.get('.ant-select-selection-overflow')
              .eq(1)
              .click()

              cy.wait(2000)

              cy.get('div[title="Nabeel Ahmed"]')
                .eq(1)
                .click()

                cy.wait(4000)

    cy.get(".anticon.anticon-minus-circle").eq(0).click();

    cy.get(".ant-select-selection-search-input").eq(9).click();

    cy.get('div[title="Nabeel Ahmed"]').eq(1).click();

    cy.get(".ant-select-selection-search-input").eq(10).click({force:true});
    cy.wait(2000)


    cy.get('div[title="team member nabeel"]').eq(2).click({force:true});

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Save").click();

    cy.wait(6000)

                //api 








        

      

      cy.xpath(
        '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[11]/span/a'
      ).click();
      cy.wait(5000);
      cy.get(":nth-child(2) > .header-bar-text-div > .header-text").click();
      cy.wait(5000);

      cy.contains("HIGHSCHOOL").click();
    cy.wait(7000);

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const jay = $el.find('p[style="font-size: 12px; font-weight: 400; font-style: normal; color: rgba(0, 0, 0, 0.85);"]').eq(0).text();
      cy.log(jay)
      
      if (jay === "test school name") {
        cy.wrap($el).find(".anticon.anticon-edit").click();
        cy.wait("@schoolget").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.get("#address").clear().type("new address");

        cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Save").click();
      }
    });

      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a').click()
      cy.wait(6000)

      //deleting the client
      
      cy.contains('amjad ali').scrollIntoView()
      cy.wait(2000)

      cy.get('.ant-table-row.ant-table-row-level-0').each(($el, index, $list) => {
        
        var del = $el.find('span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]').text().trim()
        if(del==='amjad ali'){
          cy.log(del)
          cy.wrap($el).find('.anticon.anticon-delete').click()
          
          

        }
        

      })

       cy.pause()


      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[3]/div/span').click()
      cy.contains('Checklist(S)').click()
      cy.get('.ant-collapse-item').each(($el, index, $list) => {
      
        var ge = $el.find('.ant-collapse-header-text').text()
        
         
        debugger
        cy.log(ge)
        if(ge.includes('cypress checklist')){
            cy.wrap($el).find('.anticon.anticon-delete').click()
            cy.get('.ant-btn.ant-btn-primary.ant-btn-sm').contains('Yes').click()
  
        }
      })

      cy.contains('Add Checklist').click()
      cy.get('input[placeholder="Enter Category"]').type('cypress checklist')
      cy.get('input[placeholder="Enter Checklist Name"]').type('checklist stage one')
      cy.contains('Add Task').click()
      cy.get('#basic_name').type('checklist documents arrived')
      cy.get('#basic_description').type('test description for the arrived new documents')
      cy.contains('Submit').click()

      cy.contains('Add Task').click()
      cy.get('#basic_name').type('checklist contract signed')
      cy.get('#basic_description').type('test description for the checklist contract signed')
      cy.contains('Submit').click()

      cy.contains('Save').click()






      cy.pause()
      cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a').click()
      cy.wait(8000)
      cy.contains('Export').click()
      cy.wait(2000)
      const XLSX = require('xlsx');
      //adding assertion
      cy.readFile('cypress/downloads/ClientsList.xlsx', 'binary').then(fileContent => {
        const workbook = XLSX.read(fileContent, { type: 'binary' });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
        expect(data[2][1]).to.equal('margalla hill'); // assuming the data you're looking for is in the second cell of the first row
      });


          cy.xpath('//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a').click()
           cy.wait(6000)
         
          //const XLSX = require('xlsx');

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