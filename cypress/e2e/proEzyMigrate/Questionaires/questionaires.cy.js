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

describe("custom questionaires", () => {
  const futureDate = Cypress.env("futureDate");
  

  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });

  it("custom questionaires", () => {
    cy.interceptSearchClient();
    cy.get('a[href="/questionnaire"]').click();

    cy.wait("@GetAllQuestionnairs").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".cq-list-content-row").each(($el, index, $list) => {
      var del = $el.find(".cv-doc-text").text().trim();
      if (del === "automation questionaire name") {
        cy.log(del);
        cy.wrap($el)
          .find('img[src="/static/media/delete-blue.983ea6be.svg"]')
          .click();
        cy.get(".ant-btn.ant-btn-primary").contains("OK").click();
        cy.wait("@questionnaire").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@GetAllQuestionnairs").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(2000);

    cy.get('img[src="/static/media/plus-icon.16380594.svg"]').click();

    cy.wait("@parentbinding").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#name").type("automation questionaire name");

    cy.get(".cq-btn-text").contains("Add Section").click();

    cy.get("#sections_0_name").type("section one");

    cy.get(".cq-btn-text").contains("Add Quesstion(s)").click();

    cy.get("#sections_0_questions_0_question").type("plz enter your name");

    cy.get(".cq-btn-text").contains("Add Quesstion(s)").click();

    cy.get("#sections_0_questions_1_question").type("plz enter Date of birth");

    cy.get(".ant-select-selection-item").eq(3).click();

    cy.get('div[title="Date"]').click();

    cy.get(".cq-btn-text").eq(1).click();

    cy.get("#sections_1_name").type("profile");

    cy.get(".cq-btn-text").eq(6).click();

    cy.get("#sections_1_questions_0_question").type("tell me about education");

    cy.get(".ant-btn.ant-btn-default.cq-save-btn").eq(0).click();

    cy.wait("@RAddQuestionnaire").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.wait("@questionnaire/Recursive").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-default.cq-save-btn").eq(0).click();

    cy.wait("@RUpdate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get('a[href="/questionnaire"]').click();

    cy.wait("@GetAllQuestionnairs").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(4000);

    cy.get(".cq-list-content-row").each(($el, index, $list) => {
      var del = $el.find(".cv-doc-text").text().trim();
      if (del === "automation questionaire name") {
        cy.log(del);
        cy.wrap($el).find(".ant-checkbox-input").eq(0).click();

        cy.wait("@SimpleUpdate").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@GetAllQuestionnairs").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(2000);

    cy.get(".ant-checkbox-input").eq(1).click();

    cy.wait("@SimpleUpdate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllQuestionnairs").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".ant-checkbox-input").eq(2).click();

    cy.wait("@SimpleUpdate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllQuestionnairs").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".ant-checkbox-input").eq(3).click();

    cy.wait("@SimpleUpdate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllQuestionnairs").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".ant-checkbox-input").eq(4).click();

    cy.wait("@SimpleUpdate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllQuestionnairs").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@QuestionnairePublicApi").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".anticon.anticon-close.ant-modal-close-icon:visible").click();

    cy.get(
      'img[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYUlEQVR4nO3X22sTQRQH4Px3UaT1QbQIESOCqCDFN/FJsEikidhWGhNRY20fYqmlLVoR1HpJk0032UQbbdJkt/YWzaVZtSFak/xkTppUfLGlM9qHOTAwOzPsfHsyM0wsFhmCwuoIgldpcymqEKBh1nddrI4g7B6t3u5UlD0LNMsbsN8kZGRPAllwR/IGckeKAHJFigJyQ4oEckGKBu4ayRNo3Ub5b0Bjmx8hgYbM4B8h16DJeZOkilV0Dr7HYOgTPb/R13HBn8Sp229bbWzMpdE0TnhicD35iEypRu2ORwa6xjNUn0yU6D3ptRpf4Fz+J73o+tNFzBer6OiNwObWaPKRaIHGXB7LoN0VxsXhFI1tws/4Zul52ijDH85RXSgwtFCmundqeau/UEWbU8GVCR26WceRPhXnhz60gPuvhtD9eAHDal48kGXw6I0oDl4L04SsP2A00Hder9Lz6bvvYOuPtoBnfbM41KPioVYQDySQvg5bv0Zt9wJZPE9+pfrAdJb6O+8n6COaQJY9llW2JIQCezaBrCRyG7B7Yzjm1hBerFC/+8US9R33xCiLTSCDMWRHX0QMcGr+G73IF8giXaxBW/mOZKFKk5+8Fad1xzJ2biCByHIFB7oVAjWBXeM6gkYZ+zYvB1yB3pcrjb+PTgUzSxW8SjewVkeQIKNaYxezn5q1McThXpXGbgEbxwz7AO5Att6GlM+tCVOFKibia3ig5ilbv2f62dwX+GdyiK/+aLVNJkz6BVidHTUjkTz0krzN1OV9cEe7WN6odxoyg6Y8ZurymPnrJvmXxSLDIiZ+AWLsWzAle4KBAAAAAElFTkSuQmCC"]'
    )
      .eq(0)
      .click();

    cy.wait("@QuestionnairePublicApi").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-close.ant-modal-close-icon:visible").click();

    cy.get('img[src="/static/media/duplicate.24c5ab45.png"]').eq(0).click();

    cy.get(".ant-btn.ant-btn-default.button").contains("Ok").click();

    cy.wait("@GetAllQuestionnairs").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@DuplicateQuestionnaire").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('img[src="/static/media/delete-blue.983ea6be.svg"]').eq(0).click();

    cy.get(".ant-btn.ant-btn-primary").contains("OK").click();
    cy.wait("@questionnaire").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllQuestionnairs").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //moving from potential to client

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();
    cy.wait(2000);
    cy.contains("Custom Questionnaires").click();
    cy.wait(2000);
    cy.wait("@GetAllQuestionnairs").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@filledquestionnaire").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      const marketTags = interception.response.body.items;
      const tag3 = marketTags.find((marketTags) => marketTags.name === "tag 3 ");
      if (!tag3) {
        cy.get('a[href="/account-settings"]').click();
        cy.get(".sus-inactive-tab-text")
          .contains("Company/Branch Level Setting")
          .click();

        cy.get('span[style="margin-left: 20px;"]')
          .contains("Client Tags")
          .click();
        cy.wait("@getmarkedtagspotentialclient").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.get(".icons-client").click();

        cy.get("#main_name").type("tag 3");

        cy.get(".ant-btn.ant-btn-primary.form-btn").contains("Save").click();

        cy.wait("@postmarkedtags").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@getmarkedtagspotentialclient").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait(5000);

        cy.xpath(
          '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
        ).click();
        cy.wait(2000);
        cy.contains("Custom Questionnaires").click();
        cy.wait(2000);
        cy.wait("@GetAllQuestionnairs").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
    
        cy.wait("@filledquestionnaire").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
    
      }
    });
    cy.get(":nth-child(1) > .ant-select > .ant-select-selector").click();
    cy.wait(2000);
    cy.get(
      '[title="automation questionaire name"] > .ant-select-item-option-content'
    ).click();
    cy.wait(4000);
    cy.wait("@shortlink").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.get(".pc-link-text").then(function (text2) {
      cy.visit(text2.text());
    });

    cy.wait("@questionnaire/Recursive").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#clientName").type("automation nabeel");

    cy.get("#sections_0_questions_0_answers_0_answer").type("nabeel ahmed");

    cy.get("#sections_0_questions_1_answers_0_answer").click();

    cy.get(
      ".ant-picker-cell.ant-picker-cell-in-view.ant-picker-cell-today"
    ).click({ force: true });

    cy.get("#sections_1_questions_0_answers_0_answer").type("test");

    cy.get(".ant-btn > span").click();

    cy.wait("@InsertFilledAnswers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@thankyoumessage").its("response.statusCode").should("eq", 200);

    cy.visit("https://app.ezymigrate.com/potential-client-questionnaire");

    cy.get(
      '[style="margin-left: 20px;"] > .ant-select > .ant-select-selector'
    ).click();
    cy.get(
      '[title="automation questionaire name"] > .ant-select-item-option-content'
    ).click();
    cy.wait("@filledquestionnaire")
      .its("response.statusCode")
      .should("eq", 200);

    cy.wait(3000);

    cy.get(".quesitonnaire-action-buttons")
      .contains("Move To Potential Client")
      .click();
    cy.wait(3000);

    cy.get(".ant-select-selection-search-input").eq(6).click({ force: true });

    cy.get('div[title="tag 3 "]').click();

    cy.get(".ant-btn.ant-btn-primary").contains("OK").click();

    cy.wait(8000);

    cy.wait("@potentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AssignTag").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@SaveInDocument").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@putfilledquestionnaire").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@PQuestionnaireMapping").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();
    cy.wait(2000);
    cy.contains("Inquiry").click();

    cy.wait(4000);
    cy.contains("automation nabeel").click();

    cy.wait("@getpotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllClientSource").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getcompany").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getclientstatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".sus-inactive-tab-text-school").eq(1).click();
    cy.wait(2000);
    cy.wait("@DocumentView").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("automation questionaire name.pdf..pdf ").should("be.visible");

    cy.get(".icons-client").click();

    cy.get(".ant-btn.ant-btn-default.button").contains("OK").click();

    cy.wait("@MovePotentialClientToClientAuto").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@potentialclientAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getclientstatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('a[href="/all-clients"]').click();

    cy.wait("@SearchClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("automation nabeel").click();

    cy.wait("@GetAllClientSource").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@filledquestionnaire").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@branch/permissions").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@singleuser").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getbranchuser").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchCountryLinking").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@SetHtmlTemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    // cy.wait("@UserSignature").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 200);
    // });

    cy.get(".header-text").contains("Documents").click();

    cy.wait("@branch/permissions").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@DocumentView").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("automation questionaire name.pdf..pdf ").should("be.visible");

    cy.get('a[href="/all-clients"]').click();

    cy.wait("@SearchClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-delete").eq(0).click();

    cy.wait("@delclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@SearchClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('a[href="/questionnaire"]').click();

    cy.wait("@GetAllQuestionnairs").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".cq-list-content-row").each(($el, index, $list) => {
      var del = $el.find(".cv-doc-text").text().trim();
      if (del === "automation questionaire name") {
        cy.log(del);
        cy.wrap($el)
          .find('img[src="/static/media/delete-blue.983ea6be.svg"]')
          .click();
        cy.get(".ant-btn.ant-btn-primary").contains("OK").click();
        cy.wait("@questionnaire").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@GetAllQuestionnairs").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });
  });
});
