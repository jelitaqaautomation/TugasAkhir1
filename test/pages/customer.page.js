class CustomerPage {
    // Define locators
    get customerPageUrl() {
        return 'https://kasirdemo.vercel.app/customers';
    }
    
    get tambahButton() {
        return $('//a[@class="chakra-button css-1piskbq"]'); // Locator for tambah button
    }
    get cariInput() {
        return $('//input[@placeholder="cari"]'); // Locator for tambah button
    }
    get tabelHeader() {
        return $('//tr[@role="raw"]'); // Locator for tambah button
    }
    get tabelData() {
        return $('//td[@role="gridcell"]'); // Locator for tambah button
    }
    get ikontigaButton() {
        return $('//button[@class="chakra-button chakra-menu__menu-button css-pu8osu"][1]'); // Locator for tambah button
    }
    get ubahButton() {
        return $('//*[contains(text(),"ubah")]'); 
    }
    get hapusButton() {
        return $('//*[contains(text(),"hapus")]'); 
    }
    get confirmdeleteButton() {
        return $('//button[@class="chakra-button css-n45e6f"]'); 
    }
    
    

    get ikonSearch() {
    return $('//*[@data-icon="search"]'); // Locator for profile button
    }

    get successdeleteMessage() {
        return $('//*[contains(text(),"item dihapus")]'); 
    }


    get successubahMessage() {
        return $('//*[contains(text(),"item diubah")]'); 
    }


    // Define actions
    async assertCustomer() {
        await expect(browser).toHaveUrl(this.customerPageUrl);
    }

    async tambah() {
        await (await this.tambahButton).waitForClickable({ timeout: 5000 });
        await this.tambahButton.click();
    }

    async ubah() {
        await (await this.ikontigaButton).waitForClickable({ timeout: 5000 });
        await this.ikontigaButton.click();
        await (await this.ubahButton).waitForClickable({ timeout: 5000 });
        await this.ubahButton.click();
    }

    async hapus() {
        await browser.url('/customers'); // Ensure we are on the customer page
        await (await this.ikontigaButton).waitForClickable({ timeout: 5000 });
        await this.ikontigaButton.click();
        await (await this.hapusButton).waitForClickable({ timeout: 5000 });
        await this.hapusButton.click();
        await (await this.confirmdeleteButton).waitForClickable({ timeout: 5000 });
        await this.confirmdeleteButton.click();

    }
    async getsuccessdeleteMessage() {
        await (await this.successdeleteMessage).waitForDisplayed({ timeout: 5000 });
        return this.successdeleteMessage.getText();

    }

    async assertionsuccessdeleteMessage(expectedsuccessdeleteMessage) {
        await (await this.successdeleteMessage).waitForDisplayed({ timeout: 50000 });
        await expect(this.successdeleteMessage).toHaveTextContaining(expectedsuccessdeleteMessage);
    }

    async getsuccessubahMessage() {
        await (await this.successubahMessage).waitForDisplayed({ timeout: 5000 });
        return this.successubahMessage.getText();

    }

    async assertionsuccessubahMessage(expectedsuccessubahMessage) {
        await (await this.successubahMessage).waitForDisplayed({ timeout: 50000 });
        await expect(this.successubahMessage).toHaveTextContaining(expectedsuccessubahMessage);
    }

}

module.exports = new CustomerPage();
