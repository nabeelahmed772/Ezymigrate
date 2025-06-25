import { setupAPIIntercepts } from "../../support/apiIntercepts";
/// <reference types="cypress" />

describe("connection", () => {
  before(() => {
    setupAPIIntercepts();
    cy.interceptSearchClient();
    cy.login();
  });

  it("conection test case", () => {
    cy.get('a[href="/all-clients"]').click();
    // cy.wait("@SearchClient").its('response.statusCode').should('eq', 200)
    // cy.wait("@SearchClient").its('response.statusCode').should('eq', 200)
    // cy.wait("@SearchClient").its('response.statusCode').should('eq', 200)
    // cy.wait("@SearchClient").its('response.statusCode').should('eq', 200)
    // cy.wait("@SearchClient").its('response.statusCode').should('eq', 200)
    // cy.wait("@SearchClient").its('response.statusCode').should('eq', 200)
    // cy.wait("@SearchClient").its('response.statusCode').should('eq', 200)
    // cy.wait("@SearchClient").its('response.statusCode').should('eq', 200)
    // cy.wait("@SearchClient").its('response.statusCode').should('eq', 200)

    cy.wait([
      "@BranchVisaType/All",
      "@visastatus",
      "@getallusers",
      "@branchusersdefault",
    ]).then((interception) => {
      interception.forEach((element) => {
        expect(element.response.statusCode).to.equal(200);
      });
    });

    cy.wait("@SearchClient").then((interception) => {
      const findname = interception.response.body.items;
      const nameFound = findname.find(
        (findname) =>
          findname.firstName == "finame" && findname.lastName == "shuja"
      );
      if (nameFound) {
        cy.get(
          'span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]'
        )
          .contains("finame shuja")
          .click();
          cy.wait(3000)
        cy.wait(["@AllData", "@allfilledquestionairesbyclientid"]).then(
          (interception1) => {
            interception1.forEach((element1) => {
              expect(element1.response.statusCode).to.equal(200);
            });
          }
        );
      } else {
        cy.log("name not found");
        cy.get("#first_name").type("finame");
        cy.get("#last_name").type("shuja");
        cy.get("#last_name").invoke("val").should("eq", "shuja");
        cy.get(".ant-btn.ant-btn-primary.button-blue")
          .contains("Search")
          .click();
        cy.wait("@SearchClient").then((secondintercept) => {
          const arslanname = secondintercept.response.body.items;
          const arslanFound = arslanname.find(
            (arslanname) =>
              arslanname.firstName == "finame" && arslanname.lastName == "shuja"
          );
          if (arslanFound) {
            cy.get(
              'span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]'
            )
              .contains("finame shuja")
              .click();
            cy.wait(["@AllData", "@allfilledquestionairesbyclientid"]).then(
              (interception) => {
                interception.forEach((element) => {
                  expect(element.response.statusCode).to.equal(200);
                });
              }
            );
          } else{

            cy.get('a[href="/add-new-client"]').click()
            cy.get('#firstName').type('finame')
            cy.get('#lastName').type('shuja')
            cy.get('.ant-btn.ant-btn-primary.button-blue').eq(1).click()
            cy.wait([
      "@client",
      "@clientlog"
    ]).then((interception) => {
      interception.forEach((element) => {
        expect(element.response.statusCode).to.equal(200);
      });
    });




          }
        });
      }
    });

    cy.get('.ant-select-selection-item').eq(4).type('sufi cup')
    cy.wait('@searchingclient').then((intercept)=>{
      const suficup = intercept.response.body.clients;
      const suficupFound = suficup.find((suficup) =>suficup.firstName=="sufi" && suficup.lastName=="cup")
      if(suficupFound){
        cy.get('.ant-select-item-option-content').click()
        cy.get('.ant-modal-content').find('.profile-input-border').type('main relative')


      }

    })
  });
});
