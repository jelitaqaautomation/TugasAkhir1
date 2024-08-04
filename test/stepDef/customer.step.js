const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page.js");
const DashboardPage = require("../pages/dashboard.page.js");
const CustomerPage = require("../pages/customer.page.js");
const CustomerCreatePage = require("../pages/customer.create.page.js");
const LoginPage = require("../pages/login.page.js");

Given(/^I on Kasir Aja Dashboard page$/, async () => {
    await LoginPage.login('sayurbunur@gmail.com', 'sayurbunur123');
    await DashboardPage.assertDashboard()
});

When(/^I click "pelanggan" button$/, async () => {
    await DashboardPage.pelangganclick();
});

When(/^I click "tambah" button$/, async () => {
    await CustomerPage.tambah();
});

When(/^I register customer with valid data$/, async () => {
    await CustomerCreatePage.assertCustomerCreatePageUrl();
    await CustomerCreatePage.tambahPelanggan('Jelita','082292893892', 'mampang', 'pelangan baru');
});

Then(/^I see successfully message "success item ditambahkan"$/, async () => {
    await CustomerCreatePage.assertionSuccessMessage('item ditambahkan');
    const successMessage =  await CustomerCreatePage.getsuccessMessage();
    console.log(`Success message: ${successMessage}`);
});

When(/^I register customer with empty name$/, async () => {
    await CustomerCreatePage.assertCustomerCreatePageUrl();
    await CustomerCreatePage.tambahPelanggan('','082292893892', 'mampang', 'pelangan baru');
});

Then(/^I see error message "name" is not allowed to be empty"$/, async () => {
    await CustomerCreatePage.assertionErrorMessage('"name" is not allowed to be empty');
    const errorMessage =  await CustomerCreatePage.geterrorMessage();
    console.log(`Success message: ${errorMessage}`);
});

Given(/^I on Kasir Aja Customer page$/, async () => {
    await LoginPage.login('sayurbunur@gmail.com', 'sayurbunur123');
    await DashboardPage.assertDashboard();
    await DashboardPage.pelangganclick();
    await CustomerPage.assertCustomer();
});

When(/^I delete data customer$/, async () => {
    await CustomerPage.hapus();
});


Then(/^I see success message "Success item dihapus"$/, async () => {
    await CustomerPage.assertionsuccessdeleteMessage('item dihapus');
    const successMessage =  await CustomerPage.getsuccessdeleteMessage();
    console.log(`Success message: ${successMessage}`);
});

When(/^I ubah data customer$/, async () => {
    await CustomerPage.ubah();
    await CustomerCreatePage.ubahPelanggan('Jelita','082292893892', 'mampang', 'pelangan baru');
});


Then(/^I see success message "Success item diubah"$/, async () => {
    await CustomerPage.assertionsuccessubahMessage('item diubah');
    const successMessage =  await CustomerPage.getsuccessubahMessage();
    console.log(`Success message: ${successMessage}`);
}

);