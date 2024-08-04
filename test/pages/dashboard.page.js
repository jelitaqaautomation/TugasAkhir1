class DashboardPage {
    // Define locators
    get dashboardPageUrl() {
        return 'https://kasirdemo.vercel.app/dashboard';
    }
    
    get profilButton() {
        return $('#menu-button-6'); // Locator for profile button
    }

    get logoutButton() {
        return $('#menu-list-6-menuitem-4'); // Locator for logout button
    }
    get pelangganButton() {
        return $('//*[@id="root"]/div/div/div[1]/div/a[8]/div/div/div'); // Locator for pelanggan button
    }

    // Define actions
    async assertDashboard() {
        await expect(browser).toHaveUrl(this.dashboardPageUrl);
    }

    async ensureLoggedOut() {
        // Navigate to a valid URL before clearing storage
        await browser.url('https://kasirdemo.vercel.app');
        
        // Clear cookies and storage
        await browser.deleteCookies();
        await browser.execute(() => {
            localStorage.clear();
            sessionStorage.clear();
        });

        // Check if user is on the dashboard page
        await browser.url(this.dashboardPageUrl);
        const profilButton = await this.profilButton;
        if (await profilButton.isDisplayed()) {
            await profilButton.click();
            const logoutButton = await this.logoutButton;
            if (await logoutButton.isDisplayed()) {
                await logoutButton.click();
                await browser.pause(1000); // Wait for logout to complete, adjust as necessary
            }
        }
        
        // Navigate to the login page
        await browser.url('/login');
    }
    async pelangganclick() {
        await browser.url('https://kasirdemo.vercel.app/dashboard');
        await (await this.pelangganButton).waitForClickable({ timeout: 5000 });
        await this.pelangganButton.click();
    }
}

module.exports = new DashboardPage();
