describe('SauceDemo Login Tests - All Users', () => {
  const users = [
    'standard_user',
    'locked_out_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user'
  ];

  users.forEach((username) => {
    it(`Positive login test for ${username}`, async () => {
      await browser.url('https://www.saucedemo.com/');
      await $('#user-name').setValue(username);
      await $('#password').setValue('secret_sauce');
      await $('#login-button').click();
    });

    it(`Negative login test for ${username} with wrong password`, async () => {
      await browser.url('https://www.saucedemo.com/');
      await $('#user-name').setValue(username);
      await $('#password').setValue('wrong_password');
      await $('#login-button').click();
      await expect($('.error-message-container')).toBeDisplayed();
    });
  });
});
