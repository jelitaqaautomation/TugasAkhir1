const DashboardPage = require('./dashboard.page.js');

class LoginPage {
    // Define locators
    get emailInput() {
        return $('#email');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('button[type="submit"]');
    }

    get errMessage() {
        return $('div[role="alert"]');
    }

    get daftarButton() {
        return $('//div[@class="css-4rvv7a"]');
    }

    // Define actions
    async login(email, password) {
        await DashboardPage.ensureLoggedOut();  // Ensure the user is logged out before logging in
        await browser.url('/login'); // Ensure we are on the login page
        await (await this.emailInput).waitForExist({ timeout: 5000 });
        await (await this.emailInput).waitForDisplayed({ timeout: 5000 });
        await this.emailInput.setValue(email);
        await (await this.passwordInput).waitForExist({ timeout: 5000 });
        await (await this.passwordInput).waitForDisplayed({ timeout: 5000 });
        await this.passwordInput.setValue(password);
        await (await this.loginButton).waitForClickable({ timeout: 5000 });
        await this.loginButton.click();
    }

    async assertionErrMessage(expectedErrorMessage) {
        await (await this.errMessage).waitForDisplayed({ timeout: 5000 });
        await expect(this.errMessage).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage() {
        await (await this.errMessage).waitForDisplayed({ timeout: 5000 });
        return this.errMessage.getText();
    }
    async register() {
        await (await this.daftarButton).waitForClickable({ timeout: 5000 });
        await this.daftarButton.click();
    }
}

module.exports = new LoginPage();
