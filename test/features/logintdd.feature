@all@logintdd
Feature: KasirAja Login Tests with TDD

    @logintdd @positive
    Scenario: Login successfully with valid credentials
        Given I open KasirAja website
        When I login with valid credentials
        Then I should be on the dashboard page

    @logintdd @negative 
    Scenario Outline: Login failed with invalid credentials
        Given I open KasirAja website
        When I login with <email> and <password>
        Then I should see an error message

        Examples:
            |   email                        |   password        |
            |   invalidemail@gmail.com       |   sayurbunur123   |
            |   sayurbunur@gmail.com         |   sayurbunur12345 |
