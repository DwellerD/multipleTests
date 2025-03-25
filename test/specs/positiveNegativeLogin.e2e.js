import LoginPage from '../pageobjects/SauceLogin.js';
import SecurePage from '../pageobjects/SauceSecure.Page.js';

describe('SauceDemo Login Tests - All Users', () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  LoginPage.users.forEach(({ username, password, shouldPass }) => {
    it(`Login test for ${username}`, async () => {
      await LoginPage.login(username, password);

      if (shouldPass) {
        await expect(await SecurePage.isLoaded()).toBe(true);
      } else {
        await expect(await LoginPage.isErrorVisible()).toBe(true);
      }
    });
  });
});
