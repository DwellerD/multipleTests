import { $ } from '@wdio/globals';
import Page from './basepage.js';

class InventoryPage extends Page {
  get shoppingCartIcon() {
    return $('.shopping_cart_link');
  }

  get appLogo() {
    return $('.app_logo');
  }

  async assertInventoryPageLoaded() {
    await this.shoppingCartIcon.waitForDisplayed({ timeout: 10000 });
    await this.appLogo.waitForDisplayed({ timeout: 10000 });
    await expect(this.shoppingCartIcon).toBeDisplayed();
    await expect(this.appLogo).toBeDisplayed();
  }
}

export default new InventoryPage();
