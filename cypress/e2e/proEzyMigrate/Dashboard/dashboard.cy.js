/// <reference types= "cypress" />

beforeEach(() => {
  cy.login();
});
describe("deals", () => {
  const futureDate = Cypress.env("futureDate");

  it("Add deals", () => {
    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/dashboard/GetUserDashboardSettings"
    ).as("GetUserDashboardSettings");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/config/GetAllCountries"
    ).as("GetAllCountries");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/dashboard/Client").as(
      "Client"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/company/visastatus/All/*"
    ).as("visastatus");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/BranchCountryLinking/ByBranchId/*"
    ).as("ByBranchId");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/company/BranchVisaType/GetAllBranchVisaTypeByCountry/All/**"
    ).as("GetAllBranchVisaTypeByCountry");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/subject/case/UpdateSubjectCaseStatus"
    ).as("UpdateSubjectCaseStatus");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/subject/case/UpdateFromDashboard"
    ).as("UpdateFromDashboard");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/subject/type/Priority"
    ).as("Priority");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/dashboard/ClientExport"
    ).as("ClientExport");

    //potential client APIs

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/users/ddl/All/*").as(
      "allUser"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/company/clientstatus/potentialclient/All/*"
    ).as("potentialclient/All");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/dashboard/PotentialClient"
    ).as("PotentialClient");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/potentialclient/markedtags/All/*"
    ).as("markedtags/All");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/company/clientstatus/potentialclient/All/*"
    ).as("potentialclient/All");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/dashboard/PotentialClientExport"
    ).as("PotentialClientExport");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/dashboard/Student"
    ).as("Student");

    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz/v1/client/programdetail/Status/*"
    ).as("programdetail");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/dashboard/StudentExport"
    ).as("StudentExport");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/dashboard/Employer"
    ).as("Employer");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/dashboard/EmployerExport"
    ).as("EmployerExport");

    cy.get('a[href="/dashboard"]').click();

    cy.wait("@GetUserDashboardSettings")
      .its("response.statusCode")
      .should("eq", 200);

    cy.wait("@GetAllCountries").its("response.statusCode").should("eq", 200);

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.wait("@visastatus").its("response.statusCode").should("eq", 200);

    cy.wait("@ByBranchId").its("response.statusCode").should("eq", 200);

    cy.get(
      '[style="padding-right: 1px;"] > .ant-select > .ant-select-selector > .ant-select-selection-item'
    ).click();

    cy.get('div[title="All"]').click();

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.get(
      '[style="padding-right: 1px;"] > .ant-select > .ant-select-selector > .ant-select-selection-item'
    ).click();

    cy.get('div[title="Owner nabeel"]').click();

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.get(
      '[style="padding-right: 1px;"] > .ant-select > .ant-select-selector > .ant-select-selection-item'
    ).click();

    cy.get('div[title="All"]').click();

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.get(
      ":nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-item"
    ).click();

    cy.contains("PAKISTAN").click();

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.wait("@GetAllBranchVisaTypeByCountry")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get(".ant-select-selection-search-input").eq(6).click();

    cy.get('div[title="Green Visa1"]').click();

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.get(".ant-select-selection-search-input").eq(7).click();

    cy.get(
      ".ant-select-dropdown.ant-select-dropdown-placement-bottomLeft:visible"
    ).scrollTo("bottom", { ensureScrollable: false });

    cy.get(
      'div[title="Initial Document Instructions Issued"]'
    ).scrollIntoView();

    cy.get('div[title="Initial Document Instructions Issued"]').click();

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.get(".ant-btn.ant-btn-default.ant-dropdown-trigger").click();

    cy.get(
      ".ant-dropdown-menu.ant-dropdown-menu-root.ant-dropdown-menu-vertical.ant-dropdown-menu-light"
    )
      .contains("Client Awaiting Document Instructions")
      .click({ force: true });

    cy.get("#basic_date").type(futureDate, { force: true }).type("{enter}");

    cy.get('button[type="submit"]').click();

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.wait("@UpdateSubjectCaseStatus")
      .its("response.statusCode")
      .should("eq", 200);

    cy.wait(2000);

    cy.contains("Dashboard (Client)").click();

    cy.wait(2000);

    cy.get(
      ":nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-item"
    ).click();

    cy.contains("PAKISTAN").click();

    cy.wait("@GetAllBranchVisaTypeByCountry")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get(".ant-select-selection-search-input").eq(6).click();

    cy.get('div[title="Green Visa1"]').click();

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.get(".ant-btn.ant-btn-default.ant-dropdown-trigger").click();

    cy.get(
      ".ant-dropdown-menu.ant-dropdown-menu-root.ant-dropdown-menu-vertical.ant-dropdown-menu-light"
    )
      .contains("Initial Document Instructions Issued")
      .click({ force: true });

    cy.get("#basic_date").type(futureDate, { force: true }).type("{enter}");

    cy.get('button[type="submit"]').click();

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.wait("@UpdateSubjectCaseStatus")
      .its("response.statusCode")
      .should("eq", 200);

    cy.wait(2000);

    cy.get(
      ".followDate > .ant-picker > .ant-picker-input > input"
    ).scrollIntoView();

    cy.get(".followDate > .ant-picker > .ant-picker-input > input")
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.wait("@UpdateFromDashboard")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get(".ant-select-selection-search-input").eq(6).click({ force: true });

    cy.get('div[title="Green Visa1"]').click({ force: true });

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.get(".ant-table-body").scrollTo("left");

    cy.contains("sufi cup").should("be.visible");

    cy.get(".priority-button").eq(1).click();

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.wait("@Priority").its("response.statusCode").should("eq", 200);

    cy.get(".ant-select-selection-search-input").eq(6).click({ force: true });

    cy.get('div[title="Green Visa1"]').click({ force: true });

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.contains("sufi cup").should("be.visible");

    cy.wait(2000);

    cy.get('img[src="/static/media/export.8a51fd57.svg"]').scrollIntoView();

    cy.get('img[src="/static/media/export.8a51fd57.svg"]').click();

    cy.wait("@ClientExport").its("response.statusCode").should("eq", 200);

    const XLSX = require("xlsx");
    //adding assertion
    cy.readFile("cypress/downloads/Client_Summary.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const contactName = "sufi cup";
        const isContactNamePresent = data.flat().includes(contactName);

        expect(isContactNamePresent).to.be.true;
      }
    );

    // cy.get('a[href="/dashboard"]')
    //   .click()

    // cy.wait('@GetUserDashboardSettings')
    //   .its('response.statusCode')
    //   .should('eq', 200)

    // cy.wait('@GetAllCountries')
    //   .its('response.statusCode')
    //   .should('eq', 200)

    // cy.wait('@Client')
    //   .its('response.statusCode')
    //   .should('eq', 200)

    // cy.wait('@visastatus')
    //   .its('response.statusCode')
    //   .should('eq', 200)

    // cy.wait('@ByBranchId')
    //   .its('response.statusCode')
    //   .should('eq', 200)

    // cy.get('img[src="/static/media/export.8a51fd57.svg"]')
    //   .scrollIntoView()

    // cy.get('img[src="/static/media/export.8a51fd57.svg"]')
    //   .click()

    // cy.wait('@ClientExport')
    //   .its('response.statusCode')
    //   .should('eq', 200)

    //potential client dashboard

    cy.get(".cp-top-bar-text").contains("Potential Clients").click();

    cy.wait("@allUser").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@potentialclient/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@PotentialClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@markedtags/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@potentialclient/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("PROCESSING PERSON").click({ force: true });

    cy.get('div[title="Owner nabeel"]').click({ force: true });

    cy.wait("@PotentialClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.request.body.processingPerson).should("exist");
    });

    cy.contains("Client Status").click({ force: true });

    cy.get('div[title="QC staus"]').click({ force: true });

    cy.wait("@PotentialClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.request.body.clientStatus).should("eq", "QC staus");
    });

    cy.get('img[src="/static/media/export.8a51fd57.svg"]').click({
      force: true,
    });

    cy.wait("@PotentialClientExport").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.request.body.processingPerson).should("exist");
    });

    //adding assertion
    cy.readFile(
      "cypress/downloads/Potential_Client_Summary.xlsx",
      "binary"
    ).then((fileContent) => {
      const workbook = XLSX.read(fileContent, { type: "binary" });
      const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const Name = "add potential client test";
      const isContactNamePresent = data.flat().includes(Name);

      expect(isContactNamePresent).to.be.true;
    });

    cy.get(".cp-top-bar-text").contains("Students").click();

    cy.wait("@allUser").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@Student").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@programdetail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".priority-button").eq(0).click({ force: true });

    cy.wait("@Student").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@Priority").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-select-selection-search-input").eq(5).click();

    cy.get('div[title="Start"]').click({ force: true });

    cy.wait("@Student").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('img[src="/static/media/export.8a51fd57.svg"]').click();

    cy.wait("@StudentExport").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    //adding assertion
    // cy.readFile("cypress/downloads/Student_Summary.xlsx", "binary").then(
    //   (fileContent) => {
    //     const workbook = XLSX.read(fileContent, { type: "binary" });
    //     const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
    //     const worksheet = workbook.Sheets[sheetName];
    //     const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    //     const Name = "add potential client test";
    //     const isContactNamePresent = data.flat().includes(Name);

    //     expect(isContactNamePresent).to.be.true;
    //   }
    // );

    cy.get(".cp-top-bar-text").contains("Employers").click();

    cy.wait("@Employer").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@visastatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".priority-button").eq(1).click();

    cy.wait("@Priority").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@Employer").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-pagination-item.ant-pagination-item-2").click();

    cy.wait("@Employer").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-select-selection-item").eq(3).click();

    cy.get('div[title="Approved"]').click();

    cy.wait("@Employer").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".setting-export-cont").click();

    cy.wait("@EmployerExport").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@Employer").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //adding assertion
    cy.readFile("cypress/downloads/Employer_Summary.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const Name = "nimal";
        const isContactNamePresent = data.flat().includes(Name);

        expect(isContactNamePresent).to.be.true;
      }
    );
  });
});
