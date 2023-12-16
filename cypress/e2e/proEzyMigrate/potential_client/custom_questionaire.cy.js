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

describe("potential client", () => {
  const futureDate = Cypress.env("futureDate");
  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });
  it("Add potential", () => {
    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/filledquestionnaire/All/**"
    ).as("filledquestionnaire");
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();
    cy.wait(2000);
    cy.contains("Custom Questionnaires").click();
    cy.wait(2000);
    cy.get(":nth-child(1) > .ant-select > .ant-select-selector").click();
    cy.wait(2000);
    cy.get('.rc-virtual-list-holder').eq(0).scrollTo('bottom', { ensureScrollable: false })
    cy.wait(2000)
    cy.get(
      '[title="unique questionaire"] > .ant-select-item-option-content'
    ).click();
    cy.wait(4000);
    cy.get(".pc-link-text").then(function (text2) {
      cy.visit(text2.text());
    });
    //cy.visit('https://app.ezymigrate.com/CustomQuestionnaire/Survey?para=eyJDbGllbnRJZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsIkJyYW5jaElkIjoiNjUxODc2ZTYtYjBjOC00YzMxLWFhYzItMjEyOWQ5M2E4YzliIiwiVXNlcklkIjoiYTBmMzFiYzctMjA2Ni00MTNiLThmMjctOGIxNWE5YTgyZWZmIiwiUXVlc3Rpb25uYWlyZUlkIjoyOTY4LCJCcmFuY2giOm51bGwsInF1ZXN0aW9ubmFpcmUiOm51bGwsIkdyb3VwcyI6bnVsbCwiSXNHcm91cGVkIjpmYWxzZSwiSXNQb3RlbnRpYWwiOnRydWUsIklzRW1wbG95ZXIiOmZhbHNlLCJHcm91cElkIjowfQ==')
    cy.wait(6000);

    cy.get("#clientName").type("automation custom");
    cy.get("#sections_0_questions_0_answers_0_answer").type(
      "automation first name"
    );
    cy.get("#sections_0_questions_1_answers_0_answer").type(
      "automation lst name"
    );
    cy.get("#sections_0_questions_2_answers_0_answer").click();
    cy.wait(3000);
    cy.get(
      ".ant-picker-cell.ant-picker-cell-in-view.ant-picker-cell-today"
    ).click();
    cy.get(".cq-add-button > img").click();
    cy.get(".cq-add-button > img").click();
    cy.get("#sections_1_questions_0_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_1_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_2_answers_0_answer").type(randName(5));
    cy.get("#sections_2_questions_0_answers_0_answer").type(randName(5));
    cy.get("#sections_2_questions_1_answers_0_answer").type(randName(5));
    cy.get("#sections_2_questions_2_answers_0_answer").type(randName(5));

    cy.get(":nth-child(1) > .ant-radio > .ant-radio-input").click();
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_0_answers_0_answer"
    ).type("child name ");
    cy.get(".ant-btn > span").click();
    cy.wait(7000);

    cy.visit("https://app.ezymigrate.com/potential-client-questionnaire");

    cy.contains("automation custom").scrollIntoView();
    cy.get(
      '[style="margin-left: 20px;"] > .ant-select > .ant-select-selector'
    ).click();
    cy.get(
      '[title="unique questionaire"] > .ant-select-item-option-content'
    ).click();
    cy.wait("@filledquestionnaire")
      .its("response.statusCode")
      .should("eq", 200);
    cy.wait(3000);
    cy.get(".quesitonnaire-action-buttons")
      .contains("Move To Employer")
      .click();
    cy.wait(3000);
    cy.get(".ant-select-selection-search-input").eq(6).click();

    cy.get('div[title="tag 3 "]').click();

    cy.get(".ant-btn.ant-btn-primary").contains("OK").click();

    cy.wait(8000);
    cy.get(
      'a[href="/employer-management"]').click();

    
    cy.contains("automation custom").click();
    cy.wait(2000);
    cy.get(".ant-tabs-tab-btn").eq(1).click();
    cy.wait(5000);
    cy.get(".ant-tabs-tab-btn").eq(2).click();
    cy.contains("unique questionaire.pdf..pdf ").should("be.visible");
    cy.get(
      'a[href="/employer-management"]').click();
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="cursor: pointer;"]'
        )
        .text()
        .trim();
      if (del === "automation custom") {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
        cy.wait(1000);
        
      }
    });
    cy.wait(1000);
    //move to client

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();
    cy.wait(2000);
    cy.contains("Custom Questionnaires").click();
    cy.wait(2000);
    cy.get(":nth-child(1) > .ant-select > .ant-select-selector").click();
    cy.wait(2000);
    cy.get('.rc-virtual-list-holder').eq(0).scrollTo('bottom', { ensureScrollable: false })
    cy.wait(3000)
    cy.get(
      '.ant-select-item-option-content:visible'
    ).contains('unique questionaire')
     .click();
    cy.wait(4000);
    cy.get(".pc-link-text").then(function (text2) {
      cy.visit(text2.text());
    });
    //cy.visit('https://app.ezymigrate.com/CustomQuestionnaire/Survey?para=eyJDbGllbnRJZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsIkJyYW5jaElkIjoiNjUxODc2ZTYtYjBjOC00YzMxLWFhYzItMjEyOWQ5M2E4YzliIiwiVXNlcklkIjoiYTBmMzFiYzctMjA2Ni00MTNiLThmMjctOGIxNWE5YTgyZWZmIiwiUXVlc3Rpb25uYWlyZUlkIjoyOTY4LCJCcmFuY2giOm51bGwsInF1ZXN0aW9ubmFpcmUiOm51bGwsIkdyb3VwcyI6bnVsbCwiSXNHcm91cGVkIjpmYWxzZSwiSXNQb3RlbnRpYWwiOnRydWUsIklzRW1wbG95ZXIiOmZhbHNlLCJHcm91cElkIjowfQ==')
    cy.wait(6000);

    cy.get("#clientName").type("automation client");
    cy.get("#sections_0_questions_0_answers_0_answer").type(
      "automation first name"
    );
    cy.get("#sections_0_questions_1_answers_0_answer").type(
      "automation lst name"
    );
    cy.get("#sections_0_questions_2_answers_0_answer").click();
    cy.wait(3000);
    cy.get(
      ".ant-picker-cell.ant-picker-cell-in-view.ant-picker-cell-today"
    ).click();
    cy.get(".cq-add-button > img").click();
    cy.get(".cq-add-button > img").click();
    cy.get("#sections_1_questions_0_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_1_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_2_answers_0_answer").type(randName(5));
    cy.get("#sections_2_questions_0_answers_0_answer").type(randName(5));
    cy.get("#sections_2_questions_1_answers_0_answer").type(randName(5));
    cy.get("#sections_2_questions_2_answers_0_answer").type(randName(5));

    cy.get(":nth-child(1) > .ant-radio > .ant-radio-input").click();
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_0_answers_0_answer"
    ).type("child name ");
    cy.get(".ant-btn > span").click();
    cy.wait(7000);

    cy.visit("https://app.ezymigrate.com/potential-client-questionnaire");

    cy.get(
      '[style="margin-left: 20px;"] > .ant-select > .ant-select-selector'
    ).click();
    cy.get(
      '[title="unique questionaire"] > .ant-select-item-option-content'
    ).click();
    cy.wait("@filledquestionnaire")
      .its("response.statusCode")
      .should("eq", 200);
    cy.wait(3000);
    cy.get(".quesitonnaire-action-buttons").contains("Move To Client").click();
    cy.wait(3000);

    cy.get(".ant-select-selection-search-input").eq(6).click();

    cy.get('div[title="tag 3 "]').click();

    cy.get(".ant-btn.ant-btn-primary").contains("OK").click();

    cy.wait(8000);

    cy.get('a[href="/all-clients"]').click();

    cy.contains("automation client").click();

    cy.get(":nth-child(4) > a > .header-bar-text-div > .header-text").click();
    cy.wait(4000);
    cy.contains("unique questionaire.pdf..pdf ").should("be.visible");
    cy.get('a[href="/all-clients"]').click();
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]'
        )
        .text()
        .trim();
      if (del === "automation client") {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
      }
    });

    cy.wait(3000);

    //move to potential client

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();
    cy.wait(2000);
    cy.contains("Custom Questionnaires").click();
    cy.wait(2000);
    cy.get(":nth-child(1) > .ant-select > .ant-select-selector").click();
    cy.wait(2000);
    cy.get(
      '[title="unique questionaire"] > .ant-select-item-option-content'
    ).click();
    cy.wait(4000);
    cy.get(".pc-link-text").then(function (text2) {
      cy.visit(text2.text());
    });
    //cy.visit('https://app.ezymigrate.com/CustomQuestionnaire/Survey?para=eyJDbGllbnRJZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsIkJyYW5jaElkIjoiNjUxODc2ZTYtYjBjOC00YzMxLWFhYzItMjEyOWQ5M2E4YzliIiwiVXNlcklkIjoiYTBmMzFiYzctMjA2Ni00MTNiLThmMjctOGIxNWE5YTgyZWZmIiwiUXVlc3Rpb25uYWlyZUlkIjoyOTY4LCJCcmFuY2giOm51bGwsInF1ZXN0aW9ubmFpcmUiOm51bGwsIkdyb3VwcyI6bnVsbCwiSXNHcm91cGVkIjpmYWxzZSwiSXNQb3RlbnRpYWwiOnRydWUsIklzRW1wbG95ZXIiOmZhbHNlLCJHcm91cElkIjowfQ==')
    cy.wait(6000);

    cy.get("#clientName").type("automation custom");
    cy.get("#sections_0_questions_0_answers_0_answer").type(
      "automation first name"
    );
    cy.get("#sections_0_questions_1_answers_0_answer").type(
      "automation lst name"
    );
    cy.get("#sections_0_questions_2_answers_0_answer").click();
    cy.wait(3000);
    cy.get(
      ".ant-picker-cell.ant-picker-cell-in-view.ant-picker-cell-today"
    ).click();
    cy.get(".cq-add-button > img").click();
    cy.get(".cq-add-button > img").click();
    cy.get("#sections_1_questions_0_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_1_answers_0_answer").type(randName(5));
    cy.get("#sections_1_questions_2_answers_0_answer").type(randName(5));
    cy.get("#sections_2_questions_0_answers_0_answer").type(randName(5));
    cy.get("#sections_2_questions_1_answers_0_answer").type(randName(5));
    cy.get("#sections_2_questions_2_answers_0_answer").type(randName(5));

    cy.get(":nth-child(1) > .ant-radio > .ant-radio-input").click();
    cy.get(
      "#sections_4_questions_0_questionOptions_0_optionalQuestions_0_questions_0_answers_0_answer"
    ).type("child name ");
    cy.get(".ant-btn > span").click();
    cy.wait(7000);

    cy.visit("https://app.ezymigrate.com/potential-client-questionnaire");

    cy.contains("automation custom").scrollIntoView();
    cy.get(
      '[style="margin-left: 20px;"] > .ant-select > .ant-select-selector'
    ).click();
    cy.get(
      '[title="unique questionaire"] > .ant-select-item-option-content'
    ).click();
    cy.wait("@filledquestionnaire")
      .its("response.statusCode")
      .should("eq", 200);
    cy.wait(3000);
    cy.get(".quesitonnaire-action-buttons")
      .contains("Move To Potential Client")
      .click();
    cy.wait(3000);

    cy.get(".ant-select-selection-search-input").eq(6).click();

    cy.get('div[title="tag 3 "]').click();

    cy.get(".ant-btn.ant-btn-primary").contains("OK").click();

    cy.wait(8000);

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();
    cy.wait(2000);
    cy.contains("Inquiry").click();

    cy.wait(4000);
    cy.contains("automation custom").click();

    cy.get(".sus-inactive-tab-text-school").eq(1).click();
    cy.wait(2000);
    cy.contains("unique questionaire.pdf..pdf ").should("be.visible");

    cy.contains("Inquiry").click();
    cy.wait(4000);
    cy.get(".anticon.anticon-delete").eq(0).click();
    cy.get(
      '[style="display: flex; margin-top: 40px;"] > :nth-child(2) > .ant-btn > span'
    ).click();
    cy.wait(4000);
  });
});
