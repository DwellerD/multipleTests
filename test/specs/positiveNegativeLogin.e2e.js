describe('SauceDemo Login - standard_user', () => {
  it('logs in with standard_user and secret_sauce', async () => {
    await browser.url('https://www.saucedemo.com/');
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();
  });
});
