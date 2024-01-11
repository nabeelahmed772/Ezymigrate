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

const sms = "211267313";
const date = 'td[title="2023-02-05"]';
const futureDate = "25/03/2023";

beforeEach(() => {
  setupAPIIntercepts(); 
  cy.login();

  cy.xpath(
    '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
  ).click();
  cy.wait(2000);
  cy.contains("Web Assessment").click();
  cy.wait(5000);
});

describe("Web Assessment ", () => {
  const futureDate = Cypress.env("futureDate");
  it("Web Inquiry link detailed", () => {
    cy.contains("Web Inquiry Link (Detailed)").click();
    cy.wait(4000);
    cy.get(".pc-link-text").then(function (text2) {
      cy.visit(text2.text());
    });
    cy.wait(3000);
    cy.get("#clientName").type("web inquiry client name");
    cy.get("#sections_0_questions_0_answers_0_answer").type(
      "first name web detailed"
    );
    cy.get("#sections_0_questions_1_answers_0_answer").type("last name");
    cy.get("#sections_0_questions_2_answers_0_answer")
      .type(futureDate, { force: true })
      .type("{enter}");
    //cy.get(date).click({multiple:true, force:true})
    cy.get(
      "#sections_0_questions_3_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click({ force: true });
    cy.get("#sections_0_questions_4_answers_0_answer").click();
    cy.get('div[title="ALBANIA"]').click({ multiple: true, force: true });
    cy.get("#sections_0_questions_5_answers_0_answer").click();
    cy.get('div[title="3 yr Diploma"]').click({ multiple: true, force: true });
    cy.get("#sections_0_questions_6_answers_0_answer").type("6 years");
    cy.get("#sections_0_questions_7_answers_0_answer").type("0303033030");
    cy.get("#sections_0_questions_8_answers_0_answer").type("test@gmail.com");
    cy.get("#sections_0_questions_9_answers_0_answer").type("job title");
    cy.get("#sections_0_questions_10_answers_0_answer").click();
    cy.get('div[title="Widowed"]').click();

    cy.get("#sections_0_questions_11_answers_0_answer").type(
      "testing by nZ team , plz dont proceed this , it is just auto generating software tool"
    );
    cy.get("#sections_0_questions_12_answers_0_answer").type(
      "testong from nz tea, outsource nz"
    );
    cy.get(
      "#sections_0_questions_13_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get("#sections_0_questions_14_answers_0_answer").type(
      "testing or nx hewhewhw"
    );
    cy.get("#sections_0_questions_15_answers_0_answer").type("no sir");
    cy.get(
      ':nth-child(17) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="width: 100%;"] > .row-style > .questionnaire-input-width-60 > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="width: 100%; margin-top: 0px;"] > :nth-child(1) > [style="border: 0px; margin-top: 10px;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-upload-picture-card-wrapper > .ant-upload-list > .ant-upload-select > .ant-upload'
    ).attachFile("ABC.jpg");
    cy.get("#sections_1_questions_0_answers_0_answer").type("spouse name");
    cy.get("#sections_1_questions_1_answers_0_answer").type("no sir name");
    cy.get("#sections_1_questions_2_answers_0_answer")
      .type(futureDate, { force: true })
      .type("{enter}");
    //cy.get(date).click({multiple:true, force:true})
    cy.get("#sections_1_questions_3_answers_0_answer").click();
    cy.get('div[title="3 yr Diploma"]').click({ multiple: true, force: true });
    cy.get("#sections_1_questions_4_answers_0_answer").type("test");
    cy.get("#sections_1_questions_5_answers_0_answer").type(
      "testi g y nz team"
    );
    cy.get("#sections_1_questions_6_answers_0_answer").type("no");
    cy.get("#sections_2_questions_0_answers_0_answer").type("child name");
    cy.get("#sections_2_questions_1_answers_0_answer").type("3");
    cy.get("#sections_2_questions_2_answers_0_answer").type("test");
    cy.get("#sections_2_questions_11_answers_0_answer").type(
      "testing y nz tea"
    );
    cy.get(
      '[style="display: flex; justify-content: flex-end;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content'
    ).click();
    cy.wait("@thankyoumessage").its("response.statusCode").should("eq", 200);
    cy.wait(3000)
    // cy.get('.pc-link-text').then(function(read){
    //     cy.visit(read.text())
    //   })
    //   cy.wait(2000)

    cy.visit("https://app.ezymigrate.com/web-inquiry-link-detailed");
    cy.get(":nth-child(2) > .header-bar-text-div > .header-text").click();
    cy.get(".sus-inactive-tab-text").click();
    cy.get(
      ':nth-child(2) > [style="text-align: left; padding: 5px; width: 132px;"] > [style="display: flex;"] > .pc-add-btn > .sus-modal-button-text'
    ).click();
    cy.wait(5000);
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();
    cy.contains("Inquiry").click();
    cy.wait(5000);

    cy.get(
      ".anticon.anticon-delete"
    ).eq(0).click();
    cy.get(
      '[style="display: flex; margin-top: 40px;"] > :nth-child(2) > .ant-btn > span'
    ).click();
    cy.wait(5000);
  });

  it("Web Inquiry link BASIC", () => {
    cy.contains("Web Inquiry Link (Basic)").click();
    cy.wait(4000);
    cy.get(".pc-link-text").then(function (text2) {
      cy.visit(text2.text());
    });
    cy.wait(3000);
    cy.get("#clientName").type("basic web inquiry client name");
    cy.get("#sections_0_questions_0_answers_0_answer").type(
      "first name web basic"
    );
    cy.get("#sections_0_questions_1_answers_0_answer").type("last name");
    cy.get("#sections_0_questions_2_answers_0_answer").type("test@gmail.com");
    cy.get("#sections_0_questions_3_answers_0_answer").type("4545645");
    cy.get("#sections_0_questions_4_answers_0_answer")
      .type(futureDate, { force: true })
      .type("{enter}");
    //cy.get(date).click({multiple:true, force:true})
    cy.get("#sections_0_questions_5_answers_0_answer").click();
    cy.get('div[title="Never Married"]').click();
    cy.get("#sections_0_questions_6_answers_0_answer").type("23");
    cy.get("#sections_0_questions_7_answers_0_answer").click();
    cy.get('div[title="ALBANIA"]').click({ multiple: true, force: true });
    cy.get("#sections_0_questions_8_answers_0_answer").type("qualifitcation");
    cy.get("#sections_0_questions_9_answers_0_answer").click();
    cy.get('div[title="ANGOLA"]').click({ multiple: true, force: true });
    cy.get("#sections_0_questions_10_answers_0_answer").click();
    cy.get('div[title="Google or other search"]').click({
      multiple: true,
      force: true,
    });
    cy.get("#sections_0_questions_11_answers_0_answer").type("testing ");
    cy.contains("Save").click();
    cy.wait(4000);
    cy.visit("https://app.ezymigrate.com/web-inquiry-detailed");
    cy.wait(4000);
    cy.get(
      '[style="display: flex; margin-top: 3px;"] > .pc-add-btn > .sus-modal-button-text'
    ).click();
    cy.wait(7000);
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
    ).click();
    cy.contains("basic web").scrollIntoView();
    cy.get(
      "#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg"
    ).click({ force: true });
    cy.wait(5000);
  });

  it("Web Assessment Link", () => {
    cy.contains("Web Assessment Link").click();
    cy.wait(4000);
    cy.get(".pc-link-text").then(function (text2) {
      cy.visit(text2.text());
    });
    cy.wait(4000);
    cy.get("#clientName").type("clie t name");
    cy.get("#sections_0_questions_0_answers_0_answer").type("firstname");
    cy.get("#sections_0_questions_1_answers_0_answer").type("lastname");
    cy.get("#sections_0_questions_2_answers_0_answer").type("test@gmail.com");
    cy.get("#sections_0_questions_3_answers_0_answer").type("3234324324");
    cy.get("#sections_0_questions_4_answers_0_answer").type("nabeel772");
    cy.get("#sections_0_questions_5_answers_0_answer").type("address line1 ");
    cy.get("#sections_0_questions_6_answers_0_answer").type("address line 2");
    cy.get("#sections_0_questions_7_answers_0_answer").type("city town");
    cy.get("#sections_0_questions_8_answers_0_answer").type("state");
    cy.get("#sections_0_questions_9_answers_0_answer").click();
    cy.get('div[title="ALBANIA"]').click({ multiple: true, force: true });
    cy.get("#sections_0_questions_10_answers_0_answer").click();
    cy.get('div[title="ANGOLA"]').click({ multiple: true, force: true });
    cy.get("#sections_0_questions_11_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_0_questions_12_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_0_questions_13_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_0_questions_14_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_0_questions_15_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_0_questions_16_answers_0_answer")
      .type(futureDate, { force: true })
      .type("{enter}");
    //cy.get(date).click({multiple:true, force:true})
    cy.get(
      "#sections_0_questions_17_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_0_questions_18_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get("#sections_0_questions_19_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_0_questions_20_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_0_questions_21_answers_0_answer").click();
    cy.get('div[title="2021 RV  -Phase 1"]').click({ force: true });
    cy.get("#sections_0_questions_22_answers_0_answer")
      .type(futureDate, { force: true })
      .type("{enter}");
    //cy.get(date).click({multiple:true, force:true})
    cy.get("#sections_0_questions_23_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_0_questions_24_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_0_questions_25_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_0_questions_26_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get(
      "#sections_1_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get("#sections_1_questions_1_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_1_questions_2_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_1_questions_3_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_2_questions_0_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_2_questions_1_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_2_questions_2_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_3_questions_0_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get("#sections_3_questions_1_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get(
      "#sections_4_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_0_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_1_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_2_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_4_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_5_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_6_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_7_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_8_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_9_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_10_answers_0_answer"
    ).type("testing by nz team");
    //cy.get('#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_11_answers_0_answer').type('testing by nz team')
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_13_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_14_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_15_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_16_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_18_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_19_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_20_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_21_answers_0_answer"
    ).type("testing by nz team");
    //cy.get('#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_22_answers_0_answer').type('testing by nz team')
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_24_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_25_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_27_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_28_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_5_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_5_questions_0_questionOptions_0_optionalQuestions_0_questions_1_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_5_questions_0_questionOptions_0_optionalQuestions_0_questions_2_answers_0_answer"
    ).type("testing by nz team");
    cy.get(
      "#sections_6_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_6_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_6_questions_2_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_6_questions_3_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_6_questions_4_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_6_questions_5_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get("#sections_6_questions_6_answers_0_answer").type(
      "testing by nz team"
    );
    //cy.get('#sections_6_questions_7_answers_0_answer').type('testing by nz team')
    cy.get("#sections_6_questions_8_answers_0_answer").type(
      "testing by nz team"
    );
    cy.get(".ant-btn > span").click();
    cy.wait("@thankyoumessage").its("response.statusCode").should("eq", 200);
    cy.wait(3000)
    cy.visit("https://app.ezymigrate.com/web-assessment");
    cy.wait(4000);
    cy.get(".sus-inactive-tab-text").click();
    cy.wait(8000);
    cy.get(
      '[style="display: flex;"] > .pc-add-btn > .sus-modal-button-text'
    ).click();
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();
    cy.contains("Inquiry").click();
    cy.wait(5000);

    cy.get(
      ".anticon.anticon-delete"
    ).eq(0).click();
    cy.get(
      '[style="display: flex; margin-top: 40px;"] > :nth-child(2) > .ant-btn > span'
    ).click();
    cy.wait(5000);
  });

  it("Basic Assessment Link", () => {
    cy.contains("Basic Assessment Link").click();
    cy.wait(4000);
    cy.get(".pc-link-text").then(function (text2) {
      cy.visit(text2.text());
    });
    cy.wait(6000);
    cy.get("#clientName").type("basic name");
    cy.get(
      "#sections_0_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get("#sections_0_questions_1_answers_0_answer").type("first name");
    cy.get("#sections_0_questions_2_answers_0_answer").type("middle name");
    cy.get("#sections_0_questions_3_answers_0_answer").type("first name");
    cy.get("#sections_0_questions_4_answers_0_answer").type("np name");
    cy.get("#sections_0_questions_5_answers_0_answer")
      .type(futureDate, { force: true })
      .type("{enter}");
    //cy.get(date).click({multiple:true, force:true})
    cy.get(
      "#sections_0_questions_6_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get("#sections_0_questions_7_answers_0_answer").click();
    cy.get('div[title="ALBANIA"]').click({ multiple: true, force: true });
    cy.get("#sections_0_questions_8_answers_0_answer").click();
    cy.get('div[title="ALBANIA"]').click({ multiple: true, force: true });
    cy.get("#sections_0_questions_9_answers_0_answer").type("testing by");
    cy.get("#sections_0_questions_10_answers_0_answer").type(
      "testi g  nz team"
    );
    cy.get("#sections_0_questions_11_answers_0_answer")
      .type(futureDate, { force: true })
      .type("{enter}");
    //cy.get(date).click({multiple:true, force:true})
    cy.get("#sections_0_questions_12_answers_0_answer").click();
    cy.get('div[title="2021 RV  -Phase 1"]').click({
      multiple: true,
      force: true,
    });
    cy.get("#sections_0_questions_13_answers_0_answer")
      .type(futureDate, { force: true })
      .type("{enter}");
    //cy.get(date).click({multiple:true, force:true})
    cy.get("#sections_0_questions_14_answers_0_answer").click();
    cy.get('div[title="ALBANIA"]').click({ multiple: true, force: true });
    cy.get("#sections_0_questions_15_answers_0_answer").type(randName(5));
    cy.get("#sections_0_questions_16_answers_0_answer").type(randName(5));
    cy.get("#sections_0_questions_17_answers_0_answer").type(randName(5));
    cy.get("#sections_0_questions_18_answers_0_answer").type(randName(5));
    cy.get(
      "#sections_0_questions_19_answers_0_answer > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();

    cy.get("#sections_1_questions_0_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_1_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_2_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_3_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_5_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_6_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_7_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_8_answers_0_answer").type(randName(5));

    cy.get(
      "#sections_2_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_2_questions_1_answers_0_answer > :nth-child(2) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_2_questions_2_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_2_questions_3_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_2_questions_4_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();

    cy.get(
      "#sections_3_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_3_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_3_questions_2_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_3_questions_3_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();

    cy.get("#sections_4_questions_1_answers_0_answer").type(randName(5));

    cy.get(
      "#sections_4_questions_2_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get("#sections_4_questions_3_answers_0_answer").type(randName(5));
    cy.get("#sections_4_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_4_questions_5_answers_0_answer").type(randName(5));

    cy.get(":nth-child(6) > .title-container > .cq-add-button > img").click();
    cy.get(":nth-child(6) > .title-container > .cq-add-button > img").click();
    cy.get(":nth-child(6) > .title-container > .cq-add-button > img").click();

    cy.get("#sections_5_questions_0_answers_0_answer").type(randName(5));
    cy.get(
      "#sections_5_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get("#sections_5_questions_3_answers_0_answer").type(randName(5));
    cy.get("#sections_5_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_5_questions_5_answers_0_answer").type(randName(5));
    cy.get("#sections_5_questions_6_answers_0_answer").type(randName(5));

    cy.get("#sections_6_questions_0_answers_0_answer").type(randName(5));
    cy.get(
      "#sections_6_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();

    cy.get("#sections_6_questions_3_answers_0_answer").type(randName(5));
    cy.get("#sections_6_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_6_questions_5_answers_0_answer").type(randName(5));
    cy.get("#sections_6_questions_6_answers_0_answer").type(randName(5));

    cy.get("#sections_7_questions_0_answers_0_answer").type(randName(5));
    cy.get(
      "#sections_7_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();

    cy.get("#sections_7_questions_3_answers_0_answer").type(randName(5));
    cy.get("#sections_7_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_7_questions_5_answers_0_answer").type(randName(5));
    cy.get("#sections_7_questions_6_answers_0_answer").type(randName(5));

    cy.get("#sections_8_questions_0_answers_0_answer").type(randName(5));
    cy.get(
      "#sections_8_questions_1_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get("#sections_8_questions_3_answers_0_answer").type(randName(5));
    cy.get("#sections_8_questions_5_answers_0_answer").type(randName(5));
    cy.get("#sections_8_questions_6_answers_0_answer").type(randName(5));

    cy.get(":nth-child(10) > .title-container > .cq-add-button > img").click();
    cy.get(":nth-child(10) > .title-container > .cq-add-button > img").click();

    cy.get("#sections_9_questions_0_answers_0_answer").type(randName(5));
    cy.get("#sections_9_questions_3_answers_0_answer").type(randName(5));
    cy.get("#sections_9_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_9_questions_5_answers_0_answer").type(randName(5));
    cy.get("#sections_9_questions_6_answers_0_answer").type(randName(5));

    cy.get("#sections_10_questions_0_answers_0_answer").type(randName(5));
    cy.get("#sections_10_questions_3_answers_0_answer").type(randName(5));
    cy.get("#sections_10_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_10_questions_5_answers_0_answer").type(randName(5));
    cy.get("#sections_10_questions_6_answers_0_answer").type(randName(5));

    cy.get("#sections_11_questions_0_answers_0_answer").type(randName(5));
    cy.get("#sections_11_questions_3_answers_0_answer").type(randName(5));
    cy.get("#sections_11_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_11_questions_5_answers_0_answer").type(randName(5));
    cy.get("#sections_11_questions_6_answers_0_answer").type(randName(5));

    cy.get("#sections_12_questions_0_answers_0_answer").type(randName(5));
    cy.get("#sections_12_questions_1_answers_0_answer").type(randName(5));
    cy.get("#sections_12_questions_2_answers_0_answer").type(randName(5));
    cy.get("#sections_12_questions_3_answers_0_answer").type(randName(5));
    cy.get("#sections_12_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_12_questions_5_answers_0_answer").type(randName(5));
    cy.get("#sections_12_questions_6_answers_0_answer").type(randName(5));
    cy.get("#sections_12_questions_7_answers_0_answer").type(randName(5));

    cy.get(":nth-child(14) > .title-container > .cq-add-button > img").click();
    cy.get(":nth-child(14) > .title-container > .cq-add-button > img").click();

    cy.get("#sections_13_questions_1_answers_0_answer").type(randName(5));
    cy.get("#sections_13_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_13_questions_5_answers_0_answer").type(randName(5));

    cy.get("#sections_14_questions_1_answers_0_answer").type(randName(5));
    cy.get("#sections_14_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_14_questions_5_answers_0_answer").type(randName(5));

    cy.get("#sections_15_questions_1_answers_0_answer").type(randName(5));
    cy.get("#sections_15_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_15_questions_5_answers_0_answer").type(randName(5));

    cy.get("#sections_16_questions_0_answers_0_answer").type(randName(5));
    cy.get("#sections_16_questions_1_answers_0_answer").type(randName(5));
    cy.get("#sections_16_questions_2_answers_0_answer").type(randName(5));
    cy.get("#sections_16_questions_3_answers_0_answer").type(randName(5));
    cy.get("#sections_16_questions_4_answers_0_answer").type(randName(5));
    cy.get("#sections_16_questions_5_answers_0_answer").type(randName(5));
    cy.get("#sections_16_questions_8_answers_0_answer").type(randName(5));

    cy.get(
      "#sections_16_questions_9_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get("#sections_16_questions_10_answers_0_answer").type(randName(5));
    cy.get(
      "#sections_16_questions_11_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_16_questions_12_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();
    cy.get(
      "#sections_16_questions_13_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();

    cy.get("#sections_16_questions_14_answers_0_answer").type(randName(5));
    cy.get(
      "#sections_17_questions_0_answers_0_answer > :nth-child(1) > .ant-radio > .ant-radio-input"
    ).click();

    cy.get(
      "#sections_17_questions_0_questionOptions_0_optionalQuestions_0_questions_0_answers_0_answer"
    ).type(randName(5));
    cy.get(
      "#sections_17_questions_0_questionOptions_0_optionalQuestions_0_questions_1_answers_0_answer"
    ).type(randName(5));
    cy.get(
      "#sections_17_questions_0_questionOptions_0_optionalQuestions_0_questions_2_answers_0_answer"
    ).type(randName(5));
    
    cy.get("#clientName").scrollIntoView();

    cy.get(".ant-btn > span").click();
    cy.wait("@thankyoumessage").its("response.statusCode").should("eq", 200);
    cy.wait(3000)
    cy.visit("https://app.ezymigrate.com/web-assessment");
    cy.wait(4000);
    cy.get(
      '[style="display: flex; margin-top: 3px;"] > .pc-add-btn > .sus-modal-button-text'
    ).click();
    cy.wait(7000);
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
    ).click();
    cy.contains("basic name").scrollIntoView();
    cy.get(
      "#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg"
    ).click({ force: true });
    cy.wait(5000);
  });
});
