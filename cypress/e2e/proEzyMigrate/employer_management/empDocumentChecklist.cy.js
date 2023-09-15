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

const date = 'td[title="2023-02-05"]';
const sms = "211267313";
const user_name = "rananabeelahmed772@gmail.com";
const password = "nabeel@123";

describe("Adding Employer", () => {
  const futureDate = Cypress.env("futureDate");

  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });
  it("Add employer", () => {
   
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[12]/span/a'
    ).click();

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="cursor: pointer;"]'
        )
        .text()
        .trim();
      if (del === "logic employer") {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
        cy.wait(1000);
        
      }
    });

    cy.wait(5000);
    cy.contains("Add New").scrollIntoView();

    cy.wait(3000);
    cy.get(
      ":nth-child(4) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();

    cy.wait(5000);
    cy.get("#main_name").type("logic employer");

    cy.get("#main_business").type("test sqa");

    cy.get(
      ".add-emp-btn > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();

    cy.wait(5000);

    cy.scrollTo("left");

    cy.contains("logic employer").click();

    //adding invoice for the employer

    cy.get(".ant-tabs-tab-btn").eq(6).contains("INVOICES").click();

    cy.wait("@markedtags/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllBySubjectIdWithPaging").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 404);
    });

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("ADD").click();

    cy.wait("@branch/bank").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getTax").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@LastInvoiceNumber").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllInvoiceStatuses").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

  

    cy.wait("@GetAllCurrencies").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-col-offset-1 > .ant-picker > .ant-picker-input > input")
      .type(futureDate, { force: true })
      .type("{enter}", { force: true });

    cy.get(
      '[style="margin-left: 8px;"] > .ant-picker > .ant-picker-input > input'
    )
      .type(futureDate, { force: true })
      .type("{enter}", { force: true });

    cy.get(
      ".ant-col-xs-12 > .ant-row > .ant-col > .ant-select > .ant-select-selector"
    ).click({ force: true });

    cy.contains("NEW TESTING TEMPLATE").click();

    cy.wait("@AddNewLine").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-input-number-input").should("have.value", 120);

    cy.contains("Calculate Sub Total").click();

    cy.get("#bankAccount").click();

    cy.get('div[title="test nabeel"]').click();

    cy.contains("SAVE INVOICE").click();

    cy.wait("@invoice").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@markedtags/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    // cy.wait("@AllBySubjectIdWithPaging").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 200);
    // });

    cy.wait(2000)

    cy.get(".ant-btn.ant-btn-primary.ant-btn-sm.button-blue")
      .contains("Email")
      .click();

    cy.wait("@MultiUploadWithFileName").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@SetHtmlTemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@emailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllInvoiceStatuses").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Close").click();

    cy.contains("View Details").click();

    cy.wait("@payment/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 404);
    });

    cy.wait("@branch/bank").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getTax").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@LastInvoiceNumber").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllInvoiceStatuses").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.wait("@GetAllCurrencies").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#paymentAmount").type("120");

    cy.get("#paymentDate").type(futureDate, { force: true }).type("{enter}");

    cy.get("#paymentBank").click();

    cy.contains("test nabeel").click();

    cy.contains("ADD PAYMENT").click();

    cy.wait("@invoice").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(6000);

    cy.get(".ant-tabs-tab-btn").eq(2).click();

    cy.wait(8000);

    cy.contains("DOCUMENT CHECKLIST").click();

    cy.wait(8000);
    cy.get("#gender").click();
    cy.wait(4000);
    cy.contains("test document checklist").click();
    cy.wait(2000);
    cy.get(
      ".flex-end > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();
    cy.wait(8000);
    cy.get(
      ":nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();
    cy.wait(4000);
    cy.visit("https://app.ezymigrate.com/employer-management");
    cy.wait(8000);

    cy.scrollTo("left");

    cy.contains("logic employer").click();

    cy.wait(6000);

    cy.get(".ant-tabs-tab-btn").eq(2).click();

    cy.contains("DOCUMENT CHECKLIST").click();
    cy.wait(8000);
    cy.get(".ant-space-item:visible")
      .eq(0)
      .then(function (text2) {
        cy.visit(text2.text());
        cy.wait(2000);
      });
    cy.wait(8000);
    cy.get('input[type="file"]').attachFile("ABC.jpg");
    cy.wait(2000);
    cy.get(".btn.btn-default").click();
    cy.wait(6000);
    cy.visit("https://app.ezymigrate.com/employer-management");
    cy.wait(8000);

    cy.scrollTo("left");

    cy.contains("logic employer").click();

    cy.wait(6000);

    cy.get(".ant-tabs-tab-btn").eq(2).click();

    cy.wait(3000);

    cy.contains("ABC.jpg").should("be.visible");

    cy.contains("Employer Management").click();
    cy.wait(5000);

    //deleting the employer
    cy.scrollTo("right");
    cy.wait(4000);
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="cursor: pointer;"]'
        )
        .text()
        .trim();
      if (del === "logic employer") {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
        cy.wait(1000);
        
      }
    });
  });
});
