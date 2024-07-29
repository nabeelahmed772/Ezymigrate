import { setupAPIIntercepts } from "../../../support/apiIntercepts";
/// <reference types= "cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Adding school", () => {
  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });
  it("Add school", () => {
    cy.get('a[href="/school-management"]').click();
    cy.wait('@getmarkedtagspotentialclient').then((interception) =>{
      cy.wrap(interception.response.statusCode).should('eq', 200)
    });
    cy.wait('@programdetail').then((interception) =>{
      cy.wrap(interception.response.statusCode).should('eq', 200)
    });
    
    cy.wait('@getschooltype').then((interception) =>{
      cy.wrap(interception.response.statusCode).should('eq', 200)
    });
    cy.wait('@schoolall').then((interception) =>{
      cy.wrap(interception.response.statusCode).should('eq', 200)
    });

    cy.wait('@postschoolstudentlist').as('firstRequest').then((interception) =>{
      cy.wrap(interception.response.statusCode).should('eq', 200)

      const totalRecords = interception.response.body.totalRecords;
      if(totalRecords >20 ){
        cy.get('.ant-pagination-item.ant-pagination-item-2').click().then(() => {
        cy.wait(2000)
        
        cy.wait('@postschoolstudentlist').as('secondRequest').then((secinterception) =>{
          
          cy.wrap(secinterception.response.statusCode).should('eq', 200)
          const secondPageRequest = secinterception.request.body;
                expect(secondPageRequest.pageNumber).to.equal(2);
        
        });
      })
        cy.get('span[title="20 / page"]').click()
        cy.get('div[title="25 / page"]').click()
        cy.wait(2000)
        cy.wait('@postschoolstudentlist').then((interception) =>{
          cy.wrap(interception.response.statusCode).should('eq', 200)
          cy.wrap(interception.request.body.pageNumber).should('eq', 1)
          cy.wrap(interception.request.body.pageSize).should('eq', 25)
        });
        

    

      }
      else{
        cy.log('there are not enough student lists which is more than 10')
      }
    });

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
      const jay = $el
        .find(
          'p[style="font-size: 12px; font-weight: 400; font-style: normal; color: rgba(0, 0, 0, 0.85);"]'
        )
        .eq(0)
        .text();
      cy.log(jay);

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

    cy.wait(2000)

    //deleting the school

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const jay = $el
        .find(
          'p[style="font-size: 12px; font-weight: 400; font-style: normal; color: rgba(0, 0, 0, 0.85);"]'
        )
        .eq(0)
        .text();

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
