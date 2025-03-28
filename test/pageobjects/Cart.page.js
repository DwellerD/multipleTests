import { $ } from '@wdio/globals';
import Page from './basepage.js';

class CartPage extends Page {
  get cartButton() { return $('.shopping_cart_link'); }
  get cartContentsContainer() { return $('.cart_contents_container'); }
  get continueShoppingButton() { return $('.btn.btn_secondary.back.btn_medium'); }
  get checkoutButton() { return $('[data-test="checkout"]'); }

  async openCart() {
    await this.cartButton.waitForClickable();
    await this.cartButton.click();
  }

  async assertCartPageLoaded() {
    await expect(this.cartContentsContainer).toBeDisplayed();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

export default new CartPage();
