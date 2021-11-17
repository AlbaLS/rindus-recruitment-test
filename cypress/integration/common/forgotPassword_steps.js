import {When} from 'cypress-cucumber-preprocessor/steps';

When(/^I add the email registered user email to reset the password$/, () => {
    cy.get('[name="forgotPasswordEmail"]').
        type(Cypress.env('userEmail'));
});

When(/^The reset password popup shows the registered email$/, () => {
    cy.contains(Cypress.env('userEmail'));
});