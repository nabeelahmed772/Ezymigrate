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

describe("DASHBOSRD", () => {
  const futureDate = Cypress.env("futureDate");

  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });

  it("dashboard", () => {
    cy.get(".ant-input.ant-input-lg").type("sufi cup");

    cy.get(".search-client-card-cont").each(($el, index, $list) => {
      const uo = $el.find("span").text().trim();
      cy.log(uo);
      debugger;

      if (uo.includes("nabeeloutsourcenzhard@gmail.com")) {
        cy.wrap($el).find(".date-text").eq(1).click();
      }
    });

    cy.wait("@getallusers").its("response.statusCode").should("eq", 200);

    cy.wait("@AllData").its("response.statusCode").should("eq", 200);

    cy.wait("@UserSignature").its("response.statusCode").should("eq", 200);

    cy.wait("@SetHtmlTemplate").its("response.statusCode").should("eq", 200);

    cy.get(".header-text").contains("Visas").click();

    cy.wait("@getallusers").its("response.statusCode").should("eq", 200);

    cy.wait("@AllData").its("response.statusCode").should("eq", 200);

    cy.get(".cv-row").each(($el, index, $list) => {
      const uo = $el.find(".cv-bold-text").text().trim();
      cy.log(uo);
      debugger;

      if (uo.includes("GREEN VISA1")) {
        cy.wrap($el).find(".cv-dlt-icon").click();
        cy.get(".ant-btn.ant-btn-primary").contains("OK").click();
        cy.wait("@delcase").its("response.statusCode").should("eq", 200);
        cy.wait("@clientlog").its("response.statusCode").should("eq", 200);
      }
    });
    cy.wait("@case/All").its("response.statusCode").should("eq", 200);

    cy.get(".ant-tabs-nav-operations-hidden")
      .should("exist")
      .then(($element) => {
        // Use JavaScript to modify the element's style
        cy.window().then((win) => {
          win.document.querySelector(
            ".ant-tabs-nav-operations-hidden"
          ).style.position = "static";
        });
      });

      cy.get('.ant-select-selection-search-input')
      .eq(4)
      .click({force:true})
    cy.get('div[title="PAKISTAN"]').click();
    cy.wait(4000);

    cy.get(".cv-top-lbtn-text").click();
    cy.wait("@BranchCountryLinking").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllBranchVisaTypeByCountry").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-select-selection-item").eq(4).click();

    cy.get('div[title="Green Visa1"]').click();

    cy.get(".ant-btn.ant-btn-default.button-blue").click();

    cy.wait("@case").its("response.statusCode").should("eq", 200);
    cy.wait("@case/All").its("response.statusCode").should("eq", 200);
    cy.wait("@clientlog").its("response.statusCode").should("eq", 200);

    cy.wait(2000);

    cy.get(".rightbar-icons").contains("Update Visa Status").click();

    cy.wait(2000);

    cy.get(".ant-form.ant-form-horizontal").each(($el, index, $list) => {
      const uo = $el.find(".visa-type-text").text().trim();
      cy.log(uo);
      debugger;

      if (uo.includes("Green Visa1")) {
        cy.wrap($el).find(".ant-select-selection-item").type('Client');
        cy.wait(3000)
        cy.get('div[title="Client Awaiting Document Instructions"]').click()
        cy.wrap($el).find(".ant-btn.ant-btn-default.button-blue").click();
        cy.wait("@UpdateSubjectCaseStatus")
          .its("response.statusCode")
          .should("eq", 200);
        cy.wait("@clientlog").its("response.statusCode").should("eq", 200);
      }
    });

    cy.get('a[href="/dashboard"]').click();

    cy.wait("@GetUserDashboardSettings")
      .its("response.statusCode")
      .should("eq", 200);

    cy.wait("@GetAllCountries").its("response.statusCode").should("eq", 200);

    cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.wait("@visastatus").its("response.statusCode").should("eq", 200);

    cy.wait("@BranchCountryLinking")
      .its("response.statusCode")
      .should("eq", 200);

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

    // cy.get(".ant-select-selection-search-input").eq(7).click();

    // cy.get(
    //   ".ant-select-dropdown.ant-select-dropdown-placement-bottomLeft:visible"
    // ).scrollTo("bottom", { ensureScrollable: false });

    // cy.get(
    //   'div[title="Initial Document Instructions Issued"]'
    // ).scrollIntoView();

    // cy.get('div[title="Initial Document Instructions Issued"]').click();

    // cy.wait("@Client").its("response.statusCode").should("eq", 200);

    cy.get(".ant-btn.ant-btn-default.ant-dropdown-trigger").click();

    cy.get(
      ".ant-dropdown-menu.ant-dropdown-menu-root.ant-dropdown-menu-vertical.ant-dropdown-menu-light"
    )
      .contains("Client Awaiting Document Instructions")
      .click({ force: true });

    cy.get("#basic_date").click();

    cy.get(
      ".ant-picker-cell.ant-picker-cell-in-view.ant-picker-cell-today"
    ).click();

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

    cy.get("#basic_date").type(futureDate, { force: true }).type("{enter}", { force: true });

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

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getclientstatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@PotentialClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getclientstatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("PROCESSING PERSON").click({ force: true });

    cy.get('div[title="Owner nabeel"]').click({ force: true });

    cy.wait("@PotentialClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.request.body.processingPerson).should("exist");
    });

    cy.contains("Client Status").click({ force: true });

    cy.get('div[title="QC staus 1"]').click({ force: true });

    cy.wait("@PotentialClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      //cy.wrap(interception.request.body.clientStatus).should("eq", "QC staus 1");
    });

    cy.get(".cp-top-bar-text").contains("Potential Clients").click();

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
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

    cy.wait("@getallusers").then((interception) => {
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

    cy.get(".ant-select-selection-item").eq(3).type('prep');

    cy.wait(3000)

    cy.get('div[title="Preparing"]').click();


    cy.wait("@Employer").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".cp-top-bar-text").contains("Employers").click();

    cy.wait("@Employer").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@visastatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".setting-export-cont").click();

    cy.wait("@EmployerExport").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //adding assertion
    cy.readFile("cypress/downloads/Employer_Summary.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const Name = "supplier emp";
        const isContactNamePresent = data.flat().includes(Name);

        expect(isContactNamePresent).to.be.true;
      }
    );
  });
});
