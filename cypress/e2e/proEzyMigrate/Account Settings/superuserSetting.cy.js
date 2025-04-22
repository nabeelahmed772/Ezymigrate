import { setupAPIIntercepts } from "../../../support/apiIntercepts";
/// <reference types="cypress" />

beforeEach(() => {
  setupAPIIntercepts();
  cy.login();
});
describe("account setting", () => {
  const futureDate = Cypress.env("futureDate");

  it("Settings", () => {
    
    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Logout").click();

    cy.wait("@accountlogout").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    

    cy.wait("@GetLoginPageImage").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#userName").type("nabeeloutsourcenzhard@gmail.com");

    cy.get("#password").type("Nabeel@123");

    cy.get(".sus-modal-button-text").contains("Log In").click();

    cy.contains("Client Analytics").should("be.visible");

    cy.wait("@getallreminders").then((interception) => {
      cy.wrap(interception.response.statusCode).should("not.equal", 500);
    });

    cy.wait("@contract/GetCount").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@ChecklistQuestionnaireCount").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/ClientAnalytics").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/AccountAnalytics").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/VisaAnalytic").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/IdleSince").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/ActiveSince").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@visastatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/ActiveClientBalance").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(
      'a[href="/super-user-setting?activeTab=company-information"]'
    ).click();

    cy.wait("@companyusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@companygroup").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getcompany").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllCurrencies").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@companyuserowner").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      cy.wrap(interception.response.body.count).as("userCount")
    });

    cy.wait("@companyuserstorage").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getbranchuser").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("SAVE").click();

    cy.wait("@putcompany").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(
      'a[href="/super-user-setting?activeTab=owner-manager-settings"]'
    ).click();

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.get('@userCount').then((user) =>{
    if(user>1){
    cy.get('input[placeholder="Password"]').eq(0).type("Nabeel@123");

    cy.get('input[placeholder="Confirm Password"]').eq(0).type("Nabeel@123");

    cy.get(".ant-btn.ant-btn-primary.sus-save-btn")
      .contains("CHANGE PASSWORD")
      .click();

    cy.wait("@changepassword").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    })
  }else if(user=1){
    cy.get('input[placeholder="Password"]').type("Nabeel@123");

    cy.get('input[placeholder="Confirm Password"]').type("Nabeel@123");

    cy.get(".ant-btn.ant-btn-primary.sus-save-btn")
      .contains("CHANGE PASSWORD")
      .click();

    cy.wait("@changepassword").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    })

  }else{
    cy.log("No user found");
  }
  })

    cy.get('a[href="/super-user-setting?activeTab=add-branch"]').click();

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllCurrencies").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('a[href="/super-user-setting?activeTab=add-team-member"]').click();

    cy.get(
      'a[href="/super-user-setting?activeTab=team-member-settings"]'
    ).click();

    cy.wait("@AllBranch").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@companyallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-primary.sus-add-btn:visible").eq(1).click();

    cy.wait("@totalowners").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@companyallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@putusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('a[href="/super-user-setting?activeTab=add-agent"]').click();

    cy.get(".header-text").contains("Branch Settings").click();

    cy.wait("@getbranchuser").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllCurrencies").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".sus-bottom-text").contains("(Default Branch)").click();

    cy.wait("@branchusersdefault").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-primary.sus-add-btn").eq(0).click();

    cy.wait("@putbranchin").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllBranch").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-btn.ant-btn-primary.sus-add-btn").eq(1).click();

    cy.wait("@totalowners").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@putusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@putbranchuser").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@branchusersdefault").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".sus-permission-card-cont").each(($el, index, $list) => {
      cy.wrap($el)
        .find(".profile-input")
        .invoke("val") // Get the value attribute of the input
        .then((value) => {
          cy.log(value);

          if (value.includes("yetanother")) {
            cy.wrap($el)
              .find(".ant-btn.ant-btn-primary.sus-save-btn")
              .contains("GIVE ACCESS")
              .should("be.visible")
              .click();

            cy.wait("@putuserpermission").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
            });
          }
        });
    });

    cy.get(".ant-select-selection-item").eq(0).click();

    cy.get('div[title="new branch"]').click();

    cy.wait("@changebranchtoken").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getuserpermission").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getbranchuser").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("Client Analytics").should("be.visible");

    cy.wait("@getallreminders").then((interception) => {
      cy.wrap(interception.response.statusCode).should("not.equal", 500);
    });

    cy.wait("@contract/GetCount").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@ChecklistQuestionnaireCount").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/ClientAnalytics").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/AccountAnalytics").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/VisaAnalytic").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/IdleSince").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/ActiveSince").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@visastatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/ActiveClientBalance").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(4000)


    cy.get(".ant-select-selection-item").eq(0).click();

    cy.get('div[title="2boutsource"]').click(); 

    cy.wait(2000)

     cy.wait("@changebranchtoken").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getuserpermission").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getbranchuser").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("Client Analytics").should("be.visible");

    cy.wait("@getallreminders").then((interception) => {
      cy.wrap(interception.response.statusCode).should("not.equal", 500);
    });

    cy.wait("@contract/GetCount").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@ChecklistQuestionnaireCount").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/ClientAnalytics").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/AccountAnalytics").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/VisaAnalytic").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/IdleSince").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/ActiveSince").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@visastatus").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dashboardbi/ActiveClientBalance").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    


  });

});
