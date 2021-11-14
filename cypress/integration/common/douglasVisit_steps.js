import {Given} from 'cypress-cucumber-preprocessor/steps';

Given(/^I go to Douglas (login|base) page$/, (page) => {
    let url = Cypress.config(page.concat('Url'));
    cy.visit(url);
});