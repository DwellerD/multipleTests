describe('SauceDemo Login Tests - All Users', () => {
    const users = [
      { username: 'standard_user', shouldPass: true },
      { username: 'locked_out_user', shouldPass: false },
      { username: 'problem_user', shouldPass: true },
      { username: 'performance_glitch_user', shouldPass: true },
      { username: 'error_user', shouldPass: true },
      { username: 'visual_user', shouldPass: true }
    ]
  
    users.forEach(user => {
      it(`Login test for ${user.username}`, async () => {
        await browser.url('https://www.saucedemo.com/')
  
        // Enter login credentials
        await $('#user-name').setValue(user.username)
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
  
        if (user.shouldPass) {
          // Expect successful login (inventory page)
          const currentUrl = await browser.getUrl()
          expect(currentUrl).toContain('/inventory.html')
        } else {
          // Expect error message container to be visible
          const errorContainer = $('.error-message-container')
          await expect(errorContainer).toBeDisplayed()
        }
      })
    })
  })
  