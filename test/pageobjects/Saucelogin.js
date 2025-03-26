import { $ } from '@wdio/globals';
import Page from './basepage.js';

class SauceLogin extends Page {
  get usernameInput() { return $('#user-name'); }
  get passwordInput() { return $('#password'); }
  get loginButton() { return $('#login-button'); }
  get errorContainer() { return $('.error-message-container'); }

  async login(username, password) {
    await this.open();
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async assertErrorVisible() {
    await expect(this.errorContainer).toBeDisplayed();
  }

  async assertLoginPageVisible() {
    await expect(this.usernameInput).toBeDisplayed();
  }
}

export default new SauceLogin();
