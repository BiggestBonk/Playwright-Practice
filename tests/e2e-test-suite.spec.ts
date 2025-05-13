import { test, expect } from '@playwright/test'

test.describe('Authentication', () => {
  test.use({
    //Grabbing saved cookies from json file for subsequent tests
    storageState: 'automationUser.json',
  })

  test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com')
  })
  //Test to save auth details (ran once)
  test('Test Login and Save Authentication', async ({ page }) => {
    await page.locator('input[name="username"]').click()
    await page.locator('input[name="username"]').fill('Secure')
    await page.locator('input[name="password"]').click()
    await page.locator('input[name="password"]').fill('Untraceable')
    await page.getByRole('button', { name: 'Log In' }).click()
    //Saving auth details to json file on initial run
    await page.context().storageState({ path: 'automationUser.json' })
  })
  //Tests for functionality thats only available while logged in
  test('Use Saved Authentication and Navigate To Transfer Funds', async ({
    page,
  }) => {
    await page.getByRole('link', { name: 'Transfer Funds' }).first().click()
  })

  test('Use Saved Authentication and Navigate To Bill Pay', async ({
    page,
  }) => {
    await page.getByRole('link', { name: 'Bill Pay' }).first().click()
  })
})
