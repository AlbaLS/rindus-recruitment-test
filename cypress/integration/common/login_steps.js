import {Then} from 'cypress-cucumber-preprocessor/steps';

Then(/^I log in with (correct|wrong username|wrong password) credentials and (stay logged|not stay logged) option$/, (credentialOption,stayLoggedOption) => {
    let username;
    let password;
    switch (credentialOption) {
        case "correct":
            username = Cypress.env('userEmail');
            password = Cypress.env('password');
            break;
        case "wrong username":
            username = "Wrong Username";
            password = Cypress.env('password');
            break;
        case "wrong password":
            username = Cypress.env('userEmail');
            password = "Wrong Password"
            break;
        default:
            break;
    }

    cy.get('#loginForm').
        within(() =>{
            cy.get('[name="email"]').
                type(username);
            cy.get('[name="password"]').
                type(password);

            if(stayLoggedOption == "stay logged"){
                cy.get('#remember-me').
                    click();
                cy.get('#remember-me').
                    should('be.checked')
            }else{
                cy.get('#remember-me').
                should('not.be.checked')
            }

            cy.get('[type="submit"]').
                click();
        });
});

Then(/^The logged page is shown$/, () => {
    cy.contains(Cypress.env('userName'))
    cy.contains("herzlich willkommen in deinem Benutzerkonto! Hier kannst du deine Bestellungen und persönlichen Daten verwalten und dich über exklusive Aktionen freuen.")
    cy.contains(Cypress.env('douglasId'))
});