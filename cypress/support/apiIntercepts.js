export function setupAPIIntercepts() {
  cy.intercept("POST", "https://beta-api.ezymigrate.co.nz/v1/client").as(
    "client"
  );

  cy.intercept("DELETE", "https://beta-api.ezymigrate.co.nz/v1/client").as(
    "delclient"
  );

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/client/ClientLog"
  ).as("clientlog");

  cy.intercept(
    "GET",
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

  cy.intercept("POST", "https://beta-api.ezymigrate.co.nz/v1/visa/document").as(
    "visadocument"
  );

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

  cy.intercept("POST", "https://beta-api.ezymigrate.co.nz/v1/subject/case").as(
    "case"
  );

  cy.intercept('DELETE', 'https://beta-api.ezymigrate.co.nz/v1/subject/case')
    .as('delcase')

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

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/client/programdetail"
  ).as("programdetail");

  cy.intercept(
    "PUT",
    "https://beta-api.ezymigrate.co.nz/v1/client/programdetail"
  ).as("putprogramdetail");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/client/programdetail/All/*"
  ).as("programdetail/All");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/config/GetAllClientSource"
  ).as("GetAllClientSource");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/branch/permissions/*"
  ).as("branch/permissions");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/client/filenote"
  ).as("filenote");

  cy.intercept(
    "PUT",
    "https://beta-api.ezymigrate.co.nz/v1/client/filenote"
  ).as("putfilenote");

  cy.intercept(
    "DELETE",
    "https://beta-api.ezymigrate.co.nz/v1/client/filenote"
  ).as("delfilenote");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/client/filenote/All/***"
  ).as("filenote/All");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/client/filenote/linkvisa"
  ).as("linkvisa");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/task/TaskWithUsers"
  ).as("TaskWithUsers");

  cy.intercept(
    "PUT",
    "https://beta-api.ezymigrate.co.nz/v1/subject/case/UpdateSubjectCaseStatus"
  ).as("UpdateSubjectCaseStatus");

  //questionaires api

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/questionnaire/GetAllQuestionnairs/*"
  ).as("GetAllQuestionnairs");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/parentbinding/All"
  ).as("parentbinding");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/questionnaire/RAddQuestionnaire"
  ).as("RAddQuestionnaire");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/questionnaire/Recursive/*"
  ).as("questionnaire/Recursive");

  cy.intercept(
    "PUT",
    "https://beta-api.ezymigrate.co.nz/v1/questionnaire/RUpdate"
  ).as("RUpdate");

  cy.intercept(
    "PUT",
    "https://beta-api.ezymigrate.co.nz/v1/questionnaire/SimpleUpdate"
  ).as("SimpleUpdate");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/QuestionnairePublicApi/Recursive/*"
  ).as("QuestionnairePublicApi");

  cy.intercept(
    "DELETE",
    "https://beta-api.ezymigrate.co.nz/v1/questionnaire"
  ).as("questionnaire");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/questionnaire/DuplicateQuestionnaire"
  ).as("DuplicateQuestionnaire");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/filledquestionnaire/All/**"
  ).as("filledquestionnaire");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/potentialclient/markedtags/All/*"
  ).as("markedtags/All");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/questionnaire/GetLink"
  ).as("GetLink");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/config/GetAllCountries"
  ).as("GetAllCountries");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/questionnairefilledanswer/InsertFilledAnswers"
  ).as("InsertFilledAnswers");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/questionnaire/WebSendQuestionnaireEmail"
  ).as("WebSendQuestionnaireEmail");

  cy.intercept(
    "GET",
    "https://app.ezymigrate.com/AgreementBuilder/Thanks.htm"
  ).as("Thanks");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/potentialclient"
  ).as("potentialclient");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/client/AssignTag"
  ).as("AssignTag");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/questionnaire/SaveInDocument"
  ).as("SaveInDocument");

  cy.intercept(
    "PUT",
    "https://beta-api.ezymigrate.co.nz/v1/filledquestionnaire"
  ).as("putfilledquestionnaire");

  cy.intercept(
    "PUT",
    "https://beta-api.ezymigrate.co.nz/v1/questionnaire/PQuestionnaireMapping"
  ).as("PQuestionnaireMapping");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/potentialclient/*"
  ).as("getpotentialclient");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/config/GetAllClientSource"
  ).as("GetAllClientSource");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/company/BranchVisaType/All/*"
  ).as("BranchVisaType/All");

  cy.intercept("GET", "https://beta-api.ezymigrate.co.nz/v1/users/ddl/All/*").as(
    "getallusers"
  );

  cy.intercept("GET", "https://beta-api.ezymigrate.co.nz/v1/company/*").as(
    "getcompany"
  );

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/company/clientstatus/potentialclient/All/*"
  ).as("getclientstatus");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/users/DocumentView/*"
  ).as("DocumentView");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/potentialclient/MovePotentialClientToClientAuto/*"
  ).as("MovePotentialClientToClientAuto");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/potentialclient/All"
  ).as("potentialclientAll");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/potentialclient/markedtags/All/*"
  ).as("getmarkedtagspotentialclient");

  cy.intercept("GET", "https://beta-api.ezymigrate.co.nz/v1/users/*").as(
    "singleuser"
  );

  cy.intercept("GET", "https://beta-api.ezymigrate.co.nz/v1/user/Branch/*").as(
    "getbranchuser"
  );

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/BranchCountryLinking/ByBranchId/*"
  ).as("BranchCountryLinking");

  cy.intercept(
    "POST",
    "https://beta-api.ezymigrate.co.nz/v1/HtmlTemplate/SetHtmlTemplate"
  ).as("SetHtmlTemplate");

  cy.intercept(
    "GET",
    "https://beta-api.ezymigrate.co.nz/v1/users/UserSignature/*"
  ).as("UserSignature");

  cy.intercept('GET', 'https://beta-api.ezymigrate.co.nz/v1/emailimport/IMAPImportSettings/*')
    .as('IMAPImportSettings')

  cy.intercept('POST', 'https://beta-api.ezymigrate.co.nz/v1/emailimport/AllEmailImportSettings')
    .as('AllEmailImportSettings')

  
}
