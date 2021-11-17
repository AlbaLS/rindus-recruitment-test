import {Then} from 'cypress-cucumber-preprocessor/steps';

Then(/^I complete the register process with (.*) as firstName, (.*) as lastName, (.*) as birthday, (.*) as gender, (.*) as email and (.*) as password$/, (firstName, lastName, birthday, gender, email, password) => {
    let registrationDate = getRegistrationDate(birthday)
    wrapRegistrationEmail(email)

    cy.get('@registrationEmail').then(($registrationEmail) => {
        cy.get('#registrationForm').within(() => {
            cy.get('[name="firstName"]')
                .type(firstName);
            cy.get('[name="lastName"]')
                .type(lastName);
            cy.get('[name="dateOfBirth"]')
                .type(registrationDate);
            cy.contains(gender)
                .click();
            cy.get('[name="email"]')
                .type($registrationEmail);
            cy.get('[name="password"]')
                .type(password);
        });
    });
});

Then(/^I click on submit the registration$/, () => {
    cy.get('#registrationForm').within(() => {
        cy.get('[type="submit"]').
        click();
    });
});


Then(/^All the registration mandatory fields contains the message Pflichtfeld$/, function () {
    cy.get('#registrationForm').within(() => {
        cy.get('[class="input__container registration__first-name"]').contains('Pflichtfeld');
        cy.get('[class="input__container registration__last-name"]').contains('Pflichtfeld');
        cy.get('[class="input__container input__container--with-tooltip"]').contains('Pflichtfeld');
        cy.get('[class="input__container input__container--with-tooltip"]').contains('Pflichtfeld');
        cy.get('[class="input__container registration__email"]').contains('Pflichtfeld');
        cy.get('[class="input__container registration__password"]').contains('Pflichtfeld');
    });
});

function getRegistrationDate (param){
    let currentYear = new Date().getFullYear();
    let registrationYear;
    let date = "12.09.";
    switch (param) {
        case "less than 16":
            registrationYear = currentYear - 3;
            break;
        case "future":
            registrationYear = currentYear + 5;
            break;
        case "correct":
            registrationYear = currentYear - 20;
            break;
        default:
            break;
    }
    let registrationDate = date.concat(registrationYear);
    return registrationDate
}

function wrapRegistrationEmail (param){
    let registrationEmail;
    let randomNumber = Math.floor(Math.random() * 100);
    let endOfEmail = "@test.com"
    switch (param) {
        case "new email":
            registrationEmail = "user".concat(randomNumber,endOfEmail);
            cy.wrap(registrationEmail).as('registrationEmail');
            break;
        case "wrong email":
            registrationEmail = "user".concat(randomNumber);
            cy.wrap(registrationEmail).as('registrationEmail');
            break;
        default:
            break;
    }
}

