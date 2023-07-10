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

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/report/ClientEmployerExport"
    ).as("ClientEmployerExport");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/report/ClientEmployer"
    ).as("ClientEmployer");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/report/DocumentCheckList"
    ).as("DocumentCheckList");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/report/DocumentCheckList"
    ).as("ClientContractAll");

    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz/v1/client/contract/Contractpdf/*"
    ).as("Contractpdf");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/company/BranchVisaType/All/*"
    ).as("BranchVisaType");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/company/visastatus/All/*"
    ).as("visastatus");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/company/BranchVisaType/GetAllBranchVisaTypeByCountry/All/**"
    ).as("GetAllBranchVisaTypeByCountry");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/config/GetAllVisaDestination"
    ).as("GetAllVisaDestination");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/company/visastatus/AllWithHide/*"
    ).as("AllWithHide");

    cy.intercept("POST", "https://beta-api.ezymigrate.co.nz/v1/report/Visa").as(
      "Visa"
    );

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/report/VisaExport"
    ).as("VisaExport");

    cy.get('a[href="/reports"]').click();

    cy.wait("@allUsers").then((interception) => {
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

    cy.wait("@DocumentCheckList").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-pagination-item.ant-pagination-item-2").click();

    cy.wait("@DocumentCheckList").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("SERVICE MANAGEMENT").click();

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

    cy.wait("@allUsers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchVisaType").then((interception) => {
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
