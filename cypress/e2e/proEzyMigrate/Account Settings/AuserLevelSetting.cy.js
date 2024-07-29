import { setupAPIIntercepts } from "../../../support/apiIntercepts";
/// <reference types="cypress" />

beforeEach(() => {
  setupAPIIntercepts();
  cy.login();
});
describe("account setting", () => {
  const futureDate = Cypress.env("futureDate");

  it("Settings", () => {
    cy.get('a[href="/account-settings"]').click();

    cy.contains('Signature').click();

    cy.wait("@UserSignature").its("response.statusCode").should("eq", 200);

    cy.contains("UPDATE").click();

    cy.wait("@putUserSignature").its("response.statusCode").should("eq", 200);

    cy.wait("@UserSignature").its("response.statusCode").should("eq", 200);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").scrollIntoView();

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains('Document View').click();

    cy.wait("@DocumentView").its("response.statusCode").should("eq", 200);

    cy.get(".ant-checkbox-input").click();

    cy.wait("@users/DocumentView").its("response.statusCode").should("eq", 200);

    cy.get(".ant-checkbox-input").click();

    cy.wait("@users/DocumentView").its("response.statusCode").should("eq", 200);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains('Outlook Integration').click();

    cy.wait("@OutlookMail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.response.body.givenName).should(
        "eq",
        "Nabeel Ahmad"
      );
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains('IMAP').click();

    cy.wait("@GetUserIMAP").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.response.body.exportUserName).should(
        "eq",
        "Nabeel Ahmed"
      );
    });

    cy.get('a[href="/account-settings"]').click();

    cy.contains('Daily Mail Setting')
      .click();

    cy.wait("@UserEmailSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.response.body.dailyMeetingEmail).should("be.true");
    });

    cy.get("#dailyTaskEmail").click();

    cy.wait("@UserEmailSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      //cy.wrap(interception.response.body.dailyTaskEmail).should("be.false");
    });

    cy.wait("@UserEmailSetting1").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#dailyTaskEmail").click();

    cy.wait("@UserEmailSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      //cy.wrap(interception.response.body.dailyTaskEmail).should("be.true");
    });

    cy.wait("@UserEmailSetting1").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      //cy.wrap(interception.request.body.dailyTaskEmail).should("be.true");
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains("Company/Branch Level Setting").click();

    cy.contains('Email Content').click();

    cy.wait("@emailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".icons-client").click();

    cy.get(
      ".ant-col-18 > .ant-form-item-control-input > .ant-form-item-control-input-content > #emailType"
    ).type("testing automation email template");

    cy.get(
      ".fr-wrapper.show-placeholder"
    ).type(
      "description for the testing automation on the subject of the email content for template"
    );

    cy.get(
      ".ant-col-xs-2 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();

    cy.wait("@emailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@postemailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".ant-collapse-item.ant-collapse-item-active").each(
      ($el, index, $list) => {
        const mo = $el.find("h5").text().trim();
        cy.log(mo);
        debugger;

        if (mo.includes("testing automation email template")) {
          cy.wrap($el)
            .find(".ant-input.ant-input-status-success")
            .type("redraw");
          cy.wrap($el).find(".fr-element > p").type("description");
          cy.wrap($el).find('button[type="submit"]').click();
        }
      }
    );

    cy.wait("@emailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@putemailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-collapse-item.ant-collapse-item-active").each(
      ($el, index, $list) => {
        const mo = $el.find("h5").text().trim();
        cy.log(mo);
        debugger;

        if (mo.includes("testing automation email template")) {
          cy.wrap($el)
            .find(".ant-btn.ant-btn-primary.button-blue")
            .contains("Delete")
            .click();
          cy.get(".ant-btn.ant-btn-default.button-blue")
            .contains("Delete")
            .click();
        }
      }
    );

    cy.wait("@emailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@delemailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").scrollIntoView();

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains('Letter Templates').click();

    cy.wait("@DynamicKeys").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('img[src="/static/media/add-icon.325d80ae.png"]').click();

    cy.get("#main_name").type("letter templates test automation");

    cy.get(".fr-element > p").type(
      "this is the description for the letter templates"
    );

    cy.get(".ant-btn.ant-btn-primary.form-btn.button-blue")
      .contains("Save")
      .click();

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("letter templates test automation")) {
        cy.wrap($el).find(".anticon.anticon-edit").click();
      }
    });

    cy.wait(2000);

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#main_name").type(" test");

    cy.get(".fr-element.fr-view").type(" test");

    cy.get(".ant-btn.ant-btn-primary.form-btn.button-blue")
      .contains("Save")
      .click();

    cy.wait(2000);

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    // cy.get('tr').each(($el, index, $list) => {
    //     const mo = $el.find('.ant-table-cell').text().trim()
    //    cy.log(mo)
    //    debugger

    //     if (mo.includes('letter templates test automation')) {
    //       cy.wrap($el).find('.anticon.anticon-folder-add').click()
    //       cy.wait('@Attachments').then((interception) => {
    //         cy.wrap(interception.response.statusCode).should('eq', 200)

    //       })

    //     }
    // })

    // cy.wait(3000)

    // cy.get('.import-file-button-sec > :nth-child(1)')
    //   .attachFile('sample.pdf')

    // cy.wait('@image').then((interception) => {
    //     cy.wrap(interception.response.statusCode).should('eq', 200)

    //   })

    // cy.get('ant-btn.ant-btn-primary.button-blue')
    //   .contains('Upload')
    //   .click()

    // cy.wait('@Attachments1').then((interception) => {
    //     cy.wrap(interception.response.statusCode).should('eq', 200)

    //   })

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("letter templates test automation")) {
        cy.wrap($el).find(".anticon.anticon-delete").click();
      }
    });

    cy.wait(2000);

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains('Contracts').click();

    cy.wait("@DynamicKeys").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);
    cy.get('img[src="/static/media/add-icon.325d80ae.png"]').click();

    cy.get("#main_name").type("contract automation cypress testing");

    cy.get(".fr-element > p").type(
      "this is the descrition for the testoing of the contract"
    );

    cy.get('[type="submit"] > span').click();

    cy.wait(2000);

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("contract automation cypress testing")) {
        cy.wrap($el).find(".anticon.anticon-edit").click();
        cy.wait("@template/All").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.get("#main_name").type(" test");

        cy.get(".fr-element.fr-view").type(" test");

        cy.get('[type="submit"] > span').click();
      }
    });

    cy.wait(2000);

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("contract automation cypress testing")) {
        cy.wrap($el).find(".anticon.anticon-delete").click();
      }
    });

    cy.wait(2000);

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains("File Notes").click();

    cy.wait("@DynamicKeys").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);
    cy.get('img[src="/static/media/add-icon.325d80ae.png"]').click();

    cy.get("#main_name").type("file notes automation testing cypress ");

    cy.get(".fr-element.fr-view").type(
      "this is the description for the file notes testing the "
    );

    cy.get(".ant-btn.ant-btn-primary.form-btn.button-blue")
      .contains("Save")
      .click();

    cy.wait(2000);

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("file notes automation testing cypress")) {
        cy.wrap($el).find(".anticon.anticon-edit").click();
        cy.wait("@template/All").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.get("#main_name").type("test");

        cy.get(".fr-element.fr-view").type(" test");

        cy.get(".ant-btn.ant-btn-primary.form-btn.button-blue")
          .contains("Save")
          .click();
      }
    });

    cy.wait(2000);

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(4000);
    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("file notes automation testing cypress")) {
        cy.wrap($el).find(".anticon.anticon-delete").click();
      }
    });

    cy.wait(2000);

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains('Document Checklist').click();

    cy.wait("@documentCheckList").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@checklist").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.get('img[src="/static/media/add-icon.325d80ae.png"]').click();

    cy.get("#main_name").type("cypress automation document checklist ");

    cy.get("#main_description").type(
      "this is the description for the cypress document checklist automation "
    );

    cy.get('img[src="/static/media/add-icon.325d80ae.png"]').eq(1).click();

    cy.get("#main_checkListItems_0_name").type("testing by automation");

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

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("cypress automation document checklist")) {
        cy.wrap($el).find(".anticon.anticon-edit").click();

        cy.get("#main_name").type("test");

        cy.get("#main_description").type("test");

        cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn")
          .contains("SAVE")
          .click();
      }
    });

    cy.wait("@checklist1").then((interception) => {
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

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get('span[style="margin-left: 20px;"]').contains("Client Tags").click();

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".icons-client").click();

    cy.get("#main_name").type("Test tag automation");

    cy.get(".ant-btn.ant-btn-primary.form-btn").contains("Save").click();

    cy.wait("@postmarkedtags").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(5000);

    cy.get("tr").each(($el, index, $list) => {
      const mil = $el.find(".ant-table-cell").text().trim();
      cy.log(mil);

      if (mil === "Test tag automation") {
        cy.wrap($el).find(".anticon.anticon-edit").should("be.visible").click();

        cy.get("#main_name").type(" test");

        cy.get(".ant-btn.ant-btn-primary.form-btn").contains("Save").click();

        cy.wait("@putmarkedtags").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@getmarkedtagspotentialclient").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(3000);

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);

      if (mo === "Test tag automation test") {
        cy.wrap($el)
          .find(".anticon.anticon-delete")
          .should("be.visible")
          .click();
        cy.wait("@deletemarkedtags").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@getmarkedtagspotentialclient").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(5000);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get('span[style="margin-left: 20px;"]')
      .contains("Custom Message")
      .click();

    cy.wait("@QuestionnaireMessageSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-primary.form-btn.button-blue")
      .contains("Update")
      .click();

    cy.wait("@putQuestionnaireMessageSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".sus-active-tab-text")
      .contains("Company/Branch Level Setting")
      .click();

    cy.get('span[style="margin-left: 20px;"]')
      .contains("Ezyforms API Key")
      .click();

    cy.wait("@getezyformapikey").then((interception) => {
      if (interception.response.statusCode == 200) {
        cy.get(".ant-btn.ant-btn-default.button-blue")
          .contains("Re-Create")
          .click();

        cy.get("#ipAddress").type(
          "EZM_ff949095c3364963a33bed6cbe4096f2e894cff894d12f565d11144887b9dad9cfdb13b4e6d5a04f"
        );

        cy.get(".ant-btn.ant-btn-primary").contains("Save Key").click();

        cy.wait("@ThirdPartyKey").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@getezyformapikey").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      } else {
        console.log("Status code is not 200. Doing something else...");
      }
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get('span[style="margin-left: 20px;"]')
      .contains("Email Import Setting")
      .click();

    cy.wait("@BranchCCAndBCCImportSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-checkbox-input").eq(0).click();

    cy.wait("@putBranchCCAndBCCImportSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchCCAndBCCImportSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get('span[style="margin-left: 20px;"]')
      .contains("Reminder Settings")
      .click();

    cy.wait("@ReminderSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-primary.button-blue")
      .contains("Update")
      .scrollIntoView()
      .click();

    cy.wait("@postReminderSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon")
      .scrollIntoView()
      .click();

    cy.contains('API Key').eq(1).click();

    cy.wait("@apikeygetbyid").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("Genereate API Key").click();

    cy.get(".ant-btn.ant-btn-primary").contains("Generate Key").click();

    cy.wait("@postapikey").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@apikeygetbyid").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-default.button-blue")
      .contains("Revoke")
      .eq(0)
      .click();

    cy.wait("@deleteapikey").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@apikeygetbyid").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon")
      .scrollIntoView()
      .click();

    cy.get('span[style="margin-left: 20px;"]')
      .contains("Visa Update Notification")
      .click();

    cy.wait(2000);

    cy.get(".ant-btn.ant-btn-primary").contains("UPDATE").click();

    cy.wait("@UpdateBranchVisaNotification").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon")
      .scrollIntoView()
      .click();

    cy.get('span[style="margin-left: 20px;"]')
      .contains("Questionnaire Settings")
      .click();

    cy.wait("@branchQuestionnaireSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-primary")
      .contains("SAVE NOW")
      .scrollIntoView()
      .click();

    cy.wait("@putbranchQuestionnaireSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon")
      .scrollIntoView()
      .click();

    cy.get('span[style="margin-left: 20px;"]')
      .contains("EZM Common Docs")
      .click();

    cy.wait("@CompanyDocumentAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-primary.button-blue")
      .contains("ADD NEW DOCUMENT")
      .click();

    cy.get('input[type="file"]').attachFile("ABC.jpg");

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Upload").click();

    cy.wait("@postCompanyDocument").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@CompanyDocumentAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-delete").eq(1).click();

    cy.wait("@deleteCompanyDocument").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@CompanyDocumentAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon")
      .scrollIntoView()
      .click();

    cy.get('span[style="margin-left: 20px;"]')
      .contains("Check MyVisa FAQs")
      .click();

    cy.wait("@faqAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('img[src="/static/media/plus-icon.16380594.svg"]').click();

    cy.get("#question").type("what is your name");

    cy.get("#answer").type("my name is nabeel ahmed");

    cy.get(".ant-btn.ant-btn-default.button-blue").contains("SAVE").click();

    cy.wait("@postfaq").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@faqAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('img[src="/static/media/edit-border-blue.a5c788a8.svg"]')
      .eq(1)
      .click();

    cy.get(".ant-btn.ant-btn-default.button-blue").contains("SAVE").click();

    cy.wait("@putfaq").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@faqAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('img[src="/static/media/delete-blue.983ea6be.svg"]').eq(1).click();

    cy.get(".ant-btn.ant-btn-primary").contains("OK").click();

    cy.wait("@deletefaq").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@faqAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  });
});
