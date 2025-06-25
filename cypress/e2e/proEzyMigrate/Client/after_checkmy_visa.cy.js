import { setupAPIIntercepts } from "../../../support/apiIntercepts";
/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  console.error('Uncaught exception:', err.message);
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

const sms = "211267313";

// cypress/e2e/proEzyMigrate/Client/add_client.cy.js
beforeEach(() => {
  setupAPIIntercepts(); // Call the function to set up API intercepts
  cy.interceptSearchClient();
  cy.login();
  cy.xpath(
    '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
  ).click();
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
});

describe("Adding client", () => {
  const futureDate = Cypress.env("futureDate");
 
  

  it("Add client", () => {
    cy.wait(2000);

    cy.contains('finame shuja').click()
    


    
    
  
      // cy.wait("@AllData").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@GetAllClientSource").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@GetAllCountries").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@getallusers").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@BranchCountryLinking").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@BranchVisaType/All").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@getaccessingauth").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@UserSignature").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@SetHtmlTemplate").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.get(".header-text").contains("Documents").click();
  
      // cy.wait("@AllData").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@allsubjectcasedropdown").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@getdocumentypeall").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@DocumentView").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@branch/permissions").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@AllByType").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.get(".ant-tabs-tab-btn").contains("DOCUMENT CHECKLIST").click();
  
      // cy.wait("@checklist").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@datachecklist").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 404);
      // });
  
      // cy.get("#gender").click();
  
      // cy.get('div[title="test document checklist"]').click();
  
      // cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn")
      //   .contains("SAVE")
      //   .click();
  
      // cy.wait("@datachecklist").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("not.equal", 500);
      // });
  
      // cy.wait("@postdocumentchecklist").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@clientemailsubject").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@documentCheckList").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@UserSignature").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@SetanyHtmlTemplate").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });

      // cy.wait(2000)
  
      // cy.get('.ant-btn.ant-btn-primary.login-form-button.save-btn.button-blue')
      //   .contains('SEND')
      //   .click()

      //   cy.wait("@postClientEmail").then((interception) => {
      //     cy.wrap(interception.response.statusCode).should("eq", 200);
      //   });

      //   cy.wait("@postclientlink").then((interception) => {
      //     cy.wrap(interception.response.statusCode).should("eq", 200);
      //   });

      //   cy.wait("@emailqueueblocburl").then((interception) => {
      //     cy.wrap(interception.response.statusCode).should("eq", 200);
      //   });

      //   cy.wait("@clientlog").then((interception) => {
      //     cy.wrap(interception.response.statusCode).should("eq", 200);
      //   });

      //   cy.get('.header-text')
      //     .contains('Email')
      //     .click()

      //     cy.wait("@ClientImportSettings").then((interception) => {
      //       cy.wrap(interception.response.statusCode).should("eq", 200);
      //     });
      //     cy.wait("@GetClientFamilyMembers").then((interception) => {
      //       cy.wrap(interception.response.statusCode).should("eq", 200);
      //     });

      //     cy.wait("@case/All").then((interception) => {
      //       cy.wrap(interception.response.statusCode).should("eq", 200);
      //     });
      //     cy.wait("@ClientEmailHistorynew").then((interception) => {
      //       cy.wrap(interception.response.statusCode).should("eq", 200);
      //     });

      //     cy.wait("@branch/permissions").then((interception) => {
      //       cy.wrap(interception.response.statusCode).should("eq", 200);
      //     });
      //     cy.wait("@emailtemplate").then((interception) => {
      //       cy.wrap(interception.response.statusCode).should("eq", 200);
      //     });
      //     cy.wait("@AllData").then((interception) => {
      //       cy.wrap(interception.response.statusCode).should("eq", 200);
      //     });

      //     cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      //       var del = $el
      //         .find(
      //           'span[style="font-size: 12px;"]'
      //         )
      //         .text()
      //         .trim();

      //         if(del.includes('Document Checklist test document checklist')){

      //           cy.wrap($el).find('.sent-email').contains('Sent Email').should('exist')
      //           cy.wrap($el).find('img[src="/static/media/detail-email.ea02a2ce.jpg"]').click()
      //           cy.wait("@singleclientemailbyid").then((interception) => {
      //             cy.wrap(interception.response.statusCode).should("eq", 200);
      //           });

      //           cy.get('.ant-btn.ant-btn-primary.login-form-button.save-btn.button-blue')
      //             .contains('Close')
      //             .scrollIntoView()
      //             .click()


      //         }
      //       })

      //       cy.wait(2000)


  
      // cy.get(".rightbar-icons").contains("Balance").click();
  
      // cy.get(".ant-tabs-nav-operations-hidden")
      //   .should("exist")
      //   .then(($element) => {
      //     // Use JavaScript to modify the element's style
      //     cy.window().then((win) => {
      //       win.document.querySelector(
      //         ".ant-tabs-nav-operations-hidden"
      //       ).style.position = "static";
      //     });
      //   });
  
      // cy.wait(4000);
      // cy.get(
      //   ":nth-child(2) > .ant-col > .ant-select > .ant-select-selector"
      // ).click();
  
      // cy.wait(4000);
  
      // cy.get('div[title="Mawaz Ejaz"]').click()
      // cy.wait(2000);
  
      // cy.get(":nth-child(3) > .ant-col > .ant-btn > span").click();
  
      // cy.wait(2000);
      // cy.wait("@postclientbalance").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@AllClientBalance").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("not.equal", 500);
      // });
  
      // cy.wait("@clientlog").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.get('a[href="/client-questionnaire"]').click();
  
      // cy.wait("@UserSignature").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@GetAllQuestionnairs").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@GetAllCountries").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@BranchVisaType/All").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@allfilledquestionairesbyclientid").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@getquestonairegroup").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@clientemailsubject").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@AllData").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
      // cy.wait("@emailtemplate").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.get(".ant-select-selector").eq(5).click();
  
      // cy.get('div[title="mobile testing questionare"]').click();
  
      // cy.wait("@shortlink").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@SetHtmlTemplate").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.get(".ant-btn.ant-btn-primary.cq-primary-btn.button-blue")
      //   .contains("SEND")
      //   .click();
  
      // cy.get(".ant-btn.ant-btn-primary.form-btn.button-blue")
      //   .contains("SEND")
      //   .click();
  
      // cy.wait("@postclientlink").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@postClientEmail").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@clientlog").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
  
      // cy.wait("@emailqueueblocburl").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });

      // cy.get('.header-text')
      // .contains('Email')
      // .click()

      // cy.wait("@ClientImportSettings").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
      // cy.wait("@GetClientFamilyMembers").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });

      // cy.wait("@case/All").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
      // cy.wait("@ClientEmailHistorynew").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });

      // cy.wait("@branch/permissions").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
      // cy.wait("@emailtemplate").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });
      // cy.wait("@AllData").then((interception) => {
      //   cy.wrap(interception.response.statusCode).should("eq", 200);
      // });

      // cy.wait(2000)

      // cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      //   var del = $el
      //     .find(
      //       'span[style="font-size: 12px;"]'
      //     )
      //     .text()
      //     .trim();

      //     if(del.includes('mobile testing questionare')){

      //       cy.wrap($el).find('.sent-email').contains('Sent Email').should('exist')
      //       cy.wrap($el).find('img[src="/static/media/detail-email.ea02a2ce.jpg"]').click()
      //       cy.wait("@singleclientemailbyid").then((interception) => {
      //         cy.wrap(interception.response.statusCode).should("eq", 200);
      //       });

      //       cy.get('.ant-btn.ant-btn-primary.login-form-button.save-btn.button-blue')
      //         .contains('Close')
      //         .scrollIntoView()
      //         .click()


      //     }
      //   })

      //   cy.wait(2000)




  
   
    
  
    // cy.get(".header-text").contains("Client Profile").click();
    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@GetAllClientSource").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@BranchCountryLinking").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@getaccessingauth").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@UserSignature").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@SetHtmlTemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait(2000);
  
    cy.get('div[style="margin-left: 10px;"]').each(($el, index, $list) => {
      var del = $el.find(".black-button-text").text().trim();
      if (del === "Area Access") {
        cy.log(del);
        cy.wrap($el)
          .find('img[src="/static/media/btn-img.94b19732.svg"]')
          .click();
      }
    });
  
    cy.wait("@UpdateClientSimple").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@emailtemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait(2000);
     
    
  
    cy.get('a:contains("Click here")')
      .invoke("attr", "href")
      .then((link) => {
        // `link` variable now contains the href attribute value
        cy.log(link);
        // Open the link
        cy.visit(link)
      });
      cy.origin('https://checkmyvisa.io', () => {
      const checkmyvisapass = Cypress.env("checkmyvisapass");
  
 
   
   cy.url().then((url) => {
    cy.log('Current URL:', url);
  });

  
    
   
     

    cy.wait(5000)
    
    cy.url().then((url) => {
      cy.log('Current URL:', url);
      
     
    });

   

  


  
  
  
   
   
    

    cy.get("#normal_login_password").should("exist");
    cy.get("#normal_login_password").type(checkmyvisapass);
    cy.get("#normal_login_reTypePassword").should("exist");
    cy.get("#normal_login_reTypePassword").type(checkmyvisapass);
  
    cy.get(".ant-btn.ant-btn-primary.login-form-button")
      .contains("ACTIVATE & SIGN IN")
      .click();
    
  
    cy.wait("@cmvsetpassword").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    
  
    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
  
    cy.contains("finame").should("exist");
  
    cy.contains("shuja").should("exist");
  
    cy.contains("nabeeloutsourcenz1@gmail.com").should("exist");
  
    cy.contains("test addess").should("exist");
  
    cy.contains("test occupation").should("exist");
  
    cy.get(".ant-tabs-tab-btn").contains("PARTNER DETAIL").click();
  
    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvclientprofilepartner").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.contains("wife").should("exist");
  
    cy.contains("middlename").should("exist");
  
    cy.contains("test@gmail.com").should("exist");
    
    
  
    //cmv child verification
  
    cy.get(".ant-tabs-tab-btn").contains("FAMILY MEMBER DETAIL").click();
  
    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvclientprofilepartner").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvclientprofilefamilymembers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.get(".ant-btn.ant-btn-link").contains("child").click();
  
    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.contains("child").should("exist");
  
    cy.contains("middlename").should("exist");
  
    cy.wait(2000);
  
    cy.get('a[href="/visa-status"]').click();
  
    cy.wait("@cmvclientcasesall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.get(".event-visa-btn").contains("Details").eq(0).click();
  
    cy.wait(2000);
  
    cy.get(".event-visa-btn").contains("hide").eq(0).click();
  
    cy.wait(2000);
  
    cy.get('a[href="/admission"]').click();


  
    cy.wait("@cmvclientprogramdetailsall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.get('a[href="/document"]').click();

    
  
    cy.wait("@cmvclientdocumentall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvclientprofilefamilymembers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    // cy.wait("@cmvclientprofile").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 200);
    // });
  
    cy.get(".anticon.anticon-plus").click();

    cy.wait(3000)
  
    cy.get("#document_subjectId").click();
    cy.wait(3000)
  
    cy.get(".ant-select-item-option-content").eq(1).click({force:true});
    cy.wait(3000)
  })

 // Get the current URL and log it
// cy.url().then((url) => {
//   cy.log('Current URL:', url);
// });



  cy.fixture('sample.pdf', 'base64').then((fileContent) => {
    return Cypress.Blob.base64StringToBlob(fileContent);
  }).then((blob) => {
    const file = new File([blob], 'sample.pdf', { type: 'application/pdf' });
    const event = { dataTransfer: { files: [file] } };
    cy.get('.ant-upload.ant-upload-select.ant-upload-select-text').trigger('drop', event);
  });


// Continue with other Cypress commands outside of cy.origin if needed
cy.wait("@cmvmultiuploadfilename").then((interception) => {
  cy.wrap(interception.response.statusCode).should("eq", 200);
});


  
cy.origin('https://checkmyvisa.io', (win) => { cy.get(".ant-btn.ant-btn-primary.login-form-button.mr-24")
      .contains("Submit")
      .click();
  
    cy.wait("@cmvcpostdocument").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvclientdocumentall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.get(".ant-tabs-tab-btn").contains("Document Checklist").click();
  
    cy.wait("@cmvdocumentchecklistall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.get('a:contains("Click Here")')
      .invoke("attr", "href")
      .then((link) => {
        // `link` variable now contains the href attribute value
        cy.log(link);
        // Open the link
        cy.visit(link);
      });
  
    cy.wait("@cmvdocumentchecklistlink").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvclientprofilebranchdetails").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.get(".anticon.anticon-edit").click();

  })

  cy.origin('https://checkmyvisa.io', () => {
  cy.fixture('ABC.jpg', 'base64').then((fileContent) => {
    return Cypress.Blob.base64StringToBlob(fileContent);
  }).then((blob) => {
    const file = new File([blob], 'ABC.jpg', { type: 'image/jpeg' });
    const event = { dataTransfer: { files: [file] } };
    cy.get('.anticon.anticon-upload').trigger('drop', event);
  });
});
cy.origin('https://checkmyvisa.io', () => {
    cy.wait(5000);
  
    cy.get(".ant-btn.ant-btn-link").contains("Save").click();

  })
  
    // cy.wait("@cmvclientprofile").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 200);
    // });
  
    cy.wait("@cmvmultiuploadfilename").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvpostdocumentchecklist").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvdocumentchecklistlink").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvclientprofilebranchdetails").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.get('a[href="/visa-form"]').click();
  
    cy.wait("@cmvclientquestionaireget").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.get('a:contains("Click Here")')
      .invoke("attr", "href")
      .then((link) => {
        // `link` variable now contains the href attribute value
        cy.log(link);
        // Open the link
      });
  
    cy.get('a[href="/balance"]').click();
  
    cy.wait("@cmvclientbalanceall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.contains("3453").should("exist");
  
    cy.get('a[href="/client-profile"]').click();
  
    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    // cy.wait("@cmvclientprofile").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 200);
    // });
  
    cy.contains("Employer Information").click();
  
    // cy.wait("@cmvclientprofile").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 200);
    // });
  
    cy.wait("@cmvclientjobhistory").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvemployerall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 404);
    });
  
    cy.get(".anticon.anticon-plus").click();
  
    cy.wait(2000);
  
    cy.get(".ant-select-selection-search").click();
  
    cy.wait(2000);
  
    cy.get('div[title="Current"]').click();
  
    cy.get("#add_new_employer_add_new_employer_0_name").type("auto cmv employer");
  
    cy.get("#add_new_employer_add_new_employer_0_legal_name").type(
      "legal company name"
    );
  
    cy.get("#add_new_employer_add_new_employer_0_address").type("test address");
  
    cy.get("#add_new_employer_add_new_employer_0_contact_person").type(
      "contact person"
    );
  
    cy.get("#add_new_employer_add_new_employer_0_email").type("test@gmail.com");
  
    cy.get("#add_new_employer_add_new_employer_0_mobile_phone").type("03030303");
  
    cy.get("#add_new_employer_add_new_employer_0_phone").type("203030303");
  
    cy.get("#add_new_employer_add_new_employer_0_website").type("www.gmail.com");
  
    cy.get("#add_new_employer_add_new_employer_0_nzbn").type("12");
  
    cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn")
      .contains("SAVE")
      .click();
  
    cy.wait("@cmvpostclientemployerall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvemployerall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    // cy.wait("@cmvclientprofile").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 200);
    // });
  
    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn")
      .contains("UPDATE EMPLOYER")
      .click();
  
    cy.wait("@cmvputclientemployerall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.contains("Job History").click();
  
    cy.wait("@cmvclientjobhistoryreal").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 404);
    });
  
    // cy.wait("@cmvclientprofile").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 200);
    // });
  
    cy.wait("@cmvemployerall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@cmvclientjobhistory").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.get(".anticon.anticon-plus:visible").click();
  
    cy.get("#job_history_job_history_0_employerName").click();
  
    cy.get('div[title="auto cmv employer"]').click();
  
    cy.get("#job_history_job_history_0_job_title").type("auto cmv job name");
  
    cy.get("#job_history_job_history_0_start_date")
      .type(futureDate, { force: true })
      .type("{enter}");
  
    cy.get("#job_history_job_history_0_end_date")
      .type(futureDate, { force: true })
      .type("{enter}");
  
    cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn:visible")
      .contains("SAVE")
      .click();
  
    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvclientpostjonbhistory").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvclientjobhistoryreal").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    // cy.wait("@cmvclientprofile").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 200);
    // });
  
    cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn ")
      .contains("UPDATE JOB HISTORY")
      .click();
  
    cy.wait("@cmvclientputjonbhistory").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvclientjobhistoryreal").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.contains("Qualification").click();
  
    // cy.wait("@cmvclientprofile").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 200);
    // });
  
    cy.wait("@cmvclienteducationhistoryall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.get(".anticon.anticon-plus:visible").click();
  
    cy.get("#dynamic_form_nest_item_qualification_0_title").type(
      "cmv education title"
    );
    cy.get("#dynamic_form_nest_item_qualification_0_level").type("test level");
    cy.get("#dynamic_form_nest_item_qualification_0_start_date")
      .type(futureDate, { force: true })
      .type("{enter}");
    cy.get("#dynamic_form_nest_item_qualification_0_end_date")
      .type(futureDate, { force: true })
      .type("{enter}");
    cy.get("#dynamic_form_nest_item_qualification_0_institute_name").type("test");
    cy.get("#dynamic_form_nest_item_qualification_0_institute_address").type(
      "test"
    );
  
    cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn:visible")
      .contains("SAVE")
      .click();
  
    cy.wait("@cmvclientposteducationalhistory").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@cmvclienteducationhistoryall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    // cy.wait("@cmvclientprofile").then((interception) => {
    //   cy.wrap(interception.response.statusCode).should("eq", 200);
    // });
  
    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.get(".ant-btn.ant-btn-primary.login-form-button.save-btn ")
      .contains("UPDATE QUALIFICATION")
      .click();
    cy.wait("@cmvclientputeducationalhistory").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
 

  

  
    cy.visit("https://app.ezymigrate.com/all-clients");
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
    ).click();
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
  
    cy.wait(2000);
  
    cy.contains("finame shuja").scrollIntoView();
    cy.wait(2000);
    cy.contains("finame shuja").click();
    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@GetAllClientSource").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@GetAllCountries").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@BranchCountryLinking").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@BranchVisaType/All").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@getaccessingauth").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@UserSignature").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@SetHtmlTemplate").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait(2000);
  
    cy.get(".cp-top-bar-text").contains("EMPLOYER INFORMATION").click();
  
    cy.wait("@getclientemployer").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.contains("auto cmv employer").should("exist");
  
    cy.get(".cp-top-bar-text").contains("JOB HISTORY").click();
  
    cy.wait("@getclientemployer").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@clientjobhistory").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.contains("auto cmv job name").should("exist");
  
    cy.get(".cp-top-bar-text").contains("QUALIFICATION").click();
  
    cy.wait("@getclientmaineducationhistory").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.contains("cmv education title").should("exist");
  
    cy.get(".header-text").contains("Documents").click();
  
    cy.wait("@AllData").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@allsubjectcasedropdown").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@getdocumentypeall").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@DocumentView").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@branch/permissions").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.wait("@AllByType").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  
    cy.contains("ABC.jpg").should("exist");
  
    cy.contains("sample.pdf").should("exist");
  
    cy.xpath(
      '//*[@id="root"]/div/div/div/section/section/aside/div/ul/li[5]/span/a'
    ).click();
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
  
    cy.wait(2000);
  
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el
        .find(
          'span[style="font-size: 12px; cursor: pointer; color: rgba(0, 0, 0, 0.85);"]'
        )
        .text()
        .trim();
      if (del === "finame shuja") {
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
  
    cy.wait(3000);
  
    cy.get('a[href="/employer-management"]').click();
    cy.wait(5000);
    cy.get(".ant-table-row.ant-table-row-level-0").each(($el, index, $list) => {
      var del = $el.find('span[style="cursor: pointer;"]').text().trim();
      if (del === "auto cmv employer") {
        cy.log(del);
        cy.wrap($el).find(".anticon.anticon-delete").click();
        cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
        cy.wait(1000);
      }
    });
  });
  });
  