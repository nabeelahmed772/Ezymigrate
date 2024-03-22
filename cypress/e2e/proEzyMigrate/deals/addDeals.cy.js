import { setupAPIIntercepts } from "../../../support/apiIntercepts";
/// <reference types= "cypress" />

beforeEach(() => {
  setupAPIIntercepts();
  cy.login();
});
describe("deals", () => {
  const futureDate = Cypress.env("futureDate");

  it("Add deals", () => {

    cy.get('a[href="/account-settings"]').click();

    cy.contains("Organization Level Setting").click();

    cy.get(".sus-bottom-text").contains("SendGrid").click();

    cy.wait("@GetIsMailChimpOrSendGrid").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
      if (interception.response.body.includes("MailChimp")) {
        cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

        cy.get('img[src="/static/media/mail-chimp-icon.9b084db2.svg"]').click();

        cy.wait("@mailchimp").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
          cy.wrap(interception.response.body.mailChimpId).should(
            "eq",
            '28387673ab7038bc328f17aab1db077d-us21'
          );
        });
        cy.get(".remove-account").click();

        cy.wait("@mailchimp").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.get(".anticon.anticon-left-circle.ac-back-icon").click();

        cy.get(".sus-bottom-text").contains("SendGrid").click();

        cy.wait("@company/sendgridkey").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.wait(2000);

        cy.get("#gridKey").type(
          "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"
        );

        cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Save").click();

        cy.wait("@company/sendgridkey1").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      } else if (interception.response.body.includes("SendGrid")) {
        cy.get(".anticon.anticon-left-circle.ac-back-icon").click();
      } else {
        cy.wait(2000);
        cy.get("#gridKey").type(
          "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"
        );

        cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Save").click();

        cy.wait("@company/sendgridkey1").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.contains("Deals").scrollIntoView().should("be.visible").click();

    cy.wait("@getAllDeals").its("response.statusCode").should("eq", 200);

    cy.contains("PIPELINE").should("be.visible");

    cy.get(".ant-select-selection-search-input").eq(4).click();

    //cy.contains("first pipeline").should("be.visible");

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

    cy.wait("@getGridList").its("response.statusCode").should("eq", 200);

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

    cy.wait(2000)

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

    cy.wait(4000)

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const no = $el.find("p").text().trim();
      cy.log(no);
      if (no.includes("diploma year")) {
        cy.wrap($el)
          .find('img[src="/static/media/link-visa.4925a6d1.svg"]')
          .click();
        cy.get(".ant-select-selection-item").eq(3).click();
        cy.get('div[title="BackendDev"]').click();
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

    cy.wait(2000)

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

    cy.wait("@getallusers").its("response.statusCode").should("eq", 200);

    cy.wait("@AllData").its("response.statusCode").should("eq", 200);

    cy.wait("@UserSignature").its("response.statusCode").should("eq", 200);

    cy.wait("@SetHtmlTemplate").its("response.statusCode").should("eq", 200);

    cy.get('.ant-tabs-nav-operations-hidden').should('exist').then(($element) => {
      // Use JavaScript to modify the element's style
      cy.window().then((win) => {
        win.document.querySelector('.ant-tabs-nav-operations-hidden').style.position = 'static';
      });
    });

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

    cy.wait("@getallusers").its("response.statusCode").should("eq", 200);

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

    cy.wait("@getallusers").its("response.statusCode").should("eq", 200);

    cy.wait("@getpotentialclient").its("response.statusCode").should("eq", 200);

    cy.wait("@getmarkedtagspotentialclient")
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

    cy.wait("@getallusers").its("response.statusCode").should("eq", 200);

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

    cy.wait("@getallusers").its("response.statusCode").should("eq", 200);

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

    cy.get('a[href="/employer-management"]').click()

    cy.wait("@getmarkedtagspotentialclient").its("response.statusCode").should("eq", 200);

    cy.wait("@employer").its("response.statusCode").should("eq", 200);

    cy.get('#employer-form_name').type('supplier emp{enter}')

    cy.wait("@postsearchemployer").its("response.statusCode").should("eq", 200);

    cy.wait("@employer").its("response.statusCode").should("eq", 200);

    cy.contains('supplier emp').click()

    cy.get('.ant-tabs-nav-operations-hidden').should('exist').then(($element) => {
      // Use JavaScript to modify the element's style
      cy.window().then((win) => {
        win.document.querySelector('.ant-tabs-nav-operations-hidden').style.position = 'static';
      });
    });

    cy.wait("@getmarkedtagspotentialclient").its("response.statusCode").should("eq", 200);

    cy.wait("@getallusers").its("response.statusCode").should("eq", 200);

    cy.wait("@GetAllCountries").its("response.statusCode").should("eq", 200);

    cy.wait("@allbranchUsers").its("response.statusCode").should("eq", 200);

    cy.wait("@getcompany").its("response.statusCode").should("eq", 200);

    cy.get('.ant-tabs-tab-btn').contains('REPORTS').click()

    cy.get('.right-bar-icon').eq(5).click()

    cy.get('.ant-tabs-nav-operations-hidden').should('exist').then(($element) => {
      // Use JavaScript to modify the element's style
      cy.window().then((win) => {
        win.document.querySelector('.ant-tabs-nav-operations-hidden').style.position = 'static';
      });
    });



    


    // cy.get(".ant-select-selection-search-input").eq(2).click({ force: true });

    // cy.get('div[title="Employer"]').click();

    // cy.get(".ant-input.ant-input-lg").clear().type("supplier");

    // cy.wait(2000);

    // cy.wait("@searchemployer").its("response.statusCode").should("eq", 200);

    // cy.get(".search-client-card-cont:visible").each(($el, index, $list) => {
    //   const uo = $el.find("span").text().trim();
    //   cy.log(uo);
    //   debugger;

    //   if (uo.includes("rananabeelahmed772@gmail.com")) {
    //     cy.wrap($el).find(".date-text").eq(1).click();
    //     cy.get('.ant-tabs-nav-operations-hidden').should('exist').then(($element) => {
    //       // Use JavaScript to modify the element's style
    //       cy.window().then((win) => {
    //         win.document.querySelector('.ant-tabs-nav-operations-hidden').style.position = 'static';
    //       });
    //     });
    //   }
    // });

    // cy.wait("@getmarkedtagspotentialclient").its("response.statusCode").should("eq", 200);
    // cy.get('.ant-tabs-nav-operations-hidden').should('exist').then(($element) => {
    //   // Use JavaScript to modify the element's style
    //   cy.window().then((win) => {
    //     win.document.querySelector('.ant-tabs-nav-operations-hidden').style.position = 'static';
    //   });
    // });

    // cy.wait("@employer").its("response.statusCode").should("eq", 200);

    // cy.wait("@getallusers").its("response.statusCode").should("eq", 200);

    

    // cy.get(".right-bar-icon").eq(5).click();

    cy.get('img[src="/static/media/edit-border.099c03bf.svg"]').click();

    cy.get("#main_stageId").click({ force: true });

    cy.get('div[title="business"]').click({ force: true });

    cy.wait(3000);

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains('Save').click({force:true});

    cy.wait("@deal").its("response.statusCode").should("eq", 200);

    cy.wait("@GetDealBySubjectId").its("response.statusCode").should("eq", 200);

    cy.wait(3000)

    cy.contains('supplier emp').click()

    cy.get('.ant-tabs-nav-operations-hidden').should('exist').then(($element) => {
      // Use JavaScript to modify the element's style
      cy.window().then((win) => {
        win.document.querySelector('.ant-tabs-nav-operations-hidden').style.position = 'static';
      });
    });

    cy.wait("@getmarkedtagspotentialclient").its("response.statusCode").should("eq", 200);

    cy.wait("@getallusers").its("response.statusCode").should("eq", 200);

    cy.wait("@GetAllCountries").its("response.statusCode").should("eq", 200);

    cy.wait("@allbranchUsers").its("response.statusCode").should("eq", 200);

    cy.wait("@getcompany").its("response.statusCode").should("eq", 200);

    cy.get('.ant-tabs-tab-btn').contains('REPORTS').click()

    cy.get('.right-bar-icon').eq(5).click()

    cy.get('.ant-tabs-nav-operations-hidden').should('exist').then(($element) => {
      // Use JavaScript to modify the element's style
      cy.window().then((win) => {
        win.document.querySelector('.ant-tabs-nav-operations-hidden').style.position = 'static';
      });
    });


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

    cy.get('.document-checklist--btn > [type="submit"] > span').click({force:true});

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
