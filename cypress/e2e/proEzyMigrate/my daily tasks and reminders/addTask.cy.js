import { setupAPIIntercepts } from '../../../support/apiIntercepts';
/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

function randomNo(y) {
  let x = Math.floor(Math.random() * 10) + y;
  return x;
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function randName(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const sms = "211267313";

// cypress/e2e/proEzyMigrate/Client/add_client.cy.js







describe("Adding task and reminders", () => {
  const futureDate = Cypress.env("futureDate");

  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });
  
  
  it("Add task", () => {

    cy.get('a[href="/tasks-and-reminders/tasks-to-do"]')
      .click()

    cy.wait("@getallusers").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

    cy.wait("@getallreminders").then((interception) => {
        cy.wrap(interception.response.statusCode).should("not.equal", 500);
      });

    cy.wait("@allbranchUsers").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      

    cy.wait("@AllByUserId").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      }); 

    cy.wait("@TimeTrackingPopUp").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      }); 

    cy.wait(2000)

    cy.get("div[style='display: flex; align-items: center; width: 100%;']").each(($el, index, $list) => {
      var del = $el
        .find(
          '.cv-normal-text'
        )
        .text();
      if (del.includes("automation cypress task")) {
        cy.log(del);
        cy.wrap($el).find('img[src="/static/media/del-blue.296a7465.svg"]').click();
        
        cy.get('.ant-btn.ant-btn-primary.margin-right').contains('OK').click()
        cy.wait("@deletetask").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@AllByUserId").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.get('.ant-btn.ant-btn-default')
      .eq(0)
      .click()

    cy.wait("@allbranchUsers").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

    cy.get('#basic_link_client')
      .type('sufi cup')

    cy.get('div[title="sufi cup"]')
      .click()

    cy.get('#basic_task_title')
      .type('automation cypress task')

    cy.get('#basic_task_description')
      .type('description for automation cypress task')

    cy.get('#basic_select_date')
      .click()

    cy.get('.ant-picker-cell.ant-picker-cell-in-view.ant-picker-cell-today')
      .click({force:true})

    cy.get('.ant-select-selection-overflow').click()
    
    cy.get('div[title="team member nabeel"]').click()

    cy.get('.ant-btn.ant-btn-primary.button-blue')
      .contains('Save')
      .click()

      cy.wait("@TaskWithUsers").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@clientlog").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@reminder").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@AllByUserId").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      }); 

      cy.wait(2000)

      cy.get("div[style='display: flex; align-items: center; width: 100%;']").each(($el, index, $list) => {
        var del = $el
          .find(
            '.cv-normal-text'
          )
          .text();
        if (del.includes("automation cypress task")) {
          cy.log(del);
          cy.wrap($el).find('img[src="/static/media/file-notes.2d0a54c0.svg"]').click();
          cy.get('#basic_title').type(' test')
          cy.get('.ant-btn.ant-btn-primary.task-blue').contains('SAVE').click()
          cy.wait("@puttask").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
          cy.wait("@AllByUserId").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
        }
      });

      cy.wait(3000)

    
      cy.get("div[style='display: flex; align-items: center; width: 100%;']").each(($el, index, $list) => {
        var del = $el
          .find(
            '.cv-normal-text'
          )
          .text();
        if (del.includes("automation cypress task")) {
          cy.log(del);
          cy.wrap($el).find('.sus-checkbox').click();
          cy.wait("@completedtask").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
          cy.wait("@AllByUserId").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
          cy.wait("@BranchVisaType/All").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
          cy.wait("@clientlog").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
        }
      });

      cy.wait(3000)

      cy.wait('@allservicetype').then((xhr) => {
        if (xhr.status === 200) {

          cy.get('.ant-btn.ant-btn-primary.button-blue')
            .contains('Close')
            .click()}

            else {

              console.log('API was not called');
            }})


      cy.contains('Completed Tasks')
        .click()

        cy.wait("@completedtasks").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });



  })

})