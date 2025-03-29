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

const date = 'td[title="2023-02-05"]';
const sms = "211267313";
const user_name = "rananabeelahmed772@gmail.com";
const password = "nabeel@123";

describe("Adding Employer", () => {
  const futureDate = Cypress.env("futureDate");

  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });
  it("Add employer", () => {
    

    cy.get(
      'a[href="/employer-management"]').click();
    cy.wait(5000);
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="cursor: pointer;"]'
        )
        .text()
        .trim();
      if (del === "cy new employer") {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
        cy.wait(1000);
        
      }
    });
    cy.contains("Add New").scrollIntoView();
    cy.wait(3000);
    cy.get(
      ":nth-child(4) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();
    cy.wait(5000);
    cy.get("#main_name").type("cy new employer");
    cy.get("#main_business").type("test sqa");
    cy.get("#main_email").type("test123@gmail.com");
    cy.get("#main_contact_no").type("03420811293");
    cy.get("#main_city > :nth-child(2) > .ant-input").type("test city");
    cy.get("#main_address > :nth-child(2) > .ant-input").type("test address");
    cy.scrollTo(0, 500);
    cy.wait(1000);
    cy.get("#main_contact_person > :nth-child(2) > .ant-input").type("nabeel");
    cy.get("#main_countryCodeId").type("NEW ZEALAND{enter}");

    cy.get("#main_mobile").type(sms);
    cy.get("#main_website > :nth-child(2) > .ant-input").type("test website");
    cy.get('span[title="Select job sector"]'
    ).eq(1).click();
    cy.wait(2000);
    //need to fix later
    cy.get('div[title="Administrative"]').click({
      multiple: true,
      force: true,
    });

    //cy.contains('Agriculture').eq(0).click()
    cy.get("#main_nzbn").type("123");
    cy.get("#main_occupation > :nth-child(2) > .ant-input").type("test9");
    cy.get("#main_company_size > :nth-child(2) > .ant-input").type("test");
    cy.get("#main_how_many_years > :nth-child(2) > .ant-input").type("5");
    cy.get('[type="file"]').attachFile("ABC.jpg");
    cy.wait(2000);
    cy.contains("ABC.jpg").should("be.visible");
    cy.get(
      ".add-emp-btn > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();
    cy.wait(5000);

    //updating the employer

    cy.scrollTo("left");

    cy.contains("cy new employer").click();
    cy.wait(4000);

    cy.get("#main_name").should("be.visible");
    //cy.wait(9000)
    cy.get("#main_business").clear();
    cy.wait(2000);
    cy.get("#main_business").type("test sqa update");
    cy.wait(2000);
    cy.get("#main_accredationStartDate")
      .type(futureDate, { force: true })
      .type("{enter}");
    cy.wait(2000);
    //cy.get(date).click({multiple:true, force:true})
    cy.wait(2000);
    cy.get("#main_accredationExpiryDate")
      .type(futureDate, { force: true })
      .type("{enter}");
    cy.wait(1000);
    //cy.get(futureDate).type('{enter}').click({force:true})
    cy.wait(1000);
    cy.contains("Save").scrollIntoView();
    cy.wait(1000);
    cy.get(".ant-form-item-control-input-content > .ant-btn > span").click();
    cy.wait(5000);
    // cy.get('.ant-message').should(($lis) => {
    //   expect($lis).to.have.length(3)
    //   expect($lis).to.contain('Successfully Updated')
    //   expect($lis.eq(1)).to.contain('Feed the cat')
    //   expect($lis.eq(2)).to.contain('Write JavaScript')
    // })

    // cy.get('.ant-tabs-tab-btn').eq(7).click()
    // cy.wait(2000)
    // cy.get('.pc-text-inner-tab').should('be.visible')

    //adding the file notes
    cy.wait(4000);
    cy.scrollTo("left");
    cy.contains("cy new employer").click();
    cy.wait(4000);
    cy.contains("FILE NOTES").click();
    cy.wait(5000);
    cy.get(".fr-element > p").type("testing by team , plz dont proceed this");
    cy.get(
      ".filenote-btn > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();
    cy.wait(2000);

    //adding the accredition case cases

    cy.scrollTo("left");

    cy.get(".ant-tabs-tab-btn").eq(4).click();
    cy.wait(3000);
    cy.get(".cv-top-lbtn-text").click();
    cy.wait(2000);
    cy.get(
      '[style="padding: 10px;"] > .ant-select > .ant-select-selector > .ant-select-selection-item'
    ).click();
    cy.wait(2000);
    cy.get('div[title="Employer accreditation"]').click({
      multiple: true,
      force: true,
    });
    cy.wait(2000);
    cy.get(
      '[style="padding: 0px 10px 10px;"] > .ant-picker > .ant-picker-input > input'
    )
      .type(futureDate, { force: true })
      .type("{enter}");
    //cy.get(date).click({multiple:true, force:true})
    cy.get(
      'span[title="Select Accreditation Type"]'
    ).click();
    cy.get('div[title="High-Volume"]').click({ multiple: true, force: true });
    cy.get(".ant-btn.ant-btn-default.button-blue").click({ force: true });
    cy.wait(7000);

    //updating the case status

    cy.get(
      '.right-bar-icon'
    ).eq(0).click();
    cy.wait(2000);
    cy.get(
      ":nth-child(6) > :nth-child(2) > .ant-picker > .ant-picker-input > input"
    )
      .type(futureDate, { force: true })
      .type("{enter}");
    cy.wait(2000);


    cy.get('.ant-select-selection-item:visible').eq(2).type('Client')
    cy.wait(2000);
    cy.get('div[title="Client Awaiting Document Instructions"]').click({
      multiple: true,
      force: true,
    });
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-container > .ant-form > [style="padding: 0px 10px 10px;"] > .ant-picker > .ant-picker-input > input')
      .click({ multiple: true, force: true })
      .type(futureDate, { force: true })
      .type("{enter}");
    cy.wait(2000);

    cy.wait(2000);
    cy.get(".ant-form > .button-blue-cont > .ant-btn > span").click({
      force: true,
    });
    cy.wait(4000);

    //sending the SMS

    cy.get(
      '.rightbar-icons'
    ).contains('Send SMS').click();
    cy.get('.ant-tabs-nav-operations-hidden').should('exist').then(($element) => {
      // Use JavaScript to modify the element's style
      cy.window().then((win) => {
        win.document.querySelector('.ant-tabs-nav-operations-hidden').style.position = 'static';
      });
    });

    cy.wait(2000);
    cy.get(".ant-col > .ant-input").type("employer SMS testing ");
    cy.get(
      '[style="justify-content: flex-end; margin-top: 10px;"] > .ant-col > .ant-btn > span'
    ).click();
    cy.wait(3000);

    //adding the task

    cy.get(
      '.rightbar-icons'
    ).contains('Tasks').click();
    cy.get('.ant-tabs-nav-operations-hidden').should('exist').then(($element) => {
      // Use JavaScript to modify the element's style
      cy.window().then((win) => {
        win.document.querySelector('.ant-tabs-nav-operations-hidden').style.position = 'static';
      });
    });

    cy.wait(5000);
    cy.get('[style="padding: 10px; height: 54px;"] > .ant-btn').click();
    cy.wait(1000);
    cy.get("#basic_task_title").type("employer task test");
    cy.get("#basic_task_description").type(
      "employer task test description by me"
    );
    cy.get("#basic_select_date")
      .type(futureDate, { force: true })
      .type("{enter}");

      cy.get('.ant-select-selection-overflow').eq(2).click()

    cy.get('div[title="team member nabeel"]').click()
    cy.get('label[title="Task Description"]').click()
    cy.get('[style="text-align: right;"] > .ant-btn > span').click({
      force: true,
    });
    cy.wait(5000);

    // Adding the contacts
    cy.wait(5000);
    //cy.scrollTo('top')
    cy.contains("PROFILE").click();
    //cy.xpath('//*[@id="root"]/div/div/div/section/main/div/div[2]/div/div/div/div/div/div[2]/div/div/div/div/div/div/div/div/div/table/tbody/tr[1]/td[7]/div/span[3]').click()
    cy.wait(5000);
    cy.get(".icons-client").eq(0).scrollIntoView();
    cy.get(".icons-client").eq(0).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(1) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #main_name"
    ).type("Nabeel ahmed contact");
    cy.get(
      ":nth-child(2) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #main_email"
    ).type("nabeel@gmail.com");
    cy.get("#main_number").type("383838383");
    cy.get(
      '[style="margin-left: -4px; margin-right: -4px;"] > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span'
    ).click();
    cy.wait(2000);
    cy.contains("Nabeel ahmed contact").should("be.visible");

    //Adding the job

    cy.scrollTo("left");
    cy.contains("cy new employer").click();
    //cy.xpath('//*[@id="root"]/div/div/div/section/main/div/div[2]/div/div/div/div/div/div[2]/div/div/div/div/div/div/div/div/div/table/tbody/tr[1]/td[7]/div/span[3]').click()
    cy.wait(5000);
    cy.get(".icons-client").eq(1).scrollIntoView();
    cy.get(".icons-client").eq(1).click();
    cy.wait(1000);
    cy.get("#main_job_no").type("msm34");
    cy.get("#main_job_tittle").type("software");
    cy.get("#main_openDate").click();
    cy.wait(4000);
    cy.get(".ant-picker-cell-in-view.ant-picker-cell-today").click({
      multiple: true,
      force: true,
    });
    //cy.get('.ant-picker-cell-inner>20').click()
    cy.get("#main_closeDate").type(futureDate, { force: true }).type("{enter}");
    cy.wait(1000);
    //cy.get(date).click({multiple:true, force:true})

    cy.get("#main_position").type("sqa");
    cy.get("#main_remuneration").type("123");
    cy.get("#main_experience_required").type("2 years");
    cy.get("#main_required").type("1");
    cy.get("#main_other_requirements").type("nothing");
    cy.get("#main_anzsco_code").type("mzn3243");
    cy.get("#main_policy").type("policy3");
    //cy.get('#main_policy').type('mzn3243')
    //cy.get('#main_visa_length')
    cy.get("#main_visa_length").type("2");
    cy.get("#main_advertisingExpiry")
      .click()
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.wait(1000);
    //cy.get('.ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today').eq(1).click
    cy.get(
      ":nth-child(4) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #main_address"
    ).type("test addreess");
    cy.get("#main_liaId").click();
    cy.wait(1000);
    //cy.get('.ant-select-item ant-select-item-option ant-select-item-option-active').click()
    cy.get("#main_skillMatesReportExpiry")
      .click()
      .type(futureDate, { force: true })
      .type("{enter}");
    cy.wait(1000);

    //cy.get('.ant-picker-cell ant-picker-cell-in-view ant-picker-cell-today').eq(2).click()
    cy.get("#main_skill_level").type("basic");
    cy.get("#main_salesPersonId").click();
    cy.wait(1000);
    //cy.get('.ant-select-item ant-select-item-option ant-select-item-option-active').eq(1).click()
    cy.get('.emp-froala > .letter-froala > .froala-font-arial-use > .ant-spin-nested-loading > .ant-spin-container > .fr-box > .fr-wrapper > .fr-element > p')
      .click({ multiple: true, force: true })
      .type("testing by nabeel");
    cy.contains("Save").scrollIntoView();
    cy.get('.document-checklist--btn > [type="submit"] > span').click();
    cy.wait(4000);

    //adding questionaire
    cy.wait(2000);
    cy.scrollTo("left");

    cy.contains("cy new employer").click();
    cy.wait(4000);

    cy.get(".ant-tabs-tab-btn").eq(7).click();
    cy.wait(2000);
    cy.get(
      ':nth-child(2) > [style="margin-top: 8px;"] > .ant-select > .ant-select-selector'
    ).click({ force: true });
    cy.wait(2000);
    cy.get('div[title="mobile testing questionare"]').click({ force: true });
    cy.wait(4000);
    cy.get(".pc-link-text").then(function (text2) {
      cy.visit(text2.text());
    });

    cy.wait(6000);
    cy.get("#clientName").type("nabeel");
    cy.get("#sections_0_questions_0_answers_0_answer").type("test qw");
    cy.get("#sections_0_questions_1_answers_0_answer").type("test qw2");
    cy.get("#sections_0_questions_2_answers_0_answer")
      .type(futureDate, { force: true })
      .type("{enter}");
    //cy.get(date).click({multiple:true, force:true})
    cy.get("#sections_0_questions_3_answers_0_answer").type("testing 123");
    cy.get("#sections_0_questions_4_answers_0_answer").type("testing limk");
    cy.get('#declaration').click()
    cy.get(".ant-btn > span").click();
    cy.wait(10000);
    cy.visit("https://app.ezymigrate.com/employer-management");

    //validating questionaire has beeb submitted

    cy.wait(7000);
    cy.scrollTo("left");
    cy.contains("cy new employer").click();
    cy.wait(7000);
    cy.scrollTo("top");
    cy.get(".ant-tabs-tab-btn").eq(2).click();
    cy.wait(5000);
    cy.contains("mobile testing questionare.pdf..pdf ").should("be.visible");

    //signing the employer digital signature
    cy.get(".ant-tabs-tab-btn").eq(3).click();
    cy.wait(7000);
    cy.get(".ant-tabs-tab-btn").contains("CREATE").click();
    cy.wait(7000);
    cy.get(
      '[style="margin-left: -4px; margin-right: -4px;"] > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'
    ).click();
    cy.contains("employer signature").click({ force: true });
    cy.wait(8000);
    cy.intercept(
      "GET",
      "https://app.ezymigrate.com/AgreementBuilder/Thanks.htm"
    ).as("thanksok");
    cy.contains("Generate Contract Link").click();
    cy.wait(6000);
    cy.contains(
      "Copy the link in the email to send this contract, contract should have signature key (@ClientSignature) as the link purpose is to get the documents signed."
    ).should("exist");
    cy.get('[style="margin-top: 10px; display: flex;"] > a').then(function (
      text1
    ) {
      cy.visit(text1.text());
    });
    cy.wait(8000);
    cy.get("#write").click();
    cy.wait(2000);
    cy.get("#txtSign").type("nabeel");
    cy.get(".modal-content > .BtnAdd").click();
    cy.wait(6000);
    cy.get("#signature-pad-").click();
    cy.contains("Save Signature").click();
    cy.wait(3000);
    cy.wait("@clientcontractagreeement").its("response.statusCode").should("eq", 404);
    cy.wait("@thankyoumessage").its("response.statusCode").should("eq", 200);
    cy.wait(3000);

    cy.visit("https://app.ezymigrate.com/employer-management");

    //validating the digital signature
    cy.wait(7000);
    cy.scrollTo("left");
    cy.contains("cy new employer").click();
    cy.wait(7000);
    cy.scrollTo("top");
    cy.get(".ant-tabs-tab-btn").eq(2).click();
    cy.wait(5000);
    cy.contains("Contract-Signed-PDF.pdf").should("be.visible");

    //exporting  the employer
    cy.contains("Employer Management").click();
    cy.wait(2000);

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="cursor: pointer;"]'
        )
        .text()
        .trim();
      if (del === "cy new employer") {
        cy.log(del);
        cy.wrap($el).find(".ant-select.ant-select-single.ant-select-show-arrow").click();
        cy.wait("@allfilledquestionairesbyclientid").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.get('div[title="mobile testing questionare"]').click();
        cy.wait(1000);
        cy.wait("@branchQuestionnaireSetting").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@BranchVisaType/All").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@getbranchquesionairesettingq").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@GetAllCountries").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@getquestionaireattachmentswithid").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.get('#declaration').click()

        cy.contains('Submit').click()
        cy.wait("@potentialfilledanswer").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.get('.anticon.anticon-close.ant-modal-close-icon')
          .click()

        
      }
    });

    cy.contains("Export").click();
    cy.wait(7000);
    const XLSX = require("xlsx");
    //adding assertion
    cy.readFile("cypress/downloads/EmployersList.xlsx", "binary").then(
      (fileContent) => {
        const workbook = XLSX.read(fileContent, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // assuming data is in the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        expect(data[1][0]).to.equal("cy new employer"); // assuming the data you're looking for is in the second cell of the first row
      }
    );
    cy.reload();

    //deleting the employer
    cy.scrollTo("right");
    cy.wait(4000);
    cy.wait("@employer").its("response.statusCode").should("eq", 200);
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="cursor: pointer;"]'
        )
        .text()
        .trim();
      if (del === "cy new employer") {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
        cy.wait(1000);
        
      }
    });
   
  });
});
