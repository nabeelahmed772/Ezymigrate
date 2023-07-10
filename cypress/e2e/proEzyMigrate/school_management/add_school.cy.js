/// <reference types= "cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Adding school", () => {
  it("Add school", () => {
    // cy.viewport(1366, 657)

    // cy.visit('https://app.ezymigrate.com/login')

    // //cy.intercept('POST', '/ActiveSince*').as('login')

    // cy.get('#userName > .profile-input-login').type('rananabeelahmed772@gmail.com')
    // cy.get('#password > .profile-input-login').type('nabeel@123')
    // cy.get('.sus-modal-button-text').click()
    // cy.contains('Client Analytics').should('be.visible')

    // cy.wait(9000)
    cy.login();

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/school/*").as(
      "schoolget"
    );

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/school").as("schoolput");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/school/All/**").as(
      "schoolall"
    );
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[11]/span/a'
    ).click();
    cy.wait(5000);
    cy.get(":nth-child(2) > .header-bar-text-div > .header-text").click();
    cy.wait(5000);
    cy.get(".icons-client").click();
    cy.wait(2000);
    cy.get("#type").click();
    cy.contains("Highschool").click();
    cy.get("#name").type("test school name");
    cy.get("#city").type("city test");
    cy.get("#address").type("test address");
    cy.get("#website").type("www.test.com");
    cy.get("#email").type("test@gmail.com");
    cy.get("#notes").type("testig by nabeel");
    cy.get('[type="file"]').attachFile("ABC.jpg");
    //cy.get('.anticon anticon-upload').attachFile('ABC.jpg' )
    cy.wait(3000);

    //adding contacts

    cy.get(
      ":nth-child(2) > :nth-child(1) > .margin-contact-container > .ant-col-xs-12 > .add-tag-btn > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .icons-client"
    ).click();
    cy.wait(2000);
    cy.get("#contacts_0_name").type("test name");
    cy.get("#contacts_0_email").type("test@gmail.com");
    cy.get("#contacts_0_description").type("test address descriptio");

    //adding level

    cy.get(
      ":nth-child(5) > :nth-child(1) > .margin-contact-container > .ant-col-xs-12 > .add-tag-btn > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .icons-client"
    ).click();
    cy.get("#levels_0_name").type("first level");
    cy.get("#levels_0_description").type("test description");
    cy.get("#levels_0_percentage").type("12%");
    cy.get(
      ".ant-col-offset-18 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();
    cy.wait(6000);

    //editing  school

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

    cy.wait("@schoolput").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@schoolall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    

    //deleting the school

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const jay = $el.find('p[style="font-size: 12px; font-weight: 400; font-style: normal; color: rgba(0, 0, 0, 0.85);"]').eq(0).text();

      if (jay === "test school name") {
        cy.wrap($el).find(".anticon.anticon-delete").click();

        cy.get(".ant-btn.ant-btn-default.button").contains("Delete").click();
      }
    });

    cy.wait("@schoolput").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@schoolall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);
  });
});
