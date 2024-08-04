Feature: KasirAja Login Tests 

    @all @positive @login
    Scenario: Login successfully with valid credentials
        Given I open KasirAja website
        When I login with valid credentials
        Then I should be on the dashboard page

    @all @negative @login
    Scenario: Login failed with invalid email
        Given I open KasirAja website
        When I login with invalid email
        Then I should see an error message

    @all @negative @login
    Scenario: Verify Login failed with invalid password
        Given I open KasirAja website
        When I login with invalid password
        Then I should see an error message

