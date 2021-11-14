Feature: Register

  @register_success
  Scenario: As a new user with filled form, I am able to register in Douglas

  @register_missed_fields
  Scenario: As a new user with missed fields, I am not able to register in Douglas

  @register_registered_user
  Scenario: As a registered user, I am not able to register in Douglas again