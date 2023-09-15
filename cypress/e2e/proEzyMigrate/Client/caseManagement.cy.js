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

describe("case management", () => {
  const futureDate = Cypress.env("futureDate");

  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });

  it("testing case management", () => {
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
    ).click();
    cy.wait("@SearchClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //deleting the client

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]'
        )
        .text()
        .trim();
      if (del === "amjad ali") {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.wait("@SearchClient").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[6]/span/a'
    ).click();
    cy.wait(4000);

    cy.get('[type="file"]').attachFile("ABC.jpg");

    cy.get("#visaCountryId").click();

    cy.wait(6000);

    cy.contains("NEW ZEALAND").click({ force: true });
    cy.wait(2000);
    cy.get("#visaCountyType").click();
    cy.wait(3000);
    cy.get(".ant-select-item-option-content:visible")
      .eq(1)
      .contains("Visa")
      .click();
    //cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
    cy.get("#clientSerial").type(randomNo(5));
    cy.get("#title").click({ force: true }).type("title");
    cy.get("#firstName").type("amjad");
    cy.get("#lastName").type("ali");
    cy.get("#preferredName").type("pre name");

    cy.get(
      ":nth-child(2) > .save-button-add-client > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    )
      .scrollIntoView()
      .click();

    cy.wait(7000);

    cy.contains("Case Management").scrollIntoView().click();

    cy.wait(2000);

    cy.contains("Cases").scrollIntoView().click({ force: true });

    cy.wait(6000);

    cy.contains("Add Case").click();

    cy.get("#basic_client").click().type("amjad ali").type("{enter}");

    cy.get(".ant-form-item-control-input-content > .ant-btn > span").click({
      force: true,
    });

    cy.wait(5000);

    cy.wait(2000);
    cy.get(".top-row").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="margin-top: 6px; margin-bottom: 6px; color: rgb(0, 0, 0); font-weight: 600; cursor: pointer; font-size: 14px;"]'
        )
        .text()
        .trim();
      if (del.includes("amjad")) {
        cy.log(del);
        cy.wrap($el).find(".ant-btn.ant-btn-primary").eq(0).click();

        cy.wait(1000);
      }
    });

    cy.get("#basic_Country").click();

    cy.wait(3000);

    cy.contains("NEW ZEALAND").click({ force: true });

    cy.wait(5000);

    cy.get("#basic_Visa").click();

    cy.wait(3000);

    cy.contains("Critical Purpose Visitor Visa").click();

    cy.get("#basic_date").type(futureDate, { force: true }).type("{enter}");

    cy.wait(1000);

    cy.get(
      '.ant-spin-container > :nth-child(1) > [style="overflow: inherit; padding-bottom: 6px; align-items: center; justify-content: space-between; padding-right: 5px;"] > #basic > [style="text-align: end;"] > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span'
    ).click();

    cy.wait(5000);

    cy.get(".top-row").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="margin-top: 6px; margin-bottom: 6px; color: rgb(0, 0, 0); font-weight: 600; cursor: pointer; font-size: 14px;"]'
        )
        .text()
        .trim();
      if (del.includes("amjad")) {
        cy.log(del);
        cy.wrap($el)
          .find(".ant-btn.ant-btn-default.ant-dropdown-trigger")
          .eq(0)
          .click();

        cy.wait(1000);
      }
    });

    cy.wait(1000);

    cy.contains("Client Awaiting Document Instructions").click({ force: true });

    cy.wait(3000);

    cy.get(
      '.ant-modal-body > :nth-child(1) > [style="overflow: inherit; padding-bottom: 6px; align-items: center; justify-content: space-between; padding-right: 5px;"] > #basic > [style="width: 100%;"] > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker > .ant-picker-input > #basic_date'
    )
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.contains("Save").click();

    cy.wait(3000);
    cy.get(".top-row").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="margin-top: 6px; margin-bottom: 6px; color: rgb(0, 0, 0); font-weight: 600; cursor: pointer; font-size: 14px;"]'
        )
        .text()
        .trim();
      if (del.includes("amjad")) {
        cy.log(del);
        cy.wrap($el).find(".ant-btn.ant-btn-primary").eq(1).click();

        cy.wait(1000);
      }
    });

    cy.wait(3000);

    cy.get("#basic_schoolType").click();

    cy.wait(5000);

    cy.contains("Secondary").click();

    cy.wait(3000);

    cy.get("#basic_school").click();

    cy.wait(3000);

    cy.contains("new secondary").click();

    cy.wait(3000);

    cy.get("#basic_schoolLevel").click();

    cy.wait(3000);

    cy.contains("bsic level").click();

    cy.wait(3000);

    cy.get("#basic_program").type("4");

    cy.get('button[type="submit"]:visible').click({ force: true });

    cy.wait(5000);

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
    ).click();

    cy.wait(6000);

    cy.contains("amjad").scrollIntoView().click();

    cy.wait(5000);

    cy.get(":nth-child(2) > a > .header-bar-text-div > .header-text").click();

    cy.wait(7000);

    cy.get(".cv-bold-text").should("contain", "CRITICAL PURPOSE VISITOR VISA");

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
    ).click();

    cy.wait(6000);

    cy.get(
      "#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg"
    ).click();

    cy.wait(5000);
  });
});
