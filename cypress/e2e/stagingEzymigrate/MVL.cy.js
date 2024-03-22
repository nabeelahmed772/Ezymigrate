describe("MVL automation testing QA", () => {

    it ('QA MVl login', () => {

        cy.visit('qagnosis.dxresults.com/admin/home')

        cy.get('#txtUserEmail').type('M.ShoaibAnwar')

        cy.get('#txtPassword').type('Shoaib@123')

        cy.get('#btnSave').click()

        cy.contains('Dashboard reports & statistics').should('be.visible')

        cy.get('.page-title').should('exist')

        cy.get('.page-title').should('include.text', 'Dashboard reports & statistics')

        cy.get('#liRequisitions > [href="javascript:;"] > .title').click()

        cy.get('#Lipdna > a').click()








    })
})









