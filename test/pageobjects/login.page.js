import Page from './page.js';

class LoginPage extends Page {
  get usernameInput() { return $('#user-name'); }
  get passwordInput() { return $('#password'); }
  get loginButton() { return $('#login-button'); }
  get errorContainer() { return $('.error-message-container'); }

  async login(username, password) {
    await this.usernameInput.waitForDisplayed();
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async open() {
    return super.open();
  }
}

export default new LoginPage();
