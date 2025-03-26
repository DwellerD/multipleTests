import { $ } from '@wdio/globals';
import Page from './basepage.js';

class CartPage extends Page {
  get cartButton() { return $('.shopping_cart_link'); }
  get cartContentsContainer() { return $('.cart_contents_container'); }

  async openCart() {
    await this.cartButton.waitForClickable();
    await this.cartButton.click();
  }

  async assertCartPageLoaded() {
    await expect(this.cartContentsContainer).toBeDisplayed();
  }
}

export default new CartPage();
