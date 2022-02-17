Cypress.Commands.add('login', () => {
    cy.visit('login')
    cy.get('#login_field').type(Cypress.env('user_name'));
    cy.get('#password').type(Cypress.env('user_password'));
    cy.get('input.btn.btn-primary.btn-block.js-sign-in-button').click();
    cy.get('div.Header-item.position-relative.mr-0.d-none.d-md-flex ').should('exist');
})

Cypress.Commands.add('logout', () => {
    cy.get('div.Header-item.position-relative.mr-0.d-none.d-md-flex').click()
    cy.get('button.dropdown-item.dropdown-signout').click()
})

Cypress.Commands.add('gui_createProjec', project => {
    cy.visit('new/project')

  
    cy.get('#project_name').type(project.name);
    cy.get('#project_body').type(project.description);
    cy.get('.btn-primary').click()

    cy.visit('Edson-html-css-js?tab=projects&type=beta')
    cy.get('[data-selected-links=" /Edson-html-css-js?tab=projects"]').click()
})