Feature: KasirAja Register Tests 

    @all @positive @register
    Scenario: Register toko successfully with valid data
        Given I on Kasir Aja login page
        When I click "daftar" button
        When I register with valid data
        Then I see successfully message "Toko berhasil didaftarkan"

    @all @negative @register
    Scenario: Register toko failed with email already used
        Given I on Kasir Aja login page
        When I click "daftar" button
        When I register with email already used
        Then I see error message "Email sudah digunakan"

