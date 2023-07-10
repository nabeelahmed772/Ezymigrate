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
  it("Add potential", () => {
    // defaultCommandTimeout: 10000
    // cy.viewport(1366, 657)

    // //cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/dashboardbi/AccountAnalytics').as('load')

    // //cy.visit('https://app-stage.ezymigrate.co.nz/login')
    // cy.visit('https://app.ezymigrate.com/login')

    // cy.getCookies({log:true})

    // cy.clearCookies({log:true})

    // cy.getCookies().should('be.empty')

    // cy.clearAllCookies({log:true})

    // cy.clearAllLocalStorage({log:true})

    // //cy.intercept('POST', '/ActiveSince*').as('login')

    // cy.get('#userName > .profile-input-login').type(user_name)
    // cy.get('#password > .profile-input-login').type(password)
    // cy.get('.sus-modal-button-text').click()
    // //cy.wait(9000)

    //   cy.contains('Client Analytics').should('be.visible')
    cy.login();

    cy.intercept('PUT', 'https://beta-api.ezymigrate.co.nz/v1/ClientTag/UpdateMultiple')
      .as('UpdateMultiple')

    cy.intercept('POST', 'https://beta-api.ezymigrate.co.nz/v1/ClientTag/InsertMultiple')
      .as('ClientTag')

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/client/processingperson/InsertMultiple"
    ).as("InsertMultiple");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/potentialclient/All"
    ).as("AllpotentialClinets");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/client/processingperson/ChangeProcessingPerson"
    ).as("ChangeProcessingPerson");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/potentialclient/*").as(
      "potentialclient"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/potentialclient/markedtags/All/*"
    ).as("markedtags/All");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/company/BranchVisaType/All/*"
    ).as("BranchVisaType/All");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/config/GetAllCountries"
    ).as("GetAllCountries");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/company/*").as(
      "company"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/company/BranchVisaType/*"
    ).as("BranchVisaType");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/branch/bank/*").as(
      "bank"
    );

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/branch/tax/All/*").as(
      "tax"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/invoice/LastInvoiceNumber/*"
    ).as("LastInvoiceNumber");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/branch/AllWithLinks").as(
      "AllWithLinks"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/invoice/AddNewLine/*"
    ).as("AddNewLine");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/invoice").as("invoice");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/invoice/*").as(
      "invoice1"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/invoice/status/GetAllInvoiceStatuses/*"
    ).as("GetAllInvoiceStatuses");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/HtmlTemplate/SetHtmlTemplate"
    ).as("SetHtmlTemplate");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/document/MultiUploadWithFileName"
    ).as("MultiUploadWithFileName");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/emailtemplate/*").as(
      "emailtemplate"
    );

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[7]/div/span'
    ).click();
    cy.wait(2000);
    cy.contains("Inquiry").click();
    cy.wait(4000);
    cy.contains("ADD POTENTIAL CLIENT").click();
    cy.wait(2000);
    cy.get("#firstName").type("jason client");
    cy.get("#lastName").type("mia");
    cy.get(".ant-form-item-control-input-content > .ant-btn > span").click();
    cy.wait(4000);

    cy.contains("jason client").click();
    cy.wait(4000);

    cy.wait("@company").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@markedtags/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@potentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("INVOICES").click();

    cy.wait("@markedtags/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("ADD").click();

    cy.wait("@bank").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@tax").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@LastInvoiceNumber").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllWithLinks").then((interception) => {
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
      .eq(6)
      .click();

    cy.contains("NEW TESTING TEMPLATE").click();

    cy.wait("@AddNewLine").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-input-number-input").should("have.value", 120);

    cy.contains("Calculate Sub Total").click();

    cy.get("#bankAccount").click();

    cy.get('div[title="test nabeel"]').click();

    cy.contains("SAVE INVOICE").click();

    cy.wait("@invoice").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@markedtags/All").then((interception) => {
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

    cy.wait("@company").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@bank").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#paymentAmount").type("120");

    cy.get("#paymentDate").type(futureDate, { force: true }).type("{enter}");

    cy.get("#paymentBank").click();

    cy.wait(2000);

    cy.contains("test nabeel").click();

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

    cy.wait(6000);
    cy.wait("@thanksd").its("response.statusCode").should("eq", 200);

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
    cy.contains("potential clinet signtaturee").click();
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
    cy.wait(10000);
    cy.wait("@thanksd").its("response.statusCode").should("eq", 200);
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

    cy.wait("@AllpotentialClinets").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("Select sales person").click({ force: true });

    cy.get('div[title="Owner nabeel"]').click();

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Search").click();

    cy.wait("@AllpotentialClinets").then((interception) => {
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

    cy.wait(4000)

    cy.get(".anticon.anticon-minus-circle").eq(0).click();

    cy.get(".ant-select-selection-search-input").eq(9).click();

    cy.get('div[title="Nabeel Ahmed"]').eq(1).click();

    cy.get(".ant-select-selection-search-input").eq(10).click({force:true});

    cy.wait(2000)

    cy.get('div[title="team member nabeel"]').eq(2).click();

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Save").click();

    cy.wait("@ChangeProcessingPerson").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    // cy.wait("@AllpotentialClinets").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 400);
    // });

    cy.get(".anticon.anticon-plus-circle").eq(1).click();

    cy.get('.ant-select-selection-overflow').eq(1).click({force:true});

    cy.get('div[title="tag 2"]')
      .click()

      cy.wait("@ClientTag").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });
  
      // cy.wait("@AllpotentialClinets").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 400);
      // });

      cy.get('div[title="tag 3 "]')
      .click()

      cy.wait("@ClientTag").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });
  
      // cy.wait("@AllpotentialClinets").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 400);
      // });

      cy.get(".anticon.anticon-minus-circle").eq(1).click();

      cy.get('.ant-select-selection-overflow').eq(1).click({force:true});

      cy.get('div[title="tag 2"]')
      .click()

      cy.wait("@UpdateMultiple").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });
  
      // cy.wait("@AllpotentialClinets").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 400);
      // });

      cy.get('div[title="tag 3 "]')
      .click()

      cy.wait("@UpdateMultiple").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });
  
      // cy.wait("@AllpotentialClinets").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 400);
      // });







    

    cy.get(".anticon.anticon-delete").eq(0).click();
    cy.get(
      '[style="display: flex; margin-top: 40px;"] > :nth-child(2) > .ant-btn > span'
    ).click();

    cy.wait("@AllpotentialClinets").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  });
});
