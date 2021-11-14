import {When} from 'cypress-cucumber-preprocessor/steps';

When(/^I accept the cookies$/, () => {
    cy.contains('Alle erlauben').
    click();
});

When(/^I clear the cookies$/, () => {
    cy.clearCookies()
});