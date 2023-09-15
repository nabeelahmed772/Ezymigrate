import { setupAPIIntercepts } from '../../../support/apiIntercepts';
/// <reference types="cypress" />

beforeEach(() => {
  setupAPIIntercepts();
  cy.login();
});
describe("Reports", () => {
  const futureDate = Cypress.env("futureDate");

  it("Visa Expiring", () => {


    cy.get('a[href="/reports"]').click();

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-picker-input").eq(0).type("01/01/2023").type("{enter}");

    cy.get(".ant-picker-input").eq(1).type(futureDate).type("{enter}");

    cy.contains("VISA EXPIRING").click();

    cy.wait("@VisaExpiry").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-pagination-item.ant-pagination-item-2").click();

    cy.wait("@VisaExpiry").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-default.button-blue").contains("Export").click();

    cy.wait("@VisaExpiryExport").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(3000)

    const XLSX = require("xlsx");
    //adding assertion
    cy.readFile("cypress/downloads/VisaReport.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const FIRSTNAME = "basic";
        const isContactNamePresent = data.flat().includes(FIRSTNAME);

        expect(isContactNamePresent).to.be.true;
      }
    );

    cy.contains("CLIENT EMPLOYERS").click();

    cy.wait("@ClientEmployer").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-default.button-blue").contains("Export").click();

    cy.wait("@ClientEmployerExport").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //const XLSX = require("xlsx");
    //adding assertion
    cy.readFile("cypress/downloads/Client_Employer_Report.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const CLIENT = "basic web";
        const isContactNamePresent = data.flat().includes(CLIENT);

        expect(isContactNamePresent).to.be.true;
      }
    );

    cy.contains("DOCUMENT CHECKLIST").click();

    cy.wait("@reportDocumentCheckList").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-pagination-item.ant-pagination-item-2").click();

    cy.wait("@reportDocumentCheckList").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("SERVICE AGREEMENT").click();

    cy.wait("@ClientContractAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-pagination-item.ant-pagination-item-2").click();

    cy.wait("@ClientContractAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('img[src="/static/media/download.e81a7a95.svg"]').eq(0).click();

    cy.wait("@Contractpdf").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //Visa Reports

    cy.contains("Visa Reports").click();

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@visastatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllBranchVisaTypeByCountry").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllVisaDestination").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllWithHide").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-picker-input").eq(0).type("01/01/2023").type("{enter}");

    cy.get(".ant-picker-input").eq(1).type(futureDate).type("{enter}");

    cy.get(".ant-select-selection-search-input").eq(4).click({force:true});

    cy.get('div[title=" 2021 RV - Phase 1"]').click({force:true});

    cy.get(".ant-select-selection-search-input").eq(10).click({force:true});

    cy.get('div[title="Active"]').click({force:true});

    cy.contains("SHOW").click();

    cy.wait("@Visa").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("EXPORT").click();

    cy.wait("@VisaExport").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(3000)

    cy.readFile("cypress/downloads/VisaReport.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const NAME = "new last";
        const isContactNamePresent = data.flat().includes(NAME);

        expect(isContactNamePresent).to.be.true;
      }
    );
  });
});
