class employerPage{

    employerManagement_btn = ''
    add_newbtn = ''
    main_nametxt = ''
    main_businesstxt = ''
    main_emailtxt = ''
    main_contactnotxt = ''
    city_txt = ''
    address_txt = ''
    cntact_persontxt = ''
    mbl_notxt = ''
    web_txt = ''
    jobselector_select = ''
    jobselector_select_next = ''
    nzn_btn = ''
    occupation_btn = ''
    main_namebtn = ''
    main_namebtn = ''

    
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

     

}

export default employerPage
