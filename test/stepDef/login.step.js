const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page.js");
const LoginPage = require("../pages/login.page.js");
const DashboardPage = require("../pages/dashboard.page.js");

Given(/^I open KasirAja website$/, async () => {
    await Page.open('/login'); // Start at the login page
});

When(/^I login with valid credentials$/, async () => {
    await LoginPage.login('sayurbunur@gmail.com', 'sayurbunur123');
});

Then(/^I should be on the dashboard page$/, async () => {
    await DashboardPage.assertDashboard();
});

When(/^I login with invalid email$/, async () => {
    await LoginPage.login('sayurbunurr@gmail.com', 'sayurbunur123');
});

When(/^I login with invalid password$/, async () => {
    await LoginPage.login('sayurbunur@gmail.com', 'sayurbunur1234');
});

Then(/^I should see an error message$/, async () => {
    await LoginPage.assertionErrMessage('Kredensial yang Anda berikan salah');
});

//Data driven test (Scenario Outline) step definitions
When(/^I login with (.+) and (.+)$/, async (email,password) => {
    await LoginPage.login(email,password);
});