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
    cy.wait(4000);
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find('span[style="font-size: 12px; color: black;"]')
        .text()
        .trim();
      cy.log(del);
      if (del === "jason client  mia") {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-btn.ant-btn-default.button").click();
        cy.wait(1000);
      }
    });
    cy.contains("ADD POTENTIAL CLIENT").click();
    cy.wait(2000);
    cy.get("#firstName").type("jason client");
    cy.get("#lastName").type("mia");
    cy.get(".ant-form-item-control-input-content > .ant-btn > span").click();
    cy.wait(4000);

    cy.contains("jason client").click();
    cy.wait(4000);

    cy.wait("@getcompany").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getpotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("INVOICES").click();

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("ADD").click();

    cy.wait("@branch/bank").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getTax").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@LastInvoiceNumber").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('input[placeholder="Select date"]')
      .eq(0)
      .type(futureDate, { force: true })
      .type("{enter}");
    cy.get('input[placeholder="Select date"]')
      .eq(1)
      .type(futureDate, { force: true })
      .type("{enter}");
    cy.contains("Invoice Template")
      .get(".ant-select-selection-search")
      .eq(5)
      .click();

    cy.contains("NEW TESTING TEMPLATE").click();

    cy.wait("@AddNewLine").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-input-number-input").should("have.value", 120);

    cy.contains("Calculate Sub Total").click();

    cy.get("#bankAccount").click();

    cy.wait(2000)

    cy.get('div[title="test nabeel"]').click();

    cy.wait(2000)

    cy.contains("SAVE INVOICE").click();
    

    cy.wait("@invoice").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(1000);

    cy.get(".ant-btn.ant-btn-primary.ant-btn-sm.button-blue")
      .contains("Email")
      .click();

    cy.wait("@GetAllInvoiceStatuses").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@SetHtmlTemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@MultiUploadWithFileName").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@emailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Close").click();

    cy.contains("View Details").click();

    cy.wait("@getcompany").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@branch/bank").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#paymentAmount").type("120");

    cy.get("#paymentDate").type(futureDate, { force: true }).type("{enter}");

    cy.get("#paymentBank").click();

    cy.wait(2000);

    cy.contains("test nabeel").click();
    cy.wait(2000);

    cy.contains("ADD PAYMENT").click();

    cy.wait("@invoice").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(3000);

    cy.contains("DOCUMENTS").click();
    cy.wait(4000);
    cy.contains("DOCUMENT CHECKLIST").click();

    cy.get("#gender").click();
    cy.wait(4000);
    //cy.wait(4000)
    cy.contains("test document checklist").click({ force: true });
    cy.wait(2000);
    cy.get(
      ".flex-end > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();

    cy.get(
      ":nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();
    cy.wait(4000);
    cy.reload();

    cy.scrollTo("left");
    cy.intercept(
      "GET",
      "https://app.ezymigrate.com/AgreementBuilder/Thanks.htm"
    ).as("thanksd");
    cy.wait(4000);
    cy.contains("jason client").click();

    cy.wait(4000);
    cy.contains("DOCUMENTS").click();
    cy.wait(5000);
    cy.contains("DOCUMENT CHECKLIST").click();

    cy.wait(8000);
    cy.get(".ant-space-item:visible")
      .eq(0)
      .then(function (text2) {
        cy.visit(text2.text());
      });

    cy.get('input[type="file"]').attachFile("ABC.jpg");

    cy.get(".btn.btn-default").click();

    cy.wait("@thankyoumessage").its("response.statusCode").should("eq", 200);
    cy.wait(3000)

    cy.visit("https://app.ezymigrate.com/potential-client/potential-clients");

    cy.scrollTo("left");

    cy.contains("jason client").click();

    cy.contains("DOCUMENTS").click();

    cy.contains("ABC.jpg").should("be.visible");

    //cy.contains('test potential client').click()
    cy.wait(4000);
    cy.get(":nth-child(2) > .sus-inactive-tab-text-school").click();
    cy.wait(7000);
    cy.get('[data-node-key="2"]').contains("CREATE").click();
    cy.wait(7000);
    cy.get(
      ":nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
    ).click();
    cy.contains("potential clinet signtaturee").click({force:true});
    cy.wait(8000);
    cy.contains("Generate Contract Link").click();
    cy.wait(9000);
    cy.contains(
      "Copy the link in the email to send this contract, contract should have signature key (@ClientSignature) as the link purpose is to get the documents signed."
    ).should("exist");
    cy.get('[style="margin-top: 10px; display: flex;"] > a').then(function (
      text1
    ) {
      cy.visit(text1.text());
    });
    cy.wait(6000);
    cy.get("#write").click();
    cy.wait(2000);
    cy.get("#txtSign").type("nabeel");
    cy.get(".modal-content > .BtnAdd").click();
    cy.wait(6000);
    cy.get("#signature-pad-").click();
    cy.contains("Save Signature").click();
    cy.wait(8000);
    cy.wait("@thankyoumessage").its("response.statusCode").should("eq", 200);
    cy.wait(3000)
    cy.visit("https://app.ezymigrate.com/potential-client/potential-clients");
    cy.wait(5000);
    //validating the digital signature
    cy.contains("jason client").click();
    cy.wait(3000);
    cy.get(".sus-inactive-tab-text-school").eq(1).click();
    cy.wait(2000);
    cy.contains("Contract-Signed-PDF.pdf ").should("be.visible");

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();

    cy.contains("Inquiry").click();

    cy.get('input[placeholder="First Name"]')
      .type("jason client")
      .type("{enter}");

    cy.wait("@potentialclientAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("Select processing person").click({ force: true });

    cy.get('div[title="Owner nabeel"]').click();

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Search").click();

    cy.wait("@potentialclientAll").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-checkbox-input").eq(2).click();

    cy.get(".anticon.anticon-plus-circle").eq(0).click();

    cy.get(".ant-select-selection-overflow").eq(1).click();

    cy.wait(2000);

    cy.get('div[title="Nabeel Ahmed"]').eq(1).click();
    cy.wait("@InsertMultiple").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    // cy.wait("@AllpotentialClinets").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 400);
    // });

    cy.wait(4000);

    cy.get(".anticon.anticon-minus-circle").eq(0).click();

    cy.get(".ant-select-selection-search-input").eq(8).click();

    cy.get('div[title="Nabeel Ahmed"]').eq(1).click();

    cy.get(".ant-select-selection-search-input").eq(9).click({ force: true });

    cy.wait(2000);

    cy.get('div[title="team member nabeel"]').eq(2).click();

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Save").click();

    cy.wait("@ChangeProcessingPerson").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    // cy.wait("@AllpotentialClinets").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 400);
    // });

    cy.get(".anticon.anticon-plus-circle").eq(1).click();

    cy.get(".ant-select-selection-overflow").eq(1).click({ force: true });

    cy.get('div[title="tag 2"]').click();

    cy.wait("@ClientTag").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    // cy.wait("@AllpotentialClinets").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 400);
    // });

    cy.get('div[title="tag 3 "]').click();

    cy.wait("@ClientTag").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    // cy.wait("@AllpotentialClinets").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 400);
    // });

    cy.get(".anticon.anticon-minus-circle").eq(1).click();

    cy.get(".ant-select-selection-overflow").eq(1).click({ force: true });

    cy.get('div[title="tag 2"]').click();

    cy.wait("@UpdateMultiple").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    // cy.wait("@AllpotentialClinets").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 400);
    // });

    cy.get('div[title="tag 3 "]').click();

    cy.wait("@UpdateMultiple").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("Inquiry").click();
    cy.wait(4000);
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find('span[style="font-size: 12px; color: black;"]')
        .text()
        .trim();
      if (del.includes("jason")) {
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
