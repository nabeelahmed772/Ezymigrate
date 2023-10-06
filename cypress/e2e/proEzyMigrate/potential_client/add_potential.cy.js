import { setupAPIIntercepts } from "../../../support/apiIntercepts";
/// <reference types= "cypress" />
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

describe("potential client", () => {
  const futureDate = Cypress.env("futureDate");
  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });
  it("Add potential", () => {
    
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();
    cy.wait(2000);
    cy.contains("Inquiry").click();

    cy.wait("@potentialclientAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.wait(2000);



    
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find('span[style="font-size: 12px; color: black;"]')
        .text()
        .trim();
      if (del.includes("test potential client")) {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-btn.ant-btn-default.button").click();
        cy.wait(1000);
      }
    });

    cy.wait("@potentialclientAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait(7000);
    cy.contains("ADD POTENTIAL CLIENT").click();
    cy.wait(2000);
    cy.get("#firstName").type("test potential client");
    cy.get("#lastName").type(randName(5));
    cy.get("#email").type("nabeel123@gmail.com");
    cy.get("#address").type("test");
    cy.get(
      '[style="width: 20%;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
    ).click();
    cy.get(
      '[style="width: 20%;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
    ).type("NEW ZEALAND{enter}");
    cy.get("#mobile").type(sms);
    cy.get("#phone").type("3323232");
    cy.get("#worth").type("142");
    cy.get("#occupation").type("test");
    cy.get(".fr-element > p").type("testing by me");

    cy.get(".ant-form-item-control-input-content > .ant-btn > span").click();
    cy.wait(5000);

    //adding file notes
    cy.contains("test potential client").click();
    cy.wait(3000);

    cy.get(":nth-child(4) > .sus-inactive-tab-text-school").click();
    cy.get(".fr-element > p").type("potential client file note");
    cy.get(".ant-form-item-control-input-content > .ant-btn > span").click();
    cy.wait("@filenote").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@filenote/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@Getfilenote").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //adding task from fi;e note

    cy.get('.anticon.anticon-plus').click()
    cy.get("#basic_task_title").type("potntial client from file note");
    cy.get("#basic_select_date")
      .type(futureDate, { force: true })
      .type("{enter}");
    cy.get('.ant-select-selection-overflow').click()
    cy.get('div[title="team member nabeel"]').click()
    cy.get('[style="text-align: right;"] > .ant-btn > span').click();
    cy.wait("@TaskWithUsers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //adding task for potential client

    cy.get(":nth-child(5) > .sus-inactive-tab-text-school").click();
    cy.wait(3000);
    cy.get('[style="margin-bottom: 15px;"] > .ant-btn').click();
    cy.wait(2000);
    cy.get("#basic_task_title").type("potntial client ");
    cy.get("#basic_task_description").type("description for potential client");
    cy.get("#basic_select_date")
      .type(futureDate, { force: true })
      .type("{enter}");
    cy.get('.ant-select-selection-overflow').click()
    cy.get('div[title="team member nabeel"]').click()
    //cy.get(date).click({Multiple:true, force:true})
    cy.get('[style="text-align: right;"] > .ant-btn > span').click();
    cy.wait("@TaskWithUsers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(3000);

    //adding questionaire

    cy.get(".sus-inactive-tab-text-school").eq(4).click();
    cy.wait(2000);
    cy.get(
      ':nth-child(3) > [style="margin-top: 8px;"] > .ant-select > .ant-select-selector'
    ).click();
    cy.wait(2000);
    cy.get('div[title="mobile testing questionare"]').click({ force: true });
    cy.wait(4000);
    cy.get(".pc-link-text").then(function (text2) {
      cy.visit(text2.text());
    });

    cy.wait(2000);
    cy.get("#clientName").type("nabeel");
    cy.get("#sections_0_questions_0_answers_0_answer").type("test qw");
    cy.get("#sections_0_questions_1_answers_0_answer").type("test qw2");
    cy.get("#sections_0_questions_2_answers_0_answer")
      .type(futureDate, { force: true })
      .type("{enter}");
    //cy.get(date).click({multiple:true, force:true})
    cy.get("#sections_0_questions_3_answers_0_answer").type("testing 123");
    cy.get("#sections_0_questions_4_answers_0_answer").type("testing limk");

    cy.get(".ant-btn > span").click();
    cy.wait(7000);

    cy.visit("https://app.ezymigrate.com/potential-client/potential-clients");
    cy.wait(10000);

    //validating the questionaire submit
    cy.contains("test potential client").click();
    cy.wait(3000);
    cy.get(".sus-inactive-tab-text-school").eq(1).click();
    cy.wait(2000);
    cy.contains("mobile testing questionare.pdf..pdf ").should("be.visible");

    cy.get(".sus-inactive-tab-text-school").eq(4).click();
    cy.wait(4000);
    cy.contains("mobile testing questionare").should("be.visible");

    //updating the potential client

    cy.contains("DETAIL").click();
    cy.get(
      ":nth-child(11) > .ant-col-xs-24 > .ant-form-item > .ant-row > .ant-col-11 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
    ).click();
    cy.get('div[title=" 2021 RV - Phase 1"]').click({
      Multiple: true,
      force: true,
    });
    cy.get(".ant-form-item-control-input-content > .ant-btn > span").click();

    cy.wait(7000);

    //signing the employer digital signature

    //deleting the potential client
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();
    cy.wait(2000);
    cy.contains("Inquiry").click();
    cy.wait(4000);

    cy.contains("Export").click();
    cy.wait(7000);
    const XLSX = require("xlsx");
    cy.readFile("cypress/downloads/PotentialClientsList.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        expect(data[0][4]).to.not.equal("nabeel123@gmail.com"); // assuming the data you're looking for is in the first cell of the fourth row
      }
    );
    //cy.reload()

    cy.wait(2000)

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find('span[style="font-size: 12px; color: black;"]')
        .text()
        .trim();
      if (del.includes("test potential client")) {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-btn.ant-btn-default.button").click();
        cy.wait(1000);
      }
    });

    cy.wait("@potentialclientAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
   
  });
});
