const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page.js");
const LoginPage = require("../pages/login.page.js");
const RegisterPage = require("../pages/register.page.js")

Given(/^I on Kasir Aja login page$/, async () => {
    await Page.open('/'); // Start at the login page
});

When(/^I click "daftar" button$/, async () => {
    await LoginPage.register();
});

When(/^I register with valid data$/, async () => {
    await RegisterPage.register('Sayur Mampang Ja','sayurmampangja@gmail.com', 'sayurmampang123');
});

Then(/^I see successfully message "Toko berhasil didaftarkan"$/, async () => {
    await RegisterPage.assertionSuccessMessage('Toko berhasil didaftarkan');
    const successMessage =  await RegisterPage.getsuccessMessage();
    console.log(`Success message: ${successMessage}`);
});

When(/^I register with email already used$/, async () => {
    await RegisterPage.register('Sayur Mampang 1','sayurmampang4@gmail.com', 'sayurmampang123');
});

Then(/^I see error message "Email sudah digunakan"$/, async () => {
    await RegisterPage.assertionErrorMessage('Email sudah digunakan');
    const errorMessage =  await RegisterPage.geterrorMessage();
    console.log(`Success message: ${errorMessage}`);
});

