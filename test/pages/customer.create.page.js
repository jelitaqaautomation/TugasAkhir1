class CustomerCreatePage {
    // Define locators
    get customerCreatePageUrl() {
        return 'https://kasirdemo.vercel.app/customers/create';
    }
    
    get namapelangganInput() {
        return $('//input[@id="nama"]'); // Locator for profile button
    }

    get nohpInput() {
    return $('//input[@id="no.hp"]'); // Locator for profile button
    }

    get alamatInput() {
        return $('//input[@id="alamat"]'); // Locator for profile button
        }

    get keteranganInput() {
        return $('//input[@id="keterangan"]'); // Locator for logout button
    }
    get simpanButton() {
        return $('//button[@class="chakra-button css-l5lnz6"]'); // Locator for logout button
    }
    get successMessage() {
        return $('//*[contains(text(),"item ditambahkan")]'); 
    }

    
    
    get errorMessage() {
        return $('//div[@class="chakra-alert css-qwanz3"]')
    }
    

    // Define actions
    async assertCreatePelanggan() {
        await expect(browser).toHaveUrl(this.customerCreatePageUrl);
    }

    async tambahPelanggan(nama,no_hp,alamat, keterangan) {
        await browser.url('/customers/create'); // Ensure we are on the login page
        await (await this.namapelangganInput).waitForExist({ timeout: 5000 });
        await this.namapelangganInput.setValue(nama);
        await (await this.nohpInput).waitForDisplayed({ timeout: 5000 });
        await this.nohpInput.setValue(no_hp);
        await (await this.alamatInput).waitForExist({ timeout: 5000 });
        await (await this.alamatInput).waitForDisplayed({ timeout: 5000 });
        await this.alamatInput.setValue(alamat);
        await (await this.keteranganInput).waitForDisplayed({ timeout: 5000 });
        await this.keteranganInput.setValue(keterangan);
        await (await this.simpanButton).waitForClickable({ timeout: 5000 });
        await this.simpanButton.click();
    }
    async clearInputField(inputField) {
        const value = await inputField.getValue();
        for (let i = 0; i < value.length; i++) {
            await inputField.addValue('\uE003'); // Send Backspace key
        }
    }
    
    async ubahPelanggan(nama, no_hp, alamat, keterangan) {
        // Ensure the relevant elements are available on the page
        await (await this.namapelangganInput).waitForExist({ timeout: 5000 });
        await this.clearInputField(this.namapelangganInput);
        await this.namapelangganInput.setValue(nama);
    
        await (await this.nohpInput).waitForDisplayed({ timeout: 5000 });
        await this.clearInputField(this.nohpInput);
        await this.nohpInput.setValue(no_hp);
    
        await (await this.alamatInput).waitForExist({ timeout: 5000 });
        await this.clearInputField(this.alamatInput);
        await (await this.alamatInput).waitForDisplayed({ timeout: 5000 });
        await this.alamatInput.setValue(alamat);
    
        await (await this.keteranganInput).waitForDisplayed({ timeout: 5000 });
        await this.clearInputField(this.keteranganInput);
        await this.keteranganInput.setValue(keterangan);
    
        await (await this.simpanButton).waitForClickable({ timeout: 5000 });
        await this.simpanButton.click();
    }
    
    

    async getsuccessMessage() {
        await (await this.successMessage).waitForDisplayed({ timeout: 5000 });
        return this.successMessage.getText();

    }

    async assertionSuccessMessage(expectedSuccessMessage) {
        await (await this.successMessage).waitForDisplayed({ timeout: 50000 });
        await expect(this.successMessage).toHaveTextContaining(expectedSuccessMessage);
    }

   
    async assertionErrorMessage(expectedErrorMessage) {
        await (await this.errorMessage).waitForDisplayed({ timeout: 5000 });
        await expect(this.errorMessage).toHaveTextContaining(expectedErrorMessage);
    }

    async geterrorMessage() {
        await (await this.errorMessage).waitForDisplayed({ timeout: 5000 });
        return this.errorMessage.getText();

    }
    
        async assertCustomerCreatePageUrl(){
            await expect(browser).toHaveUrl(this.customerCreatePageUrl)}
        


    
}
module.exports = new CustomerCreatePage();
