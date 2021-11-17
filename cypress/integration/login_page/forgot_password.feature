@login_page
  @forgotPassword_process

Feature: Forgot password

  Background:
    Given I go to Douglas login page
    And I accept the cookies
    And I search and click on the text Passwort vergessen?

  @forgotPassword_popup
  Scenario: When I click on the reset password option, the page shows the expected information
    Then The page shows 'Du hast dein Passwort vergessen?'
    And The page shows 'Bitte gib hier die E-Mail-Adresse ein, mit der du dein Douglas-Konto erstellt hast. Wir schicken dir dann umgehen einen Link zu, mit dem du ein neues Passwort erstellen kannst.'
    And I click on the button with text E-Mail absenden
    And The page shows '* Pflichtfeld'
    And I click on the button with text Schliessen
    And The page does not show 'Du hast dein Passwort vergessen?'

  @forgotPassword_success
  Scenario: As a registered user, I am able to reset my password
    When I add the email registered user email to reset the password
    And I click on the button with text E-Mail absenden
    Then The page shows 'E-Mail verschickt'
    And The page shows 'Vielen Dank für die Anforderung eines neuen Passworts! Wir haben dir an folgende E-Mail-Adresse einen Link zur Erstellung eines neuen Passworts geschickt:'
    And The reset password popup shows the registered email
    And The page shows 'Bitte klicke auf den Link und lege innerhalb der nächsten sechs Stunden dein Passwort fest'
    And The page shows 'Bitte beachte: Wenn du mit der oben genannten E-Mail-Adresse noch kein Konto bei Douglas angelegt hast, erhältst du keine E-Mail von uns.'
    And I click on the button with text Schliessen
    And The page does not show 'Du hast dein Passwort vergessen?'