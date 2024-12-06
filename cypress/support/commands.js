
import { setupAPIIntercepts } from "./apiIntercepts";

Cypress.Commands.add("login", () => {
  const environment = Cypress.env("environment");

  console.log("Environment:", environment);
  const envConfig = Cypress.env(environment);
  console.log("Environment Configuration:", envConfig);

  const loginUrl = Cypress.env(environment).loginUrl;
  const password = Cypress.env(environment).password;
  const email = Cypress.env(environment).email;

  cy.viewport(1366, 657);
  
  //const sms= '211267313';
  cy.visit(loginUrl);

  cy.getCookies({ log: true });

  cy.clearCookies({ log: true });

  cy.getCookies().should("be.empty");

  cy.clearAllCookies({ log: true });

  cy.clearAllLocalStorage({ log: true });

  //cy.visit('https://app-stage.ezymigrate.co.nz/login')

  

  setupAPIIntercepts();
  cy.wait("@GetLoginPageImage").then((interception) => {
    cy.wrap(interception.response.statusCode).should("eq", 200);
  });
  cy.get("#userName > .profile-input-login").type(email);

  cy.get("#password > .profile-input-login").type(password);

  cy.get(".sus-modal-button-text").click();

  

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

//resolving promose for read file expression 

// commands.js

// commands.js or support/commands.js
Cypress.Commands.add('readDirectory', (path) => {
  return cy.task('readDirectory', path);
});

Cypress.Commands.add("waitForRequest", (alias, validate) => {
  return new Cypress.Promise((resolve) => {
    const checkRequest = () => {
      cy.get(`${alias}.all`).then((requests) => {
        const match = requests.find(validate);
        if (match) resolve(match);
        else setTimeout(checkRequest, 50); // Retry every 50ms
      });
    };
    checkRequest();
  });
});









