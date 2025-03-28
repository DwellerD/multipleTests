import LoginPage from '../pageobjects/Saucelogin.js';
import ProductsPage from '../pageobjects/Products.page.js';
import CartPage from '../pageobjects/Cart.page.js';

describe('Cart Actions Test', () => {
  beforeEach(async () => {
    await browser.reloadSession();
    await LoginPage.login('standard_user', 'secret_sauce');
  });

  it('adds and removes all products from the cart', async () => {
    await ProductsPage.addAllToCart();
    await CartPage.openCart();
    await ProductsPage.removeAllFromCart();
    await CartPage.assertCartPageLoaded();
  });

  it('continues shopping from the cart', async () => {
    await ProductsPage.addAllToCart();
    await CartPage.openCart();
    await CartPage.continueShopping();
  });

  it('proceeds to checkout from the cart', async () => {
    await ProductsPage.addAllToCart();
    await CartPage.openCart();
    await CartPage.proceedToCheckout();
  });
});
