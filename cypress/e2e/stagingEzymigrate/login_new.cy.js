Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

import loginPage from "../elements_folders/login";
const lp = new loginPage()

it ('login test', function(){

    lp.navigate()
    lp.enterEmail('rananabeelahmed772@gmail.com')
    lp.enterPassword('nabeel@123')
    lp.clickSubmit()
})