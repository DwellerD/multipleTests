import { $, expect } from '@wdio/globals';
import Page from './basepage.js';

class HamburgerMenu extends Page {
  get menuButton() { return $('#react-burger-menu-btn'); }
  get closeButton() { return $('#react-burger-cross-btn'); }
  get inventoryLink() { return $('#inventory_sidebar_link'); }
  get aboutLink() { return $('#about_sidebar_link'); }
  get logoutLink() { return $('#logout_sidebar_link'); }
  get resetLink() { return $('#reset_sidebar_link'); }
  get menuContainer() { return $('.bm-menu-wrap'); }

  async openMenu() {
    await this.menuButton.waitForClickable();
    await this.menuButton.click();
  }

  async assertMenuOpen() {
    await expect(this.menuContainer).toBeDisplayed();
  }

  async goToInventory() {
    await this.inventoryLink.click();
    const url = await browser.getUrl();
    expect(url).toContain('inventory.html');
  }

  async goToAbout() {
    await this.aboutLink.click();
    const url = await browser.getUrl();
    expect(url).toContain('saucelabs.com');
  }

  async logout() {
    await this.logoutLink.click();
  }

  async resetAppState() {
    await this.resetLink.click();
    await this.assertMenuOpen();
  }
}

export default new HamburgerMenu();
