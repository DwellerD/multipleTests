const loginPage = require('../pageobjects/login.page'); // Import the LoginPage object

describe('SauceDemo Login Test', () => {
    it('should log in with valid credentials (standard_user/secret_sauce)', async () => {
        await loginPage.open(); // Open the SauceDemo login page
        await loginPage.login('standard_user', 'secret_sauce'); // Use valid credentials to log in

        // Verify that the page title is "Swag Labs", which indicates successful login
        const title = await browser.getTitle();
        expect(title).toBe('Swag Labs');

        // Verify that the inventory container is displayed (indicating successful login)
        const inventoryContainer = await $('.inventory_container');
        await expect(inventoryContainer).toBeDisplayed();
    });

    it('should show an error with invalid credentials', async () => {
        await loginPage.open(); // Open the SauceDemo login page
        await loginPage.login('standard_user', 'wrong_password'); // Use invalid credentials to log in

        // Check if the error message is displayed for invalid login
        const isErrorMessageDisplayed = await loginPage.isErrorMessageDisplayed();
        expect(isErrorMessageDisplayed).toBe(true); // Ensure the error message is visible

        // Optionally check the actual error message text
        const errorMessageText = await loginPage.errorMessage.getText();
        expect(errorMessageText).toBe('Username and password do not match any user in this service');
    });
});
