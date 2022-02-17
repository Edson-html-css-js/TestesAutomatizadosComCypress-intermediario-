/// <reference types="cypress" />

const faker = require('faker')

describe('Create Project', () => {
    before(() => cy.login())

    it('Successfully', () => {

        
        const project = {
            name: 'testeApi', //gera um id randomico
            description: 'descriçãoViaApi'   //gera um nome com 5 palavras
        }

        cy.apicreateProjec(project).then(res => {
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq(project.name)
            expect(res.body.description).to.eq(project.description)
        })


    })
})