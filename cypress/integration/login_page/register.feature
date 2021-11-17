@login_page
  @registration_process

Feature: Register

  Background:
    Given I go to Douglas login page
    And I accept the cookies

  @register_missed_fields
  Scenario: As a new user with missed fields, I am not able to register in Douglas
    When I click on submit the registration
    Then The page shows 'Bitte überprüfe deine Angaben'
    And All the registration mandatory fields contains the message Pflichtfeld

  @register
  Scenario Outline: As a new user with filled form, I am able to register in Douglas
    When I complete the register process with <firstName> as firstName, <lastName> as lastName, <birthday> as birthday, <gender> as gender, <email> as email and <password> as password
    And I click on submit the registration
    Then The page shows '<result>'
    Examples:
      | firstName | lastName | birthday     | gender | email       | password | result                                            |
      | Alba      | Lomena   | future       | Frau   | new email   | 123456   | Ungültiges Geburtsdatum                           |
      | Alba      | Lomena   | less than 16 | Mann   | new email   | 123456   | Du musst mindestens 16 Jahre alt sein.            |
      | Alba      | Lomena   | correct      | Frau   | wrong email | 123456   | Ungültige E-Mail-Adresse                          |
      | Alba      | Lomena   | correct      | Divers | new email   | 123      | Dein Passwort muss mindestens 6 Zeichen enthalten |
      | Alba      | Lomena   | correct      | Frau   | new email   | 123456   | Hallo Alba Lomena                                 |

  @register_registered_user
  Scenario: As a registered user, I am not able to register in Douglas again
    And I complete the register process with Alba as firstName, Lomena as lastName, correct as birthday, Frau as gender, new email as email and 123456 as password
    And I click on submit the registration
    And The page shows 'Hallo Alba Lomena'
    And I go to Douglas login page
    When I complete the register process with Alba as firstName, Lomena as lastName, correct as birthday, Frau as gender, existing email as email and 123456 as password
    And I click on submit the registration
    Then The page shows 'Die E-Mail-Adresse ist bereits registriert.'

