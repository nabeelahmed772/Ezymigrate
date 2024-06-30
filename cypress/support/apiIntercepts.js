function generateBaseURL(environment) {
  const baseURLPrefix = getBaseURLPrefix(environment);

  if (environment === "production") {
    return `${baseURLPrefix}v1/`;
  } else if (environment === "staging") {
    return `${baseURLPrefix}v1/`;
  } else if (environment === "linux") {
    return `${baseURLPrefix}v1/`;
  } else {
    return `${baseURLPrefix}v1/`;
  }
}

// Helper function to get the base URL prefix based on the environment
function getBaseURLPrefix(environment) {
  if (environment === "production") {
    return "https://beta-api.ezymigrate.co.nz/";
  } else if (environment === "staging") {
    return "https://uatapi.ezymigrate.co.nz/";
  } else if (environment === "linux") {
    return "https://linuxapi-stage.ezymigrate.co.nz/";
  } else {
    return "https://beta-api.ezymigrate.co.nz/";
  }
}



export function setupAPIIntercepts() {
  const environment = Cypress.env("environment");
  const baseURL = generateBaseURL(environment);

  cy.intercept(`${baseURL}admin/EzyMigrateSettings/GetLoginPageImage`).as(
    "GetLoginPageImage"
  );

  cy.intercept("GET", `${baseURL}client/contract/GetCount`).as(
    "contract/GetCount"
  );

  cy.intercept("GET", `${baseURL}dashboardbi/ChecklistQuestionnaireCount`).as(
    "ChecklistQuestionnaireCount"
  );

  cy.intercept("POST", `${baseURL}dashboardbi/ClientAnalytics`).as(
    "dashboardbi/ClientAnalytics"
  );

  cy.intercept("POST", `${baseURL}dashboardbi/AccountAnalytics`).as(
    "dashboardbi/AccountAnalytics"
  );

  cy.intercept("POST", `${baseURL}dashboardbi/VisaAnalytic`).as(
    "dashboardbi/VisaAnalytic"
  );

  cy.intercept("POST", `${baseURL}dashboardbi/IdleSince`).as(
    "dashboardbi/IdleSince"
  );

  cy.intercept("POST", `${baseURL}dashboardbi/ActiveSince`).as(
    "dashboardbi/ActiveSince"
  );

  cy.intercept("POST", `${baseURL}dashboardbi/ActiveClientBalance`).as(
    "dashboardbi/ActiveClientBalance"
  );

  cy.intercept("GET", `${baseURL}deal/pipeline/GetByBranchId`).as(
    "getAllDeals"
  );

  cy.intercept(`${baseURL}deal/pipeline`).as("pipeline");

  cy.intercept("GET", `${baseURL}deal/sendgridmap/GetSendGridList`).as(
    "getGridList"
  );

  cy.intercept(`${baseURL}deal/sendgridmap`).as("sendGridMap");

  cy.intercept(`${baseURL}deal/stage`).as("stage");

  cy.intercept(`${baseURL}deal/GetDealByPipelineId/*`).as(
    "getDealByPipelineId"
  );

  cy.intercept(`${baseURL}deal`).as("deal");

  cy.intercept(`${baseURL}deal/GetDealBySubjectId/*`).as("GetDealBySubjectId");

  cy.intercept(`${baseURL}mailchimp/GetIsMailChimpOrSendGrid`).as(
    "GetIsMailChimpOrSendGrid"
  );

  cy.intercept(`${baseURL}mailchimp`).as("mailchimp");

  cy.intercept(`${baseURL}company/sendgridkey`).as("company/sendgridkey");

  cy.intercept(`${baseURL}company/sendgridkey`).as("company/sendgridkey1");

  cy.intercept("POST", `${baseURL}payment/dailytransaction`).as("dailytran");

  cy.intercept("POST", `${baseURL}invoice/SendRecipt`).as("invoiceSendRecipt");

  cy.intercept("GET", `${baseURL}invoice/CheckDuplicate/*`).as("duplicateinvoicecheck");

  cy.intercept("GET", `${baseURL}invoice/InvoiceReciptPDFHtmlBlob/**`).as("invoicereceiptpdfhtml");

  cy.intercept("POST", `${baseURL}invoice/AllBySubjectIdWithPaging`).as(
    "AllBySubjectIdWithPaging"
  );

  cy.intercept(`${baseURL}invoice/LastInvoiceNumber`).as("LastInvoiceNumber");

  cy.intercept(`${baseURL}invoice/status/GetAllInvoiceStatuses/1`).as(
    "GetAllInvoiceStatuses"
  );

  cy.intercept(`${baseURL}branch/AllWithLinks`).as("AllWithLinks");

  cy.intercept(`${baseURL}currency/GetAllCurrencies`).as("GetAllCurrencies");

  cy.intercept(`${baseURL}invoice/AddNewLine/*`).as("AddNewLine");

  cy.intercept(`${baseURL}invoice`).as("invoice");

  cy.intercept('GET', `${baseURL}invoice/*`).as("getinvoice");

  cy.intercept(`${baseURL}document/MultiUploadWithFileName`).as(
    "MultiUploadWithFileName"
  );

  cy.intercept(`${baseURL}invoice/payment/All/*`).as("payment/All");

  cy.intercept('POST', `${baseURL}invoice/payment`).as("postpayment");

  cy.intercept("GET", `${baseURL}branch/bank`).as("branch/bank");

  cy.intercept("GET", `${baseURL}invoice/template/All`).as("getTemplate");

  cy.intercept("GET", `${baseURL}branch/tax/All`).as("getTax");

  cy.intercept("POST", `${baseURL}client`).as("client");

  cy.intercept("DELETE", `${baseURL}client`).as("delclient");

  cy.intercept("POST", `${baseURL}client/ClientLog`).as("clientlog");

  cy.intercept("GET", `${baseURL}client/ClientLog/*`).as("getclientlog");

  cy.intercept("POST", `${baseURL}client/GetLink`).as("GetLink");

  cy.intercept("POST", `${baseURL}client/LastAgreementSigned`).as(
    "LastAgreementSigned"
  );

  cy.intercept("PUT", `${baseURL}client/UpdateClientSimple`).as(
    "UpdateClientSimple"
  );

  cy.intercept("GET", `${baseURL}client/AllData/*`).as("AllData");

  cy.intercept("POST", `${baseURL}document`).as("document");

  cy.intercept("GET", `${baseURL}document/AllByType/**`).as("AllByType");

  cy.intercept("GET", `${baseURL}document/type/All`).as("getdocumentypeall");

  cy.intercept("GET", `${baseURL}subject/case/All/dropdown/*`).as("allsubjectcasedropdown");

  cy.intercept("POST", `${baseURL}visa/document`).as("visadocument");

  cy.intercept("POST", `${baseURL}client/SearchClient`).as("SearchClient");

  cy.intercept("GET", `${baseURL}emailimport/ClientImportSettings/*`).as(
    "ClientImportSettings"
  );

  cy.intercept("GET", `${baseURL}client/GetClientFamilyMembers/**`).as(
    "GetClientFamilyMembers"
  );

  cy.intercept("GET", `${baseURL}subject/case/All/*`).as("case/All");

  cy.intercept("POST", `${baseURL}subject/case`).as("case");

  cy.intercept("DELETE", `${baseURL}subject/case`).as("delcase");

  cy.intercept("GET", `${baseURL}emailtemplate`).as("emailtemplate");

  cy.intercept("GET", `${baseURL}invoice/InvoiceReciptPDFHtml/**`).as("invoicerecepitpdfhtml");

  cy.intercept("POST", `${baseURL}emailtemplate`).as("postemailtemplate");

  cy.intercept("PUT", `${baseURL}emailtemplate`).as("putemailtemplate");

  cy.intercept("DELETE", `${baseURL}emailtemplate`).as("delemailtemplate");

  cy.intercept("DELETE", `${baseURL}imap/ClientEmail`).as("ClientEmail");
  cy.intercept("POST", `${baseURL}imap/ClientEmail`).as("postClientEmail");

  cy.intercept("POST", `${baseURL}emailqueue/EmailQueueWithBlobUrl`).as("emailqueueblocburl");

  cy.intercept(`${baseURL}template/All`).as("template/All");

  cy.intercept(`${baseURL}template`).as("template");

  cy.intercept(`${baseURL}template/Attachments/All/*`).as("Attachments");

  cy.intercept(`${baseURL}template/Attachments`).as("Attachments1");

  cy.intercept(`${baseURL}config/DynamicKeys/All`).as("DynamicKeys");

  cy.intercept(`${baseURL}template/documentCheckList`).as("documentCheckList");

  cy.intercept(`${baseURL}temp/document/checklist`).as("checklist1");

  cy.intercept(`${baseURL}temp/document/checklist/All/*`).as("checklist");

  cy.intercept('GET', `${baseURL}document/checklist/All/*`).as("datachecklist");

  cy.intercept('GET', `${baseURL}client/email/Subject/*`).as("clientemailsubject");

  cy.intercept('POST', `${baseURL}document/checklist`).as("postdocumentchecklist");
  cy.intercept('PUT', `${baseURL}document/checklist`).as("putdocumentchecklist");

  cy.intercept('DELETE', `${baseURL}temp/document/checklistItem`).as("deletechecklistitemtemp");
  cy.intercept('DELETE', `${baseURL}document/checklistItem`).as("deletechecklistitemnontemp");

  cy.intercept(
    "GET",
    `${baseURL}imap/ClientEmailHistory/00000000-0000-0000-0000-000000000000/651876e6-b0c8-4c31-aac2-2129d93a8c9b/aa5f1c18-3094-4d14-a128-484e00bb585b/0/10/1/0`
  ).as("ClientEmailHistory");

  cy.intercept(
    "GET",
    `${baseURL}imap/ClientEmailHistory/**/0/20/1/0`
  ).as("ClientEmailHistorynew");


  cy.intercept("POST", `${baseURL}email/visaemail`).as("visaemail");

  cy.intercept("POST", `${baseURL}document/MergeDoc`).as("MergeDoc");

  cy.intercept("POST", `${baseURL}client/programdetail`).as("programdetail");

  cy.intercept("PUT", `${baseURL}client/programdetail`).as("putprogramdetail");

  cy.intercept("GET", `${baseURL}client/programdetail/All/*`).as(
    "programdetail/All"
  );

  cy.intercept("GET", `${baseURL}imap/ClientEmailById/**`).as(
    "singleclientemailbyid"
  );

  cy.intercept("GET", `${baseURL}document/GetDocumentBytesforAttachment/**`).as(
    "getdocumentsattachmentbytes"
  );

  cy.intercept("GET", `${baseURL}config/GetAllClientSource`).as(
    "GetAllClientSource"
  );

  cy.intercept("GET", `${baseURL}branch/permissions`).as("branch/permissions");

  cy.intercept("POST", `${baseURL}client/filenote`).as("filenote");

  cy.intercept("PUT", `${baseURL}client/filenote`).as("putfilenote");

  cy.intercept("DELETE", `${baseURL}client/filenote`).as("delfilenote");

  cy.intercept("GET", `${baseURL}client/filenote/All/***`).as("filenote/All");

  cy.intercept("GET", `${baseURL}client/filenote/All/*`).as("Getfilenote");

  cy.intercept("POST", `${baseURL}client/filenote/linkvisa`).as("linkvisa");

  cy.intercept("POST", `${baseURL}task/TaskWithUsers`).as("TaskWithUsers");

  cy.intercept("PUT", `${baseURL}subject/case/UpdateSubjectCaseStatus`).as(
    "UpdateSubjectCaseStatus"
  );

  //questionaires api

  cy.intercept("GET", `${baseURL}questionnaire/GetAllQuestionnairs`).as(
    "GetAllQuestionnairs"
  );

  cy.intercept("GET", `${baseURL}parentbinding/All`).as("parentbinding");

  cy.intercept("GET", `${baseURL}clientemployer/All/*`).as("getclientemployer");

  cy.intercept("GET", `${baseURL}client/educationalhistory/GetAllEducationalHistoryByClientId/*`).as("getclientmaineducationhistory");

  cy.intercept("POST", `${baseURL}questionnaire/RAddQuestionnaire`).as(
    "RAddQuestionnaire"
  );

  cy.intercept("GET", `${baseURL}questionnaire/Recursive/*`).as(
    "questionnaire/Recursive"
  );

  cy.intercept("PUT", `${baseURL}questionnaire/RUpdate`).as("RUpdate");

  cy.intercept("PUT", `${baseURL}questionnaire/SimpleUpdate`).as(
    "SimpleUpdate"
  );

  cy.intercept("GET", `${baseURL}QuestionnairePublicApi/Recursive/*`).as(
    "QuestionnairePublicApi"
  );

  cy.intercept("DELETE", `${baseURL}questionnaire`).as("questionnaire");

  cy.intercept("POST", `${baseURL}questionnaire/DuplicateQuestionnaire`).as(
    "DuplicateQuestionnaire"
  );

  cy.intercept("GET", `${baseURL}filledquestionnaire/All/**`).as(
    "filledquestionnaire"
  );

  cy.intercept("POST", `${baseURL}questionnaire/GetLink`).as("GetLink");

  cy.intercept("GET", `${baseURL}config/GetAllCountries`).as("GetAllCountries");

  cy.intercept("GET", `${baseURL}users/ddl/PermisionUser/true`).as(
    "allbranchUsers"
  );

  cy.intercept("GET", `${baseURL}users/ddl/PermisionUser/false`).as(
    "allbranchUsersfalse"
  );
  cy.intercept("GET", `${baseURL}questionnaire/GetAttachments/*`).as(
    "getquestionaireattachmentswithid"
  );

  cy.intercept(
    "POST",
    `${baseURL}questionnairefilledanswer/InsertFilledAnswers`
  ).as("InsertFilledAnswers");

  cy.intercept(
    "PUT",
    `${baseURL}questionnairefilledanswer`
  ).as("potentialfilledanswer");

  cy.intercept("POST", `${baseURL}questionnaire/WebSendQuestionnaireEmail`).as(
    "WebSendQuestionnaireEmail"
  );

  cy.intercept(
    "GET",
    "https://app.ezymigrate.com/AgreementBuilder/Thanks.htm"
  ).as("Thanks");

  cy.intercept("POST", `${baseURL}potentialclient`).as("potentialclient");

  cy.intercept("POST", `${baseURL}client/AssignTag`).as("AssignTag");

  cy.intercept("POST", `${baseURL}questionnaire/SaveInDocument`).as(
    "SaveInDocument"
  );

  cy.intercept("PUT", `${baseURL}filledquestionnaire`).as(
    "putfilledquestionnaire"
  );

  cy.intercept("PUT", `${baseURL}questionnaire/PQuestionnaireMapping`).as(
    "PQuestionnaireMapping"
  );

  cy.intercept("GET", `${baseURL}potentialclient/*`).as("getpotentialclient");

  cy.intercept("GET", `${baseURL}config/GetAllClientSource`).as(
    "GetAllClientSource"
  );

  cy.intercept("GET", `${baseURL}company/BranchVisaType/All/*`).as(
    "BranchVisaType/All"
  );

  cy.intercept("GET", `${baseURL}questionnaire/QuestionnaireSetting/*`).as(
    "getbranchquesionairesettingq"
  );

  cy.intercept("GET", `${baseURL}filledQuestionnaire/AllByClientId/*`).as(
    "allfilledquestionairesbyclientid"
  );

  cy.intercept("GET", `${baseURL}users/ddl/All`).as("getallusers");

  cy.intercept("GET", `${baseURL}questionnaire/QuestionnaireGroup`).as("getquestonairegroup");

  cy.intercept("GET", `${baseURL}client/GetAssessingAuth`).as("getaccessingauth");

  cy.intercept("GET", `${baseURL}company`).as("getcompany");

  cy.intercept("GET", `${baseURL}company/clientstatus/potentialclient/All`).as(
    "getclientstatus"
  );

  cy.intercept(`${baseURL}employer/SearchEmployersMain/**`).as(
    "searchemployer"
  );

  cy.intercept("POST", `${baseURL}employer/SearchEmployers`).as(
    "postsearchemployer"
  );

  cy.intercept(`${baseURL}employer/All`).as("employer");

  cy.intercept(`${baseURL}potentialclient/SearchPotentialClientMain/**`).as(
    "searchpotential"
  );

  cy.intercept("GET", `${baseURL}users/DocumentView`).as("DocumentView");
  cy.intercept("PUT", `${baseURL}users/DocumentView`).as("users/DocumentView");

  cy.intercept(`${baseURL}OutlookMail`).as("OutlookMail");

  cy.intercept(`${baseURL}users/GetUserIMAP`).as("GetUserIMAP");

  cy.intercept("GET", `${baseURL}users/UserEmailSetting`).as(
    "UserEmailSetting"
  );

  cy.intercept("PUT", `${baseURL}users/UserEmailSetting`).as(
    "UserEmailSetting1"
  );

  cy.intercept(
    "GET",
    `${baseURL}potentialclient/MovePotentialClientToClientAuto/*`
  ).as("MovePotentialClientToClientAuto");

  cy.intercept("POST", `${baseURL}potentialclient/All`).as(
    "potentialclientAll"
  );

  cy.intercept("GET", `${baseURL}potentialclient/markedtags/All/*`).as(
    "getmarkedtagspotentialclient"
  );

  cy.intercept("GET", `${baseURL}users/*`).as("singleuser");

  cy.intercept("GET", `${baseURL}user/Branch`).as("getbranchuser");

  cy.intercept("GET", `${baseURL}BranchCountryLinking/ByBranchId`).as(
    "BranchCountryLinking"
  );

  cy.intercept("POST", `${baseURL}BranchCountryLinking`).as(
    "postBranchCountryLinking"
  );

  cy.intercept("POST", `${baseURL}client/Link`).as(
    "postclientlink"
  );

  cy.intercept("PUT", `${baseURL}questionnaire/QuestionnaireMapping`).as(
    "putquestioniaremapping"
  );



  cy.intercept("GET", `${baseURL}client/jobhistory/All/*`).as(
    "clientjobhistory"
  );
  cy.intercept("POST", `${baseURL}HtmlTemplate/SetHtmlTemplate`).as(
    "SetHtmlTemplate"
  );

  cy.intercept("POST", `${baseURL}HtmlTemplate/SetAnyTemplate`).as(
    "SetanyHtmlTemplate"
  );

  cy.intercept("GET", `${baseURL}users/UserSignature`).as("UserSignature");

  cy.intercept("PUT", `${baseURL}users/UserSignature`).as("putUserSignature");

  cy.intercept("GET", `${baseURL}emailimport/IMAPImportSettings`).as(
    "IMAPImportSettings"
  );

  cy.intercept("POST", `${baseURL}emailimport/AllEmailImportSettings`).as(
    "AllEmailImportSettings"
  );

  cy.intercept("GET", `${baseURL}reminder/All`).as("getallreminders");

  cy.intercept("GET", `${baseURL}invoice/InvoicePDFHtml/**`).as("pdfinvoicedownloads");

  cy.intercept("GET", `${baseURL}task/AllByUserId`).as("AllByUserId");

  cy.intercept("GET", `${baseURL}task/comment/All/*`).as("getalltaskcomment");

  cy.intercept("POST", `${baseURL}task/comment`).as("posttaskcomment");

  cy.intercept("GET", `${baseURL}task/users/All/*`).as("getalltaskfollowers");


  cy.intercept("GET", `${baseURL}users/TimeTrackingPopUp`).as(
    "TimeTrackingPopUp"
  );

  cy.intercept("POST", `${baseURL}reminder`).as("reminder");

  cy.intercept("GET", `${baseURL}school/*`).as("schoolget");

  cy.intercept("PUT", `${baseURL}school`).as("schoolput");

  cy.intercept("GET", `${baseURL}school/All/*`).as("schoolall");

  cy.intercept(`${baseURL}report/CurrentVisaExpiry`).as("VisaExpiry");

  cy.intercept(`${baseURL}report/CurrentVisaExpiryExport`).as("VisaExpiryExport");

  cy.intercept(`${baseURL}report/ClientEmployerExport`).as(
    "ClientEmployerExport"
  );

  cy.intercept(`${baseURL}report/ClientEmployer`).as("ClientEmployer");

  cy.intercept(`${baseURL}report/DocumentCheckList`).as(
    "reportDocumentCheckList"
  );

  cy.intercept(`${baseURL}report/ClientContractAll`).as("ClientContractAll");

  cy.intercept("GET", `${baseURL}client/contract/Contractpdf/*`).as(
    "Contractpdf"
  );

  cy.intercept("GET", `${baseURL}company/visastatus/All`).as("visastatus");

  cy.intercept(
    `${baseURL}company/BranchVisaType/GetAllBranchVisaTypeByCountry/All/*`
  ).as("GetAllBranchVisaTypeByCountry");

  cy.intercept(`${baseURL}config/GetAllVisaDestination`).as(
    "GetAllVisaDestination"
  );

  cy.intercept(`${baseURL}company/visastatus/AllWithHide`).as("AllWithHide");

  cy.intercept("POST", `${baseURL}report/Visa`).as("Visa");

  cy.intercept("POST", `${baseURL}report/VisaExport`).as("VisaExport");

  cy.intercept("PUT", `${baseURL}ClientTag/UpdateMultiple`).as(
    "UpdateMultiple"
  );

  cy.intercept("POST", `${baseURL}ClientTag/InsertMultiple`).as("ClientTag");

  cy.intercept("POST", `${baseURL}client/processingperson/InsertMultiple`).as(
    "InsertMultiple"
  );

  cy.intercept(
    "POST",
    `${baseURL}client/processingperson/ChangeProcessingPerson`
  ).as("ChangeProcessingPerson");

  cy.intercept("PUT", `${baseURL}company`).as("putcompany");

  cy.intercept(`${baseURL}dashboard/GetUserDashboardSettings`).as(
    "GetUserDashboardSettings"
  );

  cy.intercept(`${baseURL}dashboard/Client`).as("Client");

  cy.intercept(`${baseURL}subject/case/UpdateFromDashboard`).as(
    "UpdateFromDashboard"
  );

  cy.intercept(`${baseURL}subject/type/Priority`).as("Priority");

  cy.intercept(`${baseURL}dashboard/ClientExport`).as("ClientExport");

  cy.intercept(`${baseURL}dashboard/PotentialClient`).as("PotentialClient");

  cy.intercept("POST", `${baseURL}dashboard/PotentialClientExport`).as(
    "PotentialClientExport"
  );

  cy.intercept("POST", `${baseURL}dashboard/Student`).as("Student");

  cy.intercept("POST", `${baseURL}school/studentList`).as("postschoolstudentlist");

  cy.intercept("GET", `${baseURL}client/programdetail/Status`).as(
    "programdetail"
  );

  cy.intercept("GET", `${baseURL}school/type`).as(
    "getschooltype"
  );

  cy.intercept("POST", `${baseURL}dashboard/StudentExport`).as("StudentExport");

  cy.intercept("POST", `${baseURL}dashboard/Employer`).as("Employer");

  cy.intercept("POST", `${baseURL}dashboard/EmployerExport`).as(
    "EmployerExport"
  );

  cy.intercept(`${baseURL}mailchimp/GetAllList`).as("mailchimp/GetAllList");

  cy.intercept("GET", `${baseURL}client/balance/All/*`).as("AllClientBalance");

  cy.intercept("POST", `${baseURL}client/balance`).as("postclientbalance");

  cy.intercept("GET", `${baseURL}branch/All`).as("AllBranch");

  cy.intercept(
    "GET",
    `${baseURL}invoice/TemplateAddNewLine/00000000-0000-0000-0000-000000000000`
  ).as("TemplateAddNewLine");

  cy.intercept("PUT", `${baseURL}client/contract/BranchDetails`).as(
    "clientConstractBranchDetails"
  );

  cy.intercept("GET", `${baseURL}branch/note/All`).as("AllBranchNote");

  cy.intercept("GET", `${baseURL}client/AssignTag/All/*`).as(
    "AllClientAssignTag"
  );

  cy.intercept("GET", `${baseURL}invoice/type/GetAllInvoiceTypes`).as(
    "GetAllInvoiceTypes"
  );

  cy.intercept("POST", `${baseURL}potentialclient/markedtags`).as(
    "postmarkedtags"
  );

  cy.intercept("PUT", `${baseURL}potentialclient/markedtags`).as(
    "putmarkedtags"
  );

  cy.intercept("DELETE", `${baseURL}potentialclient/markedtags`).as(
    "deletemarkedtags"
  );

  cy.intercept("GET", `${baseURL}branch/QuestionnaireMessageSetting`).as(
    "QuestionnaireMessageSetting"
  );

  cy.intercept("PUT", `${baseURL}branch/QuestionnaireMessageSetting`).as(
    "putQuestionnaireMessageSetting"
  );

  cy.intercept("GET", `${baseURL}ThirdPartyKey/GetByBranchId/EzyForm`).as(
    "getezyformapikey"
  );

  cy.intercept("PUT", `${baseURL}ThirdPartyKey`).as("ThirdPartyKey");

  cy.intercept("GET", `${baseURL}branch/BranchCCAndBCCImportSetting`).as(
    "BranchCCAndBCCImportSetting"
  );

  cy.intercept("PUT", `${baseURL}branch/BranchCCAndBCCImportSetting`).as(
    "putBranchCCAndBCCImportSetting"
  );

  cy.intercept("GET", `${baseURL}reminder/setting`).as("ReminderSetting");

  cy.intercept("POST", `${baseURL}reminder/setting`).as("postReminderSetting");

  cy.intercept("GET", `${baseURL}EzmApiKey/GetByBranchId`).as("apikeygetbyid");

  cy.intercept("POST", `${baseURL}EzmApiKey`).as("postapikey");

  cy.intercept("DELETE", `${baseURL}EzmApiKey`).as("deleteapikey");

  cy.intercept("PUT", `${baseURL}branch/UpdateBranchVisaNotification`).as(
    "UpdateBranchVisaNotification"
  );

  cy.intercept("GET", `${baseURL}branch/QuestionnaireSetting`).as(
    "branchQuestionnaireSetting"
  );

  cy.intercept("PUT", `${baseURL}branch/QuestionnaireSetting`).as(
    "putbranchQuestionnaireSetting"
  );

  cy.intercept("GET", `${baseURL}company/document/All`).as(
    "CompanyDocumentAll"
  );

  cy.intercept("POST", `${baseURL}company/document`).as("postCompanyDocument");

  cy.intercept("DELETE", `${baseURL}company/document`).as(
    "deleteCompanyDocument"
  );

  cy.intercept("PUT", `${baseURL}client/contract/SignedClientAgreement`).as("clientcontractagreeement");

  cy.intercept("GET", `${baseURL}faq/All`).as("faqAll");

  cy.intercept("POST", `${baseURL}faq`).as("postfaq");

  cy.intercept("PUT", `${baseURL}faq`).as("putfaq");

  cy.intercept("DELETE", `${baseURL}faq`).as("deletefaq");

  cy.intercept("GET", `${baseURL}company/BranchVisaType/WithHidden/All`).as(
    "allbranchvisatypes"
  );

  cy.intercept("POST", `${baseURL}company/BranchVisaType`).as(
    "postcombranchvisatypes"
  );

  cy.intercept("PUT", `${baseURL}company/BranchVisaType`).as(
    "putcombranchvisatypes"
  );

  cy.intercept("PUT", `${baseURL}company/BranchVisaType/Hide`).as(
    "putbranchvisahide"
  );

  cy.intercept("PUT", `${baseURL}company/visastatus`).as(
    "putcompanyvisastatus"
  );

  cy.intercept("PUT", `${baseURL}company/visastatus/Hide`).as(
    "putvisastatushide"
  );

  cy.intercept("PUT", `${baseURL}company/clientstatus`).as(
    "putcompanyclientstatus"
  );

  cy.intercept("GET", `${baseURL}openAI/UserMaxToken`).as(
    "openAI/UserMaxToken"
  );

  cy.intercept("DELETE", `${baseURL}BranchCountryLinking`).as(
    "deleteBranchCountryLinking"
  );

  cy.intercept("GET", `${baseURL}user/identity/Logout`).as("accountlogout");

  cy.intercept("GET", `${baseURL}users`).as("companyusers");

  cy.intercept("GET", `${baseURL}group`).as("companygroup");

  cy.intercept("GET", `${baseURL}users/Owners`).as("companyuserowner");

  cy.intercept("GET", `${baseURL}users/storage`).as("companyuserstorage");

  cy.intercept("POST", `${baseURL}user/identity/ChangePassword`).as(
    "changepassword"
  );

  cy.intercept("GET", `${baseURL}users/All`).as("companyallusers");

  cy.intercept("GET", `${baseURL}users/OwnerCount`).as("totalowners");

  cy.intercept("PUT", `${baseURL}users`).as("putusers");

  cy.intercept("GET", `${baseURL}user/Branch/users/*`).as("branchusersdefault");

  cy.intercept("PUT", `${baseURL}branch`).as("putbranchin");

  cy.intercept("PUT", `${baseURL}user/Branch`).as("putbranchuser");

  cy.intercept("PUT", `${baseURL}user/permission`).as("putuserpermission");

  cy.intercept("GET", `${baseURL}user/permission`).as("getuserpermission");

  cy.intercept("POST", `${baseURL}user/identity/ChangeBranchInToken`).as(
    "changebranchtoken"
  );
  cy.intercept("POST", `${baseURL}questionnaire/ShortLink`).as(
    "shortlink"
  );

  cy.intercept("GET", `${baseURL}questionnaire/QuestionnaireMessageSetting/*`).as(
    "thankyoumessage"
  );

  cy.intercept("GET", `${baseURL}childbinding/GetAllChildBindingByParentId/*`, (req) => {
    req.reply((res) => {
      // Add Cache-Control header to prevent caching
      res.headers['Cache-Control'] = 'no-cache';
      res.send();
    });
  }).as(
    "getparentschild"
  );

  cy.intercept("PUT", `${baseURL}task`).as(
    "puttask"
  );

  cy.intercept("POST", `${baseURL}task/users`).as(
    "posttaskuser"
  );

  cy.intercept("DELETE", `${baseURL}task`).as(
    "deletetask"
  );

  cy.intercept("PUT", `${baseURL}task/CompleteTask`).as(
    "completedtask"
  );

  cy.intercept("GET", `${baseURL}servicetype/All`).as(
    "allservicetype"
  );

  cy.intercept("GET", `${baseURL}task/AllByUserIdPagination/00000000-0000-0000-0000-000000000000/10/1`).as(
    "completedtasks"
  );

  cy.intercept("GET", `${baseURL}client/email/AllByFamily/*`).as(
    "getclientemalbyfamily"
  );

  //cmv APis

  cy.intercept("POST", `${baseURL}cmv/user/identity/SetPassword`).as(
    "cmvsetpassword"
  );

  cy.intercept("GET", `${baseURL}cmv/clientprofile`).as(
    "cmvclientprofile"
  );

  cy.intercept("GET", `${baseURL}cmv/clientprofile/GetClientPartner/*`).as(
    "cmvclientprofilepartner"
  );

  cy.intercept("GET", `${baseURL}cmv/clientprofile/GetClientFamilyMembers/*`).as(
    "cmvclientprofilefamilymembers"
  );

  cy.intercept("GET", `${baseURL}cmv/client/programdetail/All`).as(
    "cmvclientprogramdetailsall"
  );

  cy.intercept("GET", `${baseURL}cmv/clientcase/All`).as(
    "cmvclientcasesall"
  );

  cy.intercept("GET", `${baseURL}cmv/document/All/**`).as(
    "cmvclientdocumentall"
  );

  cy.intercept("POST", `${baseURL}cmv/document/MultiUploadWithFileName`).as(
    "cmvmultiuploadfilename"
  );


  cy.intercept("POST", `${baseURL}cmv/document`).as(
    "cmvcpostdocument"
  );

  cy.intercept("GET", `${baseURL}cmv/document/checklist/All`).as(
    "cmvdocumentchecklistall"
  );

  cy.intercept("GET", `${baseURL}cmv/document/checklist/Link/*`).as(
    "cmvdocumentchecklistlink"
  );

  cy.intercept("GET", `${baseURL}cmv/clientprofile/GetBranchDetail/*`).as(
    "cmvclientprofilebranchdetails"
  );

  cy.intercept("POST", `${baseURL}cmv/document/CheckListDocument`).as(
    "cmvpostdocumentchecklist"
  );

  cy.intercept("GET", `${baseURL}cmv/clientprofile/GetClientLinks/**`).as(
    "cmvclientquestionaireget"
  );

  cy.intercept("GET", `${baseURL}cmv/client/balance/All/*`).as(
    "cmvclientbalanceall"
  );

  cy.intercept("GET", `${baseURL}cmv/client/jobhistory/All/JobStatus`).as(
    "cmvclientjobhistory"
  );

  cy.intercept("GET", `${baseURL}cmv/clientemployer/All`).as(
    "cmvemployerall"
  );

  cy.intercept("POST", `${baseURL}cmv/clientemployer`).as(
    "cmvpostclientemployerall"
  );

  cy.intercept("PUT", `${baseURL}cmv/clientemployer`).as(
    "cmvputclientemployerall"
  );

  cy.intercept("GET", `${baseURL}cmv/client/jobhistory/All`).as(
    "cmvclientjobhistoryreal"
  );

  cy.intercept("POST", `${baseURL}cmv/client/jobhistory`).as(
    "cmvclientpostjonbhistory"
  );

  cy.intercept("PUT", `${baseURL}cmv/client/jobhistory`).as(
    "cmvclientputjonbhistory"
  );

  cy.intercept("GET", `${baseURL}cmv/client/educationalhistory/All`).as(
    "cmvclienteducationhistoryall"
  );
  cy.intercept("POST", `${baseURL}cmv/client/educationalhistory`).as(
    "cmvclientposteducationalhistory"
  );

  cy.intercept("PUT", `${baseURL}cmv/client/educationalhistory`).as(
    "cmvclientputeducationalhistory"
  );







  
}


