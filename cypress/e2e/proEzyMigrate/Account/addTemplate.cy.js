import { setupAPIIntercepts } from "../../../support/apiIntercepts";

/// <reference types="cypress" />

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

const sms = "211267313";

describe("account template", () => {
  const futureDate = Cypress.env("futureDate");

  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.interceptSearchClient();

    cy.clearCookies();
    cy.clearLocalStorage();
    cy.login();
  });

  it("Add template", () => {
    cy.get(".ant-menu-title-content").eq(4).click();

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[9]/span/a'
    ).click();

    cy.contains("Daily Transactions").click();
    cy.wait("@dailytran").its("response.statusCode").should("eq", 200);

    cy.get(".ant-tabs-tab-btn").contains("Settings").click();

    cy.wait(3000)
    cy.wait("@branch/bank").then((bank) => {
      cy.wrap(bank.response.statusCode).should("eq", 200);
      if (bank.response.body.count === 0) {
        cy.get(".icons-client").eq(0).click();
        cy.get("#name").type("test nabeel");
        cy.get("#bank").type("test nabeel");
        cy.get("#title").type("test nabeel");
        cy.get("#number").type("123456789");
        cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Save").click();

        cy.wait("@postbranch/bank")
          .its("response.statusCode")
          .should("eq", 200);
      } else {
        let bankFound = false;
        cy.get(".ant-table-row.ant-table-row-level-0")
          .each(($el) => {
            var bank = $el.find("td").eq(0).text().trim();
            cy.log(bank);
            if (bank === "test nabeel") {
              cy.log("your tax is found here", bank);
              bankFound = true;
              return false;
            }
          })
          .then(() => {
            if (bankFound) {
              cy.get('td[title="test nabeel"]')
                .parent()
                .find(".anticon.anticon-delete")
                .click();
              cy.get(".ant-btn.ant-btn-default.button")
                .contains("Delete")
                .click();
              cy.wait("@deletebranch/bank").then((interception) => {
                expect(interception.response.statusCode).to.equal(200);
              });
              cy.wait("@branch/bank").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
              cy.get(".icons-client").eq(0).click();
              cy.get("#name").type("test nabeel");
              cy.get("#bank").type("test nabeel");
              cy.get("#title").type("test nabeel");
              cy.get("#number").type("123456789");
              cy.get(".ant-btn.ant-btn-primary.button-blue")
                .contains("Save")
                .click();

              cy.wait("@postbranch/bank")
                .its("response.statusCode")
                .should("eq", 200);
            } else {
              cy.get(".icons-client").eq(0).click();
              cy.get("#name").type("test nabeel");
              cy.get("#bank").type("test nabeel");
              cy.get("#title").type("test nabeel");
              cy.get("#number").type("123456789");
              cy.get(".ant-btn.ant-btn-primary.button-blue")
                .contains("Save")
                .click();

              cy.wait("@postbranch/bank")
                .its("response.statusCode")
                .should("eq", 200);
            }
          });
      }
    });

    cy.wait(3000);

    cy.wait("@getTax").then((gettax) => {
      cy.wrap(gettax.response.statusCode).should("eq", 200);
      if (gettax.response.body.items.length === 0) {
        cy.get(".icons-client").eq(1).click();
        cy.get("#name").type("Nsbeel");
        cy.get("#number").type("1231233");
        cy.get("#percent").type("1.5");
        cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Save").click();

        cy.wait("@postTax").then((interception) => {
          expect(interception.response.statusCode).to.equal(200);
        });
        cy.wait("@getTax").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      } else {
        let nabeelFound = false;
        cy.get(".ant-table-row.ant-table-row-level-0")
          .each(($el) => {
            var tax = $el.find("td").eq(0).text().trim();
            cy.log(tax);
            if (tax === "Nsbeel") {
              cy.log("your tax is found here", tax);
              nabeelFound = true;
              return false;
            }
          })
          .then(() => {
            if (nabeelFound) {
              cy.get('td[title="Nsbeel"]')
                .parent()
                .find(".anticon.anticon-delete")
                .click();
              cy.get(".ant-btn.ant-btn-default.button:visible")
                .contains("Delete")
                .click();
              cy.wait("@deleteTax").then((interception) => {
                expect(interception.response.statusCode).to.equal(200);
              });
              cy.wait("@getTax").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
              cy.get(".icons-client").eq(1).click();
              cy.get("#name").type("Nsbeel");
              cy.get("#number").type("1231233");
              cy.get("#percent").type("1.5");
              cy.get(".ant-btn.ant-btn-primary.button-blue")
                .contains("Save")
                .click();

              cy.wait("@postTax").then((interception) => {
                expect(interception.response.statusCode).to.equal(200);
              });
              cy.wait("@getTax").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
            } else {
              cy.get(".icons-client").eq(1).click();
              cy.get("#name").type("Nsbeel");
              cy.get("#number").type("1231233");
              cy.get("#percent").type("1.5");
              cy.get(".ant-btn.ant-btn-primary.button-blue")
                .contains("Save")
                .click();

              cy.wait("@postTax").then((interception) => {
                expect(interception.response.statusCode).to.equal(200);
              });
              cy.wait("@getTax").then((interception) => {
                cy.wrap(interception.response.statusCode).should("eq", 200);
              });
            }
          });
      }
    });

    cy.wait("@AllBranchNote").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@Allpaymentsource").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });

    cy.wait(3000);

    cy.get(".ant-tabs-tab-btn").eq(0).click();

    cy.wait("@getTemplate").then((temp) => {
      cy.wrap(temp.response.statusCode).should("not.eq", 500);
      if (temp.response.statusCode === 200) {
        cy.wait("@getTax").its("response.statusCode").should("eq", 200);
      }
    });

    cy.wait(2000);

    cy.get(".ant-col.ant-col-xs-16")
      .eq(1)
      .then(($antcol) => {
        if (
          $antcol.find(".ant-col.ant-col-offset-1.ant-col-xs-23").length > 0
        ) {
          cy.get('input[placeholder="Enter Name"]').and("not.have.value", ""); //ensure its not empty
          cy.get(".ant-col.ant-col-offset-1.ant-col-xs-23").each(
            ($el, index, $list) => {
              var ge = $el.find('input[type="text"]').val();

              debugger;
              console.log(ge);
              if (ge.includes("trianlge")) {
                cy.wrap($el).find(".anticon.anticon-delete").click();
                cy.get(".ant-btn.ant-btn-default.button").click();
              }
            }
          );
        }
      });

    cy.wait(3000);
    cy.contains("ADD TEMPLATE").scrollIntoView();
    cy.contains("ADD TEMPLATE").click();
    cy.wait(4000);
    cy.get("#name").type("trianlge");
    cy.get("#description").type(
      "this is test description for the triangle add template"
    );
    cy.get(".icons-client").click();
    cy.get("#stages_0_description").type(
      "stage 1 description for the triangle template"
    );
    cy.get("#stages_0_amount").type("50");

    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-col-offset-1 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox"
    ).click();
    cy.get(
      '[style=""] > [style="margin-top: -20px;"] > .ant-col-offset-1 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
    ).click();

    cy.get(".ant-select-item-option-content:visible")
      .wait(1000)
      .should("exist")
      .contains("Nsbeel-1.5")
      .click()
      .wait(1000);

    cy.get("#stages_1_description").type("second stage input");
    cy.get("#stages_1_amount").type("60");
    cy.get(
      ":nth-child(2) > :nth-child(1) > :nth-child(2) > .ant-col-offset-1 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-checkbox-wrapper > .ant-checkbox"
    ).click();
    cy.get(
      ':nth-child(2) > :nth-child(1) > [style=""] > [style="margin-top: -20px;"] > .ant-col-offset-1 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
    ).click();

    cy.get(".ant-select-item-option-content:visible")
      .wait(1000)
      .should("exist")
      .contains("Nsbeel-1.5")
      .click()
      .wait(1000);

    cy.get('[style="margin-top: 15px;"] > .ant-col > .ant-btn > span').click();
    cy.get("#total").should("have.value", 111.65);

    cy.get(
      ".ant-col-offset-18 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click();

    cy.wait(2000);
    cy.get(
      ":nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    ).click({ multiple: true }, { force: true });
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[9]/span/a'
    ).click();
    cy.contains("Daily Transactions").click();
    cy.get(".ant-tabs-tab-btn").eq(0).click();

    cy.wait("@getTemplate").its("response.statusCode").should("eq", 200);
    cy.wait("@getTax").its("response.statusCode").should("eq", 200);
    cy.wait(2000);
    cy.get(".ant-menu-title-content").eq(4).click();

    cy.wait(3000);
    cy.wait("@getallusers").its("response.statusCode").should("eq", 200);
    cy.wait("@BranchVisaType/All").its("response.statusCode").should("eq", 200);
    cy.wait("@visastatus").its("response.statusCode").should("eq", 200);

    cy.wait("@SearchClient").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.request.body.firstName).to.eq("");
      cy.log("before first request count", interception.response.body.count);
      console.log("first response request body", interception.request.body);
      cy.log(JSON.stringify(interception.request.body));
      cy.log(
        "first api response body",
        JSON.stringify(interception.response.body.items)
      );
    });

    cy.wait("@getmarkedtagspotentialclient")
      .its("response.statusCode")
      .should("eq", 200);

    cy.wait(2000);
    cy.get("#first_name").type("sufi");
    cy.get(".ant-btn.ant-btn-primary.button-blue")
      .contains("Search")
      .click()
      .then(() => {
        debugger;

        cy.wait(1000);

        cy.get('.ant-input.ant-input-lg').type('sufi')
        cy.wait(3000)
        cy.wait('@searchingclient').then((interception)=>{
          expect(interception.response.statusCode).to.eq(200);
          const searchclient= interception.response.body.clients;
          let clientfoundsearch = false; 
          searchclient.forEach((searchclient) => {
            if(searchclient.firstName==='sufi' && searchclient.lastName==='cup' && searchclient.memberType==='Client'){
              clientfoundsearch = true;
              cy.log('found client', `${searchclient.firstName} ${searchclient.lastName}`);
              const namePattern = new RegExp(`^${searchclient.firstName} ${searchclient.lastName}(?: \\- \\d+)?$`);
            
              cy.contains('.ant-select-item-option-content span', namePattern).click()
            }
            
            
          });
          if(!clientfoundsearch){
            cy.log('automation clients not found')
            cy.log('Other client(s) found, but "sufi cup" is not present.');
            // Optional: handle cases where other clients are found but not "test conv"
            // For example, you could choose to add the "test conv" client here
            cy.get('a[href="/add-new-client"]').click();

            cy.wait("@GetAllCountries")
              .its("response.statusCode")
              .should("eq", 200);
            cy.wait("@getallusers")
              .its("response.statusCode")
              .should("eq", 200);
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
        })

        // cy.pause();

        // cy.wait("@SearchClient").then((xhr) => {
        //   // Check if the response status is 200

        //   expect(xhr.response.statusCode).to.eq(200);
        //   // Log the full response to debug it
        //   console.log("second response body of api", xhr.request.body);
        //   cy.log(JSON.stringify(xhr.request.body));
        //   cy.log("Full response:", JSON.stringify(xhr.response.body));
        //   cy.log("second api request", xhr.response.body.count);
        //   // expect(match.request.body.firstName).to.eq('sufi')
        //   //     console.log('Request URL:', xhr.request.url); // Check the request URL
        //   // console.log('Request Body:', xhr.request.body); // Check the body sent
        //   // console.log('Response Body:', xhr.response.body);

        //   // Safely extract the items and response
        //   // const items =
        //   //   xhr.response && xhr.response.body ? xhr.response.body.items : [];
        //   // const response = xhr.response && xhr.response.body;

        //   // Check if the response and count are available before logging
        //   // if (response && response.count !== undefined) {
        //   //   cy.log(`Found ${response.count} clients`);
        //   // } else {
        //   //   cy.log("Response or count is undefined");
        //   // }
        // });
        // cy.get("tbody.ant-table-tbody").then(($tbody) => {
        //   const text = $tbody.text();
        //   if (text.includes("No data")) {
        //     cy.log("No clients found");

        //     // if (interception.response.body.count === 0) {
        //     // If no client found, add a new client
        //     cy.log("No client found. Adding a new client...");
        //     // Code to add a new client goes here
        //     cy.get('a[href="/add-new-client"]').click();

        //     cy.wait("@GetAllCountries")
        //       .its("response.statusCode")
        //       .should("eq", 200);
        //     cy.wait("@getallusers")
        //       .its("response.statusCode")
        //       .should("eq", 200);
        //     cy.wait("@GetAllClientSource")
        //       .its("response.statusCode")
        //       .should("eq", 200);
        //     cy.wait("@BranchCountryLinking")
        //       .its("response.statusCode")
        //       .should("eq", 200);

        //     cy.get('[type="file"]').attachFile("ABC.jpg");

        //     cy.get("#visaCountryId").click();

        //     cy.wait(6000);

        //     cy.contains("NEW ZEALAND").click({ force: true });
        //     cy.wait(2000);
        //     cy.get("#visaCountyType").click();
        //     cy.wait(3000);
        //     cy.get(".ant-select-item-option-content:visible")
        //       .eq(1)
        //       .contains("Visa")
        //       .click();
        //     cy.get("#clientSerial").type(randomNo(5));
        //     cy.get("#title").click({ force: true }).type("title");
        //     cy.get("#firstName").type("sufi");
        //     cy.get("#lastName").type("cup");
        //     cy.get("#preferredName").type("pre name");

        //     cy.get(
        //       ":nth-child(2) > .save-button-add-client > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
        //     )
        //       .scrollIntoView()
        //       .click();
        //   } else if ($tbody.find("tr.ant-table-row.ant-table-row-level-0")) {
        //     // Try to find the specific "test conv" client
        //     // const testClient = items.find((client) => {
        //     //   const firstName = client.firstName
        //     //     ? client.firstName.trim().toLowerCase()
        //     //     : "";
        //     //   const lastName = client.lastName
        //     //     ? client.lastName.trim().toLowerCase()
        //     //     : "";
        //     //   return firstName === "sufi" && lastName === "cup";
        //     // });

        //     // if (testClient) {
        //     cy.log('Client "test conv" found. Performing click action...');
        //     // Code to click on the "test conv" client, e.g., navigate to the client page
        //     cy.get(".ant-table-row.ant-table-row-level-0").each(
        //       ($el, index, $list) => {
        //         const del = $el.find("span").text().trim();

        //         debugger;
        //         console.log(del);
        //         if (del === "sufi cup") {
        //           cy.wrap($el)
        //             .find(
        //               'span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]'
        //             )
        //             .click();
        //         }
        //       }
        //     );
          // } //else {
          //   cy.log('Other client(s) found, but "sufi cup" is not present.');
          //   // Optional: handle cases where other clients are found but not "test conv"
          //   // For example, you could choose to add the "test conv" client here
          //   cy.get('a[href="/add-new-client"]').click();

          //   cy.wait("@GetAllCountries")
          //     .its("response.statusCode")
          //     .should("eq", 200);
          //   cy.wait("@getallusers")
          //     .its("response.statusCode")
          //     .should("eq", 200);
          //   cy.wait("@GetAllClientSource")
          //     .its("response.statusCode")
          //     .should("eq", 200);
          //   cy.wait("@BranchCountryLinking")
          //     .its("response.statusCode")
          //     .should("eq", 200);

          //   cy.get('[type="file"]').attachFile("ABC.jpg");

          //   cy.get("#visaCountryId").click();

          //   cy.wait(6000);

          //   cy.contains("NEW ZEALAND").click({ force: true });
          //   cy.wait(2000);
          //   cy.get("#visaCountyType").click();
          //   cy.wait(3000);
          //   cy.get(".ant-select-item-option-content:visible")
          //     .eq(1)
          //     .contains("Visa")
          //     .click();
          //   cy.get("#clientSerial").type(randomNo(5));
          //   cy.get("#title").click({ force: true }).type("title");
          //   cy.get("#firstName").type("sufi");
          //   cy.get("#lastName").type("cup");
          //   cy.get("#preferredName").type("pre name");

          //   cy.get(
          //     ":nth-child(2) > .save-button-add-client > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
          //   )
          //     .scrollIntoView()
          //     .click();
          // }
        // });
      });

    // cy.contains("sufi cup").should("be.visible");
    // cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
    //   const del = $el.find("span").text().trim();

    //   debugger;
    //   console.log(del);
    //   if (del === "sufi cup") {
    //     cy.wrap($el)
    //       .find(
    //         'span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]'
    //       )
    //       .click();

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
    cy.get(".right-bar-icon").eq(8).click();
    //   }
    // });

    cy.wait(2000);

    cy.wait("@AllClientBalance").then((main) => {
      if (main.response.statusCode === 200) {
        cy.get(".ant-collapse-item.ant-collapse-item-active").each(
          ($el, index, $list) => {
            const ok = $el.find("h5").text().trim();
            console.log(ok);
            if (ok === "trianlge") {
              cy.wrap($el).find(".anticon.anticon-delete").click();
              cy.get(".ant-col-4 > .ant-btn > span").click();
            }
          }
        );
      }
    });

    cy.wait(5000);
    cy.get(
      ":nth-child(2) > .ant-col > .ant-select > .ant-select-selector"
    ).click();
    cy.contains("trianlge").click();

    cy.get(":nth-child(3) > .ant-col > .ant-btn > span").click();

    cy.wait(8000);

    cy.contains("trianlge").should("exist");
    cy.get(".ant-collapse-item.ant-collapse-item-active").each(
      ($el, index, $list) => {
        const no = $el.find("h5").text().trim();
        console.log(no);
        if (no === "trianlge") {
          cy.get(".ant-input-number-input-wrap").each(($el, index, $list) => {
            const moj = $el.find(".ant-input-number-input").val();
            if (moj.includes(50)) {
              cy.wrap($el).find(".ant-input-number-input").type(0);
            }
          });
          cy.wrap($el)
            .find(".ant-btn.ant-btn-primary.ant-btn-sm.button-blue")
            .click();
          cy.get(".ant-col.ant-col-offset-14.ant-col-xs-10").each(
            ($el, index, $list) => {
              const pipe = $el.find("p").text();
              if (pipe.includes("Total: 568.4")) {
                cy.log("total is correct which is", pipe);
              }
            }
          );
        }
      }
    );
    cy.get(
      '[style="display: flex; justify-content: flex-end; width: 100%;"] > .ant-col > .ant-image > .ant-image-img'
    ).click();

    cy.get(".header-bar-text-div")
      .eq(7)
      .contains("Accounts")
      .click({ force: true });
    cy.wait("@AllData").its("response.statusCode").should("eq", 200);
    cy.wait("@branch/bank").its("response.statusCode").should("eq", 200);

    cy.get(".ant-collapse-item.ant-collapse-item-active").each(
      ($el, index, $list) => {
        const nay = $el
          .find(
            'h5[style="color: black; margin: -4px; word-break: break-word;"]'
          )
          .text();
        if (nay === "trianlge") {
          cy.wrap($el)
            .find(".ant-btn.ant-btn-primary.ant-btn-sm.button-blue")
            .eq(0)
            .click();
          cy.get('input[placeholder="Select date"]')
            .eq(0)
            .type(futureDate, { force: true })
            .type("{enter}");
          cy.get('input[placeholder="Select date"]')
            .eq(1)
            .type(futureDate, { force: true })
            .type("{enter}");
          cy.get("#invoiceItems_0_amount").should("have.value", 500);
          cy.contains("Calculate Sub Total").click();
          cy.get(
            ":nth-child(2) > .ant-col-xs-24 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
          )
            .should("exist")
            .click();
          cy.contains("Nsbeel-1.5").click().wait(1000);
          cy.get("#bankAccount").click();
          cy.get('div[title="test nabeel"]').click();
          cy.contains("SAVE INVOICE").click();
          cy.wait(5000);
          cy.get(".ant-collapse-item.ant-collapse-item-active").each(
            ($el, index, $list) => {
              const jay = $el
                .find(
                  'h5[style="color: black; margin: -4px; word-break: break-word;"]'
                )
                .text();
              if (jay === "trianlge") {
                cy.wrap($el)
                  .find(".ant-btn.ant-btn-primary.ant-btn-sm.button-blue")
                  .eq(4)
                  .click();
                cy.get('input[placeholder="Select date"]')
                  .eq(0)
                  .type(futureDate, { force: true })
                  .type("{enter}");
                cy.get('input[placeholder="Select date"]')
                  .eq(1)
                  .type(futureDate, { force: true })
                  .type("{enter}");
                cy.get("#invoiceItems_0_amount").should("have.value", 60);
                cy.contains("Calculate Sub Total").click();
                cy.get(
                  ":nth-child(2) > .ant-col-xs-24 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
                )
                  .should("exist")
                  .click();
                cy.contains("Nsbeel-1.5").click().wait(1000);
                cy.get("#bankAccount").click();
                cy.wait(1000);
                cy.get('div[title="test nabeel"]').click();
                cy.contains("SAVE INVOICE").click();
                cy.wait(5000);
              }
            }
          );
        }
      }
    );

    cy.wait(9000);

    cy.get(".ca-gray-cont.ca-gray-padding-payment-history").each(
      ($el, index, $list) => {
        const hay = $el
          .find(
            'p[style="font-size: 12px; font-weight: 400; font-style: normal; color: rgba(0, 0, 0, 0.85);"]'
          )
          .text();
        debugger;
        cy.log(hay);
        if (hay.includes("507.5")) {
          cy.wrap($el)
            .find(".ant-btn.ant-btn-primary.ant-btn-sm.button-blue")
            .eq(0)
            .contains("ADD PAYMENT ")
            .click();
          cy.get("#paymentAmount").type("507.5");
          cy.get("#paymentDate")
            .type(futureDate, { force: true })
            .type("{enter}");
          cy.get("#paymentBank").click();
          cy.wait(1000);
          cy.get('div[title="test nabeel"]').click();
          cy.get('input[type="text"]').type("testing by nabeel");
          cy.get('button[type="submit"]').click();
        }
      }
    );
    cy.wait(3000);

    cy.get(".sus-inactive-tab-text-school").contains("INVOICES").click();
    cy.wait("@AllBySubjectIdWithPaging")
      .its("response.statusCode")
      .should("eq", 200);
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const tay = $el
        .find(
          'p[style="font-size: 12px; font-weight: 400; font-style: normal; color: rgba(0, 0, 0, 0.85);"]'
        )
        .text();
      if (tay.includes("60.9")) {
        cy.wrap($el).contains("View Details").click();
        cy.get("#paymentAmount").type("60.9");
        cy.get("#paymentDate")
          .type(futureDate, { force: true })
          .type("{enter}");
        cy.get("#paymentBank").click();
        cy.wait(2000);
        cy.get('div[title="test nabeel"]').click();
        cy.get('input[type="text"]')
          .eq(1)
          .type("testing by nabeel", { force: true });
        cy.get('button[type="submit"]').eq(4).click();
      }
    });

    cy.wait("@invoice").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@clientlog").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(3000);
    cy.get(".sus-active-tab-text-school").contains("INVOICES").click();
    cy.wait(2000);
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const pay = $el
        .find(
          'p[style="font-size: 12px; font-weight: 400; font-style: normal; color: rgba(0, 0, 0, 0.85);"]'
        )
        .text();
      if (pay.includes("60.9")) {
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-col-4 > .ant-btn > span").click();
      }
    });

    cy.wait(5000);
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      const zay = $el
        .find(
          'p[style="font-size: 12px; font-weight: 400; font-style: normal; color: rgba(0, 0, 0, 0.85);"]'
        )
        .text();
      if (zay.includes("507.5")) {
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-col-4 > .ant-btn > span").click();
      }
    });

    cy.wait(3000);

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[9]/span/a'
    ).click();

    cy.contains("Daily Transactions").click();
    cy.wait("@dailytran").its("response.statusCode").should("eq", 200);
    cy.get(".ant-tabs-tab-btn").eq(0).click();

    cy.wait("@getTemplate").its("response.statusCode").should("eq", 200);
    cy.wait("@getTax").its("response.statusCode").should("eq", 200);
    cy.wait(2000);
    //cy.get('.anticon.anticon-delete').click()
    cy.wait(2000);

    cy.get(".ant-col.ant-col-xs-16")
      .eq(1)
      .then(($antcol) => {
        if (
          $antcol.find(".ant-col.ant-col-offset-1.ant-col-xs-23").length > 0
        ) {
          cy.get('input[placeholder="Enter Name"]').and("not.have.value", ""); //ensure its not empty
          cy.get(".ant-col.ant-col-offset-1.ant-col-xs-23").each(
            ($el, index, $list) => {
              var ge = $el.find('input[type="text"]').val();

              debugger;
              console.log(ge);
              if (ge.includes("trianlge")) {
                cy.wrap($el).find(".anticon.anticon-delete").click();
                cy.get(".ant-btn.ant-btn-default.button").click();
              }
            }
          );
        }
      });
  });
});
