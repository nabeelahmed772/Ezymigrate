import { setupAPIIntercepts } from "../../../support/apiIntercepts";
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

describe("ALL MAIL", () => {
  const futureDate = Cypress.env("futureDate");

  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });

  it("MAIL", () => {

    cy.get('a[href="/email"]').click()

    cy.wait("@IMAPImportSettings").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

    cy.get('.ant-btn.ant-btn-primary.employer-btn.button-blue')
      .contains('Search')
      .click()

    cy.wait("@AllEmailImportSettings").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });



  })
})