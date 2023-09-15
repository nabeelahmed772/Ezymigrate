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

      

    cy.wait("@AllByUserId").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      }); 

    cy.wait("@TimeTrackingPopUp").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      }); 

    cy.get('.ant-btn.ant-btn-default')
      .eq(0)
      .click()

    cy.wait("@getallusers").then((interception) => {
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



    






  })

})