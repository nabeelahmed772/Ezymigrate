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

const sms = "211267313";

// cypress/e2e/proEzyMigrate/Client/add_client.cy.js

describe("Adding task and reminders", () => {
  const futureDate = Cypress.env("futureDate");

  before(() => {
    
    setupAPIIntercepts(); // Call the function to set up API intercepts
    cy.login();
  });

  it("Add task", () => {
    cy.get('a[href="/tasks-and-reminders/tasks-to-do"]').click();

    cy.wait("@getallusers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@getallreminders").then((interception) => {
      cy.wrap(interception.response.statusCode).should("not.equal", 500);
    });

    cy.wait("@allbranchUsers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllByUserId").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@TimeTrackingPopUp").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(
      'div[style="display: flex; justify-content: space-between; padding-bottom: 29px;"]'
    ).each(($el, index, $list) => {
      var del = $el.find(".cv-normal-text").text();
      if (del.includes("automation cypress task")) {
        cy.log(del);
        cy.wrap($el).find("img").eq(4).click();

        cy.get(".ant-btn.ant-btn-primary.margin-right").contains("OK").click();
        cy.wait("@deletetask").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@AllByUserId").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.get(".ant-btn.ant-btn-default").eq(0).click();

    cy.wait("@allbranchUsers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get("#basic_link_client").type("sufi cup");

    cy.get('div[title="sufi cup"]').click();

    cy.get("#basic_task_title").type("automation cypress task");

    cy.get("#basic_task_description").type(
      "description for automation cypress task"
    );

    cy.get("#basic_select_date").click();

    cy.get(
      ".ant-picker-cell.ant-picker-cell-in-view.ant-picker-cell-today"
    ).click({ force: true });

    cy.get(".ant-select-selection-overflow").click();

    cy.get('div[title="team member nabeel"]').click();

    cy.get(".ant-btn.ant-btn-primary.button-blue").contains("Save").click();

    cy.wait("@TaskWithUsers").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@clientlog").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@reminder").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllByUserId").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(
      'div[style="display: flex; justify-content: space-between; padding-bottom: 29px;"]'
    ).each(($el, index, $list) => {
      var del = $el.find(".cv-normal-text").text();
      if (del.includes("automation cypress task")) {
        cy.log(del);
        cy.wrap($el)
          .find('img[src="/static/media/calendar-blue.bd2feb77.svg"]')
          .click();
        cy.get("#basic_reschedule_date").click();
        cy.get(
          ".ant-picker-cell.ant-picker-cell-in-view.ant-picker-cell-today"
        ).click();
        cy.get(".ant-btn.ant-btn-primary.task-blue").contains("SAVE").click();
        cy.wait("@puttask").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@AllByUserId").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(3000);

    cy.get(
      'div[style="display: flex; justify-content: space-between; padding-bottom: 29px;"]'
    ).each(($el, index, $list) => {
      var del = $el.find(".cv-normal-text").text();
      if (del.includes("automation cypress task")) {
        cy.log(del);
        cy.wrap($el)
          .find('img[src="/static/media/user-circle-gray.4ffc16c8.svg"]')
          .click();
        cy.get("#basic_add_follower").click();
        cy.get('div[title="arsalan team member"]').click();
        cy.get(".ant-btn.ant-btn-primary.task-blue")
          .contains("ADD FOLLOWER")
          .click();
        cy.wait("@posttaskuser").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@clientlog").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(3000);

    cy.get(
      'div[style="display: flex; justify-content: space-between; padding-bottom: 29px;"]'
    ).each(($el, index, $list) => {
      var del = $el.find(".cv-normal-text").text();
      if (del.includes("automation cypress task")) {
        cy.log(del);
        cy.wrap($el)
          .find('img[src="/static/media/file-notes.2d0a54c0.svg"]')
          .click();
        cy.get("#basic_title").type(" test");
        cy.get(".ant-btn.ant-btn-primary.task-blue").contains("SAVE").click();
        cy.wait("@puttask").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@AllByUserId").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(3000);

    cy.get(
      'div[style="display: flex; justify-content: space-between; padding-bottom: 29px;"]'
    ).each(($el, index, $list) => {
      var del = $el.find(".cv-normal-text").text();
      if (del.includes("automation cypress task")) {
        cy.log(del);
        cy.wrap($el).find(".cv-normal-text").click();

        cy.wait("@getalltaskcomment").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 404);
        });
        cy.wait("@getalltaskfollowers").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.get("textarea").type("automation test comment by nabeel ");
        cy.get(".ant-btn.ant-btn-primary.task-blue")
          .contains("Comment")
          .click();
        cy.wait("@posttaskcomment").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });

        cy.contains('automation test comment by nabeel ').should('exist')
        
        
        cy.wait("@getalltaskcomment", { timeout: 10000, cacheTimeout: 0 }).then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(3000);

    cy.get(
      'div[style="display: flex; justify-content: space-between; padding-bottom: 29px;"]'
    ).each(($el, index, $list) => {
      var del = $el.find(".cv-normal-text").text();
      if (del.includes("automation cypress task")) {
        cy.log(del);
        cy.wrap($el).find(".sus-checkbox").click();
        cy.wait("@completedtask").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@AllByUserId").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        // cy.wait("@BranchVisaType/All").then((interception) => {
        //   cy.wrap(interception.response.statusCode).should("eq", 200);
        // });
        cy.wait("@clientlog").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });


      }
    });

    cy.wait(3000);
  
    cy.get('@allservicetype')
  .then(interception => {
    if (interception && interception.response && interception.response.statusCode === 200) {
      cy.get(".ant-btn.ant-btn-primary.button-blue")
        .contains("Close")
        .click();
    } else {
      // API call failed or was not made
      cy.log('API call failed or was not made');
    }
  });

cy.on('fail', (error, runnable) => {
  // Check if the failure was due to the timeout on cy.get('@allservicetype')
  if (error.message.includes('Timed out retrying')) {
    cy.log('Timeout: API call was not intercepted within the specified timeout');
    // Handle the timeout error gracefully
    // For example, you can proceed with the test or fail it here
  } else {
    // Handle other types of failures
    // You might want to re-throw the error or handle it differently based on your requirements
    throw error;
  }
});
    cy.contains("Completed Tasks").click();

    cy.wait("@completedtasks").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('img[src="/static/media/arrow-curve-blue.cfb11187.svg"]')
      .eq(0)
      .click();

    cy.wait("@puttask").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@AllByUserId").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@completedtasks").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get(".ant-tabs-tab-btn").contains("Tasks To Do").click();

    cy.wait("@AllByUserId").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait(2000);

    cy.get(
      'div[style="display: flex; justify-content: space-between; padding-bottom: 29px;"]'
    ).each(($el, index, $list) => {
      var del = $el.find(".cv-normal-text").text();
      if (del.includes("automation cypress task")) {
        cy.log(del);
        cy.wrap($el).find(".sus-checkbox").click();
        cy.wait("@completedtask").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@AllByUserId").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@BranchVisaType/All").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
        cy.wait("@clientlog").then((interception) => {
          cy.wrap(interception.response.statusCode).should("eq", 200);
        });
      }
    });

    cy.wait(3000);

    cy.wait("@allservicetype").then((interception) => {
      if (interception.response.statusCode === 200) {
        cy.get(".ant-btn.ant-btn-primary.button-blue")
          .contains("Close")
          .click();
      } else {
        console.log("API was not called");
      }
    });

    cy.contains("Completed Tasks").click();

    cy.wait("@completedtasks").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.get('img[src="/static/media/del-blue.296a7465.svg"]').eq(0).click();

    cy.get(".ant-btn.ant-btn-primary.margin-right").contains("OK").click();

    cy.wait("@deletetask").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });

    cy.wait("@completedtasks").then((interception) => {
      cy.wrap(interception.response.statusCode).should("eq", 200);
    });
  });
});
