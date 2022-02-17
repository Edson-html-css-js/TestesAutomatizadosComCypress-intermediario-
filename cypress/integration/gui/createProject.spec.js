/// <reference types="cypress" />

const faker = require('faker');
const user = require('../../fixtures/login/login.data.json');

describe('Create Project', () => {
    before(() => cy.login())

    it('Successfully', () => {

        
        const project = {
            name: 'edson test',  //gera um id randomico
            description: 'descrição de teste' //gera um nome com 5 palavras
        }

        cy.gui_createProjec(project)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}Edson-html-css-js?tab=projects`);
        cy.contains(project.name).should('be.visible');
        cy.contains(project.description).should('be.visible');

    })
})