/// <reference types= "cypress" />

beforeEach(() => {
  cy.login();
});
describe("potential", () => {
  const futureDate = Cypress.env("futureDate");

  it("Add potential employer", () => {
    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/potentialclient/All").as(
      "potentialclient/All"
    );

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/employer/All/*").as(
      "employer/All"
    );

    cy.intercept('https://beta-api.ezymigrate.co.nz/v1/employer')
      .as('employer')

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();
    cy.wait(2000);
    cy.contains("Inquiry").click();
    cy.wait("@potentialclient/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.contains("Potential Employers").click();

    cy.wait("@employer/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".icons-client").click();

    cy.get("#main_name > :nth-child(2) > .ant-input").type(
      "potential employer"
    );

    cy.get("#main_business > :nth-child(2) > .ant-input").type(
      "potential business"
    );

    cy.get("#main_email > :nth-child(2) > .ant-input").type(
      "potentialemail@gmail.com"
    );

    cy.get("#main_city > :nth-child(2) > .ant-input").type("city name");

    cy.get('.ant-btn.ant-btn-primary.login-form-button.save-btn.button-blue')
      .contains('SAVE')
      .click()

      cy.wait("@employer/All").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@employer").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.get(".ant-table-row ant-table-row-level-0").each(($el, index, $list) => {
        const jay = $el.find('span').text();
  
        if (jay === "potential employer") {
          cy.wrap($el).find(".anticon.anticon-delete").click();
  
          cy.get(".ant-btn.ant-btn-default.button").contains("Delete").click();
        }
      });
  
  


    
  });
});
