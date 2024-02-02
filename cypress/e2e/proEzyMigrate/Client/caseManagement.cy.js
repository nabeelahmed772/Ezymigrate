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



describe("case management", () => {
  const futureDate = Cypress.env("futureDate");

  before(() => {
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });

  it("testing case management", () => {
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
    ).click();
    cy.wait("@SearchClient").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    //deleting the client

    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]'
        )
        .text()
        .trim();
      if (del === "amjad ali") {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.wait("@SearchClient").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[6]/span/a'
    ).click();
    cy.wait(4000);

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
    //cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
    cy.get("#clientSerial").type(randomNo(5));
    cy.get("#title").click({ force: true }).type("title");
    cy.get("#firstName").type("amjad");
    cy.get("#lastName").type("ali");
    cy.get("#preferredName").type("pre name");

    cy.get(
      ":nth-child(2) > .save-button-add-client > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span"
    )
      .scrollIntoView()
      .click();

    cy.wait(7000);

    cy.contains("Case Management").scrollIntoView().click();

    cy.wait(2000);

    cy.contains("Cases").scrollIntoView().click({ force: true });

    cy.wait(6000);

    cy.contains("Add Case").click();

    cy.get("#basic_client").click().type("amjad ali").type("{enter}");

    cy.get(".ant-form-item-control-input-content > .ant-btn > span").click({
      force: true,
    });

    cy.wait(5000);

    cy.wait(2000);
    cy.get(".top-row").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="margin-top: 6px; margin-bottom: 6px; color: rgb(0, 0, 0); font-weight: 600; cursor: pointer; font-size: 14px;"]'
        )
        .text()
        .trim();
      if (del.includes("amjad")) {
        cy.log(del);
        cy.wrap($el).find(".ant-btn.ant-btn-primary").eq(0).click();

        cy.wait(1000);
      }
    });

    cy.get("#basic_Country").click();

    cy.wait(3000);

    cy.contains("NEW ZEALAND").click({ force: true });

    cy.wait(5000);

    cy.get("#basic_Visa").click();

    cy.wait(3000);

    cy.contains("Critical Purpose Visitor Visa").click({force:true});

    cy.get("#basic_date").type(futureDate, { force: true }).type("{enter}");

    cy.wait(1000);

    cy.get(
      '.ant-spin-container > :nth-child(1) > [style="overflow: inherit; padding-bottom: 6px; align-items: center; justify-content: space-between; padding-right: 5px;"] > #basic > [style="text-align: end;"] > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span'
    ).click();

    cy.wait(5000);

    cy.get(".top-row").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="margin-top: 6px; margin-bottom: 6px; color: rgb(0, 0, 0); font-weight: 600; cursor: pointer; font-size: 14px;"]'
        )
        .text()
        .trim();
      if (del.includes("amjad")) {
        cy.log(del);
        cy.wrap($el)
          .find(".ant-btn.ant-btn-default.ant-dropdown-trigger")
          .eq(0)
          .click();

        cy.wait(1000);
      }
    });

    cy.wait(1000);

    cy.contains("Client Awaiting Document Instructions").click({ force: true });

    cy.wait(3000);

    cy.get(
      '.ant-modal-body > :nth-child(1) > [style="overflow: inherit; padding-bottom: 6px; align-items: center; justify-content: space-between; padding-right: 5px;"] > #basic > [style="width: 100%;"] > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker > .ant-picker-input > #basic_date'
    )
      .type(futureDate, { force: true })
      .type("{enter}");

    cy.contains("Save").click();

    cy.wait(3000);
    cy.get(".top-row").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="margin-top: 6px; margin-bottom: 6px; color: rgb(0, 0, 0); font-weight: 600; cursor: pointer; font-size: 14px;"]'
        )
        .text()
        .trim();
      if (del.includes("amjad")) {
        cy.log(del);
        cy.wrap($el).find(".ant-btn.ant-btn-primary").eq(1).click();

        cy.wait(1000);
      }
    });

    cy.wait(3000);

    cy.get("#basic_schoolType").click();

    cy.wait(5000);

    cy.contains("Secondary").click();

    cy.wait(3000);

    cy.get("#basic_school").click();

    cy.wait(3000);

    cy.contains("new secondary").click();

    cy.wait(3000);

    cy.get("#basic_schoolLevel").click();

    cy.wait(3000);

    cy.contains("bsic level").click();

    cy.wait(3000);

    cy.get("#basic_program").type("4");

    cy.get('button[type="submit"]:visible').click({ force: true });

    cy.wait(5000);

    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
    ).click();

    cy.wait(6000);

    cy.contains("amjad").scrollIntoView().click();

    cy.wait(5000);

    cy.get(":nth-child(2) > a > .header-bar-text-div > .header-text").click();

    cy.wait(7000);

    cy.get(".cv-bold-text").should("contain", "CRITICAL PURPOSE VISITOR VISA");


    cy.get('.header-text').contains('Accounts').click()

    cy.wait("@branch/permissions").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getcompany").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.wait("@AllClientBalance").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 404);
    });

    cy.get('.sus-inactive-tab-text-school')
      .contains('INVOICES')
      .click()

    cy.wait("@getmarkedtagspotentialclient").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

    cy.wait("@AllBySubjectIdWithPaging").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 404);
      });

    cy.get('.ant-btn.ant-btn-primary.button-blue')
      .contains('ADD')
      .click()

      cy.wait("@AllBranch").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });


      cy.wait("@LastInvoiceNumber").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });


      cy.wait("@GetAllInvoiceStatuses").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@TemplateAddNewLine").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@clientConstractBranchDetails").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@AllBranchNote").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@AllData").then((interception) => {
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

      cy.wait("@getTax").then((interception) => {
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

      cy.get(
          ".ant-col-xs-12 > .ant-row > .ant-col > .ant-select > .ant-select-selector"
        ).click({ force: true });
    
      cy.contains("NEW TESTING TEMPLATE").click();
      cy.wait("@AddNewLine").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });
      cy.get(".ant-input-number-input").should("have.value", 120);
      cy.contains("Calculate Sub Total").click();
      cy.get('#taxName')
        .click();
      cy.contains("Nsbeel -1.5").click().wait(1000);
      cy.get("#bankAccount").click();
      cy.wait(1000);
      cy.get('div[title="test nabeel"]').click();
      cy.contains("SAVE INVOICE").click();
      cy.wait(5000);
      cy.wait("@invoice").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });
  
      cy.wait("@getmarkedtagspotentialclient").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@AllBySubjectIdWithPaging").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@clientlog").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@reminder").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait(2000)

    cy.get(".ant-btn.ant-btn-primary.ant-btn-sm.button-blue")
      .contains("Email")
      .click();

    cy.wait("@MultiUploadWithFileName").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@SetHtmlTemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@emailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllInvoiceStatuses").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('.pdf-file-text').should('exist');

    cy.wait(1000)

    cy.get('.pdf-file-text').invoke('text').then((pdfFileName) => {
      // Assuming the PDF file name is something like "INVOICE-2d2oi-.PDF"
      // Use a regular expression to match the expected pattern
      const regex = /INVOICE-[a-zA-Z0-9]+-.PDF/;
      expect(pdfFileName).to.match(regex);

      // Extract the dynamic part from the PDF file name
      const dynamicPartMatch = pdfFileName.match(regex);
    const dynamicPart = dynamicPartMatch ? dynamicPartMatch[1] : null;
    
      // Now you can use the dynamicPart in your next scenario or assertions
      // For example, you can log it to the console
      cy.log(`Dynamic part of the PDF file name: ${dynamicPart}`);
    });

    cy.wait(1000)


    cy.task('deleteOldFiles', 'cypress/downloads');

   cy.get('.pdf-file-text')
     .click()

    
     cy.wait("@pdfinvoicedownloads").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
     
    });

    cy.wait(2000)


   // Use the custom command to check if the file exists with a pattern
  const pattern = /invoice-[a-zA-Z0-9]+\.pdf/;
  cy.checkFileExistsWithPattern('cypress/downloads', pattern)
    .then((matchingFile) => {
      // If the file exists, proceed with assertions
      cy.log(`File ${matchingFile} exists`);

      // Get the list of files in the downloads folder
      cy.task('listDownloads', 'cypress/downloads').then((downloads) => {
        // Sort the files by modification time in descending order
        downloads.sort((a, b) => {
          const statA = cy.task('fileStat', `cypress/downloads/${a}`);
          const statB = cy.task('fileStat', `cypress/downloads/${b}`);
          return statB.mtime - statA.mtime;
        });

        // Take the most recently downloaded file
        const mostRecentFile = downloads[0];

        // Assuming the PDF file name is something like "INVOICE-32oi3-.PDF"
        // Use a regular expression to match the expected pattern
        const regex = /INVOICE-([a-zA-Z0-9]+)-.PDF/;

        // Assert that the PDF file name matches the expected pattern
        expect(mostRecentFile).to.match(regex);

        // Extract the dynamic part from the PDF file name
        const dynamicPartMatch = mostRecentFile.match(regex);
        const dynamicPart = dynamicPartMatch ? dynamicPartMatch[1] : null;

        // Now you can use the dynamicPart in your assertions
        // For example, you can log it to the console
        cy.log(`Dynamic part of the most recently downloaded PDF file name: ${dynamicPart}`);
      });
    })
    .catch((err) => {
      // If the file does not exist, log an error
      cy.log(`Error: ${err}`);
    });
    cy.wait(2000)

   
    cy.get('#to').clear()
  
    cy.get('#to').type('nabeeloutsourcenz1@gmail.com')
     
    cy.get('.ant-btn.ant-btn-primary.button-blue')
      .contains('Send')
      .click()

      cy.wait("@postClientEmail").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@emailqueueblocburl").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@invoice").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@clientlog").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@AllBySubjectIdWithPaging").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });



    


    

    cy.contains("View Details").click();

    cy.wait("@payment/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 404);
    });

    cy.wait("@branch/bank").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getTax").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@LastInvoiceNumber").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@GetAllInvoiceStatuses").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.wait("@GetAllCurrencies").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#paymentAmount").type("60.8");

    cy.get("#paymentDate").type(futureDate, { force: true }).type("{enter}");

    cy.get("#paymentBank").click();

    cy.wait(2000)

    cy.get('div[title="test nabeel"]').eq(1).click();

    cy.wait(1000)

    cy.contains("ADD PAYMENT").click();

    cy.wait("@invoice").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@duplicateinvoicecheck").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getinvoice").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@postpayment").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@clientlog").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@payment/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    

    cy.wait(2000);

    cy.get('.ant-btn.ant-btn-primary.button-blue')
      .contains('SEND RECEIPT ')
      .click()

      cy.wait("@duplicateinvoicecheck").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@invoice").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@getinvoice").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@invoiceSendRecipt").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@invoicereceiptpdfhtml").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@MultiUploadWithFileName").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@emailtemplate").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });


      cy.get('.pdf-file-text').should('exist');

    cy.wait(1000)

    cy.get('.pdf-file-text').invoke('text').then((pdfFileName) => {
      // Assuming the PDF file name is something like "INVOICE-2d2oi-.PDF"
      // Use a regular expression to match the expected pattern
      const regex = /RECEIPT-[a-zA-Z0-9]+-.PDF/;
      expect(pdfFileName).to.match(regex);

      // Extract the dynamic part from the PDF file name
      const dynamicPart = pdfFileName.match(/[a-zA-Z0-9]+/)[0];
    
      // Now you can use the dynamicPart in your next scenario or assertions
      // For example, you can log it to the console
      cy.log(`Dynamic part of the PDF file name: ${dynamicPart}`);
    });

    cy.wait(1000)

    cy.get('.pdf-file-text')
     .click()

    
     cy.wait("@invoicerecepitpdfhtml").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      cy.writeFile('cypress/downloads/downloaded1.pdf', interception.response.body, 'binary');
    });

    cy.wait(2000)


    cy.readFile('cypress/downloads/downloaded1.pdf', 'binary').then((pdfContent) => {
      // Assuming the PDF file name is something like "INVOICE-2d2oi-.PDF"
      // Use a regular expression to match the expected pattern
      const regex = /RECEIPT-[a-zA-Z0-9]+.PDF/;
    
      // Assert that the PDF file name matches the expected pattern
      expect(pdfContent).to.match(regex);
    
      // Extract the dynamic part from the PDF file name
      const dynamicPart = pdfContent.match(/[a-zA-Z0-9]+/)[0];
    
      // Now you can use the dynamicPart in your assertions
      // For example, you can log it to the console
      cy.log(`Dynamic part of the downloaded PDF file name: ${dynamicPart}`);
    });

    cy.wait(2000)

    cy.get('#to').clear()
  
    cy.get('#to').type('nabeeloutsourcenz1@gmail.com')
     
    cy.get('.ant-btn.ant-btn-primary.button-blue')
      .contains('Send')
      .click()

      cy.wait("@postClientEmail").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@emailqueueblocburl").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@invoice").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@clientlog").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@payment/All").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });


      cy.get("#paymentAmount").type("60");

    cy.get("#paymentDate").type(futureDate, { force: true }).type("{enter}");

    cy.get("#paymentBank").click();

    cy.wait(2000)

    cy.get('div[title="test nabeel"]').eq(1).click();

    cy.wait(1000)

    cy.contains("ADD PAYMENT AND SEND RECEIPT").click();

    cy.wait("@duplicateinvoicecheck").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.wait("@invoice").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.wait("@getinvoice").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.wait("@postpayment").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.wait("@clientlog").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.wait("@payment/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.wait("@invoiceSendRecipt").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.wait("@invoicereceiptpdfhtml").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@MultiUploadWithFileName").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@emailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });


    cy.get('.pdf-file-text').should('exist');

    cy.wait(1000)

    cy.get('.pdf-file-text').invoke('text').then((pdfFileName) => {
      // Assuming the PDF file name is something like "INVOICE-2d2oi-.PDF"
      // Use a regular expression to match the expected pattern
      const regex = /RECEIPT-[a-zA-Z0-9]+-.PDF/;
      expect(pdfFileName).to.match(regex);

      // Extract the dynamic part from the PDF file name
      const dynamicPart = pdfFileName.match(/[a-zA-Z0-9]+/)[0];
    
      // Now you can use the dynamicPart in your next scenario or assertions
      // For example, you can log it to the console
      cy.log(`Dynamic part of the PDF file name: ${dynamicPart}`);
    });

    cy.wait(1000)

    cy.get('.pdf-file-text')
     .click()

    
     cy.wait("@invoicerecepitpdfhtml").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      cy.writeFile('cypress/downloads/downloaded1.pdf', interception.response.body, 'binary');
    });

    cy.wait(2000)


    cy.readFile('cypress/downloads/downloaded1.pdf', 'binary').then((pdfContent) => {
      // Assuming the PDF file name is something like "INVOICE-2d2oi-.PDF"
      // Use a regular expression to match the expected pattern
      const regex = /RECEIPT-[a-zA-Z0-9]+.PDF/;
    
      // Assert that the PDF file name matches the expected pattern
      expect(pdfContent).to.match(regex);
    
      // Extract the dynamic part from the PDF file name
      const dynamicPart = pdfContent.match(/[a-zA-Z0-9]+/)[0];
    
      // Now you can use the dynamicPart in your assertions
      // For example, you can log it to the console
      cy.log(`Dynamic part of the downloaded PDF file name: ${dynamicPart}`);
    });

    cy.wait(2000)

    cy.get('#to').clear()
  
    cy.get('#to').type('nabeeloutsourcenz1@gmail.com')
     
    cy.get('.ant-btn.ant-btn-primary.button-blue')
      .contains('Send')
      .click()

      cy.wait("@postClientEmail").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@emailqueueblocburl").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@invoice").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@clientlog").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });

      cy.wait("@payment/All").then((interception) => {
        cy.wrap(interception.response.statusCode).should("eq", 200);
      });


    




    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
    ).click();

    cy.wait(6000);

    cy.get(
      "#root > div > div > div > section > main > div > div > div > div > div.container-ui.w-100 > div.ant-spin-nested-loading > div > div > div > div > div > div > div > div.ant-table-container > div > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > span > svg"
    ).click();

    cy.wait(5000);
  });
});
