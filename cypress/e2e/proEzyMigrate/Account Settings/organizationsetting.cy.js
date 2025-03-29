import { setupAPIIntercepts } from "../../../support/apiIntercepts";
/// <reference types="cypress" />

beforeEach(() => {
  setupAPIIntercepts();
  cy.login();
});
describe("account setting", () => {
  const futureDate = Cypress.env("futureDate");

  it("Settings", () => {
    cy.get('a[href="/account-settings"]').click();

    cy.get(".sus-inactive-tab-text")
      .contains("Organization Level Setting")
      .click();

    cy.contains("Visa Country").should("be.visible");

    cy.get(".sus-bottom-text").contains("Visa Country").click();

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchCountryLinking").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      const country = interception.response.body;
      const bhutan = country.find(
        (country) => country.countryName === "BHUTAN"
      );
      if (bhutan) {
        cy.log("congratulations country bhutan does  exist");
        cy.wait(1000);

        cy.get("tr").each(($el, index, $list) => {
          const mo = $el.find("p").text().trim();
          cy.log(mo);

          if (mo.includes("BHUTAN")) {
            cy.wrap($el)
              .find('img[src="/static/media/delete-blue.983ea6be.svg"]')
              .click();

            cy.get(".ant-btn.ant-btn-default.button.button-blue")
              .contains("OK")
              .click();

            cy.wait("@deleteBranchCountryLinking").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
            });

            cy.wait("@BranchCountryLinking").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
            });
          }
        });
      } else cy.log("country bhutan does not exist");
    });

    cy.get('img[src="/static/media/plus-icon.16380594.svg"]').click();

    cy.wait(1000);

    cy.get(".ant-select-selection-item").eq(2).click();

    cy.get(".ant-select-selection-item").eq(2).type("bh");

    cy.contains("BHUTAN").click();

    cy.get(".ant-btn.ant-btn-primary.sus-add-btn")
      .contains("SAVE")
      .eq(0)
      .click();

    cy.wait("@postBranchCountryLinking").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchCountryLinking").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get(".sus-bottom-text").contains("Visa Types").click();

    cy.wait("@BranchCountryLinking").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@allbranchvisatypes").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      const branchvisa = interception.response.body.items;
      const bhutanVisaType = branchvisa.find(
        (branchvisa) => branchvisa.visaTypeName === "bhutan visa type"
      );

      if (!bhutanVisaType) {
        cy.get('img[src="/static/media/plus-icon.16380594.svg"]').click();

        cy.wait(1000);

        cy.get(".profile-input").eq(0).type("bhutan visa type");

        cy.get(".ant-select-selection-search-input").eq(5).click();

        cy.get('div[title="BHUTAN"]').click();

        cy.get(".ant-btn.ant-btn-primary.sus-add-btn")
          .contains("SAVE")
          .eq(0)
          .click();

        cy.wait("@postcombranchvisatypes").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@allbranchvisatypes").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(3000);

    cy.get(".sus-table-content").each(($el, index, $list) => {
      const mo = $el.find(".sus-content-text").text().trim();
      cy.log(mo);

      if (mo.includes("bhutan visa type")) {
        cy.wrap($el)
          .find('img[src="/static/media/edit-border-blue.a5c788a8.svg"]')
          .should("be.visible")
          .click();

        cy.get(".ant-btn.ant-btn-primary.sus-add-btn")
          .contains("SAVE")
          .eq(0)
          .click();

        cy.wait("@putcombranchvisatypes").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@allbranchvisatypes").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(2000);

    cy.get(".sus-table-content").each(($el, index, $list) => {
      const mo = $el.find(".sus-content-text").text().trim();
      cy.log(mo);

      if (mo.includes("bhutan visa type")) {
        cy.wrap($el)
          .find('span[style="color: rgb(14, 101, 252);"]')
          .should("be.visible")
          .click();

        cy.get(".ant-btn.ant-btn-default.button.button-blue")
          .contains("OK")
          .click();

        cy.wait("@putbranchvisahide").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@allbranchvisatypes").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(2000);
    cy.get(".ant-select-selection-item").eq(2).click();

    cy.get('.ant-select-item-option-content').contains('NEW ZEALAND').click();

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get(".sus-bottom-text").contains("Visa Statuses").click();

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllWithHide").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      const visaStatus = interception.response.body.items;
      const testColor= visaStatus.find((visaStatus)=> visaStatus.name==='test color check 3')
      if(!testColor){
        cy.get('img[src="/static/media/plus-icon.16380594.svg"]').click()
        cy.get('input[class="profile-input"]').eq(0).type('test color check 3')
        cy.get('div[title="#F44E3B"]').click({force:true})
        cy.get('.ant-btn.ant-btn-primary.sus-add-btn')
          .contains('SAVE')
          .click()

          cy.wait("@AllWithHide").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
  
          cy.wait("@postcompanyvisastatus").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });

      }
    });

    cy.wait(2000)

    

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);

      if (mo.includes("test color check 3")) {
        cy.wrap($el)
          .find('img[src="/static/media/edit-border-blue.a5c788a8.svg"]')
          .should("be.visible")
          .click();

        cy.get(".ant-btn.ant-btn-primary.sus-add-btn").contains("SAVE").click();

        cy.wait("@AllWithHide").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@putcompanyvisastatus").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(2000);

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);

      if (mo.includes("test color check 3")) {
        cy.wrap($el)
          .find('span[style="color: rgb(14, 101, 252);"]')
          .should("be.visible")
          .click();

        cy.get(".ant-btn.ant-btn-default.button.button-blue")
          .contains("OK")
          .click();

        cy.wait("@putvisastatushide").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@AllWithHide").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(2000);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get(".sus-bottom-text").contains("Potential Client Statuses").click();

    cy.wait("@getclientstatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      const clientStatus= interception.response.body.items;
      const statusName= clientStatus.find((clientStatus)=> clientStatus.name==='auto cypress status')
      if(!statusName){
        cy.get('img[src="/static/media/plus-icon.16380594.svg"]').click()
        cy.get('input[class="profile-input"]').type('auto cypress status')
        cy.get('.ant-btn.ant-btn-primary.sus-add-btn')
          .contains('SAVE')
          .click()

          cy.wait("@postcompanyclientstatus").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
  
          cy.wait("@getclientstatus").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });

        
      }
    });

    cy.wait(2000);

    cy.get(".sus-table-content").each(($el, index, $list) => {
      const mo = $el.find(".sus-content-text").text().trim();
      cy.log(mo);

      if (mo.includes("auto cypress status")) {
        cy.wrap($el)
          .find('img[src="/static/media/edit-border-blue.a5c788a8.svg"]')
          .should("be.visible")
          .click();

        cy.get(".ant-btn.ant-btn-primary.sus-add-btn")
          .eq(1)
          .contains("SAVE")
          .click();

        cy.wait("@putcompanyclientstatus").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@getclientstatus").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.get(".sus-active-tab-text")
      .contains("Organization Level Setting")
      .click();

    cy.get(".sus-bottom-text").contains("Cover Genius Token").click();

    cy.wait("@openAI/UserMaxToken").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();
  });
});
