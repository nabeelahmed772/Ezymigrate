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
    cy.get('a[href="/email"]').click();

    cy.wait("@IMAPImportSettings").then((interception) => {
      cy.wrap(interception.response.statusCode).should("not.eq", 500);
    });

    //   cy.get('.ant-btn.ant-btn-primary.employer-btn.button-blue')
    //   .contains('Search')
    //   .click()

    // cy.wait("@AllEmailImportSettings").then((interception) => {
    //     cy.wrap(interception.response.statusCode).should("not.eq", 500);
    //   });

    cy.get(".ant-tabs-tab-btn").contains("BULK EMAIL").click();

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@visastatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@allbranchUsers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getusersignature").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@CompanyDocumentAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".email-address-btn").contains("Email Addresses").click();

    cy.wait("@bulkclientemail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.log(JSON.stringify(interception.request.body));
      expect(interception.request.body.visaCountryId).to.eq(0);
    });

    cy.get("#clientNumber").click();
    cy.get('div[title="NEW ZEALAND"]').click({ force: true });

    cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn.button-blue")
      .contains("Search")
      .click()
      .then(() => {
        cy.wait("@bulkclientemail").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
          cy.log(JSON.stringify(interception.request.body));
          expect(interception.request.body.visaCountryId).to.eq(168);
          if (interception.response.body.count > 0) {
            cy.get(".ant-checkbox-input").eq(2).click();
            cy.get(".ant-checkbox").then(($checkbox) => {
              if ($checkbox.hasClass("ant-checkbox-checked")) {
                cy.log("Checkbox is checked");
                // Add your assertions here for the checked state
                expect($checkbox).to.have.class("ant-checkbox-checked");

                cy.get(".ant-btn.ant-btn-primary").contains("OK").click();

                cy.get("#main_subject").type("auto email subject plz ignore ");

                cy.get(
                  ".ant-btn.ant-btn-primary.login-form-button.save-btn.button-blue"
                )
                  .contains("Send Now")
                  .click();

                cy.wait("@emailbulksendemail").then((interception) => {
                  cy.wrap(interception.response.statusCode).should("eq", 200);
                });
              } else {
                cy.log("Checkbox is not checked");
                // Add your assertions here for the unchecked state
                expect($checkbox).not.to.have.class("ant-checkbox-checked");
                cy.get(".ant-tabs-tab-btn")
                  .contains("Potential Client")
                  .click();

                cy.wait("@potentialcleintbulkemail").then((interception) => {
                  cy.wrap(interception.response.statusCode).should("eq", 200);
                  if (interception.response.body.potentialClientCount > 0) {
                    cy.wait(2000);
                    cy.get(".ant-checkbox:visible").eq(1).click();
                    cy.get(".ant-checkbox").then(($pcheckbox) => {
                      if ($pcheckbox.hasClass("ant-checkbox-checked")) {
                        cy.log("Checkbox is checked");
                        expect($pcheckbox).to.have.class(
                          "ant-checkbox-checked"
                        );
                        cy.get(".ant-btn.ant-btn-primary")
                          .contains("OK")
                          .click();
                        cy.get(".attachments-container")
                          .find(".attachment-content-item")
                          .then(($items) => {
                            if ($items.length > 1) {
                              cy.wrap($items.eq(0)).find("img").click();
                            }
                          });

                        cy.get("#main_subject").type("auto potential client");

                        cy.get(
                          ".ant-btn.ant-btn-primary.login-form-button.save-btn.button-blue"
                        ).contains("Send Now");
                        //.click()
                      }
                    });
                  }
                });
              }
            });

            cy.get(".email-address-btn").contains("Email Addresses").click();

            cy.get(".ant-tabs-tab-btn").contains("Potential Client").click();

            cy.wait("@potentialcleintbulkemail").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
              if (interception.response.body.potentialClientCount > 0) {
                cy.wait(2000);
                cy.get(".ant-checkbox:visible").eq(1).click();
                cy.get(".ant-checkbox").then(($pcheckbox) => {
                  if ($pcheckbox.hasClass("ant-checkbox-checked")) {
                    cy.log("Checkbox is checked");
                    expect($pcheckbox).to.have.class("ant-checkbox-checked");
                    cy.get(".ant-btn.ant-btn-primary").contains("OK").click();
                    cy.get(".attachments-container")
                      .find(".attachment-content-item")
                      .then(($items) => {
                        if ($items.length > 1) {
                          cy.wrap($items.eq(0)).find("img").click();
                        }
                      });

                    cy.get("#main_subject").type("auto potential client");

                    cy.get(
                      ".ant-btn.ant-btn-primary.login-form-button.save-btn.button-blue"
                    ).contains("Send Now");
                    //.click()
                  }
                });
              }else{
                cy.log("No potential client found");
              }
            });
          }
        });
      });
  });
});
