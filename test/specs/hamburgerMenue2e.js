import LoginPage from '../pageobjects/Saucelogin.js';
import HamburgerMenu from '../pageobjects/HamburgerMenu.page.js';

describe('Hamburger Menu Tests', () => {
  beforeEach(async () => {
    await browser.reloadSession();
    await LoginPage.login('standard_user', 'secret_sauce');
    await HamburgerMenu.openMenu();
  });

  it('opens the menu', async () => {
    await HamburgerMenu.assertMenuOpen();
  });

  it('navigates to Inventory', async () => {
    await HamburgerMenu.goToInventory();
  });

  it('navigates to About', async () => {
    await HamburgerMenu.goToAbout();
  });

  it('logs out successfully', async () => {
    await HamburgerMenu.logout();
    await LoginPage.assertLoginPageVisible();
  });

  it('resets app state', async () => {
    await HamburgerMenu.resetAppState();
  });
});
