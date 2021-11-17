@login_page
  @login_process
Feature: Login

  Background:
    Given I go to Douglas login page
    And I accept the cookies

  @login_page
  Scenario: As an user, when I go to login page it shows login and register options
    Then The page shows 'Ich bin bereits Douglas-Kund*in'
    And The page shows 'Ich bin neu bei Douglas'

  @login_success
  Scenario: As an user with correct credentials, I am able to login to the web shop
    When I log in with correct credentials and stay logged option
    Then The logged page is shown

  @login_wrong_username
  Scenario: As an user with wrong username, I am not able to login to the web shop
    When I log in with wrong username credentials and stay logged option
    Then The page shows 'Bitte überprüfe deine Angaben'
    And The page shows 'Ich bin bereits Douglas-Kund*in'

  @login_wrong_password
  Scenario: As an user with wrong password, I am not able to login to the web shop
    When I log in with wrong password credentials and stay logged option
    Then The page shows 'Falsche Zugangsdaten'
    And The page shows 'Ich bin bereits Douglas-Kund*in'
