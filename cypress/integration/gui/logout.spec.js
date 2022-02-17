/// <reference types="cypress" />



describe('logout', () => {
    beforeEach(() => cy.login());

    it('successfully', () => {
        cy.logout()

        cy.get('div.d-flex.flex-justify-between > .d-flex > .d-inline-block').should('be.visible')
    })
})