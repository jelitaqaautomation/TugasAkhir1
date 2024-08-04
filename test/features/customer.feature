Feature: KasirAja Customer Tests 

    @all @positive @customer
    Scenario: Register Customer successfully with valid data
        Given I on Kasir Aja Dashboard page
        When I click "pelanggan" button
        When I click "tambah" button
        When I register customer with valid data
        Then I see successfully message "success item ditambahkan"

    @all @negative @customer
    Scenario: Register Customer failed with empty name
        Given I on Kasir Aja Dashboard page
        When I click "pelanggan" button
        When I click "tambah" button
        When I register customer with empty name
        Then I see error message "name" is not allowed to be empty"

    @all @positive @customer
    Scenario: Delete Customer successfully
        Given I on Kasir Aja Customer page
        When I delete data customer
        Then I see success message "Success item dihapus"

    @all @positive @customer
    Scenario: Ubah Customer successfully
        Given I on Kasir Aja Customer page
        When I ubah data customer
        Then I see success message "Success item diubah"

