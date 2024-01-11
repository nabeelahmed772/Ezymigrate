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

describe("custom questionaires", () => {
  const futureDate = Cypress.env("futureDate");

  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });

  it("custom questionaires", () => {
    cy.get('a[href="/questionnaire"]').click();

    cy.wait("@GetAllQuestionnairs").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000)

    cy.get(".cq-list-content-row").each(($el, index, $list) => {
      var del = $el.find(".cv-doc-text").text().trim();
      if (del === "automation questionaire name") {
        cy.log(del);
        cy.wrap($el)
          .find('img[src="/static/media/delete-blue.983ea6be.svg"]')
          .click();
        cy.get(".ant-btn.ant-btn-primary").contains("OK").click();
        cy.wait("@questionnaire").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@GetAllQuestionnairs").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(2000)

    cy.get('img[src="/static/media/plus-icon.16380594.svg"]').click();

    cy.wait("@parentbinding").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#name").type("automation questionaire name");

    cy.get(".cq-btn-text").contains("Add Section").click();

    cy.get("#sections_0_name").type("section one");

    cy.get(".cq-btn-text").contains("Add Quesstion(s)").click();

    cy.get("#sections_0_questions_0_question").type("plz enter your first name");

    cy.get('#sections_0_questions_0_mappingParent').eq(0).click()

    cy.get(2000)

    cy.get('div[title="Client"]').click()

    cy.wait("@getparentschild").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

    cy.get('#sections_0_questions_0_mappingProperty').eq(0).click()

    cy.get(2000)

    cy.get('div[title="FirstName"]').dblclick()



});

});