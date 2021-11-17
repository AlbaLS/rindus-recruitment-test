import {Then} from 'cypress-cucumber-preprocessor/steps';

Then(/^I click on the button with text (.*)$/, (text) => {
    cy.get('button')
        .contains(text)
        .click();
});

Then(/^I search and click on the text (.*)$/, (text) => {
    cy.contains(text)
        .click();
});