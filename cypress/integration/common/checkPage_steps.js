import {Then} from 'cypress-cucumber-preprocessor/steps';

Then(/^The page (shows|does not show) '(.*)'$/, (option,text) => {
    if (option == "shows") {
        cy.contains(text).should('exist')
    } else {
        cy.contains(text).should('not.exist')
    }
});