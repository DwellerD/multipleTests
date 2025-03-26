import LoginPage from '../pageobjects/Saucelogin.js';
import CartPage from '../pageobjects/Cart.page.js';

describe('Shopping Cart Page Tests', () => {
  beforeEach(async () => {
    await browser.reloadSession();
    await LoginPage.login('standard_user', 'secret_sauce');
    await CartPage.openCart();
  });

  it('displays the cart page', async () => {
    await CartPage.assertCartPageLoaded();
  });
});
