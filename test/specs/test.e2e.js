describe('SauceDemo Login', () => {
    it('should login with valid credentials', async () => {
        // Open the Sauce Demo login page
        await browser.url('https://www.saucedemo.com/');

        // Ensure we're on the correct page by checking the title
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toBe('Swag Labs');  // Check if the page title is correct

        // Find and input the username and password
        const usernameField = await $('#user-name'); // Select the username input field
        const passwordField = await $('#password');  // Select the password input field
        const loginButton = await $('#login-button'); // Correctly select the login button

        // Wait for the fields to be displayed
        await usernameField.waitForDisplayed({ timeout: 5000 });
        await passwordField.waitForDisplayed({ timeout: 5000 });
        await loginButton.waitForDisplayed({ timeout: 5000 });

        // Input valid credentials
        await usernameField.setValue('standard_user');
        await passwordField.setValue('secret_sauce');

        // Click the login button
        await loginButton.click();

        // Wait for the inventory list to be displayed, indicating successful login
        const inventoryList = await $$('.inventory_list');  // Select all inventory list elements
        await inventoryList[0].waitForDisplayed({ timeout: 5000 }); // Wait for the first inventory item

        // Verify that the inventory list is displayed
        await expect(inventoryList.length).toBeGreaterThan(0);  // Ensure there are inventory items

        // Optional: Verify that the page title is correct after login (optional but adds validation)
        const inventoryPageTitle = await browser.getTitle();
        expect(inventoryPageTitle).toBe('Swag Labs');
    });
});

