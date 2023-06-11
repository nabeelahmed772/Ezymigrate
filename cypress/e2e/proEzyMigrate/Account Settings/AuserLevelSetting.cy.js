/// <reference types= "cypress" />

beforeEach(() => {
  cy.login();
});
describe("account setting", () => {
  const futureDate = Cypress.env("futureDate");

  it("Settings", () => {
    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz/v1/users/UserSignature/*"
    ).as("signature");

    cy.intercept(
      "PUT",
      "https://beta-api.ezymigrate.co.nz/v1/users/UserSignature"
    ).as("UserSignature");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/users/DocumentView/*"
    ).as("DocumentView");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/users/DocumentView").as(
      "users/DocumentView"
    );

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/OutlookMail").as(
      "OutlookMail"
    );

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/users/GetUserIMAP/*").as(
      "GetUserIMAP"
    );

    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz//v1/users/UserEmailSetting/**"
    ).as("UserEmailSetting");

    cy.intercept(
      "PUT",
      "https://beta-api.ezymigrate.co.nz/v1/users/UserEmailSetting"
    ).as("UserEmailSetting1");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/emailtemplate/*").as(
      "emailtemplate"
    );

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/emailtemplate").as(
      "emailtemplate1"
    );

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/template/All/*").as(
      "template/All"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/config/DynamicKeys/All"
    ).as("DynamicKeys");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/template").as(
      "template"
    );

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/template/*").as(
      "template1"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz//v1/template/Attachments/All/*"
    ).as("Attachments");

    cy.intercept("blob:https://app.ezymigrate.com/*").as("image");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz//v1/template/Attachments"
    ).as("Attachments1");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/temp/document/checklist/All/*"
    ).as("checklist");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/template/documentCheckList/*"
    ).as("documentCheckList");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/temp/document/checklist"
    ).as("checklist1");

    cy.get('a[href="/account-settings"]').click();

    cy.get('img[src="/static/media/signature.f768e9da.svg"]').click();

    cy.wait("@signature").its("response.statusCode").should("eq", 200);

    cy.contains("UPDATE").click();

    cy.wait("@signature").its("response.statusCode").should("eq", 200);

    cy.wait("@UserSignature").its("response.statusCode").should("eq", 200);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").scrollIntoView();

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get('img[src="/static/media/documents.87dcbd39.svg"]').click();

    cy.wait("@DocumentView").its("response.statusCode").should("eq", 200);

    cy.get(".ant-checkbox-input").click();

    cy.wait("@users/DocumentView").its("response.statusCode").should("eq", 200);

    cy.get(".ant-checkbox-input").click();

    cy.wait("@users/DocumentView").its("response.statusCode").should("eq", 200);

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get('img[src="/static/media/creative-commons.ee0ddd09.png"]').click();

    cy.wait("@OutlookMail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.response.body.givenName).should(
        "eq",
        "Nabeel Ahmad"
      );
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get('img[src="/static/media/imap.b98ed5fa.svg"]').click();

    cy.wait("@GetUserIMAP").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.response.body.exportUserName).should(
        "eq",
        "Nabeel Ahmed"
      );
    });

    cy.get('a[href="/account-settings"]').click();

    cy.get('img[src="/static/media/daily-mail-settings.3d918485.svg"]').click();

    cy.wait("@UserEmailSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.response.body.dailyMeetingEmail).should("be.true");
    });

    cy.get("#dailyTaskEmail").click();

    cy.wait("@UserEmailSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.response.body.dailyTaskEmail).should("be.false");
    });

    cy.wait("@UserEmailSetting1").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.request.body.dailyTaskEmail).should("be.false");
    });

    cy.get("#dailyTaskEmail").click();

    cy.wait("@UserEmailSetting").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.response.body.dailyTaskEmail).should("be.true");
    });

    cy.wait("@UserEmailSetting1").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.request.body.dailyTaskEmail).should("be.true");
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains("Company/Branch Level Setting").click();

    cy.get('img[src="/static/media/email-content.f6c6e288.svg"]').click();

    cy.wait("@emailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".icons-client").click();

    cy.get(
      ".ant-col-18 > .ant-form-item-control-input > .ant-form-item-control-input-content > #emailType"
    ).type("testing automation email template");

    cy.get(
      ".ant-form-item-control-input-content > .froala-font-arial-use > .fr-box > .fr-wrapper > .fr-element > p"
    ).type(
      "description for the testing automation on the subject of the email content for template"
    );

    cy.get(
      ".ant-col-xs-2 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();

    cy.wait("@emailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@emailtemplate1").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

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

    cy.wait("@emailtemplate1").then((interception) => {
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

    cy.wait("@emailtemplate1").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").scrollIntoView();

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get('img[src="/static/media/letter-template.425cdba4.svg"]').click();

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
      .contains("Submit")
      .click();

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("letter templates test automation")) {
        cy.wrap($el).find(".anticon.anticon-edit").click();
      }
    });

    cy.wait("@template1").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#main_name").type("test");

    cy.get(".fr-element > p").type("test");

    cy.get(".ant-btn.ant-btn-primary.form-btn.button-blue")
      .contains("Submit")
      .click();

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

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get('img[src="/static/media/contract.d1118230.svg"]').click();

    cy.wait("@DynamicKeys").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('img[src="/static/media/add-icon.325d80ae.png"]').click();

    cy.get("#main_name").type("contract automation cypress testing");

    cy.get(".fr-element > p").type(
      "this is the descrition for the testoing of the contract"
    );

    cy.get('[type="submit"] > span').click();

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("contract automation cypress testing")) {
        cy.wrap($el).find(".anticon.anticon-edit").click();
        cy.wait("@template1").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.get("#main_name").type("test");

        cy.get(".fr-element > p").type("test");

        cy.get('[type="submit"] > span').click();
      }
    });

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("contract automation cypress testing")) {
        cy.wrap($el).find(".anticon.anticon-delete").click();
      }
    });

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.contains("File Notes").click();

    cy.wait("@DynamicKeys").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('img[src="/static/media/add-icon.325d80ae.png"]').click();

    cy.get("#main_name").type("file notes automation testing cypress ");

    cy.get(".fr-element > p").type(
      "this is the description for the file notes testing the "
    );

    cy.get(".ant-btn.ant-btn-primary.form-btn.button-blue")
      .contains("Submit")
      .click();

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("file notes automation testing cypress")) {
        cy.wrap($el).find(".anticon.anticon-edit").click();
        cy.wait("@template1").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.get("#main_name").type("test");

        cy.get(".fr-element > p").type("test");

        cy.get(".ant-btn.ant-btn-primary.form-btn.button-blue")
          .contains("Submit")
          .click();
      }
    });

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.get("tr").each(($el, index, $list) => {
      const mo = $el.find(".ant-table-cell").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("file notes automation testing cypress")) {
        cy.wrap($el).find(".anticon.anticon-delete").click();
      }
    });

    cy.wait("@template").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@template/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

    cy.get('img[src="/static/media/doc-checklist.52f37436.svg"]').click();

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

    cy.get(".anticon.anticon-left-circle.ac-back-icon").click();
  });
});
