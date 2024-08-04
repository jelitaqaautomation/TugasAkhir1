class RegisterPage {
    // Define locators
    get registerPageUrl() {
        return 'https://kasirdemo.vercel.app/register';
    }
    
    get namatokoInput() {
        return $('#name'); // Locator for profile button
    }

    get emailInput() {
    return $('//input[@id="email"]'); // Locator for profile button
    }

    get passwordInput() {
        return $('//input[@id="password"]'); // Locator for profile button
        }

    get daftarButton() {
        return $('//button[@type="submit"]'); // Locator for logout button
    }
    get successMessage() {
        return $('//div[@role="alert"]');
    }
    get errorMessage() {
        return $('//div[@role="alert"]');
    }

    // Define actions
    async assertLogin() {
        await expect(browser).toHaveUrl(this.registerPageUrl);
    }

    async register(namatoko,email, password) {
        await browser.url('/register'); // Ensure we are on the login page
        await (await this.namatokoInput).waitForExist({ timeout: 5000 });
        await this.namatokoInput.setValue(namatoko);
        await (await this.emailInput).waitForDisplayed({ timeout: 5000 });
        await this.emailInput.setValue(email);
        await (await this.passwordInput).waitForExist({ timeout: 5000 });
        await (await this.passwordInput).waitForDisplayed({ timeout: 5000 });
        await this.passwordInput.setValue(password);
        await (await this.daftarButton).waitForClickable({ timeout: 5000 });
        await this.daftarButton.click();
    }

    async assertionSuccessMessage(expectedSuccessMessage) {
        await (await this.successMessage).waitForDisplayed({ timeout: 5000 });
        await expect(this.successMessage).toHaveTextContaining(expectedSuccessMessage);
    }

    async getsuccessMessage() {
        await (await this.successMessage).waitForDisplayed({ timeout: 5000 });
        return this.successMessage.getText();

    }async assertionErrorMessage(expectedErrorMessage) {
        await (await this.errorMessage).waitForDisplayed({ timeout: 5000 });
        await expect(this.errorMessage).toHaveTextContaining(expectedErrorMessage);
    }

    async geterrorMessage() {
        await (await this.errorMessage).waitForDisplayed({ timeout: 5000 });
        return this.errorMessage.getText();

    }
}

module.exports = new RegisterPage();
