import { $ } from '@wdio/globals';
import Page from './basepage.js';

class SecurePage extends Page {
  get shoppingCartIcon() {
    return $('.shopping_cart_link');
  }

  get appLogo() {
    return $('.app_logo');
  }

  async isLoaded() {
    await this.shoppingCartIcon.waitForDisplayed({ timeout: 10000 });
    await this.appLogo.waitForDisplayed({ timeout: 10000 });

    return (await this.shoppingCartIcon.isDisplayed()) &&
           (await this.appLogo.isDisplayed());
  }
}

export default new SecurePage();
