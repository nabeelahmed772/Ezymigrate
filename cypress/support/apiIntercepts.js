
export function setupAPIIntercepts() {
cy.intercept("POST", "https://beta-api.ezymigrate.co.nz/v1/client").as(
      "client"
    );

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/client/ClientLog"
    ).as("clientlog");

    cy.intercept(
      "GEt",
      "https://beta-api.ezymigrate.co.nz/v1/client/ClientLog/*"
    ).as("getclientlog");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/client/GetLink"
    ).as("GetLink");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/client/LastAgreementSigned"
    ).as("LastAgreementSigned");

    cy.intercept(
      "PUT",
      "https://beta-api.ezymigrate.co.nz/v1/client/UpdateClientSimple"
    ).as("UpdateClientSimple");

    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz/v1/client/AllData/*"
    ).as("AllData");

    cy.intercept("POST", "https://beta-api.ezymigrate.co.nz/v1/document").as(
      "document"
    );

    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz/v1/document/AllByType/**"
    ).as("AllByType");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/visa/document"
    ).as("visadocument");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/client/SearchClient"
    ).as("SearchClient");

    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz/v1/emailimport/ClientImportSettings/*"
    ).as("ClientImportSettings");

    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz/v1/client/GetClientFamilyMembers/**"
    ).as("GetClientFamilyMembers");

    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz/v1/subject/case/All/*"
    ).as("case/All");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/subject/case"
    ).as("case");

    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz/v1/emailtemplate/*"
    ).as("emailtemplate");

    cy.intercept(
      "DELETE",
      "https://beta-api.ezymigrate.co.nz/v1/imap/ClientEmail"
    ).as("ClientEmail");

    cy.intercept(
      "GET",
      "https://beta-api.ezymigrate.co.nz/v1/imap/ClientEmailHistory/00000000-0000-0000-0000-000000000000/651876e6-b0c8-4c31-aac2-2129d93a8c9b/aa5f1c18-3094-4d14-a128-484e00bb585b/0/10/1/0"
    ).as("ClientEmailHistory");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz/v1/email/visaemail"
    ).as("visaemail");

    cy.intercept(
      "POST",
      "https://beta-api.ezymigrate.co.nz//v1/document/MergeDoc"
    ).as("MergeDoc");

    cy.intercept('POST', 'https://beta-api.ezymigrate.co.nz/v1/client/programdetail')
      .as('programdetail')

    cy.intercept('PUT', 'https://beta-api.ezymigrate.co.nz/v1/client/programdetail')
      .as('putprogramdetail')

    cy.intercept('GET', 'https://beta-api.ezymigrate.co.nz/v1/client/programdetail/All/*')
      .as('programdetail/All')

    cy.intercept('GET','https://beta-api.ezymigrate.co.nz/v1/config/GetAllClientSource')
      .as('GetAllClientSource')

    cy.intercept('GET','https://beta-api.ezymigrate.co.nz/v1/branch/permissions/*')
      .as('branch/permissions')

    cy.intercept('POST', 'https://beta-api.ezymigrate.co.nz/v1/client/filenote')
      .as('filenote')


    cy.intercept('PUT', 'https://beta-api.ezymigrate.co.nz/v1/client/filenote')
      .as('putfilenote')

    cy.intercept('DELETE', 'https://beta-api.ezymigrate.co.nz/v1/client/filenote')
      .as('delfilenote')

    cy.intercept('GET','https://beta-api.ezymigrate.co.nz/v1/client/filenote/All/***')
      .as('filenote/All')

    cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/client/filenote/linkvisa')
      .as('linkvisa')

    cy.intercept('POST','https://beta-api.ezymigrate.co.nz/v1/task/TaskWithUsers')
      .as('TaskWithUsers')

    cy.intercept('PUT','https://beta-api.ezymigrate.co.nz/v1/subject/case/UpdateSubjectCaseStatus')
      .as('UpdateSubjectCaseStatus')

    }