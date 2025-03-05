import { setupAPIIntercepts } from "../../../support/apiIntercepts";
/// <reference types= "cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Adding school", () => {
  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });
  it("Add school", () => {
    cy.interceptSearchClient();
    cy.get('a[href="/school-management"]').click();
    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@programdetail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getschooltype").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@schoolall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@postschoolstudentlist")
      .as("firstRequest")
      .then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);

        const totalRecords = interception.response.body.totalRecords;
        if (totalRecords > 20) {
          cy.get(".ant-pagination-item.ant-pagination-item-2")
            .click()
            .then(() => {
              cy.wait(2000);

              cy.wait("@postschoolstudentlist")
                .as("secondRequest")
                .then((secinterception) => {
                  cy.wrap(secinterception.response.statusCode).should(
                    "eq",
                    200
                  );
                  const secondPageRequest = secinterception.request.body;
                  expect(secondPageRequest.pageNumber).to.equal(2);
                });
            });
          cy.get('span[title="20 / page"]').click();
          cy.get('div[title="25 / page"]').click();
          cy.wait(2000);
          cy.wait("@postschoolstudentlist").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
            cy.wrap(interception.request.body.pageNumber).should("eq", 1);
            cy.wrap(interception.request.body.pageSize).should("eq", 25);
          });
        } else {
          cy.log("there are not enough student lists which is more than 10");
        }
      });

    cy.get(":nth-child(2) > .header-bar-text-div > .header-text").click();
    cy.wait(5000);
    cy.get(".icons-client").click();
    cy.wait(2000);
    cy.get("#type").click();
    cy.contains("Highschool").click();
    cy.get("#name").type("test school name");
    cy.get("#city").type("city test");
    cy.get("#address").type("test address");
    cy.get("#website").type("www.test.com");
    cy.get("#email").type("test@gmail.com");
    cy.get("#notes").type("testig by nabeel");
    cy.get('[type="file"]').attachFile("ABC.jpg");
    //cy.get('.anticon anticon-upload').attachFile('ABC.jpg' )
    cy.wait(3000);

    //adding contacts

    cy.get(
      ":nth-child(2) > :nth-child(1) > .margin-contact-container > .ant-col-xs-12 > .add-tag-btn > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .icons-client"
    ).click();
    cy.wait(2000);
    cy.get("#contacts_0_name").type("test name");
    cy.get("#contacts_0_email").type("test@gmail.com");
    cy.get("#contacts_0_description").type("test address descriptio");

    //adding level

    cy.get(
      ":nth-child(5) > :nth-child(1) > .margin-contact-container > .ant-col-xs-12 > .add-tag-btn > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .icons-client"
    ).click();
    cy.get("#levels_0_name").type("first level");
    cy.get("#levels_0_description").type("test description");
    cy.get("#levels_0_percentage").type("12%");
    cy.get(
      ".ant-col-offset-18 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();
    cy.wait(6000);

    //adding invoice

    cy.get('a[href="/all-clients"]').click();
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

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]'
        )
        .text()
        .trim();
      if (del === "cypressInvoice test") {
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

    cy.wait(1000);

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[6]/span/a'
    ).click();
    cy.wait(3000);
    cy.get("#firstName").type("cypressInvoice");
    cy.get("#lastName").type("test");
    cy.get("#preferredName").type("pre name");

    cy.get(
      ":nth-child(2) > .save-button-add-client > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();

    cy.wait(7000);

    cy.wait("@client").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@clientlog").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@GetLink").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".header-text").contains("Admission").click();
    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@programdetail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@programdetail/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@getschooltype").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@getallcommissionreminder").then((interception) => {
      cy.wrap(interception.response.statusCode).should("not.equal", 500);
    });
    cy.wait("@branch/permissions").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains("START NEW APPLICATION").click();
    cy.wait("@getschooltype")
      .as("secondgetschooltype")
      .then((secondscinterception) => {
        cy.wrap(secondscinterception.response.statusCode).should("eq", 200);
      });

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

    cy.get("#schoolType").click();

    cy.get('div[title="Highschool"]').click({ multiple: true, force: true });

    cy.get("#school").click();

    cy.get('div[title="test school name"]').click({
      multiple: true,
      force: true,
    });

    cy.wait(2000);

    cy.get("#schoolLevel").click();

    cy.wait(3000);

    cy.get('div[title="first level"]').click({ multiple: true, force: true });

    cy.get("#program").type("program no");

    cy.get("#fee").type("123");

    cy.get("#studentNo").type("32");

    cy.get("#description").type("testing description");

    cy.get("#startDate").type(futureDate, { force: true }).type("{enter}");

    //cy.get(date).click({multiple:true , force:true});

    cy.get(".ant-form-item-control-input-content > .ant-btn > span").click();

    cy.wait("@clientlog").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@programdetail/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@programdetail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //updating the admission

    cy.get(".anticon.anticon-down").eq(3).click();

    cy.get("#visaApproveDate")
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.get("#courseEffectiveDate")
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.get("#formalOfferDate")
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.get(".ant-btn.ant-btn-default.button-blue").contains("UPDATE").click();

    cy.wait("@clientlog").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@programdetail/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@putprogramdetail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('a[href="/accounts"]').click();
    cy.wait(3000);
    cy.contains("Daily Transactions").click();
    cy.wait("@postinvoicegraph").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@dailytran").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    let totalIncoming;

    cy.get('div[style="display: block; margin-left: 25px;"]').each(($el) => {
      const text = $el.find("p").first().text().trim();
      if (text.includes("TOTAL INCOMING")) {
        totalIncoming = cy
          .wrap($el)
          .find("p")
          .eq(1)
          .invoke(text)
          .then((val) => {
            totalIncoming = parseFloat(val.trim()); // Convert to number
            cy.log(`Total Incoming: ${totalIncoming}`);
            Cypress.env("totalIncoming", totalIncoming); // Store it for later use
          });
      }
    });

    cy.get('a[href="/school-management"]').click();
    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@programdetail").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getschooltype").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@schoolall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".header-text").contains("New Invoice").click();
    cy.wait(2000);

    cy.get(".ant-select-selection-search-input").eq(4).type("test school name");

    cy.get(".search-client-card-cont").click({ force: true });

    cy.wait("@AllBranchNote").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getcompany").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@AllClientAssignTag").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@GetAllInvoiceTypes").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@branch/bank").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@GetAllCurrencies").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@LastInvoiceNumber").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@schoolall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@clientConstractBranchDetails").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllInvoiceStatuses").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getTax").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-picker-input")
      .eq(0)
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.get(".ant-picker-input")
      .eq(1)
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.wait(2000);

    cy.contains("ADD STUDENT").click();

    cy.get(".ant-picker-input")
      .eq(2)
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.get(".ant-picker-input")
      .eq(3)
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.get(".ant-btn.ant-btn-primary").contains("Show").click();

    cy.wait("@postclientstudents").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-checkbox-input").eq(3).click();

    cy.get(".ant-btn.ant-btn-primary").contains("Select").click();

    cy.wait(2000);

    cy.get("#bankAccount").click();
    cy.wait(1000);
    cy.get('div[title="test nabeel"]').click();

    // Get commission amount
    cy.get('input[role="spinbutton"]')
      .eq(2)
      .invoke("val")
      .as("commission_amount");
    cy.get("@commission_amount").then((commission_amount) => {
      cy.log(`Commission Amount: ${commission_amount}`);
    });

    // Get total amount
    cy.get("#total")
      .invoke("val")
      .then((val) => {
        total_amount = val;
        cy.log(`Total Amount: ${total_amount}`);

        // Convert both values to numbers before comparison

        total_amount = parseFloat(total_amount);
        cy.get("@commission_amount").then((commission) => {
          let commission_amount = parseFloat(commission);

          // Add condition based on comparison
          if (commission_amount === total_amount) {
            cy.log("✅ Commission amount matches the total amount.");
            cy.get(".ant-btn.ant-btn-primary.button-blue")
              .contains("SAVE INVOICE")
              .click();
            cy.wait("@postinvoiceschool").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
            });
          } else {
            cy.log("❌ Commission amount does NOT match the total amount.");
            cy.get(".ant-checkbox-input").eq(1).click();
            cy.wait(1000);
            cy.get(".ant-checkbox-input").eq(1).click();
            cy.get(".ant-btn.ant-btn-primary.button-blue")
              .contains("SAVE INVOICE")
              .click();
            cy.wait("@postinvoiceschool").then((interception) => {
              cy.wrap(interception.response.statusCode).should("eq", 200);
            });
          }

          cy.get(".header-text").contains("Accounts").click();

          cy.wait("@getmarkedtagspotentialclient").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });

          cy.wait("@AllBranch").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });

          cy.wait("@invoicegetpagingall").then((interception) => {
            cy.wrap(interception.response.statusCode).should("eq", 200);
          });

          cy.wait(2000);

          cy.get(".ant-table-row.ant-table-row-level-0").each(($el) => {
            var schoolName = $el.find("td").text().trim();

            if (schoolName === "test school name") {
              cy.wrap($el).find("a").contains("View Details").click();

              cy.wait("@getinvoiceschool").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
              cy.wait("@AllBranchNote").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
              cy.wait("@getcompany").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
              cy.wait("@AllClientAssignTag").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
              cy.wait("@GetAllInvoiceTypes").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
              cy.wait("@branch/bank").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
              cy.wait("@GetAllCurrencies").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
              cy.wait("@LastInvoiceNumber").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
              cy.wait("@AllBranch").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
              cy.wait("@GetAllInvoiceStatuses").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
              cy.wait("@payment/All").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 404);
              });

              cy.get("#paymentAmount").type(commission_amount.toString());
              cy.get("#paymentDate")
                .type(futureDate, { force: true })
                .type("{enter}");
              cy.get("#paymentBank").click();
              cy.wait(1000);
              cy.get(".ant-btn.ant-btn-primary.button-blue")
                .contains("ADD PAYMENT")
                .click();
              cy.wait([
                "@putinvoiceschool",
                "@getinvoiceschool",
                "@postpayment",
              ]).then((interception) => {
                interception.forEach((interception) => {
                  cy.wrap(interception.response.statusCode).should("eq", 200);
                });
              });

              cy.get("#dueAmount")
                .invoke("val")
                .then((val) => {
                  const dueAmount = parseFloat(val);
                  cy.log(`Due Amount: ${dueAmount}`);
                  expect(dueAmount).to.eq(0);
                });

              cy.wait(2000);

              cy.get('a[href="/accounts"]').click();
              cy.wait(3000);
              cy.contains("Daily Transactions").click();
              cy.wait("@postinvoicegraph").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });

              cy.wait("@dailytran").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });

              cy.wait(2000);

              cy.get('div[style="display: flex;"]')
                .eq(1)
                .find("p")
                .eq(1)
                .invoke("text")
                .then((text) => {
                  const totalCalculation = parseFloat(text.trim()); // Convert text to number

                  cy.then(() => {
                    const totalIncoming = Cypress.env("totalIncoming"); // Retrieve stored value
                    expect(totalCalculation).to.eqial(
                      commission_amount + totalIncoming
                    );
                  });
                });
            }
          });
        });
      });

      cy.get('a[href="/all-clients"]').click();
    cy.wait("@SearchClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.contains('cypressInvoice test').click()

    cy.get('.header-text').contains('Admission').click()

    cy.get('.cv-dlt-icon').click({force:true})

    cy.wait('@deleteprogramdetail').then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('a[href="/school-management"]').click();

    //editing  school

    cy.contains("HIGHSCHOOL").click();
    cy.wait(7000);

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const jay = $el
        .find(
          'p[style="font-size: 12px; font-weight: 400; font-style: normal; color: rgba(0, 0, 0, 0.85);"]'
        )
        .eq(0)
        .text();
      cy.log(jay);

      if (jay === "test school name") {
        cy.wrap($el).find(".anticon.anticon-edit").click();
        cy.wait("@schoolget").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.get("#address").clear().type("new address");

        cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Save").click();
      }
    });

    cy.wait("@schoolput").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@schoolall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    //deleting the school

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const jay = $el
        .find(
          'p[style="font-size: 12px; font-weight: 400; font-style: normal; color: rgba(0, 0, 0, 0.85);"]'
        )
        .eq(0)
        .text();

      if (jay === "test school name") {
        cy.wrap($el).find(".anticon.anticon-delete").click();

        cy.get(".ant-btn.ant-btn-default.button").contains("Delete").click();
      }
    });

    cy.wait("@schoolput").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@schoolall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);
  });
});
