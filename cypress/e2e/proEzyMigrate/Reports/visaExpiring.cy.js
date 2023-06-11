/// <reference types= "cypress" />

beforeEach(() => {
  cy.login();
});
describe("Reports", () => {
  const futureDate = Cypress.env("futureDate");

  it("Visa Expiring", () => {
    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/users/ddl/All/*").as(
      "allUsers"
    );

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/report/VisaExpiry").as(
      "VisaExpiry"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/report/VisaExpiryExport"
    ).as("VisaExpiryExport");

    cy.get('a[href="/reports"]').click();

    cy.wait("@allUsers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

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

    const XLSX = require("xlsx");
    //adding assertion
    cy.readFile("cypress/downloads/VisaReport.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const contactName = "Client nabeel";
        const isContactNamePresent = data.flat().includes(contactName);

        expect(isContactNamePresent).to.be.true;
      }
    );
  });
});
