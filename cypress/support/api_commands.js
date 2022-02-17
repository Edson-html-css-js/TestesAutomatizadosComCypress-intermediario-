/// <reference types="cypress" />

const token = Cypress.env('gitlab_access_token')


Cypress.Commands.add('apicreateProjec', project => {
    cy.request({
        method:'POST',
        url: `api/orgs/ORG/projects/?private_token=${token}`,
        body: {
            name: project.name,
            description: project.description
        }
    })
})

