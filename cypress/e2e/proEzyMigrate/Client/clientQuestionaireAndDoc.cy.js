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

const sms = "211267313";

describe("client questionaire and document", () => {
  const futureDate = Cypress.env("futureDate");

  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });
  it("client questionaire", () => {
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

    cy.get("#sections_0_questions_0_question").type(
      "plz enter your first name"
    );

    cy.get("#sections_0_questions_0_mappingParent").click();

    cy.wait(2000);

    cy.get(".rc-virtual-list-scrollbar-thumb")
      .should("exist")
      .scrollTo("top", { ensureScrollable: false });

    cy.get('div[title="Client"]').click();

    cy.wait("@getparentschild").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#sections_0_questions_0_mappingProperty").click();

    cy.wait(2000);

    cy.get(".rc-virtual-list-scrollbar-thumb")
      .eq(1)
      .should("exist")
      .scrollTo("top", { ensureScrollable: false });

    cy.get('div[title="FirstName"]').dblclick();

    cy.get(".cq-btn-text").contains("Add Quesstion(s)").click();

    cy.get("#sections_0_questions_1_question").type("plz enter your last name");

    cy.get("#sections_0_questions_1_mappingParent").click();

    cy.wait(2000);

    cy.get(".rc-virtual-list-scrollbar-thumb")
      .eq(2)
      .scrollTo("top", { ensureScrollable: false });

    cy.get('div[title="Client"]').eq(1).click();

    cy.get('div[title="Client"]')
      .eq(1)
      .should("have.attr", "aria-selected", "true");

    cy.wait("@getparentschild").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#sections_0_questions_1_mappingProperty").click();

    cy.wait(2000);

    cy.get(".rc-virtual-list-scrollbar-thumb")
      .eq(3)
      .scrollTo("top", { ensureScrollable: false });

    cy.get('div[title="LastName"]').eq(1).dblclick();

    //next question
    cy.get(".cq-btn-text").contains("Add Quesstion(s)").click();

    cy.get("#sections_0_questions_2_question").type("title");

    cy.get("#sections_0_questions_2_mappingParent").click();

    cy.wait(2000);

    cy.get(".rc-virtual-list-scrollbar-thumb")
      .eq(4)
      .scrollTo("top", { ensureScrollable: false });

    cy.get('div[title="Client"]').eq(2).click();

    cy.get('div[title="Client"]')
      .eq(2)
      .should("have.attr", "aria-selected", "true");

    cy.wait("@getparentschild").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#sections_0_questions_2_mappingProperty").click();

    cy.wait(2000);

    cy.get(".rc-virtual-list-scrollbar-thumb")
      .eq(5)
      .scrollTo("top", { ensureScrollable: false });

    cy.get('div[title="Title"]').eq(2).dblclick();

    //next question

    //next question
    cy.get(".cq-btn-text").contains("Add Quesstion(s)").click();

    cy.get("#sections_0_questions_3_question").type("Email");

    cy.get("#sections_0_questions_3_mappingParent").click();

    cy.wait(2000);

    cy.get(".rc-virtual-list-scrollbar-thumb")
      .eq(5)
      .scrollTo("top", { ensureScrollable: false });

    cy.get('div[title="Client"]').eq(3).click();

    cy.get('div[title="Client"]')
      .eq(3)
      .should("have.attr", "aria-selected", "true");

    cy.wait("@getparentschild").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#sections_0_questions_3_mappingProperty").click();

    cy.wait(2000);

    cy.get(".rc-virtual-list-scrollbar-thumb")
      .eq(6)
      .scrollTo("top", { ensureScrollable: false });

    cy.get('div[title="Email"]').eq(3).dblclick();

    //next question

    cy.get(".cq-btn-text").contains("Add Quesstion(s)").click();

    cy.get("#sections_0_questions_4_question").type("DOB");

    cy.get("#sections_0_questions_4_mappingParent").click();

    cy.wait(2000);

    cy.get(".rc-virtual-list-scrollbar-thumb")
      .eq(6)
      .scrollTo("top", { ensureScrollable: false });

    cy.get('div[title="Client"]').eq(4).click();

    cy.get('div[title="Client"]')
      .eq(4)
      .should("have.attr", "aria-selected", "true");

    cy.wait("@getparentschild").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#sections_0_questions_4_mappingProperty").click();

    cy.wait(2000);

    cy.get(".rc-virtual-list-scrollbar-thumb")
      .eq(7)
      .scrollTo("top", { ensureScrollable: false });

    cy.get('div[title="DOB"]').eq(4).dblclick();

    cy.get("#sections_0_questions_4_answerType").click({ force: true });
    cy.get('div[title="Date"]').click();

    //next question

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

    cy.wait(4000);

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

    cy.wait(2000)

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
    ).click();

    cy.wait(2000);
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]'
        )
        .text()
        .trim();
      if (del === "bingo jabeel") {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.wait("@delclient").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@SearchClient").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@getmarkedtagspotentialclient").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@visastatus").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@BranchVisaType/All").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@getallusers").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@getbranchuser").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@companyusers").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(2000);

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
    cy.get("#firstName").type("margalla");
    cy.get("#lastName").type("hill");
    cy.get("#preferredName").type("pre name");

    cy.get(
      ":nth-child(2) > .save-button-add-client > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();

    cy.wait(5000);
    cy.wait("@SetHtmlTemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //adding client email draft test case
    cy.get(".header-text").contains("Email").click();
    cy.wait("@ClientImportSettings").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetClientFamilyMembers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@case/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@ClientEmailHistorynew").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@branch/permissions").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@emailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
   
    cy.wait(2000);

    cy.get(".ant-tabs-tab-btn").contains("CREATE").click();

    cy.wait("@getclientemalbyfamily").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@UserSignature").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@allbranchUsers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@CompanyDocumentAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("not.equal", 500);
    });

    

    cy.wait("@GetUserIMAP").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllByType").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get("#main_to").type("nabeeloutsourcenz@gmail.com");

    cy.get("#main_subject").type("draft main subject");

    cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn.button-blue")
      .contains("Save As Draft")
      .click();

    cy.wait("@postClientEmail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@ClientEmailHistorynew").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el.find(".draft").text().trim();
      if (del.includes("Draft")) {
        cy.log(del);
        cy.wrap($el)
          .find('img[src="/static/media/detail-email.ea02a2ce.jpg"]')
          .click();
        cy.wait(1000);
      }
    });

    cy.wait(1000);

    cy.wait("@singleclientemailbyid").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getclientemalbyfamily").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@UserSignature").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@allbranchUsers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@CompanyDocumentAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("not.equal", 500);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetUserIMAP").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllByType").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#main_ccc").clear();

    cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn.button-blue")
      .contains("Send Now")
      .click();

    cy.wait("@postClientEmail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@emailqueueblocburl").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@clientlog").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@ClientEmailHistorynew").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-tabs-tab-btn").contains("CREATE").click();

    cy.wait("@getclientemalbyfamily").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@UserSignature").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@allbranchUsers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@CompanyDocumentAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("not.equal", 500);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetUserIMAP").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllByType").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get("#main_to").type("nabeeloutsourcenz@gmail.com");

    cy.get("#main_subject").type("draft main subject");

    cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn.button-blue")
      .contains("Save As Draft")
      .click();

    cy.wait(4000);

    cy.wait("@postClientEmail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@ClientEmailHistorynew").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el.find(".draft").text().trim();
      if (del.includes("Draft")) {
        cy.log(del);
        cy.wrap($el)
          .find('img[src="/static/media/multimedia-blue.f6e13199.svg"]')
          .click();
        cy.get(".ant-btn.ant-btn-default").contains("Cancel").click();
        cy.wrap($el)
          .find('img[src="/static/media/del-blue.296a7465.svg"]')
          .click();
        cy.wait(2000);
        cy.get(".ant-btn.ant-btn-primary:visible")
          .contains("OK")
          .click({ force: true });
        cy.wait(1000);
      }
    });

    cy.wait(1000);

    cy.wait("@ClientEmail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@ClientEmailHistorynew").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //adding documet checklist for client testing

    cy.get('a[href="/account-settings"]').click();
    cy.get(".sus-inactive-tab-text")
      .contains("Company/Branch Level Setting")
      .click();
    cy.contains('Document Checklist').click();

    cy.wait("@documentCheckList").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@checklist").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("cypress automation document checklist")) {
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-btn.ant-btn-default.button.button-blue")
          .contains("Delete")
          .click();
        cy.wait("@checklist1").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@checklist").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(2000);

    cy.get('img[src="/static/media/add-icon.325d80ae.png"]').click();
    cy.get("#main_name").type("cypress automation document checklist");
    cy.get("#main_description").type(
      "this is the description for the cypress document checklist automation "
    );
    cy.get('img[src="/static/media/add-icon.325d80ae.png"]').eq(1).click();
    cy.get("#main_checkListItems_0_name").type("testing1");
    cy.get('img[src="/static/media/add-icon.325d80ae.png"]').eq(1).click();
    cy.get("#main_checkListItems_1_name").type("testing2");
    cy.get('img[src="/static/media/add-icon.325d80ae.png"]').eq(1).click();
    cy.get("#main_checkListItems_2_name").type("testing3");
    cy.get('img[src="/static/media/add-icon.325d80ae.png"]').eq(1).click();
    cy.get("#main_checkListItems_3_name").type("testing4");
    cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn")
      .contains("SAVE")
      .click();

    cy.wait("@checklist1").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@checklist").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.wait(3000);

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("cypress automation document checklist")) {
        cy.wrap($el).find(".anticon.anticon-edit").click();

        cy.wait(3000);
        cy.get(".ant-row.file-delete-head").each(($el, index, $list) => {
          const lis = $el.find("#main_checkListItems_3_name").text().trim();
          cy.log(lis);
          if (lis.includes("testing4")) {
            cy.wrap($el).find(".anticon.anticon-delete").click();
            cy.wait("@deletechecklistitemtemp").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
            });

            cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn")
              .contains("SAVE")
              .click();

            cy.wait("@checklist1").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
            });

            cy.wait("@checklist").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
            });
          }
        });
      }
    });

    cy.wait(2000);

    cy.get('a[href="/all-clients"]').click();

    cy.wait("@SearchClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@visastatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("margalla hill").click();

    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllClientSource").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchCountryLinking").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getaccessingauth").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@UserSignature").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@SetHtmlTemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //adding document checklist
    cy.get(":nth-child(4) > a > .header-bar-text-div > .header-text").click({
      force: true,
    });

    cy.wait("@branch/permissions").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@DocumentView").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllByType").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@allsubjectcasedropdown").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait(1000);

    cy.contains("DOCUMENT CHECKLIST").click();
    cy.wait("@checklist").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@datachecklist").then((interception) => {
      cy.wrap(interception.response.statusCode).should("not.equal", 500);
    });

    cy.wait(2000);
    cy.get(
      ".ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();
    cy.wait(4000);
    cy.contains("cypress automation document checklist").click({ force: true });
    cy.wait(2000);

    cy.get(".anticon.anticon-delete").eq(2).click();

    cy.wait(2000);

    cy.get(
      ":nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();

    cy.wait("@postdocumentchecklist").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@clientemailsubject").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@documentCheckList").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@UserSignature").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@SetanyHtmlTemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);
    cy.get(
      ":nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();
    cy.wait(2000);

    cy.get('img[src="/static/media/edit-border-blue.a5c788a8.svg"]').click();

    cy.wait(2000);
    cy.get(".anticon.anticon-delete").eq(1).click();

    cy.wait("@deletechecklistitemnontemp").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    

    cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn")
      .contains("SAVE")
      .click({ force: true });
    cy.wait("@putdocumentchecklist").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(3000);
    cy.get(".ant-space-item:visible")
      .eq(0)
      .then(function (text2) {
        cy.visit(text2.text());
        cy.wait(2000);
      });
    cy.wait(4000);
    cy.get('input[type="file"]').attachFile("ABC.jpg");
    cy.wait(2000);
    cy.get(".btn.btn-default").click();
    cy.wait("@thankyoumessage").its("response.statusCode").should("eq", 200);
    cy.visit("https://app.ezymigrate.com/documents");
    cy.wait(8000);
    cy.contains("ABC.jpg").should("be.visible");

    //adding questionaire
    cy.get(":nth-child(10) > a > .header-bar-text-div > .header-text").click();
    cy.wait(6000);
    cy.get(
      ':nth-child(3) > [style="margin-top: 8px;"] > .ant-select > .ant-select-selector'
    ).click();
    cy.wait(5000);
    cy.contains("automation questionaire name").click();
    cy.wait(5000);
    cy.get(".pc-link-text").then(function (text1) {
      cy.visit(text1.text());
      cy.wait(2000);
    });
    cy.wait(8000);
    cy.get("#clientName").type("nabeel");
    cy.get("#sections_0_questions_0_answers_0_answer").type("bingo");
    cy.get("#sections_0_questions_1_answers_0_answer").type("jabeel");
    cy.get("#sections_0_questions_2_answers_0_answer").type("metitle");
    cy.get("#sections_0_questions_3_answers_0_answer").type(
      "balistan@gmail.com"
    );
    cy.get("#sections_0_questions_4_answers_0_answer")
      .type(futureDate, { force: true })
      .type("{enter}");
    //cy.get(date).click({multiple:true, force:true})
    // cy.get("#sections_0_questions_3_answers_0_answer").type("testing 123");

    // cy.get('#declaration').click()

    cy.get(".ant-btn > span").click();

    cy.wait("@thankyoumessage").its("response.statusCode").should("eq", 200);
    cy.wait(5000);
    cy.visit("https://app.ezymigrate.com/documents");
    cy.wait(7000);
    cy.contains("automation questionaire name.pdf..pdf ").should("be.visible");

    cy.get(".header-text").contains("Questionnaire").click();

    cy.wait("@GetAllQuestionnairs")
      .its("response.statusCode")
      .should("eq", 200);
    cy.wait("@GetAllCountries").its("response.statusCode").should("eq", 200);
    cy.wait("@allfilledquestionairesbyclientid")
      .its("response.statusCode")
      .should("eq", 200);
    cy.wait("@UserSignature").its("response.statusCode").should("eq", 200);
    cy.wait("@emailtemplate").its("response.statusCode").should("eq", 200);

    cy.get(".pc-text-inner-tab").click();

    cy.wait("@shortlink").its("response.statusCode").should("eq", 200);
    cy.wait("@getquestionaireattachmentswithid")
      .its("response.statusCode")
      .should("eq", 200);
    cy.wait("@SetanyHtmlTemplate").its("response.statusCode").should("eq", 200);

    cy.get(".ant-btn.ant-btn-primary.cq-primary-btn.button-blue")
      .contains("Merge")
      .click();

    cy.get(".ant-btn.ant-btn-default.button").contains("Ok").click();

    cy.wait("@putquestioniaremapping")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get(".header-text").contains("Client Profile").click();

    cy.wait("@SetHtmlTemplate").its("response.statusCode").should("eq", 200);
    cy.wait("@UserSignature").its("response.statusCode").should("eq", 200);
    cy.wait("@AllData").its("response.statusCode").should("eq", 200);
    cy.wait("@GetAllCountries").its("response.statusCode").should("eq", 200);
    cy.wait("@allbranchUsers").its("response.statusCode").should("eq", 200);

    cy.get("#firstName").should("have.value", "bingo");
    cy.get("#lastName").should("have.value", "jabeel");
    cy.get("#title").should("have.value", "metitle");
    cy.get("#email").should("have.value", "balistan@gmail.com");

    //exporting the client
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
    ).click();
    cy.wait(8000);
    cy.contains("Export").click();
    cy.wait(2000);
    const XLSX = require("xlsx");
    //adding assertion
    cy.readFile("cypress/downloads/ClientsList.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const contactName = "bingo jabeel";
        const isContactNamePresent = data.flat().includes(contactName);

        expect(isContactNamePresent).to.be.true;
      }
    );
    //deleting the client
    cy.contains("bingo jabeel").scrollIntoView();
    cy.wait(2000);

    cy.get(
      "#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg"
    ).click();
    //cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(2) > td:nth-child(8) > div > span > svg').click()
    //cy.get('#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg').click()
    cy.wait("@delclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    //cy.window().then(function(){
    //cy.contains('OK').click()

    //});
    //cy.type('{enter}')
    cy.wait("@SearchClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);
    cy.get('a[href="/account-settings"]').click();
    cy.get(".sus-inactive-tab-text")
      .contains("Company/Branch Level Setting")
      .click();
    cy.contains('Document Checklist').click();

    cy.wait("@documentCheckList").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@checklist").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("cypress automation document checklist")) {
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-btn.ant-btn-default.button.button-blue")
          .contains("Delete")
          .click();
      }
    });

    cy.wait("@checklist1").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@checklist").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

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
