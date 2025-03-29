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

    cy.contains("Signature").click();

    cy.wait("@UserSignature").its("response.statusCode").should("eq", 200);

    cy.contains("UPDATE").click();

    cy.wait("@putUserSignature").its("response.statusCode").should("eq", 200);

    cy.wait("@UserSignature").its("response.statusCode").should("eq", 200);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").scrollIntoView();

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains("Document View").click();

    cy.wait("@DocumentView").its("response.statusCode").should("eq", 200);

    cy.get(".ant-checkbox-input").click();

    cy.wait("@users/DocumentView").its("response.statusCode").should("eq", 200);

    cy.get(".ant-checkbox-input").click();

    cy.wait("@users/DocumentView").its("response.statusCode").should("eq", 200);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains("Outlook Integration").click();

    cy.wait("@OutlookMail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("not.eq", 500);
      if (interception.response.statusCode === 404) {
        cy.log("outlook is not integrated");
      } else {
        cy.log(
          "outlook  integrated name is: ",
          interception.response.body.givenName
        );
      }
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains("IMAP").click();

    cy.wait("@GetUserIMAP").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.log("the export email is :", interception.response.body.exportEmail);
      cy.log(
        "the export email is :",
        interception.response.body.exportUserName
      );
    });

    cy.get('a[href="/account-settings"]').click();

    cy.contains("Daily Mail Setting").click();

    cy.wait("@UserEmailSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      if (interception.response.body.dailyTaskEmail) {
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
      } else {
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
      }
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains("Company/Branch Level Setting").click();

    cy.contains("Email Content").click();

    cy.wait("@emailtemplate").then((interception) => {
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
          cy.wait("@emailtemplate").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });

          cy.wait("@delemailtemplate").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });
        }
      }
    );

    cy.get(".icons-client").click();

    cy.get(
      ".ant-col-18 > .ant-form-item-control-input > .ant-form-item-control-input-content > #emailType"
    ).type("testing automation email template");

    cy.get(".fr-wrapper.show-placeholder").type(
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

    cy.contains("Letter Templates").click();

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

    cy.contains("Contracts").click();

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

    cy.contains("Document Checklist").click();

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

    cy.get(".ant-checkbox-input").eq(1).click();

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

    cy.get(".arrow-round-cont").eq(17).click();

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
      cy.wrap(interception.response.statusCode).should("not.eq", 500);
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

    cy.wait(3000);

    cy.get(".ant-table-tbody").each(($el) => {
      const mi = $el.find("td").eq(0).text().trim();
      if (mi.includes("ABC.jpg")) {
        cy.get(".anticon.anticon-delete").click();
        cy.wait("@deleteCompanyDocument").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        

        cy.wait("@CompanyDocumentAll").then((interception) => {
          console.log("Post-delete CompanyDocumentAll:", interception.response.statusCode);
          cy.wrap(interception.response.statusCode).should("not.eq", 500);
        });
      }
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

    cy.wait(3000);

    cy.get(".faq-item-main").each(($el) => {
      const mil = $el.find("span").text().trim();
      if (mil.includes("what is your name")) {
        cy.wrap($el)
          .find('img[src="/static/media/edit-border-blue.a5c788a8.svg"]')
          .click();
        cy.get(".ant-btn.ant-btn-default.button-blue").contains("SAVE").click();

        cy.wait("@putfaq").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@faqAll").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });
    cy.wait(2000);

    cy.get(".faq-item-main").each(($el) => {
      const mil = $el.find("span").text().trim();
      if (mil.includes("what is your name")) {
        cy.wrap($el)
          .find('img[src="/static/media/delete-blue.983ea6be.svg"]')
          .click();
        cy.get(".ant-btn.ant-btn-primary").contains("OK").click();

        cy.wait("@deletefaq").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@faqAll").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.get(".sus-active-tab-text")
      .contains("Company/Branch Level Setting")
      .click();

    cy.get('span[style="margin-left: 20px;"]')
      .contains("Client Profile Setting")
      .click();

    cy.wait("@showhideclientprofilesetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      const personalInfo = interception.response.body.clientProfileSetting.find(
        function (setting) {
          return setting.type === "Personal Information";
        }
      );
      if (personalInfo && !personalInfo.status) {
        // If status is true, click once
        cy.get('label[style="padding: 10px; margin-left: 0px; width: 185px;"]')
          .eq(0)
          .click();

        cy.wait("@putshowhideclientprofilesetting").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@showhideclientprofilesetting").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      } else if (personalInfo && personalInfo.status) {
        // If status is false, click twice with a delay in between
        cy.get('label[style="padding: 10px; margin-left: 0px; width: 185px;"]')
          .eq(0)
          .click();

        cy.wait("@putshowhideclientprofilesetting").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@showhideclientprofilesetting").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait(1000); // Wait 1000 ms (1 second) before the second click
        cy.get('label[style="padding: 10px; margin-left: 0px; width: 185px;"]')
          .eq(0)
          .click();

        cy.wait("@putshowhideclientprofilesetting").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@showhideclientprofilesetting").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(1000);

    cy.get(".ant-menu-title-content").eq(4).click();
    cy.wait("@getallusers").its("response.statusCode").should("eq", 200);
    cy.wait("@BranchVisaType/All").its("response.statusCode").should("eq", 200);
    cy.wait("@visastatus").its("response.statusCode").should("eq", 200);
    cy.wait("@getmarkedtagspotentialclient")
      .its("response.statusCode")
      .should("eq", 200);
    cy.wait("@SearchClient").then((nil) => {
      expect(nil.response.statusCode).to.eq(200);
      cy.log("before first request count", nil.response.body.count);
      cy.log(
        "first api response body",
        JSON.stringify(nil.response.body.items)
      );
    });

    cy.wait(2000);
    cy.get("#first_name").type("sufi").type("{enter}");
    cy.wait(3000);
    cy.wait("@SearchClient").then((interception) => {
      // Check if the response status is 200
      expect(interception.response.statusCode).to.eq(200);
      // Log the full response to debug it
      cy.log("Full response:", JSON.stringify(interception.response.body));
      cy.log("second api request", interception.response.body.count);
      //     console.log('Request URL:', xhr.request.url); // Check the request URL
      // console.log('Request Body:', xhr.request.body); // Check the body sent
      // console.log('Response Body:', xhr.response.body);

      // Safely extract the items and response
      // const items =
      //   xhr.response && xhr.response.body ? xhr.response.body.items : [];
      // const response = xhr.response && xhr.response.body;

      // Check if the response and count are available before logging
      // if (response && response.count !== undefined) {
      //   cy.log(`Found ${response.count} clients`);
      // } else {
      //   cy.log("Response or count is undefined");
      // }
    });
    cy.get("tbody.ant-table-tbody").then(($tbody) => {
      const text = $tbody.text();
      if (text.includes("No data")) {
        cy.log("No clients found");

        // if (interception.response.body.count === 0) {
        // If no client found, add a new client
        cy.log("No client found. Adding a new client...");
        // Code to add a new client goes here
        cy.get('a[href="/add-new-client"]').click();

        cy.wait("@GetAllCountries")
          .its("response.statusCode")
          .should("eq", 200);
        cy.wait("@getallusers").its("response.statusCode").should("eq", 200);
        cy.wait("@GetAllClientSource")
          .its("response.statusCode")
          .should("eq", 200);
        cy.wait("@BranchCountryLinking")
          .its("response.statusCode")
          .should("eq", 200);

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
        cy.get("#clientSerial").type(randomNo(5));
        cy.get("#title").click({ force: true }).type("title");
        cy.get("#firstName").type("sufi");
        cy.get("#lastName").type("cup");
        cy.get("#preferredName").type("pre name");

        cy.get(
          ":nth-child(2) > .save-button-add-client > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
        )
          .scrollIntoView()
          .click();
      } else if ($tbody.find("tr.ant-table-row.ant-table-row-level-0")) {
        // Try to find the specific "test conv" client
        // const testClient = items.find((client) => {
        //   const firstName = client.firstName
        //     ? client.firstName.trim().toLowerCase()
        //     : "";
        //   const lastName = client.lastName
        //     ? client.lastName.trim().toLowerCase()
        //     : "";
        //   return firstName === "sufi" && lastName === "cup";
        // });

        // if (testClient) {
        cy.log('Client "test conv" found. Performing click action...');
        // Code to click on the "test conv" client, e.g., navigate to the client page
        cy.get(".ant-table-row.ant-table-row-level-0").each(
          ($el, index, $list) => {
            const del = $el.find("span").text().trim();

            debugger;
            console.log(del);
            if (del === "sufi cup") {
              cy.wrap($el)
                .find(
                  'span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]'
                )
                .click();
            }
          }
        );
      } else {
        cy.log('Other client(s) found, but "sufi cup" is not present.');
        // Optional: handle cases where other clients are found but not "test conv"
        // For example, you could choose to add the "test conv" client here
        cy.get('a[href="/add-new-client"]').click();

        cy.wait("@GetAllCountries")
          .its("response.statusCode")
          .should("eq", 200);
        cy.wait("@getallusers").its("response.statusCode").should("eq", 200);
        cy.wait("@GetAllClientSource")
          .its("response.statusCode")
          .should("eq", 200);
        cy.wait("@BranchCountryLinking")
          .its("response.statusCode")
          .should("eq", 200);

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
        cy.get("#clientSerial").type(randomNo(5));
        cy.get("#title").click({ force: true }).type("title");
        cy.get("#firstName").type("sufi");
        cy.get("#lastName").type("cup");
        cy.get("#preferredName").type("pre name");

        cy.get(
          ":nth-child(2) > .save-button-add-client > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
        )
          .scrollIntoView()
          .click();
      }
    });

    cy.wait(2000);
    // cy.wait("@getallusers").its("response.statusCode").should("eq", 200);

    // cy.wait("@AllData").its("response.statusCode").should("eq", 200);

    // cy.wait("@UserSignature").its("response.statusCode").should("eq", 200);

    // cy.wait("@SetHtmlTemplate").its("response.statusCode").should("eq", 200);

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

    cy.get(".ant-form.ant-form-horizontal") // Target the parent element
      .find(".denied-text") // Narrow down to the subclass
      .should("not.contain", "Personal Information"); // Ensure "Personal Information" does not exist

    cy.get(".profile-down-arrow-icon").eq(2).click();

    cy.wait("@putuserclientprofilesetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@showhideclientprofilesetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getuserclientprofilesetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(".profile-down-arrow-icon").eq(2).click();

    cy.wait("@putuserclientprofilesetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@showhideclientprofilesetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getuserclientprofilesetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('a[href="/account-settings"]').click();

    cy.contains("Company/Branch Level Setting").click();

    cy.get('span[style="margin-left: 20px;"]')
      .contains("Client Profile Setting")
      .click();

    cy.wait("@showhideclientprofilesetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('label[style="padding: 10px; margin-left: 0px; width: 185px;"]')
      .eq(0)
      .click();

    cy.wait("@putshowhideclientprofilesetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@showhideclientprofilesetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(1000);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get('span[style="margin-left: 20px;"]')
      .contains("Client Profile Custom Fields")
      .click();

    cy.wait("@getcustomfield").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#fieldFor").click();

    cy.contains("Personal Information").click();

    cy.get("#fieldType").click();

    cy.contains("Textbox").click();

    cy.get("#fieldName").type("cypress field automation");

    cy.get("#fieldData").type("description data");

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Save").click();

    cy.wait("@getcustomfield").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@postcustomfield").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(3000);

    cy.get(".ant-table-tbody").each(($el, index, $list) => {
      var customedit = $el
        .find(".ant-table-cell.ant-table-cell-row-hover")
        .eq(1)
        .text()
        .trim();

      debugger;
      console.log(customedit);
      if (customedit.includes("cypress field automation")) {
        cy.wrap($el).find(".anticon.anticon-edit").click();
        cy.get("#fieldName").type(" 1");
        cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Save").click();

        cy.wait("@getcustomfield").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@putcustomfield").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(3000);

    cy.get(".ant-table-tbody").each(($el, index, $list) => {
      var deletecustom = $el
        .find(".ant-table-cell.ant-table-cell-row-hover")
        .eq(1)
        .text()
        .trim();

      debugger;
      console.log(deletecustom);
      if (deletecustom.includes("cypress field automation 1")) {
        cy.wrap($el)
          .find('img[src="/static/media/delete-blue.983ea6be.svg"]')
          .click();

        cy.wait("@getcustomfield").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait("@delcustomfield").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(2000);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();
  });
});
