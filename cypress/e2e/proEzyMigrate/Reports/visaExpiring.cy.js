import { setupAPIIntercepts } from '../../../support/apiIntercepts';
/// <reference types="cypress" />

beforeEach(() => {
  setupAPIIntercepts();
  cy.login();
});
describe("Reports", () => {
  const futureDate = Cypress.env("futureDate");

  it("Visa Expiring", () => {


    cy.get('a[href="/reports"]').click();

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-picker-input").eq(0).type("01/01/2023").type("{enter}");

    cy.get(".ant-picker-input").eq(1).type(futureDate).type("{enter}");

    cy.contains("CURRENT VISA EXPIRY").click();

    cy.wait("@VisaExpiry").as('firstRequest').then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);

      const count= interception.response.body.count
      if(count > 20){
        cy.get(".ant-pagination-item.ant-pagination-item-2").click();
        cy.wait("@VisaExpiry").as('secondRequest').then((secondinterception) => {
          cy.wrap(secondinterception.response.statusCode).should("eq", 200);

          const secondpageRequest= secondinterception.request.body;
          expect(secondpageRequest.pageNumber).to.equal(2);
        });

      }
    });

    

   

    cy.get(".ant-btn.ant-btn-default.button-blue").contains("Export").click();

    cy.wait("@VisaExpiryExport").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(3000)

    const XLSX = require("xlsx");
    //adding assertion
    cy.readFile("cypress/downloads/VisaReport.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const FIRSTNAME = "basic";
        const isContactNamePresent = data.flat().includes(FIRSTNAME);

        expect(isContactNamePresent).to.be.true;
      }
    );

    cy.contains("CLIENT EMPLOYERS").click();

    cy.wait("@ClientEmployer").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-default.button-blue").contains("Export").click();

    cy.wait("@ClientEmployerExport").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //const XLSX = require("xlsx");
    //adding assertion
    cy.readFile("cypress/downloads/Client_Employer_Report.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const CLIENT = "basic web";
        const isContactNamePresent = data.flat().includes(CLIENT);

        expect(isContactNamePresent).to.be.true;
      }
    );

    cy.contains("DOCUMENT CHECKLIST").click();

    cy.wait("@reportDocumentCheckList").as('firstRequest').then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);

      const Count= interception.response.body.count
      if(Count > 20){
        cy.get(".ant-pagination-item.ant-pagination-item-2").click();

        cy.wait("@reportDocumentCheckList").as('secondRequest').then((sicinterception) => {
          cy.wrap(sicinterception.response.statusCode).should("eq", 200);
        });


      }
    });

  

    cy.contains("SERVICE AGREEMENT").click();

    cy.wait("@ClientContractAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-pagination-item.ant-pagination-item-2").click();

    cy.wait("@ClientContractAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('img[src="/static/media/download.e81a7a95.svg"]').eq(0).click();

    cy.wait("@Contractpdf").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //Visa Reports

    cy.contains("Visa Reports").click();

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@visastatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllBranchVisaTypeByCountry").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllVisaDestination").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllWithHide").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchCountryLinking").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-picker-input").eq(0).type("01/01/2023").type("{enter}");

    cy.get(".ant-picker-input").eq(1).type(futureDate).type("{enter}");

    cy.get(".ant-select-selection-search-input").eq(4).click({force:true});

    cy.get('div[title="NEW ZEALAND"]').click()

    cy.wait(2000)

    cy.get(".ant-select-selection-search-input").eq(5).click({force:true});

    cy.get('div[title="Appeal - IPT"]').click({force:true});

    cy.get(".ant-select-selection-search-input").eq(7).click({force:true});

    cy.get('div[title="Active"]').click({force:true});

    cy.contains("SHOW").click();

    cy.wait("@Visa").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("EXPORT").click();

    cy.wait("@VisaExport").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(3000)

    cy.readFile("cypress/downloads/VisaReport.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const NAME = "test test";
        const isContactNamePresent = data.flat().includes(NAME);

        expect(isContactNamePresent).to.be.true;
      }
    );

    cy.contains('CLEAR').click()

    cy.wait("@Visa").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('.header-text').contains('Time Tracking').click()

    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@allservicetype").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@visastatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('.ant-btn.ant-btn-default.button-blue')
      .contains('Show')
      .click()

     cy.wait("@reportTimeTracking").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.get('a[href="/time-tracking"]').click()


      cy.wait("@worktypeall").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
        
      });

      cy.wait(3000)

      cy.get('.ant-table-row.ant-table-row-level-0').each(
        ($el, index, $list) => {
        var ge = $el.find('td').text();

        if(ge.includes('cypress automation')){
          cy.wrap($el).find('img[src="/static/media/delete-blue.983ea6be.svg"]').click()
          cy.get('.ant-btn.ant-btn-primary').contains('OK').click()
          cy.wait("@worktypeall").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
    
          cy.wait("@deleteworktype").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });

        }
      })

      cy.get('img[src="/static/media/plus-icon.16380594.svg"]').click()

      cy.get('.ant-input.profile-input').type('cypress automation')

      cy.get('.ant-btn.ant-btn-primary').contains('Save').click()

      cy.wait("@worktypeall").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@postworktype").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.get('.ant-table-row.ant-table-row-level-0').each(
        ($el, index, $list) => {
        var ge = $el.find('td').text();

        if(ge.includes('cypress automation')){
          cy.wrap($el).find('img[src="/static/media/edit-border-blue.a5c788a8.svg"]').click()
          cy.get('.ant-btn.ant-btn-primary').contains('Save').click()
          cy.wait("@worktypeall").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
    
          cy.wait("@putworktype").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });

        }
      })


      cy.wait(3000)

      cy.get('.ant-table-row.ant-table-row-level-0').each(
        ($el, index, $list) => {
        var ge = $el.find('td').text();

        if(ge.includes('cypress automation')){
          cy.wrap($el).find('img[src="/static/media/delete-blue.983ea6be.svg"]').click()
          cy.get('.ant-btn.ant-btn-primary').contains('OK').click()
          cy.wait("@worktypeall").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
    
          cy.wait("@deleteworktype").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });

        }
      })

      cy.wait(3000)

      cy.contains('VISA TYPE PRICE').click()


      cy.wait("@visatypepriceall").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });


      cy.get('img[src="/static/media/edit-border-blue.a5c788a8.svg"]').eq(0).click({force:true})
      cy.get('.ant-btn.ant-btn-default.button-blue')
        .contains('Update')
        .click()

      
      

        cy.wait("@visatypepriceall").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@postvisatypepriceall").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
    

        cy.contains('SERVICE TYPE').click()

        cy.wait("@allservicetype").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait(2000)

        cy.get('.ant-table-row.ant-table-row-level-0').each(
          ($el, index, $list) => {
          var ge = $el.find('td').text();
  
          if(ge.includes('cypress automation')){
            cy.wrap($el).find('img[src="/static/media/delete-blue.983ea6be.svg"]').click()
            cy.get('.ant-btn.ant-btn-primary').contains('OK').click()
            cy.wait("@allservicetype").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
            });
      
            cy.wait("@deleteservicetype").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
            });
  
          }
        })
  

        cy.get('img[src="/static/media/plus-icon.16380594.svg"]').click()

        cy.get('.ant-input.profile-input').type('cypress automation')
        cy.get('.profile-input-border').eq(1).type('2')
        cy.get('.profile-input-border').eq(2).type('2')
  
        cy.get('.ant-btn.ant-btn-primary').contains('OK').click()
  
        cy.wait("@allservicetype").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
  
        cy.wait("@postservicetype").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.get('.ant-table-row.ant-table-row-level-0').each(
          ($el, index, $list) => {
          var ge = $el.find('td').text();
  
          if(ge.includes('cypress automation')){
            cy.wrap($el).find('img[src="/static/media/edit-border-blue.a5c788a8.svg"]').click()
            cy.get('.ant-btn.ant-btn-primary').contains('OK').click()
            cy.wait("@allservicetype").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
            });
      
            cy.wait("@putservicetype").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
            });
  
          }
        })
  
  
        cy.wait(3000)

        

      cy.get('.ant-table-row.ant-table-row-level-0').each(
        ($el, index, $list) => {
        var ge = $el.find('td').text();

        if(ge.includes('cypress automation')){
          cy.wrap($el).find('img[src="/static/media/delete-blue.983ea6be.svg"]').click()
          cy.get('.ant-btn.ant-btn-primary').contains('OK').click()
          cy.wait("@allservicetype").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
    
          cy.wait("@deleteservicetype").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });

        }
      })

      cy.wait(3000)
  




  });
});
