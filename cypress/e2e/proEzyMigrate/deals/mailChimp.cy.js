/// <reference types= "cypress" />

beforeEach(() => {
  cy.login();
});
describe("mail chimp testing", () => {
  const futureDate = Cypress.env("futureDate");

  it("Add deals", () => {
    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/mailchimp/GetIsMailChimpOrSendGrid"
    ).as("GetIsMailChimpOrSendGrid");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/company/sendgridkey/*"
    ).as("sendgridkey");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/company/sendgridkey").as(
      "sendgridkey1"
    );

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/mailchimp").as(
      "mailchimp"
    );

    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz/v1/deal/pipeline/GetByBranchId/*"
    ).as("getAllDeals");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/deal/pipeline").as(
      "pipeline"
    );

    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz/v1/deal/sendgridmap/GetSendGridList/*"
    ).as("getGridList");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/deal/stage").as("stage");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/deal/sendgridmap").as(
      "sendGridMap"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/deal/GetDealByPipelineId/*"
    ).as("getDealByPipelineId");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/deal").as("deal");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/users/ddl/All/*").as(
      "allusers"
    );

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/client/AllData/*").as(
      "alldata"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/users/UserSignature/*"
    ).as("usersignature");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/HtmlTemplate/SetHtmlTemplate"
    ).as("template");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/deal/GetDealBySubjectId/*"
    ).as("GetDealBySubjectId");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/potentialclient/*").as(
      "potentialclients"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/company/clientstatus/potentialclient/All/*"
    ).as("potentialclientstatus");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/potentialclient/SearchPotentialClientMain/**"
    ).as("searchpotential");

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/employer/SearchEmployersMain/supplier/*"
    ).as("searchemployer");

    cy.intercept("https://beta-api.ezymigrate.co.nz/v1/employer/All/*").as(
      "employer"
    );

    cy.intercept(
      "https://beta-api.ezymigrate.co.nz/v1/mailchimp/GetAllList"
    ).as("mailchimp/GetAllList");

    cy.get('a[href="/account-settings"]').click();

    cy.contains("Organization Level Setting").click();

    cy.get('img[src="/static/media/mail-chimp-icon.9b084db2.svg"]').click();

    cy.wait("@GetIsMailChimpOrSendGrid").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);

      if (interception.response.body.includes("SendGrid")) {
        cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

        cy.get(".sus-bottom-text").contains("SendGrid").click();

        cy.wait("@sendgridkey").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
          cy.wrap(interception.response.body.key).should(
            "eq",
            "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"
          );
        });
        cy.get(".remove-icon-cross > a").click();

        cy.wait("@sendgridkey1").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

        cy.get('img[src="/static/media/mail-chimp-icon.9b084db2.svg"]').click();

        cy.wait("@mailchimp").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait(2000);

        cy.get("#host_name").type("4231a02f5829e3e97f12a812cfe55fd4-us21");

        cy.get(".ant-btn.ant-btn-primary.button-blue").contains("SAVE").click();

        cy.wait("@mailchimp").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      } else if (interception.response.body.includes("MailChimp")) {
        cy.get(".anticon.anticon-left-circle.ac-back-icon").click();
      } else {
        cy.wait(2000);
        cy.get("#host_name").type("4231a02f5829e3e97f12a812cfe55fd4-us21");

        cy.get(".ant-btn.ant-btn-primary.button-blue").contains("SAVE").click();

        cy.wait("@mailchimp").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });
    cy.contains("Deals").scrollIntoView().should("be.visible").click();

    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.contains("PIPELINE").should("be.visible");

    cy.get(".ant-select-selection-search-input").eq(4).click();

    cy.contains("first pipeline").should("be.visible");

    cy.contains("PIPELINE").click();

    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const ge = $el.find("p").text().trim();
      cy.log(ge);
      debugger;
      if (ge === "my deal") {
        cy.wrap($el).find(".table-action > div > img").click();
        cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
        cy.wait("@pipeline").its("response.statusCode").should("eq", 200);
        cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);
      }
    });

    cy.wait(2000);

    cy.get(".icons-client").click();

    cy.contains("Add Pipeline").should("be.visible");

    cy.get("#main_name").type("new deal");

    cy.get("#main_description").type("testing by nabeel");

    cy.contains("Save").click();

    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.wait("@pipeline").its("response.statusCode").should("eq", 200);

    cy.contains("testing by nabeel").should("be.visible");

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const ye = $el.find("p").text().trim();
      cy.log(ye);
      debugger;
      if (ye.includes("new deal")) {
        cy.wrap($el)
          .find(
            '.table-action > [src="/static/media/edit-border-blue.a5c788a8.svg"]'
          )
          .click();
        cy.get("#main_name").clear().type("my deal");
        cy.get("#main_description").clear().should("be.empty");
        cy.contains("Save").click();
        cy.wait("@pipeline").its("response.statusCode").should("eq", 200);
        cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);
      }
    });

    cy.contains("my deal").should("be.visible");

    cy.contains("DEAL STAGES").should("be.visible").click();

    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.wait("@mailchimp/GetAllList")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get(".contact-Head").each(($el, index, $list) => {
      const fa = $el.find("h4").text().trim();
      cy.log(fa);
      if (fa === "my deal") {
        cy.wrap($el).find(".icons-client").click();
        cy.get("#main_name").type("accounting");
        cy.get("#main_winProbability").click();
        cy.get('div[title="50"]').click({ force: true });
        cy.contains("Save").click();
      }
    });

    cy.wait("@stage").its("response.statusCode").should("eq", 200);
    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const ay = $el.find("p").text().trim();
      cy.log(ay);
      if (ay.includes("accounting")) {
        cy.wrap($el)
          .find(
            'img[style="width: 15px; height: 15px; margin-right: 10px; cursor: pointer;"]'
          )
          .click();
        cy.get("#main_name").clear().type("diploma year");
        cy.get("#main_winProbability").click({ force: true });
        cy.get('div[title="30"]').click({ force: true });
        cy.contains("Save").click();
      }
    });

    cy.wait("@stage").its("response.statusCode").should("eq", 200);
    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const no = $el.find("p").text().trim();
      cy.log(no);
      if (no.includes("diploma year")) {
        cy.wrap($el)
          .find('img[src="/static/media/link-visa.4925a6d1.svg"]')
          .click();
        cy.get(".ant-select-selection-item").eq(3).click();
        cy.get('div[title="outsourcenz"]').click();
        cy.get(".ant-select-selection-item").eq(4).click();
        cy.get('div[title="Influencer"]').click();
        cy.contains("Save").click();
      }
    });

    cy.wait("@sendGridMap").its("response.statusCode").should("eq", 200);
    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.get(".contact-Head").each(($el, index, $list) => {
      const fa = $el.find("h4").text().trim();
      cy.log(fa);
      if (fa === "my deal") {
        cy.wrap($el).find(".icons-client").click();
        cy.wait(2000);
        cy.get('input[type="text"]').eq(1).type("business", { force: true });
        cy.get("#main_winProbability").click({ force: true });
        cy.get('div[title="50"]').click({ force: true });
        cy.wait(2000);
        cy.get('button[type="submit"]').eq(1).click({ force: true });
      }
    });

    cy.wait("@stage").its("response.statusCode").should("eq", 200);
    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.contains("Deals").scrollIntoView().should("be.visible").click();

    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.contains("PIPELINE").should("be.visible");

    cy.get(".ant-select-selection-search-input").eq(4).click();

    cy.contains("my deal").should("be.visible").click();

    cy.wait("@getDealByPipelineId")
      .its("response.statusCode")
      .should("eq", 200);

    cy.contains("Create Deal").should("be.visible").click();

    cy.get("#main_name").type("Nabeel client deal");

    cy.get("#main_stageId").click();

    cy.get('div[title="diploma year"]').click();

    cy.get("#main_ownerId").click();

    cy.get('div[title="Owner nabeel"]').click();

    cy.get("#main_client").type("sufi cup");

    cy.get(".search-client-card-cont").each(($el, index, $list) => {
      const mo = $el.find("span").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("nabeeloutsourcenzhard@gmail.com")) {
        cy.wrap($el).find(".date-text").eq(1).click();
      }
    });

    cy.get("#main_client").should("have.value", "sufi cup");

    cy.get("#main_amount").type("200");

    cy.get("#main_ExpCloseDate")
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.get("#main_priority").click();

    cy.get('div[title="Medium"]').click();

    cy.get('[type="submit"] > span').click();

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@getDealByPipelineId")
      .its("response.statusCode")
      .should("eq", 200);

    cy.contains("Nabeel client deal").should("be.visible");

    cy.get('img[src="/static/media/edit-border.099c03bf.svg"]').click();

    cy.get("#main_amount").should("have.value", "200").type("1");

    cy.get('button[type="submit"]').click();

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@getDealByPipelineId")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get('div[style="display: flex; justify-content: space-between;"]').each(
      ($el, index, $list) => {
        const op = $el.find("span").text().trim();
        if (op.includes("diploma year")) {
          cy.wrap($el)
            .find(
              'span[style="font-size: 14px; font-weight: 500; color: rgb(85, 85, 85);"]'
            )
            .should(($span) => {
              const text = $span.text();
              expect(text).to.equal("1");
            });
        }
      }
    );

    cy.get(".ant-input.ant-input-lg").type("sufi cup");

    cy.get(".search-client-card-cont").each(($el, index, $list) => {
      const uo = $el.find("span").text().trim();
      cy.log(uo);
      debugger;

      if (uo.includes("nabeeloutsourcenzhard@gmail.com")) {
        cy.wrap($el).find(".date-text").eq(1).click();
      }
    });

    cy.wait("@allusers").its("response.statusCode").should("eq", 200);

    cy.wait("@alldata").its("response.statusCode").should("eq", 200);

    cy.wait("@usersignature").its("response.statusCode").should("eq", 200);

    cy.wait("@template").its("response.statusCode").should("eq", 200);

    cy.get('img[src="/static/media/deals.4108e19d.png"]').click();

    cy.get(".box-shadow").each(($el, index, $list) => {
      const lo = $el.find(".deal-title").text().trim();
      if (lo === "Nabeel client deal") {
        cy.wrap($el)
          .find('img[src="/static/media/edit-border.099c03bf.svg"]')
          .click();
        cy.get("#main_stageId").click({ force: true });
        cy.get('div[title="business"]').click({ force: true });
        cy.get(".ant-btn.ant-btn-primary.button-blue")
          .eq(1)
          .click({ force: true });
      }
    });

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@GetDealBySubjectId").its("response.statusCode").should("eq", 200);

    cy.get('img[src="/static/media/plus-icon.16380594.svg"]').click();

    cy.get("#main_name").type("Nabeel from client");

    cy.get("#main_pipelineId").click({ force: true });

    cy.get('div[title="my deal"]').click({ force: true });

    cy.get("#main_stageId").click({ force: true });

    cy.get('div[title="diploma year"]').click({ force: true });

    cy.get("#main_ownerId").click({ force: true });

    cy.get('div[title="Owner nabeel"]').click({ force: true });

    cy.get("#main_amount").type("200");

    cy.get("#main_ExpCloseDate")
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.get("#main_priority").click({ force: true });

    cy.get('div[title="Medium"]').click({ force: true });

    cy.get(".ant-btn.ant-btn-primary.button-blue").eq(1).click({ force: true });

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@GetDealBySubjectId").its("response.statusCode").should("eq", 200);

    cy.contains("Deals").scrollIntoView().should("be.visible").click();

    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.contains("PIPELINE").should("be.visible");

    cy.get(".ant-select-selection-search-input").eq(4).click();

    cy.contains("my deal").should("be.visible").click();

    cy.contains("Nabeel from client").should("be.visible");

    cy.get('div[style="display: flex; justify-content: space-between;"]').each(
      ($el, index, $list) => {
        const op = $el.find("span").text().trim();
        if (op.includes("diploma year")) {
          cy.wrap($el)
            .find(
              'span[style="font-size: 14px; font-weight: 500; color: rgb(85, 85, 85);"]'
            )
            .should(($span) => {
              const text = $span.text();
              expect(text).to.equal("1");
            });
        }
      }
    );

    cy.wait(1000);

    cy.get('div[style="display: flex; justify-content: space-between;"]').each(
      ($el, index, $list) => {
        const op = $el.find("span").text().trim();
        if (op.includes("business")) {
          cy.wrap($el)
            .find(
              'span[style="font-size: 14px; font-weight: 500; color: rgb(85, 85, 85);"]'
            )
            .should(($span) => {
              const text = $span.text();
              expect(text).to.equal("1");
            });
        }
      }
    );

    cy.contains("Create Deal").should("be.visible").click();

    cy.wait("@allusers").its("response.statusCode").should("eq", 200);

    cy.get("#main_name").type("potential client deal");

    cy.get("#main_stageId").click();

    cy.get('div[title="diploma year"]').click();

    cy.get("#main_ownerId").click();

    cy.get('div[title="Owner nabeel"]').click();

    cy.get("#main_isPotential").click({ force: true });

    cy.get('div[title="Potential Client"]').click();

    cy.wait(2000);

    cy.get("#main_client").type("mil test");

    cy.get(".search-client-card-cont:visible").each(($el, index, $list) => {
      const mo = $el.find("span").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("nabeeloutsourcenz1@gmail.com")) {
        cy.wrap($el).find(".date-text").eq(1).click();
      }
    });

    cy.get("#main_client").should("have.value", "mil  test");

    cy.get("#main_amount").type("200");

    cy.get("#main_ExpCloseDate")
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.get("#main_priority").click();

    cy.get('div[title="High"]').click();

    cy.get('[type="submit"] > span').click();

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@getDealByPipelineId")
      .its("response.statusCode")
      .should("eq", 200);

    cy.contains("potential client deal").should("be.visible");

    cy.get('div[style="display: flex; justify-content: space-between;"]').each(
      ($el, index, $list) => {
        const op = $el.find("span").text().trim();
        if (op.includes("diploma year")) {
          cy.wrap($el)
            .find(
              'span[style="font-size: 14px; font-weight: 500; color: rgb(85, 85, 85);"]'
            )
            .should(($span) => {
              const text = $span.text();
              expect(text).to.equal("2");
            });
        }
      }
    );

    cy.wait(1000);

    cy.get(
      'div[style="user-select: none; padding: 8px; margin: 0px 0px 8px; border: 2px solid aliceblue; background: white;"]'
    ).each(($el, index, $list) => {
      const lo = $el.find(".deal-title").text().trim();
      if (lo === "potential client deal") {
        cy.wrap($el)
          .find('img[src="/static/media/edit-border.099c03bf.svg"]')
          .click();
        cy.get("#main_stageId").click({ force: true });
        cy.get('div[title="business"]').click({ force: true });
        cy.get(".ant-btn.ant-btn-primary.button-blue")
          .eq(1)
          .click({ force: true });
      }
    });

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@getDealByPipelineId")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get('div[style="display: flex; justify-content: space-between;"]').each(
      ($el, index, $list) => {
        const op = $el.find("span").text().trim();
        if (op.includes("business")) {
          cy.wrap($el)
            .find(
              'span[style="font-size: 14px; font-weight: 500; color: rgb(85, 85, 85);"]'
            )
            .should(($span) => {
              const text = $span.text();
              expect(text).to.equal("2");
            });
        }
      }
    );

    cy.get(".ant-select-selection-search-input").eq(2).click({ force: true });

    cy.get('div[title="Potential"]').click({ force: true });

    cy.get(".ant-input.ant-input-lg").clear().type("mil test");

    cy.wait(2000);

    cy.wait("@searchpotential").its("response.statusCode").should("eq", 200);

    cy.get(".search-client-card-cont:visible").each(($el, index, $list) => {
      const uo = $el.find("span").text().trim();
      cy.log(uo);
      debugger;

      if (uo.includes("nabeeloutsourcenz1@gmail.com")) {
        cy.wrap($el).find(".date-text").eq(1).click();
      }
    });

    cy.wait("@allusers").its("response.statusCode").should("eq", 200);

    cy.wait("@potentialclients").its("response.statusCode").should("eq", 200);

    cy.wait("@potentialclientstatus")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get(".sus-inactive-tab-text-school").eq(6).click();

    cy.wait("@GetDealBySubjectId").its("response.statusCode").should("eq", 200);

    cy.get(".box-shadow").each(($el, index, $list) => {
      const lo = $el.find(".deal-title").text().trim();
      if (lo === "potential client deal") {
        cy.wrap($el)
          .find('img[src="/static/media/edit-border.099c03bf.svg"]')
          .click();
        cy.get("#main_stageId").click({ force: true });
        cy.get('div[title="diploma year"]').click({ force: true });
        cy.get(".ant-btn.ant-btn-primary.button-blue")
          .eq(1)
          .click({ force: true });
      }
    });

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@GetDealBySubjectId").its("response.statusCode").should("eq", 200);

    cy.contains("Add Deal").click();

    cy.wait("@allusers").its("response.statusCode").should("eq", 200);

    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.get("#main_name").type("potential client side deal");

    cy.get("#main_pipelineId").click();

    cy.get('div[title="my deal"]').click();

    cy.get("#main_stageId").click();

    cy.get('div[title="diploma year"]').click();

    cy.get("#main_ownerId").click();

    cy.get('div[title="Owner nabeel"]').click();

    cy.get("#main_amount").type("200");

    cy.get("#main_ExpCloseDate")
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.get("#main_priority").click();

    cy.get('div[title="Medium"]').click();

    cy.get('[type="submit"] > span').click();

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@GetDealBySubjectId").its("response.statusCode").should("eq", 200);

    cy.get('a[href="/deals"]').click();

    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.get(".ant-select-selection-search-input").eq(4).click();

    cy.contains("my deal").click();

    cy.wait("@getDealByPipelineId")
      .its("response.statusCode")
      .should("eq", 200);

    cy.contains("Create Deal").should("be.visible").click();

    cy.wait("@allusers").its("response.statusCode").should("eq", 200);

    cy.get("#main_name").type("employer deal");

    cy.get("#main_stageId").click();

    cy.wait(2000);

    cy.get('div[title="diploma year"]').click();

    cy.get("#main_ownerId").click();

    cy.get('div[title="Owner nabeel"]').click();

    cy.get("#main_isPotential").click({ force: true });

    cy.get('div[title="Employer"]').eq(1).click();

    cy.wait(2000);

    cy.get("#main_client").type("supplier emp");

    cy.get(".search-client-card-cont:visible").each(($el, index, $list) => {
      const mo = $el.find("span").text().trim();
      cy.log(mo);
      debugger;

      if (mo.includes("rananabeelahmed772@gmail.com")) {
        cy.wrap($el).find(".date-text").eq(1).click();
      }
    });

    cy.get("#main_client").should("have.value", "supplier emp");

    cy.get("#main_amount").type("200");

    cy.get("#main_ExpCloseDate")
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.get("#main_priority").click();

    cy.get('div[title="Low"]').click();

    cy.wait(2000);

    cy.get('[type="submit"] > span').click();

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@getDealByPipelineId")
      .its("response.statusCode")
      .should("eq", 200);

    cy.contains("employer deal").should("be.visible");

    cy.get('div[style="display: flex; justify-content: space-between;"]').each(
      ($el, index, $list) => {
        const op = $el.find("span").text().trim();
        if (op.includes("diploma year")) {
          cy.wrap($el)
            .find(
              'span[style="font-size: 14px; font-weight: 500; color: rgb(85, 85, 85);"]'
            )
            .should(($span) => {
              const text = $span.text();
              expect(text).to.equal("4");
            });
        }
      }
    );

    cy.wait(1000);

    cy.get(
      'div[style="user-select: none; padding: 8px; margin: 0px 0px 8px; border: 2px solid aliceblue; background: white;"]'
    ).each(($el, index, $list) => {
      const lo = $el.find(".deal-title").text().trim();
      if (lo === "employer deal") {
        cy.wrap($el)
          .find('img[src="/static/media/edit-border.099c03bf.svg"]')
          .click();
        cy.get("#main_stageId").click({ force: true });
        cy.get('div[title="business"]').click({ force: true });
        cy.get(".ant-btn.ant-btn-primary.button-blue")
          .eq(1)
          .click({ force: true });
      }
    });

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@getDealByPipelineId")
      .its("response.statusCode")
      .should("eq", 200);

    cy.get('div[style="display: flex; justify-content: space-between;"]').each(
      ($el, index, $list) => {
        const op = $el.find("span").text().trim();
        if (op.includes("business")) {
          cy.wrap($el)
            .find(
              'span[style="font-size: 14px; font-weight: 500; color: rgb(85, 85, 85);"]'
            )
            .should(($span) => {
              const text = $span.text();
              expect(text).to.equal("2");
            });
        }
      }
    );

    cy.get(".ant-select-selection-search-input").eq(2).click({ force: true });

    cy.get('div[title="Employer"]').click();

    cy.get(".ant-input.ant-input-lg").clear().type("supplier");

    cy.wait(2000);

    cy.wait("@searchemployer").its("response.statusCode").should("eq", 200);

    cy.get(".search-client-card-cont:visible").each(($el, index, $list) => {
      const uo = $el.find("span").text().trim();
      cy.log(uo);
      debugger;

      if (uo.includes("rananabeelahmed772@gmail.com")) {
        cy.wrap($el).find(".date-text").eq(1).click();
      }
    });

    cy.wait("@employer").its("response.statusCode").should("eq", 200);

    cy.wait("@allusers").its("response.statusCode").should("eq", 200);

    cy.get(".right-bar-icon").eq(5).click();

    cy.get('img[src="/static/media/edit-border.099c03bf.svg"]').click();

    cy.get("#main_stageId").click({ force: true });

    cy.get('div[title="business"]').click({ force: true });

    cy.wait(1000);

    cy.get(".ant-btn.ant-btn-primary.button-blue:visible").eq(1).click();

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@GetDealBySubjectId").its("response.statusCode").should("eq", 200);

    cy.get('img[src="/static/media/plus-icon.16380594.svg"]').click({
      force: true,
    });

    cy.get(
      ".ant-col-16 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #main_name"
    ).type("employer side deal", { force: true });

    cy.get("#main_pipelineId").click({ force: true });

    cy.get('div[title="my deal"]').click({ force: true });

    cy.get("#main_stageId").click({ force: true });

    cy.get('div[title="business"]').click({ force: true });

    cy.get("#main_ownerId").click({ force: true });

    cy.get('div[title="Owner nabeel"]').click({ force: true });

    cy.get("#main_amount").type("200");

    cy.get("#main_ExpCloseDate")
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.get("#main_priority").click();

    cy.get('div[title="Low"]').click();

    cy.get('.document-checklist--btn > [type="submit"] > span').click();

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@GetDealBySubjectId").its("response.statusCode").should("eq", 200);

    cy.get('a[href="/deals"]').click();

    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.get(".ant-select-selection-search-input").eq(4).click();

    cy.contains("my deal").click();

    cy.wait("@getDealByPipelineId")
      .its("response.statusCode")
      .should("eq", 200);
  });
});
