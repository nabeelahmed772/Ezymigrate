 class loginPage{

    web_URL = 'https://app-stage.ezymigrate.co.nz/login'
    username_texbox = '#userName > .profile-input-login'
    password_textbox = '#password > .profile-input-login'
    click_button = '.sus-modal-button-text'
     
    
    navigate(){
         cy.visit(this.web_URL)
    }

    enterEmail(username){
        cy.get(this.username_texbox).type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }


    clickSubmit(){
        cy.get(this.click_button).click()
    }

   

     

};

export default loginPage
